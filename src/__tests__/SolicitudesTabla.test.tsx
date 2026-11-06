import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SolicitudesTabla } from '../app/components/dashboard/SolicitudesTabla';
import type { Solicitud } from '../app/types';

const solicitud = (extra: Partial<Solicitud>): Solicitud => ({
  id: 'abcdefgh12345',
  title: 'Solicitud',
  type: 'Otro',
  status: 'En revisión',
  date: '1/1/2026',
  time: '10:00',
  autorNombre: 'Ana Gómez',
  autorEmail: 'ana@test.com',
  descripcion: 'detalle',
  prioridad: 'Media',
  respuestaAdmin: null,
  ...extra,
});

const lista: Solicitud[] = [
  solicitud({ id: 'a-impresora', title: 'Impresora sin tinta', type: 'Soporte Técnico', prioridad: 'Alta' }),
  solicitud({ id: 'b-vacaciones', title: 'Vacaciones de diciembre', type: 'Recursos Humanos', status: 'Aprobada' }),
  solicitud({ id: 'c-camion', title: 'Camión para el despacho', type: 'Logística', status: 'Rechazada', prioridad: 'Baja' }),
];

const mostrar = (extra: { solicitudes?: Solicitud[]; cargando?: boolean; esAdmin?: boolean } = {}) =>
  render(
    <SolicitudesTabla
      solicitudes={extra.solicitudes ?? lista}
      cargando={extra.cargando ?? false}
      esAdmin={extra.esAdmin ?? false}
      onCambiarEstado={vi.fn()}
      onResponder={vi.fn().mockResolvedValue(true)}
      onEditar={vi.fn()}
      onEliminar={vi.fn().mockResolvedValue(true)}
    />
  );

const buscar = (texto: string) => fireEvent.change(screen.getByLabelText('Buscar solicitudes'), { target: { value: texto } });

describe('SolicitudesTabla', () => {
  describe('lista', () => {
    it('muestra todas las solicitudes y cuántas hay', () => {
      mostrar();

      expect(screen.getByText('Impresora sin tinta')).toBeInTheDocument();
      expect(screen.getByText('Vacaciones de diciembre')).toBeInTheDocument();
      expect(screen.getByText('Camión para el despacho')).toBeInTheDocument();
      expect(screen.getByText('3 solicitudes')).toBeInTheDocument();
    });

    it('usa el singular cuando hay una sola', () => {
      mostrar({ solicitudes: [lista[0]] });
      expect(screen.getByText('1 solicitud')).toBeInTheDocument();
    });

    it('el título cambia según sea admin o usuario', () => {
      const { unmount } = mostrar({ esAdmin: true });
      expect(screen.getByText('Solicitudes de la empresa')).toBeInTheDocument();
      unmount();

      mostrar({ esAdmin: false });
      expect(screen.getByText('Mis solicitudes')).toBeInTheDocument();
    });

    it('mientras carga muestra el aviso y no los filtros', () => {
      mostrar({ cargando: true });

      expect(screen.getByText('Cargando...')).toBeInTheDocument();
      expect(screen.queryByLabelText('Buscar solicitudes')).not.toBeInTheDocument();
    });

    it('sin solicitudes dice que aún no hay, y no ofrece filtros', () => {
      mostrar({ solicitudes: [] });

      expect(screen.getByText('Aún no hay solicitudes.')).toBeInTheDocument();
      expect(screen.queryByLabelText('Buscar solicitudes')).not.toBeInTheDocument();
    });
  });

  describe('búsqueda por texto', () => {
    it('deja solo las que coinciden y cuenta cuántas', () => {
      mostrar();
      buscar('impresora');

      expect(screen.getByText('Impresora sin tinta')).toBeInTheDocument();
      expect(screen.queryByText('Vacaciones de diciembre')).not.toBeInTheDocument();
      expect(screen.getByText('Mostrando 1 de 3')).toBeInTheDocument();
    });

    it('encuentra aunque se escriba sin tilde o en mayúsculas', () => {
      mostrar();
      buscar('CAMION');

      expect(screen.getByText('Camión para el despacho')).toBeInTheDocument();
      expect(screen.queryByText('Impresora sin tinta')).not.toBeInTheDocument();
    });

    it('si nada coincide, lo dice y ofrece limpiar', () => {
      mostrar();
      buscar('zzzz');

      expect(screen.getByText(/Ninguna solicitud coincide/)).toBeInTheDocument();
      expect(screen.getByText('Mostrando 0 de 3')).toBeInTheDocument();
      expect(screen.getAllByRole('button', { name: /Limpiar filtros/ }).length).toBeGreaterThan(0);
    });
  });

  describe('desplegables', () => {
    it('filtra por estado', () => {
      mostrar();
      fireEvent.change(screen.getByLabelText('Filtrar por estado'), { target: { value: 'Aprobada' } });

      expect(screen.getByText('Vacaciones de diciembre')).toBeInTheDocument();
      expect(screen.queryByText('Impresora sin tinta')).not.toBeInTheDocument();
      expect(screen.queryByText('Camión para el despacho')).not.toBeInTheDocument();
    });

    it('filtra por prioridad', () => {
      mostrar();
      fireEvent.change(screen.getByLabelText('Filtrar por prioridad'), { target: { value: 'Baja' } });

      expect(screen.getByText('Camión para el despacho')).toBeInTheDocument();
      expect(screen.queryByText('Impresora sin tinta')).not.toBeInTheDocument();
    });

    it('filtra por categoría', () => {
      mostrar();
      fireEvent.change(screen.getByLabelText('Filtrar por categoría'), { target: { value: 'Soporte Técnico' } });

      expect(screen.getByText('Impresora sin tinta')).toBeInTheDocument();
      expect(screen.queryByText('Vacaciones de diciembre')).not.toBeInTheDocument();
    });

    it('combina el texto con los desplegables', () => {
      mostrar();
      fireEvent.change(screen.getByLabelText('Filtrar por prioridad'), { target: { value: 'Alta' } });
      buscar('vacaciones'); // la de vacaciones es prioridad Media, así que no entra

      expect(screen.getByText(/Ninguna solicitud coincide/)).toBeInTheDocument();
    });
  });

  describe('limpiar filtros', () => {
    it('el botón no aparece mientras no haya filtros', () => {
      mostrar();
      expect(screen.queryByRole('button', { name: /Limpiar filtros/ })).not.toBeInTheDocument();
    });

    it('vuelve a mostrar todas y deja los campos vacíos', () => {
      mostrar();
      buscar('impresora');
      fireEvent.change(screen.getByLabelText('Filtrar por estado'), { target: { value: 'En revisión' } });

      fireEvent.click(screen.getByRole('button', { name: /Limpiar filtros/ }));

      expect(screen.getByText('3 solicitudes')).toBeInTheDocument();
      expect(screen.getByLabelText('Buscar solicitudes')).toHaveValue('');
      expect(screen.getByLabelText('Filtrar por estado')).toHaveValue('');
      expect(screen.getByText('Vacaciones de diciembre')).toBeInTheDocument();
    });

    it('también se puede limpiar desde el aviso de "ninguna coincide"', () => {
      mostrar();
      buscar('zzzz');

      const botones = screen.getAllByRole('button', { name: /Limpiar filtros/ });
      fireEvent.click(botones[botones.length - 1]);

      expect(screen.getByText('3 solicitudes')).toBeInTheDocument();
    });
  });

  it('al abrir una solicitud filtrada se ve su detalle', () => {
    mostrar();
    buscar('camion');

    fireEvent.click(screen.getByText('Camión para el despacho'));

    expect(screen.getByText('Detalle')).toBeInTheDocument();
  });
});
