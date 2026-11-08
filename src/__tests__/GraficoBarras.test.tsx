import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GraficoBarras, type DatoBarra } from '../app/components/dashboard/GraficoBarras';

const datos: DatoBarra[] = [
  { nombre: 'Soporte Técnico', cantidad: 6, color: '#2a78d6' },
  { nombre: 'Financiera', cantidad: 3, color: '#2a78d6' },
  { nombre: 'Otro', cantidad: 0, color: '#2a78d6' },
];

const mostrar = (extra: { datos?: DatoBarra[]; verTabla?: boolean } = {}) =>
  render(
    <GraficoBarras titulo="Por categoría" descripcion="De qué trata cada solicitud" columna="Categoría" datos={extra.datos ?? datos} verTabla={extra.verTabla ?? false} />
  );

// La barra de una fila: el div con el alto fijo que se pinta con el color
const barraDe = (nombre: string) => {
  const fila = screen.getByLabelText(new RegExp(`^${nombre}:`));
  return Array.from(fila.querySelectorAll('div')).find((d) => d.style.height === '16px') as HTMLElement;
};

describe('GraficoBarras (vista de gráfica)', () => {
  it('muestra el título, la descripción y una fila por cada dato', () => {
    mostrar();

    expect(screen.getByText('Por categoría')).toBeInTheDocument();
    expect(screen.getByText('De qué trata cada solicitud')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('pone el valor al final de cada barra, también cuando es cero', () => {
    mostrar();

    expect(within(screen.getByLabelText(/^Soporte Técnico:/)).getByText('6')).toBeInTheDocument();
    expect(within(screen.getByLabelText(/^Otro:/)).getByText('0')).toBeInTheDocument();
  });

  describe('las barras', () => {
    it('la más larga ocupa el 80 % del espacio y las demás son proporcionales', () => {
      mostrar();

      expect(barraDe('Soporte Técnico').style.width).toBe('80%');
      expect(barraDe('Financiera').style.width).toBe('40%'); // 3 de 6
    });

    it('una barra en cero no se dibuja (ancho 0)', () => {
      mostrar();
      expect(barraDe('Otro').style.width).toBe('0%');
    });

    it('con todos los datos en cero no falla ni dibuja barras', () => {
      mostrar({ datos: [{ nombre: 'Aprobada', cantidad: 0, color: '#0ca30c' }] });
      expect(barraDe('Aprobada').style.width).toBe('0%');
    });

    it('son delgadas (16 px, nunca más de 24) y redondeadas solo donde termina el dato', () => {
      mostrar();

      const barra = barraDe('Soporte Técnico');
      expect(barra.style.height).toBe('16px');
      expect(barra.style.borderRadius).toMatch(/^0(px)? 4px 4px 0(px)?$/); // cuadrada a la izquierda, redondeada a la derecha
    });

    it('cada barra lleva el color que se le dio', () => {
      mostrar({
        datos: [
          { nombre: 'Aprobada', cantidad: 2, color: 'rgb(12, 163, 12)' },
          { nombre: 'Rechazada', cantidad: 1, color: 'rgb(208, 59, 59)' },
        ],
      });

      expect(barraDe('Aprobada').style.background).toBe('rgb(12, 163, 12)');
      expect(barraDe('Rechazada').style.background).toBe('rgb(208, 59, 59)');
    });

    it('muestra el ícono junto al nombre cuando se le da uno', () => {
      mostrar({ datos: [{ nombre: 'Aprobada', cantidad: 2, color: '#0ca30c', icono: <svg data-testid="icono-aprobada" /> }] });
      expect(within(screen.getByLabelText(/^Aprobada:/)).getByTestId('icono-aprobada')).toBeInTheDocument();
    });
  });

  describe('accesibilidad', () => {
    it('cada fila se puede enfocar con el teclado y dice su nombre, cantidad y porcentaje', () => {
      mostrar();

      const fila = screen.getByLabelText('Soporte Técnico: 6 solicitudes, 67% del total');
      expect(fila).toHaveAttribute('tabindex', '0');
      expect(screen.getByLabelText('Financiera: 3 solicitudes, 33% del total')).toBeInTheDocument();
      expect(screen.getByLabelText('Otro: 0 solicitudes, 0% del total')).toBeInTheDocument();
    });

    it('usa el singular cuando hay una sola solicitud', () => {
      mostrar({ datos: [{ nombre: 'Otro', cantidad: 1, color: '#2a78d6' }] });
      expect(screen.getByLabelText('Otro: 1 solicitud, 100% del total')).toBeInTheDocument();
    });
  });

  describe('globo con el detalle', () => {
    it('no se ve hasta que se pasa el cursor', () => {
      mostrar();
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    it('al pasar el cursor por una barra muestra cantidad, nombre y porcentaje', () => {
      mostrar();
      fireEvent.mouseEnter(screen.getByLabelText(/^Financiera:/));

      const globo = screen.getByRole('tooltip');
      expect(globo).toHaveTextContent('3 solicitudes');
      expect(globo).toHaveTextContent('Financiera · 33% del total');
    });

    it('desaparece al sacar el cursor', () => {
      mostrar();
      const fila = screen.getByLabelText(/^Financiera:/);

      fireEvent.mouseEnter(fila);
      fireEvent.mouseLeave(fila);

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    it('con el teclado muestra lo mismo que con el cursor', () => {
      mostrar();
      const fila = screen.getByLabelText(/^Soporte Técnico:/);

      fireEvent.focus(fila);
      expect(screen.getByRole('tooltip')).toHaveTextContent('6 solicitudes');

      fireEvent.blur(fila);
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    it('solo hay un globo a la vez', () => {
      mostrar();

      fireEvent.mouseEnter(screen.getByLabelText(/^Soporte Técnico:/));
      fireEvent.mouseEnter(screen.getByLabelText(/^Financiera:/));

      expect(screen.getAllByRole('tooltip')).toHaveLength(1);
    });
  });

  it('un nombre con etiquetas HTML se muestra como texto y no crea elementos', () => {
    const { container } = mostrar({ datos: [{ nombre: '<img src=x onerror=alert(1)>', cantidad: 2, color: '#2a78d6' }] });

    expect(screen.getAllByText('<img src=x onerror=alert(1)>').length).toBeGreaterThan(0);
    expect(container.querySelector('img')).toBeNull();
  });
});

describe('GraficoBarras (vista de tabla)', () => {
  it('muestra los mismos datos en una tabla, con su porcentaje y el total', () => {
    mostrar({ verTabla: true });

    const tabla = screen.getByRole('table');
    expect(within(tabla).getByText('Categoría')).toBeInTheDocument();

    const fila = within(tabla).getByText('Soporte Técnico').closest('tr') as HTMLElement;
    expect(within(fila).getByText('6')).toBeInTheDocument();
    expect(within(fila).getByText('67%')).toBeInTheDocument();

    const total = within(tabla).getByText('Total').closest('tr') as HTMLElement;
    expect(within(total).getByText('9')).toBeInTheDocument();
  });

  it('no dibuja barras ni depende del color', () => {
    mostrar({ verTabla: true });

    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('con todo en cero muestra 0 % en lugar de fallar', () => {
    mostrar({ verTabla: true, datos: [{ nombre: 'Aprobada', cantidad: 0, color: '#0ca30c' }] });

    const fila = screen.getByText('Aprobada').closest('tr') as HTMLElement;
    expect(within(fila).getByText('0%')).toBeInTheDocument();
  });
});
