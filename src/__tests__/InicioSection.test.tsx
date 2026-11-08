import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InicioSection } from '../app/components/dashboard/InicioSection';
import type { Solicitud } from '../app/types';

const solicitud = (extra: Partial<Solicitud>): Solicitud => ({
  id: 'x',
  title: 'Solicitud',
  type: 'Otro',
  status: 'En revisión',
  date: '1/1/2026',
  time: '10:00',
  autorNombre: 'Ana',
  autorEmail: 'ana@test.com',
  descripcion: 'detalle',
  prioridad: 'Media',
  respuestaAdmin: null,
  ...extra,
});

const lista: Solicitud[] = [
  solicitud({ id: '1', status: 'En revisión', type: 'Soporte Técnico' }),
  solicitud({ id: '2', status: 'En revisión', type: 'Soporte Técnico' }),
  solicitud({ id: '3', status: 'Aprobada', type: 'Financiera' }),
  solicitud({ id: '4', status: 'Rechazada', type: 'Logística' }),
];

// Las tarjetas de arriba: el número que acompaña a cada nombre
const tarjeta = (nombre: string) => {
  const etiqueta = screen.getAllByText(nombre).find((e) => e.nextElementSibling !== null && /^\d+$/.test(e.nextElementSibling.textContent ?? ''));
  return etiqueta?.nextElementSibling?.textContent;
};

const mostrar = (solicitudes: Solicitud[] = lista, esAdmin = true) => render(<InicioSection solicitudes={solicitudes} esAdmin={esAdmin} />);

describe('InicioSection', () => {
  describe('tarjetas con los totales', () => {
    it('cuenta el total, las que están en revisión y las resueltas', () => {
      mostrar();

      expect(tarjeta('Total')).toBe('4');
      expect(tarjeta('En revisión')).toBe('2');
      expect(tarjeta('Resueltas')).toBe('2'); // aprobada + rechazada
    });

    it('el subtítulo cambia según sea admin o usuario', () => {
      const { unmount } = mostrar(lista, true);
      expect(screen.getByText('Cómo van las solicitudes de tu empresa.')).toBeInTheDocument();
      unmount();

      mostrar(lista, false);
      expect(screen.getByText('Cómo van tus solicitudes.')).toBeInTheDocument();
    });
  });

  describe('gráficas', () => {
    it('muestra la gráfica por estado y la gráfica por categoría', () => {
      mostrar();

      expect(screen.getByRole('list', { name: 'Por estado' })).toBeInTheDocument();
      expect(screen.getByRole('list', { name: 'Por categoría' })).toBeInTheDocument();
    });

    it('en la gráfica por estado salen los tres estados, con el ícono y el nombre', () => {
      mostrar();
      const grafica = screen.getByRole('list', { name: 'Por estado' });

      expect(within(grafica).getByLabelText('En revisión: 2 solicitudes, 50% del total')).toBeInTheDocument();
      expect(within(grafica).getByLabelText('Aprobada: 1 solicitud, 25% del total')).toBeInTheDocument();
      expect(within(grafica).getByLabelText('Rechazada: 1 solicitud, 25% del total')).toBeInTheDocument();
      expect(grafica.querySelectorAll('svg').length).toBe(3); // un ícono por estado
    });

    it('en la gráfica por categoría salen solo las que tienen solicitudes, de más a menos', () => {
      mostrar();
      const filas = within(screen.getByRole('list', { name: 'Por categoría' })).getAllByRole('listitem');

      expect(filas.map((f) => f.querySelector('[aria-label]')?.getAttribute('aria-label')?.split(':')[0])).toEqual([
        'Soporte Técnico',
        'Financiera',
        'Logística',
      ]);
    });

    it('un estado sin solicitudes aparece igual, en cero', () => {
      mostrar([solicitud({ status: 'Aprobada' })]);

      expect(screen.getByLabelText('Rechazada: 0 solicitudes, 0% del total')).toBeInTheDocument();
    });

    it('cada estado conserva su color (bueno, advertencia, crítico)', () => {
      mostrar();
      const color = (nombre: string) => {
        const fila = screen.getByLabelText(new RegExp(`^${nombre}:`));
        return (Array.from(fila.querySelectorAll('div')).find((d) => d.style.height === '16px') as HTMLElement).style.background;
      };

      expect(color('Aprobada')).toBe('rgb(12, 163, 12)');
      expect(color('En revisión')).toBe('rgb(250, 178, 25)');
      expect(color('Rechazada')).toBe('rgb(208, 59, 59)');
    });

    it('las barras de categoría usan todas el mismo azul', () => {
      mostrar();
      const colores = within(screen.getByRole('list', { name: 'Por categoría' }))
        .getAllByRole('listitem')
        .map((li) => (Array.from(li.querySelectorAll('div')).find((d) => d.style.height === '16px') as HTMLElement).style.background);

      expect(new Set(colores).size).toBe(1);
      expect(colores[0]).toBe('rgb(42, 120, 214)');
    });
  });

  describe('vista de tabla', () => {
    it('empieza en gráfica y cambia a tabla en las dos a la vez', () => {
      mostrar();
      expect(screen.queryByRole('table')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Gráfica' })).toHaveAttribute('aria-pressed', 'true');

      fireEvent.click(screen.getByRole('button', { name: 'Tabla' }));

      expect(screen.getAllByRole('table')).toHaveLength(2);
      expect(screen.getByRole('button', { name: 'Tabla' })).toHaveAttribute('aria-pressed', 'true');
      expect(screen.queryByRole('list', { name: 'Por estado' })).not.toBeInTheDocument();
    });

    it('se puede volver a la gráfica', () => {
      mostrar();
      fireEvent.click(screen.getByRole('button', { name: 'Tabla' }));
      fireEvent.click(screen.getByRole('button', { name: 'Gráfica' }));

      expect(screen.queryByRole('table')).not.toBeInTheDocument();
      expect(screen.getByRole('list', { name: 'Por estado' })).toBeInTheDocument();
    });

    it('la tabla trae los mismos números que la gráfica', () => {
      mostrar();
      fireEvent.click(screen.getByRole('button', { name: 'Tabla' }));

      const [porEstado] = screen.getAllByRole('table');
      const fila = within(porEstado).getByText('En revisión').closest('tr') as HTMLElement;
      expect(within(fila).getByText('2')).toBeInTheDocument();
      expect(within(fila).getByText('50%')).toBeInTheDocument();
    });
  });

  describe('sin solicitudes', () => {
    it('no dibuja gráficas vacías y explica cuándo aparecerán', () => {
      mostrar([]);

      expect(screen.getByText('Cuando haya solicitudes, aquí verás cómo se reparten.')).toBeInTheDocument();
      expect(screen.queryByRole('list', { name: 'Por estado' })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Tabla' })).not.toBeInTheDocument();
      expect(tarjeta('Total')).toBe('0');
    });
  });
});
