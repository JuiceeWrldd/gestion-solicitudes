import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AvisoCuentaScreen } from '../app/components/AvisoCuentaScreen';

describe('AvisoCuentaScreen', () => {
  it('muestra el título y el mensaje que reciba', () => {
    render(<AvisoCuentaScreen titulo="Cuenta desactivada" mensaje="Habla con tu administrador." onCerrarSesion={vi.fn()} />);

    expect(screen.getByText('Cuenta desactivada')).toBeInTheDocument();
    expect(screen.getByText('Habla con tu administrador.')).toBeInTheDocument();
  });

  it('permite cerrar sesión', () => {
    const onCerrarSesion = vi.fn();
    render(<AvisoCuentaScreen titulo="x" mensaje="y" onCerrarSesion={onCerrarSesion} />);

    fireEvent.click(screen.getByRole('button', { name: 'Cerrar sesión' }));
    expect(onCerrarSesion).toHaveBeenCalledTimes(1);
  });
});
