import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { RegistroGoogleForm } from '../app/components/RegistroGoogleForm';
import { cancelarRegistroGoogle, completarRegistroGoogle, type CuentaGoogle } from '../app/services/registro';

vi.mock('../app/services/registro', () => ({
  completarRegistroGoogle: vi.fn(),
  cancelarRegistroGoogle: vi.fn(),
}));

const cuenta = (extra: Partial<CuentaGoogle> = {}): CuentaGoogle => ({
  nombre: 'Ana Google',
  email: 'ana@gmail.com',
  credencial: { token: 'x' } as never,
  esNueva: true,
  ...extra,
});

const enviar = () => fireEvent.click(screen.getByRole('button', { name: 'Crear empresa' }));

describe('RegistroGoogleForm', () => {
  const onCancelar = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(completarRegistroGoogle).mockResolvedValue(undefined);
    vi.mocked(cancelarRegistroGoogle).mockResolvedValue(undefined);
  });

  it('muestra el correo de Google bloqueado y el nombre ya escrito', () => {
    render(<RegistroGoogleForm cuenta={cuenta()} onCancelar={onCancelar} />);

    expect(screen.getByLabelText('Correo (de Google)')).toHaveValue('ana@gmail.com');
    expect(screen.getByLabelText('Correo (de Google)')).toBeDisabled();
    expect(screen.getByLabelText('Tu nombre y apellido')).toHaveValue('Ana Google');
  });

  it('pide la empresa y la oficina antes de continuar', () => {
    render(<RegistroGoogleForm cuenta={cuenta()} onCancelar={onCancelar} />);

    enviar();

    expect(screen.getByText('Requerido')).toBeInTheDocument(); // empresa
    expect(screen.getByText('Seleccione su oficina')).toBeInTheDocument();
    expect(completarRegistroGoogle).not.toHaveBeenCalled();
  });

  it('pide el nombre si Google no lo trajo', () => {
    render(<RegistroGoogleForm cuenta={cuenta({ nombre: '' })} onCancelar={onCancelar} />);

    fireEvent.change(screen.getByLabelText('Nombre de la empresa'), { target: { value: 'Mi Empresa' } });
    fireEvent.change(screen.getByLabelText('Tu oficina'), { target: { value: 'Logística' } });
    enviar();

    expect(screen.getByText('Requerido')).toBeInTheDocument();
    expect(completarRegistroGoogle).not.toHaveBeenCalled();
  });

  it('envía los datos limpios junto con la credencial de Google', async () => {
    const c = cuenta();
    render(<RegistroGoogleForm cuenta={c} onCancelar={onCancelar} />);

    fireEvent.change(screen.getByLabelText('Nombre de la empresa'), { target: { value: '  <b>Mi</b>   Empresa ' } });
    fireEvent.change(screen.getByLabelText('Tu oficina'), { target: { value: 'Logística' } });
    enviar();

    await waitFor(() => expect(completarRegistroGoogle).toHaveBeenCalledTimes(1));
    expect(completarRegistroGoogle).toHaveBeenCalledWith({
      nombre: 'Ana Google',
      empresa: 'Mi Empresa',
      departamento: 'Logística',
      credencial: c.credencial,
    });
  });

  it('muestra un error y deja reintentar si algo falla', async () => {
    vi.mocked(completarRegistroGoogle).mockRejectedValue(new Error('permission-denied'));
    render(<RegistroGoogleForm cuenta={cuenta()} onCancelar={onCancelar} />);

    fireEvent.change(screen.getByLabelText('Nombre de la empresa'), { target: { value: 'Mi Empresa' } });
    fireEvent.change(screen.getByLabelText('Tu oficina'), { target: { value: 'Logística' } });
    enviar();

    expect(await screen.findByRole('alert')).toHaveTextContent('No se pudo completar el registro');
    expect(screen.getByRole('button', { name: 'Crear empresa' })).toBeEnabled();
  });

  it('"Usar otra cuenta" limpia la cuenta de Google y vuelve al inicio del registro', async () => {
    render(<RegistroGoogleForm cuenta={cuenta({ esNueva: true })} onCancelar={onCancelar} />);

    fireEvent.click(screen.getByRole('button', { name: 'Usar otra cuenta' }));

    await waitFor(() => expect(onCancelar).toHaveBeenCalledTimes(1));
    expect(cancelarRegistroGoogle).toHaveBeenCalledWith(true);
  });

  it('avisa si la cuenta de Google ya existía antes, para no borrarla', async () => {
    render(<RegistroGoogleForm cuenta={cuenta({ esNueva: false })} onCancelar={onCancelar} />);

    fireEvent.click(screen.getByRole('button', { name: 'Usar otra cuenta' }));

    await waitFor(() => expect(cancelarRegistroGoogle).toHaveBeenCalledWith(false));
  });
});
