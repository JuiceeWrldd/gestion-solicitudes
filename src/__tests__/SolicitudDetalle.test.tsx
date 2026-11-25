import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SolicitudDetalle } from '../app/components/dashboard/SolicitudDetalle';
import type { Solicitud } from '../app/types';

const solicitud = (extra: Partial<Solicitud> = {}): Solicitud => ({
  id: 'sol-1',
  titulo: 'Impresora sin tinta',
  tipo: 'Soporte Técnico',
  estado: 'En revisión',
  fecha: '1/1/2026',
  hora: '10:00',
  autorNombre: 'Ana Gómez',
  autorEmail: 'ana@empresa.com',
  descripcion: 'La impresora del segundo piso no imprime.',
  prioridad: 'Alta',
  respuestaAdmin: null,
  ...extra,
});

const mostrar = (req: Solicitud, esAdmin = false, onResponder = vi.fn().mockResolvedValue(true)) =>
  render(
    <SolicitudDetalle
      solicitud={req}
      esAdmin={esAdmin}
      onResponder={onResponder}
      onEditar={vi.fn()}
      onEliminar={vi.fn()}
    />,
  );

describe('SolicitudDetalle', () => {
  it('la respuesta del admin respeta los saltos de línea', () => {
    mostrar(solicitud({ respuestaAdmin: 'Hola Ana.\n\nYa pedimos la tinta.' }));

    const respuesta = screen.getByText(/Ya pedimos la tinta/);
    expect(respuesta.textContent).toBe('Hola Ana.\n\nYa pedimos la tinta.');
    expect(respuesta).toHaveClass('whitespace-pre-wrap');
  });

  it('pinta la prioridad con su color', () => {
    mostrar(solicitud({ prioridad: 'Baja' }));

    expect(screen.getByText('Baja')).toHaveClass('text-green-600');
  });

  it('la descripción también respeta los saltos de línea', () => {
    mostrar(solicitud({ descripcion: 'Primera línea\nSegunda línea' }));

    expect(screen.getByText(/Segunda línea/)).toHaveClass('whitespace-pre-wrap');
  });

  it('el admin envía la respuesta con sus saltos de línea', async () => {
    const onResponder = vi.fn().mockResolvedValue(true);
    mostrar(solicitud(), true, onResponder);

    fireEvent.change(screen.getByPlaceholderText('Escribe tu respuesta...'), {
      target: { value: 'Hola Ana.\n\nYa pedimos la tinta.' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Responder' }));

    await waitFor(() => expect(onResponder).toHaveBeenCalledWith('sol-1', 'Hola Ana.\n\nYa pedimos la tinta.'));
  });
});
