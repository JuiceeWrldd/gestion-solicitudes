import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { updatePassword } from 'firebase/auth';
import { updateDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';
import { CambiarClaveScreen } from '../app/components/CambiarClaveScreen';

vi.mock('firebase/auth', () => ({ updatePassword: vi.fn() }));
vi.mock('firebase/firestore', () => ({ doc: vi.fn(() => 'ref-perfil'), updateDoc: vi.fn() }));
vi.mock('../app/config/firebase', () => ({ auth: { currentUser: { uid: 'u1' } }, db: {} }));

const llenar = (nueva: string, confirmar: string) => {
  fireEvent.change(screen.getByLabelText('Nueva contraseña'), { target: { value: nueva } });
  fireEvent.change(screen.getByLabelText('Repite la contraseña'), { target: { value: confirmar } });
};

const enviar = () => fireEvent.click(screen.getByRole('button', { name: 'Guardar y continuar' }));

describe('CambiarClaveScreen', () => {
  const onListo = vi.fn();
  const onCerrarSesion = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(updatePassword).mockResolvedValue(undefined);
    vi.mocked(updateDoc).mockResolvedValue(undefined);
    render(<CambiarClaveScreen onListo={onListo} onCerrarSesion={onCerrarSesion} />);
  });

  it('rechaza una contraseña de menos de 8 caracteres', () => {
    llenar('corta', 'corta');
    enviar();

    expect(screen.getByRole('alert')).toHaveTextContent('mínimo 8 caracteres');
    expect(updatePassword).not.toHaveBeenCalled();
  });

  it('rechaza si las contraseñas no coinciden', () => {
    llenar('contraseña-larga-1', 'contraseña-larga-2');
    enviar();

    expect(screen.getByRole('alert')).toHaveTextContent('no coinciden');
    expect(updatePassword).not.toHaveBeenCalled();
  });

  it('cambia la contraseña, quita la marca del perfil y avisa que terminó', async () => {
    llenar('mi-clave-nueva-1', 'mi-clave-nueva-1');
    enviar();

    await waitFor(() => expect(onListo).toHaveBeenCalledTimes(1));
    expect(updatePassword).toHaveBeenCalledWith({ uid: 'u1' }, 'mi-clave-nueva-1');
    expect(updateDoc).toHaveBeenCalledWith('ref-perfil', { debeCambiarClave: false });
  });

  it('si Firebase pide volver a iniciar sesión, lo explica y no marca el perfil', async () => {
    vi.mocked(updatePassword).mockRejectedValue(new FirebaseError('auth/requires-recent-login', 'x'));
    llenar('mi-clave-nueva-1', 'mi-clave-nueva-1');
    enviar();

    expect(await screen.findByRole('alert')).toHaveTextContent('cierra sesión');
    expect(updateDoc).not.toHaveBeenCalled();
    expect(onListo).not.toHaveBeenCalled();
  });

  it('muestra un error general si algo más falla', async () => {
    vi.mocked(updatePassword).mockRejectedValue(new Error('red'));
    llenar('mi-clave-nueva-1', 'mi-clave-nueva-1');
    enviar();

    expect(await screen.findByRole('alert')).toHaveTextContent('No se pudo cambiar la contraseña');
    expect(onListo).not.toHaveBeenCalled();
  });

  it('permite cerrar sesión', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Cerrar sesión' }));
    expect(onCerrarSesion).toHaveBeenCalled();
  });
});
