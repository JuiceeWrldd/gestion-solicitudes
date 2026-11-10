import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createUserWithEmailAndPassword, deleteUser, signOut, updateProfile } from 'firebase/auth';
import { getDocs, setDoc, updateDoc, where } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';
import { IntegrantesScreen } from '../app/components/IntegrantesScreen';

const authSecundario = vi.hoisted(() => ({ nombre: 'auth-secundario' }));

vi.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: vi.fn(),
  updateProfile: vi.fn(),
  deleteUser: vi.fn(),
  signOut: vi.fn(),
}));
vi.mock('firebase/firestore', () => ({
  collection: (_db: unknown, nombre: string) => ({ nombre }),
  doc: (_db: unknown, coleccion: string, id: string) => ({ ruta: `${coleccion}/${id}` }),
  query: (...args: unknown[]) => ({ args }),
  where: vi.fn((campo: string, op: string, valor: string) => ({ campo, op, valor })),
  getDocs: vi.fn(),
  setDoc: vi.fn(),
  updateDoc: vi.fn(),
}));
vi.mock('../app/config/firebase', () => ({ db: {}, getAuthSecundario: () => authSecundario }));
vi.mock('../app/utils/clave', () => ({ generarClave: () => 'ClaveTemporal1' }));

// Un perfil de Firestore, tal como lo devuelve getDocs
const perfil = (id: string, extra: Record<string, unknown> = {}) => ({
  id,
  data: () => ({
    nombre: `Persona ${id}`,
    email: `${id}@empresa.com`,
    departamento: 'Logística',
    rol: 'usuario',
    orgId: 'gestiosync',
    activo: true,
    fechaRegistro: new Date(),
    ...extra,
  }),
});

const equipo = [perfil('admin1', { rol: 'admin', nombre: 'Jose Admin' }), perfil('ana', { nombre: 'Ana Gómez' })];

const llenarFormulario = (nombre: string, email: string, oficina: string) => {
  fireEvent.change(screen.getByLabelText('Nombre y apellido'), { target: { value: nombre } });
  fireEvent.change(screen.getByLabelText('Correo'), { target: { value: email } });
  if (oficina) fireEvent.change(screen.getByLabelText('Oficina'), { target: { value: oficina } });
};

const crear = () => fireEvent.click(screen.getByRole('button', { name: 'Crear integrante' }));

const filaDe = (nombre: string) => screen.getByText(nombre).closest('div.bg-white') as HTMLElement;

describe('IntegrantesScreen', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(getDocs).mockResolvedValue({ docs: equipo } as never);
    vi.mocked(createUserWithEmailAndPassword).mockResolvedValue({ user: { uid: 'uid-nuevo' } } as never);
    vi.mocked(updateProfile).mockResolvedValue(undefined);
    vi.mocked(signOut).mockResolvedValue(undefined);
    vi.mocked(deleteUser).mockResolvedValue(undefined);
    vi.mocked(setDoc).mockResolvedValue(undefined);
    vi.mocked(updateDoc).mockResolvedValue(undefined);
    render(<IntegrantesScreen orgId="gestiosync" adminUid="admin1" />);
  });

  describe('lista del equipo', () => {
    it('muestra a las personas de la empresa, de la que se pide solo la suya', async () => {
      expect(await screen.findByText('Equipo (2)')).toBeInTheDocument();
      expect(screen.getByText('Ana Gómez')).toBeInTheDocument();
      expect(screen.getByText('ana@empresa.com')).toBeInTheDocument();
      expect(where).toHaveBeenCalledWith('orgId', '==', 'gestiosync');
    });

    it('marca al admin y no le ofrece desactivarse a sí mismo', async () => {
      await screen.findByText('Equipo (2)');

      const fila = filaDe('Jose Admin');
      expect(within(fila).getByText('Admin')).toBeInTheDocument();
      expect(within(fila).queryByRole('button', { name: 'Desactivar' })).not.toBeInTheDocument();
      expect(within(filaDe('Ana Gómez')).getByRole('button', { name: 'Desactivar' })).toBeInTheDocument();
    });

    it('avisa si no se pudo cargar la lista', async () => {
      vi.mocked(getDocs).mockRejectedValue(new Error('sin permisos'));
      render(<IntegrantesScreen orgId="otra" adminUid="admin1" />);

      expect(await screen.findByText('No se pudieron cargar los integrantes.')).toBeInTheDocument();
    });
  });

  describe('formulario para agregar', () => {
    it('pide los tres datos si se envía vacío', async () => {
      await screen.findByText('Equipo (2)');
      crear();

      expect(screen.getAllByText('Requerido')).toHaveLength(2); // nombre y correo
      expect(screen.getByText('Seleccione la oficina')).toBeInTheDocument();
      expect(createUserWithEmailAndPassword).not.toHaveBeenCalled();
    });

    it('rechaza un correo con formato inválido', async () => {
      await screen.findByText('Equipo (2)');
      llenarFormulario('Luis Pérez', 'esto-no-es-un-correo', 'Logística');
      crear();

      expect(screen.getByText('Formato inválido')).toBeInTheDocument();
      expect(createUserWithEmailAndPassword).not.toHaveBeenCalled();
    });

    it('limita el largo de los campos', async () => {
      await screen.findByText('Equipo (2)');

      expect(screen.getByLabelText('Nombre y apellido')).toHaveAttribute('maxLength', '80');
      expect(screen.getByLabelText('Correo')).toHaveAttribute('maxLength', '254');
    });
  });

  describe('crear un integrante', () => {
    it('crea la cuenta en la instancia secundaria con una contraseña temporal', async () => {
      await screen.findByText('Equipo (2)');
      llenarFormulario('Luis Pérez', 'luis@empresa.com', 'Logística');
      crear();

      await waitFor(() => expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1));
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(authSecundario, 'luis@empresa.com', 'ClaveTemporal1');
    });

    it('guarda su perfil como usuario de la empresa, pendiente de cambiar la clave', async () => {
      await screen.findByText('Equipo (2)');
      llenarFormulario('Luis Pérez', 'luis@empresa.com', 'Logística');
      crear();

      await waitFor(() => expect(setDoc).toHaveBeenCalledTimes(1));
      const [ref, datos] = vi.mocked(setDoc).mock.calls[0] as unknown as [{ ruta: string }, Record<string, unknown>];
      expect(ref.ruta).toBe('usuarios/uid-nuevo');
      expect(datos).toMatchObject({
        nombre: 'Luis Pérez',
        email: 'luis@empresa.com',
        departamento: 'Logística',
        rol: 'usuario',
        orgId: 'gestiosync',
        activo: true,
        debeCambiarClave: true,
      });
      expect(JSON.stringify(datos)).not.toContain('ClaveTemporal1'); // la clave no se guarda en la base
    });

    it('limpia el texto escrito: sin etiquetas, y el correo en minúsculas', async () => {
      await screen.findByText('Equipo (2)');
      llenarFormulario('  <b>Luis</b>   Pérez ', '  Luis@Empresa.COM ', 'Logística');
      crear();

      await waitFor(() => expect(setDoc).toHaveBeenCalled());
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(authSecundario, 'luis@empresa.com', 'ClaveTemporal1');
      expect(vi.mocked(setDoc).mock.calls[0][1]).toMatchObject({ nombre: 'Luis Pérez', email: 'luis@empresa.com' });
    });

    it('muestra la contraseña temporal una vez, vacía el formulario y recarga la lista', async () => {
      await screen.findByText('Equipo (2)');
      llenarFormulario('Luis Pérez', 'luis@empresa.com', 'Logística');
      crear();

      expect(await screen.findByText('ClaveTemporal1')).toBeInTheDocument();
      expect(screen.getByText(/Integrante creado: Luis Pérez/)).toBeInTheDocument();
      expect(screen.getByLabelText('Nombre y apellido')).toHaveValue('');
      expect(getDocs).toHaveBeenCalledTimes(2); // la carga inicial y la recarga
    });

    it('cierra siempre la sesión secundaria', async () => {
      await screen.findByText('Equipo (2)');
      llenarFormulario('Luis Pérez', 'luis@empresa.com', 'Logística');
      crear();

      await waitFor(() => expect(signOut).toHaveBeenCalledWith(authSecundario));
    });

    it('avisa si ya existe una cuenta con ese correo', async () => {
      vi.mocked(createUserWithEmailAndPassword).mockRejectedValue(new FirebaseError('auth/email-already-in-use', 'x'));
      await screen.findByText('Equipo (2)');
      llenarFormulario('Luis Pérez', 'luis@empresa.com', 'Logística');
      crear();

      expect(await screen.findByRole('alert')).toHaveTextContent('Ya existe una cuenta con ese correo.');
      expect(setDoc).not.toHaveBeenCalled();
      expect(signOut).toHaveBeenCalled();
    });

    it('si el perfil no se puede guardar, borra la cuenta recién creada para que el correo quede libre', async () => {
      vi.mocked(setDoc).mockRejectedValue(new Error('permission-denied'));
      await screen.findByText('Equipo (2)');
      llenarFormulario('Luis Pérez', 'luis@empresa.com', 'Logística');
      crear();

      expect(await screen.findByRole('alert')).toHaveTextContent('No se pudo crear el integrante');
      expect(deleteUser).toHaveBeenCalledWith({ uid: 'uid-nuevo' });
      expect(screen.queryByText('ClaveTemporal1')).not.toBeInTheDocument(); // sin perfil no se entrega la clave
    });

    it('si tampoco se puede borrar la cuenta, avisa que el correo quedó ocupado', async () => {
      vi.mocked(setDoc).mockRejectedValue(new Error('permission-denied'));
      vi.mocked(deleteUser).mockRejectedValue(new Error('sin internet'));
      await screen.findByText('Equipo (2)');
      llenarFormulario('Luis Pérez', 'luis@empresa.com', 'Logística');
      crear();

      expect(await screen.findByRole('alert')).toHaveTextContent('Ese correo quedó ocupado');
    });

    it('no intenta borrar nada si la cuenta no llegó a crearse', async () => {
      vi.mocked(createUserWithEmailAndPassword).mockRejectedValue(new FirebaseError('auth/email-already-in-use', 'x'));
      await screen.findByText('Equipo (2)');
      llenarFormulario('Luis Pérez', 'luis@empresa.com', 'Logística');
      crear();

      await screen.findByRole('alert');
      expect(deleteUser).not.toHaveBeenCalled();
    });

    it('muestra un mensaje general si falla por otro motivo', async () => {
      vi.mocked(createUserWithEmailAndPassword).mockRejectedValue(new Error('sin internet'));
      await screen.findByText('Equipo (2)');
      llenarFormulario('Luis Pérez', 'luis@empresa.com', 'Logística');
      crear();

      expect(await screen.findByRole('alert')).toHaveTextContent('No se pudo crear el integrante');
    });
  });

  describe('cambios sobre un integrante', () => {
    it('cambia su oficina', async () => {
      await screen.findByText('Equipo (2)');

      fireEvent.change(screen.getByLabelText('Oficina de Ana Gómez'), { target: { value: 'Recursos Humanos' } });

      await waitFor(() => expect(updateDoc).toHaveBeenCalledWith({ ruta: 'usuarios/ana' }, { departamento: 'Recursos Humanos' }));
      expect(screen.getByLabelText('Oficina de Ana Gómez')).toHaveValue('Recursos Humanos');
    });

    it('lo desactiva y luego lo vuelve a activar', async () => {
      await screen.findByText('Equipo (2)');

      fireEvent.click(within(filaDe('Ana Gómez')).getByRole('button', { name: 'Desactivar' }));
      await waitFor(() => expect(updateDoc).toHaveBeenCalledWith({ ruta: 'usuarios/ana' }, { activo: false }));
      expect(await within(filaDe('Ana Gómez')).findByText('Desactivado')).toBeInTheDocument();

      fireEvent.click(within(filaDe('Ana Gómez')).getByRole('button', { name: 'Activar' }));
      await waitFor(() => expect(updateDoc).toHaveBeenLastCalledWith({ ruta: 'usuarios/ana' }, { activo: true }));
      await waitFor(() => expect(within(filaDe('Ana Gómez')).queryByText('Desactivado')).not.toBeInTheDocument());
    });

    it('avisa y deja todo igual si no se pudo cambiar el estado', async () => {
      vi.mocked(updateDoc).mockRejectedValue(new Error('permission-denied'));
      await screen.findByText('Equipo (2)');

      fireEvent.click(within(filaDe('Ana Gómez')).getByRole('button', { name: 'Desactivar' }));

      expect(await screen.findByRole('alert')).toHaveTextContent('No se pudo cambiar el estado del integrante.');
      expect(within(filaDe('Ana Gómez')).queryByText('Desactivado')).not.toBeInTheDocument();
    });

    it('avisa si no se pudo cambiar la oficina', async () => {
      vi.mocked(updateDoc).mockRejectedValue(new Error('permission-denied'));
      await screen.findByText('Equipo (2)');

      fireEvent.change(screen.getByLabelText('Oficina de Ana Gómez'), { target: { value: 'Operaciones' } });

      expect(await screen.findByRole('alert')).toHaveTextContent('No se pudo cambiar la oficina.');
      expect(screen.getByLabelText('Oficina de Ana Gómez')).toHaveValue('Logística');
    });
  });
});
