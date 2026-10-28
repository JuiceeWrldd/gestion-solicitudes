import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { registrarAdminConEmpresa } from '../app/services/registro';

// Lo que se anota de cada escritura del lote, para revisar qué se guarda
const escrituras: { ref: { ruta: string }; datos: Record<string, unknown> }[] = [];
const commit = vi.fn();

vi.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: vi.fn(),
  updateProfile: vi.fn(),
  deleteUser: vi.fn(),
  signOut: vi.fn(),
  signInWithEmailAndPassword: vi.fn(),
}));
vi.mock('firebase/firestore', () => ({
  collection: (_db: unknown, nombre: string) => ({ nombre }),
  doc: (a: { nombre?: string } | unknown, b?: string, c?: string) =>
    b !== undefined ? { ruta: `${b}/${c}` } : { ruta: `${(a as { nombre: string }).nombre}/ID-NUEVO`, id: 'ID-NUEVO' },
  serverTimestamp: () => 'SERVER_TIME',
  writeBatch: () => ({
    set: (ref: { ruta: string }, datos: Record<string, unknown>) => escrituras.push({ ref, datos }),
    commit,
  }),
}));
vi.mock('../app/config/firebase', () => ({
  auth: { nombre: 'auth-principal' },
  getAuthSecundario: () => ({ nombre: 'auth-secundario' }),
  getDbSecundario: () => ({ nombre: 'db-secundaria' }),
}));

const datos = {
  nombre: 'Ana Gómez',
  empresa: 'Mi Empresa',
  email: 'ana@miempresa.com',
  clave: 'clave-segura-1',
  departamento: 'Dirección General',
};

describe('registrarAdminConEmpresa', () => {
  const usuarioNuevo = { uid: 'uid-ana' };

  beforeEach(() => {
    vi.clearAllMocks();
    escrituras.length = 0;
    vi.mocked(createUserWithEmailAndPassword).mockResolvedValue({ user: usuarioNuevo } as never);
    vi.mocked(updateProfile).mockResolvedValue(undefined);
    vi.mocked(deleteUser).mockResolvedValue(undefined);
    vi.mocked(signOut).mockResolvedValue(undefined);
    vi.mocked(signInWithEmailAndPassword).mockResolvedValue({} as never);
    commit.mockResolvedValue(undefined);
  });

  it('crea la cuenta en la instancia secundaria, no en la principal', async () => {
    await registrarAdminConEmpresa(datos);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith({ nombre: 'auth-secundario' }, 'ana@miempresa.com', 'clave-segura-1');
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

    expect(signOut).toHaveBeenCalledWith({ nombre: 'auth-secundario' });
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
