import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAdditionalUserInfo,
  signInWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
import {
  cancelarRegistroGoogle,
  completarRegistroGoogle,
  elegirCuentaGoogle,
  registrarAdminConEmpresa,
} from '../app/services/registro';

// Lo que se anota de cada escritura del lote, para revisar qué se guarda
const escrituras: { ref: { ruta: string }; datos: Record<string, unknown> }[] = [];
const commit = vi.fn();
const authSec = vi.hoisted(() => ({ nombre: 'auth-secundario', currentUser: null as unknown }));

vi.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: vi.fn(),
  updateProfile: vi.fn(),
  deleteUser: vi.fn(),
  signOut: vi.fn(),
  signInWithEmailAndPassword: vi.fn(),
  signInWithPopup: vi.fn(),
  signInWithCredential: vi.fn(),
  getAdditionalUserInfo: vi.fn(),
  GoogleAuthProvider: Object.assign(vi.fn(), { credentialFromResult: vi.fn() }),
}));
vi.mock('firebase/firestore', () => ({
  collection: (_db: unknown, nombre: string) => ({ nombre }),
  doc: (a: { nombre?: string } | unknown, b?: string, c?: string) =>
    b !== undefined ? { ruta: `${b}/${c}` } : { ruta: `${(a as { nombre: string }).nombre}/ID-NUEVO`, id: 'ID-NUEVO' },
  getDoc: vi.fn(),
  serverTimestamp: () => 'SERVER_TIME',
  writeBatch: () => ({
    set: (ref: { ruta: string }, datos: Record<string, unknown>) => escrituras.push({ ref, datos }),
    commit,
  }),
}));
vi.mock('../app/config/firebase', () => ({
  auth: { nombre: 'auth-principal' },
  getAuthSecundario: () => authSec,
  getDbSecundario: () => ({ nombre: 'db-secundaria' }),
}));

const datos = {
  nombre: 'Ana Gómez',
  empresa: 'Mi Empresa',
  email: 'ana@miempresa.com',
  clave: 'clave-segura-1',
  departamento: 'Dirección General',
};

beforeEach(() => {
  vi.clearAllMocks();
  escrituras.length = 0;
  authSec.currentUser = null;
  vi.mocked(updateProfile).mockResolvedValue(undefined);
  vi.mocked(deleteUser).mockResolvedValue(undefined);
  vi.mocked(signOut).mockResolvedValue(undefined);
  vi.mocked(signInWithEmailAndPassword).mockResolvedValue({} as never);
  vi.mocked(signInWithCredential).mockResolvedValue({} as never);
  commit.mockResolvedValue(undefined);
});

describe('registrarAdminConEmpresa (correo y contraseña)', () => {
  const usuarioNuevo = { uid: 'uid-ana' };

  beforeEach(() => {
    vi.mocked(createUserWithEmailAndPassword).mockResolvedValue({ user: usuarioNuevo } as never);
  });

  it('crea la cuenta en la instancia secundaria, no en la principal', async () => {
    await registrarAdminConEmpresa(datos);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(authSec, 'ana@miempresa.com', 'clave-segura-1');
  });

  it('guarda la empresa nueva con su admin y el perfil de admin enlazado a ella', async () => {
    await registrarAdminConEmpresa(datos);

    const empresa = escrituras.find((e) => e.ref.ruta.startsWith('organizaciones/'));
    const perfil = escrituras.find((e) => e.ref.ruta === 'usuarios/uid-ana');

    expect(empresa?.datos).toEqual({ nombre: 'Mi Empresa', adminId: 'uid-ana', fechaCreacion: 'SERVER_TIME' });
    expect(perfil?.datos).toMatchObject({
      nombre: 'Ana Gómez',
      email: 'ana@miempresa.com',
      departamento: 'Dirección General',
      rol: 'admin',
      orgId: 'ID-NUEVO',
      activo: true,
      debeCambiarClave: false,
    });
    expect(commit).toHaveBeenCalledTimes(1);
  });

  it('no guarda la contraseña en la base de datos', async () => {
    await registrarAdminConEmpresa(datos);

    expect(JSON.stringify(escrituras)).not.toContain('clave-segura-1');
  });

  it('al terminar cierra la sesión secundaria e inicia sesión en la principal', async () => {
    await registrarAdminConEmpresa(datos);

    expect(signOut).toHaveBeenCalledWith(authSec);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith({ nombre: 'auth-principal' }, 'ana@miempresa.com', 'clave-segura-1');
  });

  it('si Firestore rechaza el lote, borra la cuenta creada y no inicia sesión', async () => {
    commit.mockRejectedValue(new Error('permission-denied'));

    await expect(registrarAdminConEmpresa(datos)).rejects.toThrow('permission-denied');

    expect(deleteUser).toHaveBeenCalledWith(usuarioNuevo);
    expect(signInWithEmailAndPassword).not.toHaveBeenCalled();
    expect(signOut).toHaveBeenCalled(); // la sesión secundaria se cierra igual
  });

  it('si el correo ya existe, no escribe nada y falla con el error de Firebase', async () => {
    vi.mocked(createUserWithEmailAndPassword).mockRejectedValue(new Error('auth/email-already-in-use'));

    await expect(registrarAdminConEmpresa(datos)).rejects.toThrow('auth/email-already-in-use');

    expect(commit).not.toHaveBeenCalled();
    expect(deleteUser).not.toHaveBeenCalled();
    expect(signInWithEmailAndPassword).not.toHaveBeenCalled();
  });
});

describe('registro con Google', () => {
  const credencial = { token: 'credencial-de-google' };
  const resultadoGoogle = {
    user: { uid: 'uid-google', displayName: 'Ana Google', email: 'ana@gmail.com' },
  };

  beforeEach(async () => {
    vi.mocked(signInWithPopup).mockResolvedValue(resultadoGoogle as never);
    vi.mocked(getDoc).mockResolvedValue({ exists: () => false } as never);
    vi.mocked(getAdditionalUserInfo).mockReturnValue({ isNewUser: true } as never);
    const { GoogleAuthProvider } = await import('firebase/auth');
    vi.mocked(GoogleAuthProvider.credentialFromResult).mockReturnValue(credencial as never);
  });

  describe('elegirCuentaGoogle', () => {
    it('abre la ventana de Google en la instancia secundaria', async () => {
      await elegirCuentaGoogle();

      expect(signInWithPopup).toHaveBeenCalledWith(authSec, expect.anything());
    });

    it('devuelve el nombre, el correo y la credencial de una cuenta que todavía no tiene empresa', async () => {
      const r = await elegirCuentaGoogle();

      expect(r).toEqual({ yaRegistrado: false, nombre: 'Ana Google', email: 'ana@gmail.com', credencial, esNueva: true });
      expect(signOut).not.toHaveBeenCalled(); // la sesión secundaria sigue abierta para el paso 2
    });

    it('avisa si la cuenta ya tiene perfil y cierra la sesión secundaria', async () => {
      vi.mocked(getDoc).mockResolvedValue({ exists: () => true } as never);

      expect(await elegirCuentaGoogle()).toEqual({ yaRegistrado: true });
      expect(signOut).toHaveBeenCalledWith(authSec);
    });

    it('marca que la cuenta no es nueva si ya existía en Firebase', async () => {
      vi.mocked(getAdditionalUserInfo).mockReturnValue({ isNewUser: false } as never);

      expect(await elegirCuentaGoogle()).toMatchObject({ esNueva: false });
    });

    it('falla y cierra la sesión si Google no devuelve credenciales', async () => {
      const { GoogleAuthProvider } = await import('firebase/auth');
      vi.mocked(GoogleAuthProvider.credentialFromResult).mockReturnValue(null);

      await expect(elegirCuentaGoogle()).rejects.toThrow();
      expect(signOut).toHaveBeenCalledWith(authSec);
    });
  });

  describe('completarRegistroGoogle', () => {
    const datosPaso2 = { nombre: 'Ana Gómez', empresa: 'Mi Empresa', departamento: 'Logística', credencial: credencial as never };

    it('crea la empresa y el perfil de admin con el correo de la cuenta de Google', async () => {
      authSec.currentUser = { uid: 'uid-google', email: 'ana@gmail.com' };

      await completarRegistroGoogle(datosPaso2);

      const empresa = escrituras.find((e) => e.ref.ruta.startsWith('organizaciones/'));
      const perfil = escrituras.find((e) => e.ref.ruta === 'usuarios/uid-google');
      expect(empresa?.datos).toEqual({ nombre: 'Mi Empresa', adminId: 'uid-google', fechaCreacion: 'SERVER_TIME' });
      expect(perfil?.datos).toMatchObject({
        email: 'ana@gmail.com',
        rol: 'admin',
        orgId: 'ID-NUEVO',
        departamento: 'Logística',
        debeCambiarClave: false,
      });
    });

    it('al terminar entra en la principal con la misma credencial, sin abrir otra ventana', async () => {
      authSec.currentUser = { uid: 'uid-google', email: 'ana@gmail.com' };

      await completarRegistroGoogle(datosPaso2);

      expect(signOut).toHaveBeenCalledWith(authSec);
      expect(signInWithCredential).toHaveBeenCalledWith({ nombre: 'auth-principal' }, credencial);
      expect(signInWithPopup).not.toHaveBeenCalled();
    });

    it('falla si la sesión de Google ya no está abierta', async () => {
      await expect(completarRegistroGoogle(datosPaso2)).rejects.toThrow('sesión de Google');
      expect(commit).not.toHaveBeenCalled();
    });

    it('si Firestore rechaza el lote, no inicia sesión y deja la sesión secundaria para reintentar', async () => {
      authSec.currentUser = { uid: 'uid-google', email: 'ana@gmail.com' };
      commit.mockRejectedValue(new Error('permission-denied'));

      await expect(completarRegistroGoogle(datosPaso2)).rejects.toThrow('permission-denied');

      expect(signInWithCredential).not.toHaveBeenCalled();
      expect(signOut).not.toHaveBeenCalled();
    });
  });

  describe('cancelarRegistroGoogle', () => {
    it('borra la cuenta si la acababa de crear el registro, y cierra la sesión', async () => {
      authSec.currentUser = { uid: 'uid-google' };

      await cancelarRegistroGoogle(true);

      expect(deleteUser).toHaveBeenCalledWith({ uid: 'uid-google' });
      expect(signOut).toHaveBeenCalledWith(authSec);
    });

    it('no borra una cuenta de Google que ya existía antes', async () => {
      authSec.currentUser = { uid: 'uid-google' };

      await cancelarRegistroGoogle(false);

      expect(deleteUser).not.toHaveBeenCalled();
      expect(signOut).toHaveBeenCalledWith(authSec);
    });
  });
});
