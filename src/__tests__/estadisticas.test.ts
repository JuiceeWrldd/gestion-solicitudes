import { describe, it, expect } from 'vitest';
import { contarPorCategoria, contarPorEstado, porcentaje } from '../app/utils/estadisticas';
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

describe('contarPorEstado', () => {
  it('cuenta cuántas hay en cada estado', () => {
    const r = contarPorEstado([
      solicitud({ status: 'En revisión' }),
      solicitud({ status: 'En revisión' }),
      solicitud({ status: 'Aprobada' }),
      solicitud({ status: 'Rechazada' }),
    ]);
    expect(r).toEqual([
      { nombre: 'En revisión', cantidad: 2 },
      { nombre: 'Aprobada', cantidad: 1 },
      { nombre: 'Rechazada', cantidad: 1 },
    ]);
  });

  it('ordena de más a menos, y si empatan sigue el orden del flujo', () => {
    const r = contarPorEstado([solicitud({ status: 'Rechazada' }), solicitud({ status: 'Rechazada' }), solicitud({ status: 'Aprobada' })]);
    expect(r.map((c) => c.nombre)).toEqual(['Rechazada', 'Aprobada', 'En revisión']);

    const empate = contarPorEstado([solicitud({ status: 'Rechazada' }), solicitud({ status: 'Aprobada' })]);
    expect(empate.map((c) => c.nombre)).toEqual(['Aprobada', 'Rechazada', 'En revisión']);
  });

  it('los tres estados del flujo salen siempre, aunque estén en cero', () => {
    const r = contarPorEstado([solicitud({ status: 'Aprobada' })]);
    expect(r).toHaveLength(3);
    expect(r.find((c) => c.nombre === 'Rechazada')?.cantidad).toBe(0);
  });

  it('"Pendiente" solo sale si alguna solicitud lo tiene', () => {
    expect(contarPorEstado([solicitud({})]).map((c) => c.nombre)).not.toContain('Pendiente');
    expect(contarPorEstado([solicitud({ status: 'Pendiente' })]).map((c) => c.nombre)).toContain('Pendiente');
  });

  it('sin solicitudes devuelve los tres estados en cero', () => {
    expect(contarPorEstado([])).toEqual([
      { nombre: 'En revisión', cantidad: 0 },
      { nombre: 'Aprobada', cantidad: 0 },
      { nombre: 'Rechazada', cantidad: 0 },
    ]);
  });
});

describe('contarPorCategoria', () => {
  it('cuenta por categoría y ordena de más a menos', () => {
    const r = contarPorCategoria([
      solicitud({ type: 'Logística' }),
      solicitud({ type: 'Financiera' }),
      solicitud({ type: 'Financiera' }),
      solicitud({ type: 'Financiera' }),
      solicitud({ type: 'Logística' }),
    ]);
    expect(r).toEqual([
      { nombre: 'Financiera', cantidad: 3 },
      { nombre: 'Logística', cantidad: 2 },
    ]);
  });

  it('solo salen las categorías que tienen solicitudes', () => {
    expect(contarPorCategoria([solicitud({ type: 'Otro' })])).toEqual([{ nombre: 'Otro', cantidad: 1 }]);
  });

  it('si empatan, ordena por nombre, ignorando las tildes y las mayúsculas', () => {
    const r = contarPorCategoria([solicitud({ type: 'Soporte Técnico' }), solicitud({ type: 'Administrativa' }), solicitud({ type: 'Otro' })]);
    expect(r.map((c) => c.nombre)).toEqual(['Administrativa', 'Otro', 'Soporte Técnico']);
  });

  it('incluye categorías que no están en la lista oficial (por ejemplo "Sin tipo")', () => {
    expect(contarPorCategoria([solicitud({ type: 'Sin tipo' })])).toEqual([{ nombre: 'Sin tipo', cantidad: 1 }]);
  });

  it('sin solicitudes devuelve una lista vacía', () => {
    expect(contarPorCategoria([])).toEqual([]);
  });
});

describe('porcentaje', () => {
  it('redondea al entero más cercano', () => {
    expect(porcentaje(1, 3)).toBe(33);
    expect(porcentaje(2, 3)).toBe(67);
    expect(porcentaje(1, 2)).toBe(50);
  });

  it('da 0 y 100 en los extremos', () => {
    expect(porcentaje(0, 5)).toBe(0);
    expect(porcentaje(5, 5)).toBe(100);
  });

  it('con total cero devuelve 0 en lugar de fallar', () => {
    expect(porcentaje(0, 0)).toBe(0);
  });
});
