import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { SolicitudForm } from '../app/components/dashboard/SolicitudForm';
import type { Solicitud } from '../app/types';

const DETALLE_VALIDO = 'La impresora del segundo piso no imprime';

const props = () => ({
  inicial: null,
  onGuardar: vi.fn().mockResolvedValue(true),
  onCancelar: vi.fn(),
  onTerminado: vi.fn(),
});

const llenar = (titulo: string, detalles: string) => {
  fireEvent.change(screen.getByLabelText('Título'), { target: { value: titulo } });
  fireEvent.change(screen.getByLabelText('Detalles'), { target: { value: detalles } });
};

afterEach(() => vi.useRealTimers());

describe('SolicitudForm: validaciones', () => {
  it('muestra los mensajes y no guarda si el formulario está vacío', () => {
    const p = props();
    render(<SolicitudForm {...p} />);

    fireEvent.click(screen.getByRole('button', { name: 'Guardar' }));

    expect(screen.getAllByText('Requerido')).toHaveLength(2); // título y detalles
    expect(p.onGuardar).not.toHaveBeenCalled();
  });

  it('pide mínimo 20 caracteres en los detalles', () => {
    const p = props();
    render(<SolicitudForm {...p} />);

    llenar('Impresora', 'muy corto');
    fireEvent.click(screen.getByRole('button', { name: 'Guardar' }));

    expect(screen.getByText('Mínimo 20 caracteres')).toBeInTheDocument();
    expect(p.onGuardar).not.toHaveBeenCalled();
  });

  it('quita el mensaje de error cuando el usuario corrige el campo', () => {
    render(<SolicitudForm {...props()} />);

    fireEvent.click(screen.getByRole('button', { name: 'Guardar' }));
    expect(screen.getAllByText('Requerido')).toHaveLength(2);

    fireEvent.change(screen.getByLabelText('Título'), { target: { value: 'Algo' } });
    expect(screen.getAllByText('Requerido')).toHaveLength(1);
  });
});

describe('SolicitudForm: guardar', () => {
  it('envía los datos del formulario con prioridad Media por defecto', async () => {
    const p = props();
    render(<SolicitudForm {...p} />);

    llenar('Impresora', DETALLE_VALIDO);
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Guardar' }));
    });

    expect(p.onGuardar).toHaveBeenCalledWith({
      titulo: 'Impresora',
      tipo: 'Soporte Técnico',
      descripcion: DETALLE_VALIDO,
      prioridad: 'Media',
    });
  });

  it('usa la prioridad y la categoría que elija el usuario', async () => {
    const p = props();
    render(<SolicitudForm {...p} />);

    llenar('Pago', DETALLE_VALIDO);
    fireEvent.click(screen.getByRole('button', { name: 'Alta' }));
    fireEvent.change(screen.getByLabelText('Categoría'), { target: { value: 'Financiera' } });
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Guardar' }));
    });

    expect(p.onGuardar).toHaveBeenCalledWith(expect.objectContaining({ prioridad: 'Alta', tipo: 'Financiera' }));
  });

  it('muestra el mensaje de éxito y avisa que terminó a los 2 segundos', async () => {
    vi.useFakeTimers();
    const p = props();
    render(<SolicitudForm {...p} />);

    llenar('Impresora', DETALLE_VALIDO);
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Guardar' }));
    });

    expect(screen.getByText('Solicitud procesada')).toBeInTheDocument();
    expect(p.onTerminado).not.toHaveBeenCalled();

    await act(async () => {
      vi.advanceTimersByTime(2000);
    });
    expect(p.onTerminado).toHaveBeenCalledTimes(1);
  });

  it('no muestra éxito si guardar falla', async () => {
    const p = props();
    p.onGuardar.mockResolvedValue(false);
    render(<SolicitudForm {...p} />);

    llenar('Impresora', DETALLE_VALIDO);
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Guardar' }));
    });

    expect(screen.queryByText('Solicitud procesada')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Guardar' })).toBeEnabled();
  });
});

describe('SolicitudForm: edición', () => {
  const existente: Solicitud = {
    id: 'abc',
    title: 'Teclado roto',
    type: 'Soporte Técnico',
    status: 'En revisión',
    date: '1/1/2026',
    time: '10:00',
    autorNombre: 'Ana',
    autorEmail: 'ana@test.com',
    descripcion: 'El teclado del puesto 4 no responde',
    prioridad: 'Baja',
    respuestaAdmin: null,
  };

  it('carga los datos de la solicitud y muestra el botón Cancelar', () => {
    const p = { ...props(), inicial: existente };
    render(<SolicitudForm {...p} />);

    expect(screen.getByText('Edición de registro')).toBeInTheDocument();
    expect(screen.getByLabelText('Título')).toHaveValue('Teclado roto');
    expect(screen.getByLabelText('Detalles')).toHaveValue('El teclado del puesto 4 no responde');

    fireEvent.click(screen.getByRole('button', { name: 'Cancelar' }));
    expect(p.onCancelar).toHaveBeenCalled();
  });

  it('al guardar dice "Datos actualizados"', async () => {
    const p = { ...props(), inicial: existente };
    render(<SolicitudForm {...p} />);

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Guardar' }));
    });

    expect(screen.getByText('Datos actualizados')).toBeInTheDocument();
  });

  it('en una solicitud nueva no hay botón Cancelar', () => {
    render(<SolicitudForm {...props()} />);
    expect(screen.queryByRole('button', { name: 'Cancelar' })).not.toBeInTheDocument();
  });
});
