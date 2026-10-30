import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { signInWithEmailAndPassword, setPersistence } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { LoginScreen } from '../app/components/LoginScreen';

vi.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: vi.fn(),
  setPersistence: vi.fn(),
  browserLocalPersistence: 'local',
  browserSessionPersistence: 'session',
  GoogleAuthProvider: vi.fn(),
  signInWithPopup: vi.fn(),
}));
vi.mock('../app/config/firebase', () => ({ auth: { nombre: 'auth-falso' } }));

const llenar = (correo: string, clave: string) => {
  fireEvent.change(screen.getByLabelText('Correo Institucional'), { target: { value: correo } });
  fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: clave } });
};

const entrar = () => fireEvent.click(screen.getByRole('button', { name: 'Iniciar Sesión' }));

describe('LoginScreen', () => {
  const onNavigateToForgot = vi.fn();
  const onNavigateToRegister = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(setPersistence).mockResolvedValue(undefined);
    vi.mocked(signInWithEmailAndPassword).mockResolvedValue({} as never);
    render(<LoginScreen onNavigateToForgot={onNavigateToForgot} onNavigateToRegister={onNavigateToRegister} />);
  });

  it('pide correo y contraseña si se envía vacío', () => {
    entrar();

    expect(screen.getByText('Requerido.')).toBeInTheDocument();
    expect(screen.getByText('Requerida.')).toBeInTheDocument();
    expect(signInWithEmailAndPassword).not.toHaveBeenCalled();
  });

  it('rechaza un correo con formato inválido', () => {
    llenar('esto-no-es-un-correo', 'cualquiera');
    entrar();

    expect(screen.getByText('Formato inválido.')).toBeInTheDocument();
    expect(signInWithEmailAndPassword).not.toHaveBeenCalled();
  });

  it('inicia sesión con los datos escritos', async () => {
    llenar('ana@empresa.com', 'secreta123');
    entrar();

    await waitFor(() => expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1));
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith({ nombre: 'auth-falso' }, 'ana@empresa.com', 'secreta123');
  });

  it('guarda la sesión solo en esta pestaña por defecto', async () => {
    llenar('ana@empresa.com', 'secreta123');
    entrar();

    await waitFor(() => expect(setPersistence).toHaveBeenCalledWith(expect.anything(), 'session'));
  });

  it('mantiene la sesión si marca "Mantener sesión iniciada"', async () => {
    llenar('ana@empresa.com', 'secreta123');
    fireEvent.click(screen.getByLabelText('Mantener sesión iniciada'));
    entrar();

    await waitFor(() => expect(setPersistence).toHaveBeenCalledWith(expect.anything(), 'local'));
  });

  it('muestra "Credenciales inválidas." cuando Firebase las rechaza', async () => {
    vi.mocked(signInWithEmailAndPassword).mockRejectedValue(new FirebaseError('auth/invalid-credential', 'x'));
    llenar('ana@empresa.com', 'incorrecta');
    entrar();

    expect(await screen.findByText('Credenciales inválidas.')).toBeInTheDocument();
  });

  it('avisa cuando hay demasiados intentos', async () => {
    vi.mocked(signInWithEmailAndPassword).mockRejectedValue(new FirebaseError('auth/too-many-requests', 'x'));
    llenar('ana@empresa.com', 'incorrecta');
    entrar();

    expect(await screen.findByText(/Demasiados intentos/)).toBeInTheDocument();
  });

  it('muestra un mensaje general si el error no es de Firebase', async () => {
    vi.mocked(signInWithEmailAndPassword).mockRejectedValue(new Error('sin internet'));
    llenar('ana@empresa.com', 'secreta123');
    entrar();

    expect(await screen.findByText('Ocurrió un error de autenticación.')).toBeInTheDocument();
  });

  it('lleva a recuperar la contraseña', () => {
    fireEvent.click(screen.getByRole('button', { name: '¿Olvidó su clave?' }));
    expect(onNavigateToForgot).toHaveBeenCalled();
  });

  it('ofrece registrar una empresa nueva, y a los integrantes les dice que pidan acceso a su admin', () => {
    expect(screen.queryByText(/Solicite acceso/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Pídele a tu administrador/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Regístrala aquí' }));
    expect(onNavigateToRegister).toHaveBeenCalledTimes(1);
  });
});
