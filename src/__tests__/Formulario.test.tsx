import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AvisoError, ErrorCampo, claseCampo } from '../app/components/Formulario';

describe('claseCampo', () => {
  it('marca el campo en rojo cuando hay error', () => {
    expect(claseCampo('Escribe tu nombre')).toContain('border-red-400');
    expect(claseCampo()).not.toContain('border-red-400');
  });

  it('las pantallas de acceso usan el fondo gris y más alto', () => {
    expect(claseCampo(undefined, 'acceso')).toContain('bg-slate-50');
    expect(claseCampo(undefined, 'acceso')).toContain('py-3');
    expect(claseCampo()).toContain('bg-white');
    expect(claseCampo()).toContain('py-2.5');
  });
});

describe('ErrorCampo', () => {
  it('muestra el mensaje', () => {
    render(<ErrorCampo mensaje="Escribe tu correo" />);
    expect(screen.getByText('Escribe tu correo')).toBeInTheDocument();
  });

  it('no muestra nada si no hay error', () => {
    const { container } = render(<ErrorCampo mensaje={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });
});

describe('AvisoError', () => {
  it('muestra el aviso como alerta', () => {
    render(<AvisoError mensaje="No se pudo guardar." />);
    expect(screen.getByRole('alert')).toHaveTextContent('No se pudo guardar.');
  });

  it('no muestra nada si no hay mensaje', () => {
    render(<AvisoError mensaje={null} />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('sin onCerrar no ofrece cerrarlo', () => {
    render(<AvisoError mensaje="No se pudo guardar." />);
    expect(screen.queryByRole('button', { name: 'Cerrar aviso' })).not.toBeInTheDocument();
  });

  it('con onCerrar trae una X que lo cierra', () => {
    const onCerrar = vi.fn();
    render(<AvisoError mensaje="No se pudo guardar." onCerrar={onCerrar} />);

    fireEvent.click(screen.getByRole('button', { name: 'Cerrar aviso' }));
    expect(onCerrar).toHaveBeenCalledTimes(1);
  });
});
