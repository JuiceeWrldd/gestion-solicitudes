import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { sendEmailVerification } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { VerificarCorreoScreen } from '../app/components/VerificarCorreoScreen';

// El usuario de mentira: "reload" puede dejarlo verificado o no, según la prueba
const usuario = vi.hoisted(() => ({
  email: 'ana@empresa.com',
  emailVerified: false,
  reload: vi.fn(),
  getIdToken: vi.fn(),
}));
const authFalso = vi.hoisted(() => ({ currentUser: null as unknown, languageCode: null as string | null }));

vi.mock('firebase/auth', () => ({ sendEmailVerification: vi.fn() }));
vi.mock('../app/config/firebase', () => ({ auth: authFalso }));

describe('VerificarCorreoScreen', () => {
  const onVerificado = vi.fn();
  const onCerrarSesion = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    usuario.emailVerified = false;
    usuario.reload.mockResolvedValue(undefined);
    usuario.getIdToken.mockResolvedValue('token');
    authFalso.currentUser = usuario;
    authFalso.languageCode = null;
    vi.mocked(sendEmailVerification).mockResolvedValue(undefined);
    render(<VerificarCorreoScreen email="ana@empresa.com" onVerificado={onVerificado} onCerrarSesion={onCerrarSesion} />);
  });

  it('explica qué correo hay que verificar', () => {
    expect(screen.getByText('Verifica tu correo')).toBeInTheDocument();
    expect(screen.getByText('ana@empresa.com')).toBeInTheDocument();
  });

  describe('reenviar el correo', () => {
    it('envía otra vez el enlace, en español, y lo confirma', async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Reenviar correo' }));

      expect(await screen.findByRole('status')).toHaveTextContent('Te enviamos el correo de nuevo');
      expect(sendEmailVerification).toHaveBeenCalledWith(usuario);
      expect(authFalso.languageCode).toBe('es');
    });

    it('explica que hay que esperar si se pidieron demasiados correos', async () => {
      vi.mocked(sendEmailVerification).mockRejectedValue(new FirebaseError('auth/too-many-requests', 'x'));
      fireEvent.click(screen.getByRole('button', { name: 'Reenviar correo' }));

      expect(await screen.findByRole('alert')).toHaveTextContent('demasiados correos');
    });

    it('muestra un error general si falla por otro motivo', async () => {
      vi.mocked(sendEmailVerification).mockRejectedValue(new Error('sin internet'));
      fireEvent.click(screen.getByRole('button', { name: 'Reenviar correo' }));

      expect(await screen.findByRole('alert')).toHaveTextContent('No se pudo enviar el correo');
    });
  });

  describe('"Ya lo verifiqué"', () => {
    it('si el correo todavía no está verificado, lo avisa y no deja pasar', async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Ya lo verifiqué' }));

      expect(await screen.findByRole('alert')).toHaveTextContent('Todavía no aparece verificado');
      expect(usuario.reload).toHaveBeenCalled();
      expect(onVerificado).not.toHaveBeenCalled();
    });

    it('si ya está verificado, renueva la sesión y deja pasar', async () => {
      usuario.reload.mockImplementation(async () => {
        usuario.emailVerified = true;
      });
      fireEvent.click(screen.getByRole('button', { name: 'Ya lo verifiqué' }));

      await waitFor(() => expect(onVerificado).toHaveBeenCalledTimes(1));
      expect(usuario.getIdToken).toHaveBeenCalledWith(true); // forzar la renovación para que el servidor vea el cambio
    });

    it('avisa si no se pudo comprobar', async () => {
      usuario.reload.mockRejectedValue(new Error('sin internet'));
      fireEvent.click(screen.getByRole('button', { name: 'Ya lo verifiqué' }));

      expect(await screen.findByRole('alert')).toHaveTextContent('No se pudo comprobar');
      expect(onVerificado).not.toHaveBeenCalled();
    });
  });

  it('permite cerrar sesión', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Cerrar sesión' }));
    expect(onCerrarSesion).toHaveBeenCalledTimes(1);
  });
});
