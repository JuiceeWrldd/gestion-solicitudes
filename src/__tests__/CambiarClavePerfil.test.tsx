import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { CambiarClavePerfil } from '../app/components/dashboard/CambiarClavePerfil';

const authFalso = vi.hoisted(() => ({
  currentUser: null as null | { email: string; providerData: { providerId: string }[] },
}));

vi.mock('firebase/auth', () => ({
  EmailAuthProvider: { credential: vi.fn((email: string, clave: string) => ({ email, clave })) },
  reauthenticateWithCredential: vi.fn(),
  updatePassword: vi.fn(),
}));
vi.mock('../app/config/firebase', () => ({ auth: authFalso }));

const conClave = { email: 'ana@empresa.com', providerData: [{ providerId: 'password' }] };
const conGoogle = { email: 'ana@gmail.com', providerData: [{ providerId: 'google.com' }] };

const llenar = (actual: string, nueva: string, confirmar: string) => {
  fireEvent.change(screen.getByLabelText('Contraseña actual'), { target: { value: actual } });
  fireEvent.change(screen.getByLabelText('Nueva contraseña'), { target: { value: nueva } });
  fireEvent.change(screen.getByLabelText('Repite la nueva contraseña'), { target: { value: confirmar } });
};

const enviar = () => fireEvent.click(screen.getByRole('button', { name: 'Cambiar contraseña' }));

describe('CambiarClavePerfil', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    authFalso.currentUser = conClave;
    vi.mocked(reauthenticateWithCredential).mockResolvedValue({} as never);
    vi.mocked(updatePassword).mockResolvedValue(undefined);
  });

  describe('quien entra con Google', () => {
    it('no ve el formulario, sino una nota de que su contraseña es la de Google', () => {
      authFalso.currentUser = conGoogle;
      render(<CambiarClavePerfil />);

      expect(screen.getByText(/se cambia desde Google/)).toBeInTheDocument();
      expect(screen.queryByLabelText('Contraseña actual')).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Cambiar contraseña' })).not.toBeInTheDocument();
    });
  });

  describe('validaciones', () => {
    beforeEach(() => {
      render(<CambiarClavePerfil />);
    });

    it('pide los tres campos si se envía vacío', () => {
      enviar();

      expect(screen.getByText('Escribe tu contraseña actual')).toBeInTheDocument();
      expect(screen.getByText('Escribe la nueva contraseña')).toBeInTheDocument();
      expect(screen.getByText('Repite la nueva contraseña', { selector: 'p' })).toBeInTheDocument();
      expect(reauthenticateWithCredential).not.toHaveBeenCalled();
    });

    it('rechaza una contraseña nueva de menos de 8 caracteres', () => {
      llenar('clave-actual-1', 'corta', 'corta');
      enviar();

      expect(screen.getByText('Mínimo 8 caracteres')).toBeInTheDocument();
      expect(updatePassword).not.toHaveBeenCalled();
    });

    it('rechaza que la nueva sea igual a la actual', () => {
      llenar('misma-clave-1', 'misma-clave-1', 'misma-clave-1');
      enviar();

      expect(screen.getByText('Tiene que ser distinta de la actual')).toBeInTheDocument();
      expect(updatePassword).not.toHaveBeenCalled();
    });

    it('rechaza si la repetición no coincide', () => {
      llenar('clave-actual-1', 'clave-nueva-123', 'clave-nueva-999');
      enviar();

      expect(screen.getByText('Las contraseñas no coinciden')).toBeInTheDocument();
      expect(updatePassword).not.toHaveBeenCalled();
    });

    it('el mensaje de un campo se quita al corregirlo', () => {
      enviar();
      fireEvent.change(screen.getByLabelText('Contraseña actual'), { target: { value: 'algo' } });

      expect(screen.queryByText('Escribe tu contraseña actual')).not.toBeInTheDocument();
    });
  });

  describe('cambiar la contraseña', () => {
    beforeEach(() => {
      render(<CambiarClavePerfil />);
    });

    it('primero confirma la contraseña actual y después guarda la nueva', async () => {
      const orden: string[] = [];
      vi.mocked(reauthenticateWithCredential).mockImplementation(async () => {
        orden.push('confirmar');
        return {} as never;
      });
      vi.mocked(updatePassword).mockImplementation(async () => void orden.push('guardar'));

      llenar('clave-actual-1', 'clave-nueva-123', 'clave-nueva-123');
      enviar();

      await waitFor(() => expect(orden).toEqual(['confirmar', 'guardar']));
      expect(EmailAuthProvider.credential).toHaveBeenCalledWith('ana@empresa.com', 'clave-actual-1');
      expect(updatePassword).toHaveBeenCalledWith(conClave, 'clave-nueva-123');
    });

    it('al terminar lo confirma y vacía los campos', async () => {
      llenar('clave-actual-1', 'clave-nueva-123', 'clave-nueva-123');
      enviar();

      expect(await screen.findByRole('status')).toHaveTextContent('Tu contraseña se cambió.');
      expect(screen.getByLabelText('Contraseña actual')).toHaveValue('');
      expect(screen.getByLabelText('Nueva contraseña')).toHaveValue('');
      expect(screen.getByLabelText('Repite la nueva contraseña')).toHaveValue('');
    });

    it('si la contraseña actual no es correcta, lo dice en ese campo y no cambia nada', async () => {
      vi.mocked(reauthenticateWithCredential).mockRejectedValue(new FirebaseError('auth/wrong-password', 'x'));
      llenar('equivocada-1', 'clave-nueva-123', 'clave-nueva-123');
      enviar();

      expect(await screen.findByText('La contraseña actual no es correcta')).toBeInTheDocument();
      expect(updatePassword).not.toHaveBeenCalled();
      expect(screen.getByLabelText('Nueva contraseña')).toHaveValue('clave-nueva-123'); // no hay que volver a escribirla
    });

    it('reconoce también el otro código de Firebase para contraseña incorrecta', async () => {
      vi.mocked(reauthenticateWithCredential).mockRejectedValue(new FirebaseError('auth/invalid-credential', 'x'));
      llenar('equivocada-1', 'clave-nueva-123', 'clave-nueva-123');
      enviar();

      expect(await screen.findByText('La contraseña actual no es correcta')).toBeInTheDocument();
    });

    it('avisa cuando hay demasiados intentos', async () => {
      vi.mocked(reauthenticateWithCredential).mockRejectedValue(new FirebaseError('auth/too-many-requests', 'x'));
      llenar('clave-actual-1', 'clave-nueva-123', 'clave-nueva-123');
      enviar();

      expect(await screen.findByRole('alert')).toHaveTextContent('Demasiados intentos');
    });

    it('muestra un error general si falla por otro motivo, y deja reintentar', async () => {
      vi.mocked(updatePassword).mockRejectedValue(new Error('sin internet'));
      llenar('clave-actual-1', 'clave-nueva-123', 'clave-nueva-123');
      enviar();

      expect(await screen.findByRole('alert')).toHaveTextContent('No se pudo cambiar la contraseña');
      expect(screen.getByRole('button', { name: 'Cambiar contraseña' })).toBeEnabled();
    });

    it('mientras guarda, el botón avisa y se bloquea', async () => {
      vi.mocked(reauthenticateWithCredential).mockReturnValue(new Promise(() => {}));
      llenar('clave-actual-1', 'clave-nueva-123', 'clave-nueva-123');
      enviar();

      expect(await screen.findByRole('button', { name: 'Guardando...' })).toBeDisabled();
    });

    it('el aviso de éxito desaparece al volver a escribir', async () => {
      llenar('clave-actual-1', 'clave-nueva-123', 'clave-nueva-123');
      enviar();
      await screen.findByRole('status');

      fireEvent.change(screen.getByLabelText('Contraseña actual'), { target: { value: 'x' } });

      expect(screen.queryByRole('status')).not.toBeInTheDocument();
    });
  });
});
