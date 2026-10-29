import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FirebaseError } from 'firebase/app';
import { RegisterScreen } from '../app/components/RegisterScreen';
import { cancelarRegistroGoogle, elegirCuentaGoogle, registrarAdminConEmpresa } from '../app/services/registro';

vi.mock('../app/services/registro', () => ({
  registrarAdminConEmpresa: vi.fn(),
  elegirCuentaGoogle: vi.fn(),
  completarRegistroGoogle: vi.fn(),
  cancelarRegistroGoogle: vi.fn(),
}));

const llenar = (campos: Partial<Record<'nombre' | 'empresa' | 'email' | 'oficina' | 'clave' | 'confirmar', string>>) => {
  const etiquetas = {
    nombre: 'Tu nombre y apellido',
    empresa: 'Nombre de la empresa',
    email: 'Correo',
    oficina: 'Tu oficina',
    clave: 'Contraseña',
    confirmar: 'Repite la contraseña',
  };
  for (const [campo, valor] of Object.entries(campos)) {
    fireEvent.change(screen.getByLabelText(etiquetas[campo as keyof typeof etiquetas]), { target: { value: valor } });
  }
};

const completo = {
  nombre: 'Ana Gómez',
  empresa: 'Mi Empresa',
  email: 'ana@miempresa.com',
  oficina: 'Dirección General',
  clave: 'clave-segura-1',
  confirmar: 'clave-segura-1',
};

const enviar = () => fireEvent.click(screen.getByRole('button', { name: 'Crear empresa' }));

describe('RegisterScreen', () => {
  const onNavigateToLogin = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(registrarAdminConEmpresa).mockResolvedValue(undefined);
    vi.mocked(cancelarRegistroGoogle).mockResolvedValue(undefined);
    render(<RegisterScreen onNavigateToLogin={onNavigateToLogin} />);
  });

  describe('validaciones', () => {
    it('pide todos los campos si se envía vacío', () => {
      enviar();

      expect(screen.getAllByText('Requerido').length).toBeGreaterThanOrEqual(4);
      expect(screen.getByText('Seleccione su oficina')).toBeInTheDocument();
      expect(registrarAdminConEmpresa).not.toHaveBeenCalled();
    });

    it('rechaza un correo con formato inválido', () => {
      llenar({ ...completo, email: 'no-es-un-correo' });
      enviar();

      expect(screen.getByText('Formato inválido')).toBeInTheDocument();
      expect(registrarAdminConEmpresa).not.toHaveBeenCalled();
    });

    it('rechaza una contraseña de menos de 8 caracteres', () => {
      llenar({ ...completo, clave: 'corta', confirmar: 'corta' });
      enviar();

      expect(screen.getByText('Mínimo 8 caracteres')).toBeInTheDocument();
      expect(registrarAdminConEmpresa).not.toHaveBeenCalled();
    });

    it('rechaza si las contraseñas no coinciden', () => {
      llenar({ ...completo, confirmar: 'otra-clave-distinta' });
      enviar();

      expect(screen.getByText('Las contraseñas no coinciden')).toBeInTheDocument();
      expect(registrarAdminConEmpresa).not.toHaveBeenCalled();
    });

    it('no acepta un nombre de empresa que solo sean etiquetas HTML', () => {
      llenar({ ...completo, empresa: '<script></script>' });
      enviar();

      expect(screen.getByText('Requerido')).toBeInTheDocument();
      expect(registrarAdminConEmpresa).not.toHaveBeenCalled();
    });

    it('limita el largo de los campos de texto', () => {
      expect(screen.getByLabelText('Tu nombre y apellido')).toHaveAttribute('maxLength', '80');
      expect(screen.getByLabelText('Nombre de la empresa')).toHaveAttribute('maxLength', '80');
      expect(screen.getByLabelText('Correo')).toHaveAttribute('maxLength', '254');
    });
  });

  describe('registro', () => {
    it('envía los datos limpios y con el correo en minúsculas', async () => {
      llenar({ ...completo, nombre: '  <b>Ana</b>  Gómez ', empresa: ' Mi   Empresa ', email: '  Ana@MiEmpresa.com ' });
      enviar();

      await waitFor(() => expect(registrarAdminConEmpresa).toHaveBeenCalledTimes(1));
      expect(registrarAdminConEmpresa).toHaveBeenCalledWith({
        nombre: 'Ana Gómez',
        empresa: 'Mi Empresa',
        email: 'ana@miempresa.com',
        clave: 'clave-segura-1',
        departamento: 'Dirección General',
      });
    });

    it('mientras registra, el botón avisa y se bloquea', async () => {
      vi.mocked(registrarAdminConEmpresa).mockReturnValue(new Promise(() => {}));
      llenar(completo);
      enviar();

      expect(await screen.findByRole('button', { name: 'Creando tu empresa...' })).toBeDisabled();
    });

    it('avisa si ya existe una cuenta con ese correo', async () => {
      vi.mocked(registrarAdminConEmpresa).mockRejectedValue(new FirebaseError('auth/email-already-in-use', 'x'));
      llenar(completo);
      enviar();

      expect(await screen.findByRole('alert')).toHaveTextContent('Ya existe una cuenta con ese correo.');
      expect(screen.getByRole('button', { name: 'Crear empresa' })).toBeEnabled();
    });

    it('muestra un mensaje general si falla por otro motivo', async () => {
      vi.mocked(registrarAdminConEmpresa).mockRejectedValue(new Error('permission-denied'));
      llenar(completo);
      enviar();

      expect(await screen.findByRole('alert')).toHaveTextContent('No se pudo completar el registro');
    });
  });

  describe('registro con Google', () => {
    const cuentaGoogle = { yaRegistrado: false as const, nombre: 'Ana Google', email: 'ana@gmail.com', credencial: {} as never, esNueva: true };

    it('ofrece el botón de Google en el registro', () => {
      expect(screen.getByRole('button', { name: 'Registrarme con Google' })).toBeInTheDocument();
    });

    it('al elegir una cuenta nueva pasa al segundo paso, con su correo', async () => {
      vi.mocked(elegirCuentaGoogle).mockResolvedValue(cuentaGoogle);
      fireEvent.click(screen.getByRole('button', { name: 'Registrarme con Google' }));

      expect(await screen.findByText(/Elegiste esta cuenta de Google/)).toBeInTheDocument();
      expect(screen.getByLabelText('Correo (de Google)')).toHaveValue('ana@gmail.com');
      expect(screen.queryByLabelText('Contraseña')).not.toBeInTheDocument(); // con Google no hay contraseña
    });

    it('si esa cuenta ya tiene empresa, lo avisa y se queda en el primer paso', async () => {
      vi.mocked(elegirCuentaGoogle).mockResolvedValue({ yaRegistrado: true });
      fireEvent.click(screen.getByRole('button', { name: 'Registrarme con Google' }));

      expect(await screen.findByRole('alert')).toHaveTextContent('ya tiene una empresa');
      expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
    });

    it('si cierra la ventana de Google no muestra ningún error', async () => {
      vi.mocked(elegirCuentaGoogle).mockRejectedValue(new FirebaseError('auth/popup-closed-by-user', 'x'));
      fireEvent.click(screen.getByRole('button', { name: 'Registrarme con Google' }));

      await waitFor(() => expect(screen.getByRole('button', { name: 'Registrarme con Google' })).toBeEnabled());
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });

    it('si Google falla por otro motivo, muestra un mensaje', async () => {
      vi.mocked(elegirCuentaGoogle).mockRejectedValue(new Error('red'));
      fireEvent.click(screen.getByRole('button', { name: 'Registrarme con Google' }));

      expect(await screen.findByRole('alert')).toHaveTextContent('No se pudo conectar con Google');
    });

    it('"Usar otra cuenta" vuelve al formulario con correo', async () => {
      vi.mocked(elegirCuentaGoogle).mockResolvedValue(cuentaGoogle);
      fireEvent.click(screen.getByRole('button', { name: 'Registrarme con Google' }));
      fireEvent.click(await screen.findByRole('button', { name: 'Usar otra cuenta' }));

      expect(await screen.findByLabelText('Contraseña')).toBeInTheDocument();
    });
  });

  it('permite volver al inicio de sesión', () => {
    fireEvent.click(screen.getByRole('button', { name: /Volver al inicio de sesión/ }));
    expect(onNavigateToLogin).toHaveBeenCalled();
  });

  it('permite mostrar y ocultar la contraseña', () => {
    const clave = screen.getByLabelText('Contraseña');
    expect(clave).toHaveAttribute('type', 'password');

    fireEvent.click(screen.getByRole('button', { name: 'Mostrar contraseña' }));
    expect(clave).toHaveAttribute('type', 'text');
  });
});
