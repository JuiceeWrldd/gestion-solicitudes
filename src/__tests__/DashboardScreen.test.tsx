import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DashboardScreen } from '../app/components/DashboardScreen';

// El usuario conectado y su perfil, que cada prueba ajusta
const sesion = vi.hoisted(() => ({
  usuario: {
    uid: 'u1',
    email: 'ana@empresa.com',
    displayName: 'Ana Gómez',
    emailVerified: false,
    reload: vi.fn(),
    getIdToken: vi.fn(),
  },
  perfil: null as unknown,
}));

vi.mock('firebase/auth', () => ({ signOut: vi.fn(), sendEmailVerification: vi.fn() }));
vi.mock('../app/config/firebase', () => ({ auth: { get currentUser() { return sesion.usuario; } }, db: {} }));
vi.mock('../app/hooks/usePerfil', () => ({
  usePerfil: () => ({ perfil: sesion.perfil, setPerfil: vi.fn(), organizacion: { nombre: 'GestioSync' }, sinPerfil: false }),
}));
vi.mock('../app/hooks/useSolicitudes', () => ({
  useSolicitudes: () => ({
    solicitudes: [],
    cargando: false,
    cambiarEstado: vi.fn(),
    responder: vi.fn(),
    eliminar: vi.fn(),
    guardar: vi.fn(),
  }),
}));

const perfil = (rol: 'admin' | 'usuario') => ({
  nombre: 'Ana Gómez',
  email: 'ana@empresa.com',
  departamento: 'Logística',
  rol,
  orgId: 'gestiosync',
  activo: true,
  fechaRegistro: new Date(),
});

const mostrar = () => render(<DashboardScreen onNavigateToLogin={vi.fn()} />);

describe('DashboardScreen: verificación del correo del admin', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    sesion.usuario.emailVerified = false;
    sesion.usuario.reload.mockResolvedValue(undefined);
    sesion.usuario.getIdToken.mockResolvedValue('token');
  });

  it('un admin con el correo sin verificar ve la pantalla de verificación, no el panel', () => {
    sesion.perfil = perfil('admin');
    mostrar();

    expect(screen.getByText('Verifica tu correo')).toBeInTheDocument();
    expect(screen.queryByText('Integrantes')).not.toBeInTheDocument();
  });

  it('un admin con el correo verificado entra al panel y ve Integrantes', () => {
    sesion.perfil = perfil('admin');
    sesion.usuario.emailVerified = true;
    mostrar();

    expect(screen.queryByText('Verifica tu correo')).not.toBeInTheDocument();
    expect(screen.getAllByText('Integrantes').length).toBeGreaterThan(0);
  });

  it('un integrante (usuario) no necesita verificar: entra directo al panel', () => {
    sesion.perfil = perfil('usuario');
    mostrar();

    expect(screen.queryByText('Verifica tu correo')).not.toBeInTheDocument();
    expect(screen.getAllByText('Mis solicitudes').length).toBeGreaterThan(0);
    expect(screen.queryByText('Integrantes')).not.toBeInTheDocument();
  });

  it('cuando el admin confirma que ya verificó, pasa al panel', async () => {
    sesion.perfil = perfil('admin');
    sesion.usuario.reload.mockImplementation(async () => {
      sesion.usuario.emailVerified = true;
    });
    mostrar();

    fireEvent.click(screen.getByRole('button', { name: 'Ya lo verifiqué' }));

    await waitFor(() => expect(screen.queryByText('Verifica tu correo')).not.toBeInTheDocument());
    expect(screen.getAllByText('Integrantes').length).toBeGreaterThan(0);
  });

  it('si el admin dice que verificó pero no es cierto, sigue bloqueado', async () => {
    sesion.perfil = perfil('admin');
    mostrar();

    fireEvent.click(screen.getByRole('button', { name: 'Ya lo verifiqué' }));

    expect(await screen.findByRole('alert')).toHaveTextContent('Todavía no aparece verificado');
    expect(screen.getByText('Verifica tu correo')).toBeInTheDocument();
  });
});
