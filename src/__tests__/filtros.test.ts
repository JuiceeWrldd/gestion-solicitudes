import { describe, it, expect } from 'vitest';
import { SIN_FILTROS, filtrarSolicitudes, hayFiltros, type Filtros } from '../app/utils/filtros';
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
  solicitud({ id: 'id-impresora', title: 'Impresora sin tinta', type: 'Soporte Técnico', prioridad: 'Alta', descripcion: 'La del segundo piso no imprime' }),
  solicitud({ id: 'id-vacaciones', title: 'Vacaciones de diciembre', type: 'Recursos Humanos', status: 'Aprobada', autorNombre: 'Luis Pérez', respuestaAdmin: 'Aprobadas, disfrútalas' }),
  solicitud({ id: 'id-camion', title: 'Camión para el despacho', type: 'Logística', status: 'Rechazada', prioridad: 'Baja' }),
  solicitud({ id: 'id-pago', title: 'Pago a proveedores', type: 'Financiera', prioridad: 'Alta' }),
];

const con = (extra: Partial<Filtros>) => filtrarSolicitudes(lista, { ...SIN_FILTROS, ...extra }).map((s) => s.id);

describe('filtrarSolicitudes', () => {
  it('sin filtros devuelve todas, en el mismo orden', () => {
    expect(con({})).toEqual(['id-impresora', 'id-vacaciones', 'id-camion', 'id-pago']);
  });

  describe('búsqueda por texto', () => {
    it('busca en el título', () => {
      expect(con({ texto: 'impresora' })).toEqual(['id-impresora']);
    });

    it('busca en el detalle', () => {
      expect(con({ texto: 'segundo piso' })).toEqual(['id-impresora']);
    });

    it('busca en la categoría', () => {
      expect(con({ texto: 'recursos' })).toEqual(['id-vacaciones']);
    });

    it('busca por el nombre del autor', () => {
      expect(con({ texto: 'luis' })).toEqual(['id-vacaciones']);
    });

    it('busca en la respuesta del admin', () => {
      expect(con({ texto: 'disfrutalas' })).toEqual(['id-vacaciones']);
    });

    it('busca por la referencia de 8 caracteres que se ve en la lista', () => {
      expect(con({ texto: 'id-camio' })).toEqual(['id-camion']);
    });

    it('ignora mayúsculas y tildes, en lo que se escribe y en lo guardado', () => {
      expect(con({ texto: 'LOGISTICA' })).toEqual(['id-camion']);
      expect(con({ texto: 'camion' })).toEqual(['id-camion']);
      expect(con({ texto: 'Camión' })).toEqual(['id-camion']);
    });

    it('con varias palabras, todas tienen que aparecer (en cualquier orden)', () => {
      expect(con({ texto: 'tinta impresora' })).toEqual(['id-impresora']);
      expect(con({ texto: 'impresora vacaciones' })).toEqual([]);
    });

    it('ignora espacios de más y un texto de puros espacios', () => {
      expect(con({ texto: '   pago    proveedores  ' })).toEqual(['id-pago']);
      expect(con({ texto: '    ' })).toHaveLength(4);
    });

    it('un texto que no aparece en ninguna devuelve una lista vacía', () => {
      expect(con({ texto: 'zzzz' })).toEqual([]);
    });

    it('trata los símbolos de expresiones regulares como texto normal', () => {
      expect(con({ texto: '.*(' })).toEqual([]);
    });
  });

  describe('desplegables', () => {
    it('filtra por estado', () => {
      expect(con({ estado: 'Aprobada' })).toEqual(['id-vacaciones']);
      expect(con({ estado: 'Rechazada' })).toEqual(['id-camion']);
    });

    it('filtra por prioridad', () => {
      expect(con({ prioridad: 'Alta' })).toEqual(['id-impresora', 'id-pago']);
      expect(con({ prioridad: 'Baja' })).toEqual(['id-camion']);
    });

    it('filtra por categoría', () => {
      expect(con({ tipo: 'Financiera' })).toEqual(['id-pago']);
    });
  });

  it('combina todos los filtros: tienen que cumplirse a la vez', () => {
    expect(con({ prioridad: 'Alta', estado: 'En revisión' })).toEqual(['id-impresora', 'id-pago']);
    expect(con({ prioridad: 'Alta', estado: 'En revisión', tipo: 'Financiera' })).toEqual(['id-pago']);
    expect(con({ prioridad: 'Alta', texto: 'pago' })).toEqual(['id-pago']);
    expect(con({ prioridad: 'Baja', estado: 'Aprobada' })).toEqual([]);
  });

  it('no modifica la lista original', () => {
    const copia = [...lista];
    filtrarSolicitudes(lista, { ...SIN_FILTROS, texto: 'pago' });
    expect(lista).toEqual(copia);
  });
});

describe('hayFiltros', () => {
  it('es falso cuando no hay ninguno', () => {
    expect(hayFiltros(SIN_FILTROS)).toBe(false);
  });

  it('es falso con un texto de puros espacios', () => {
    expect(hayFiltros({ ...SIN_FILTROS, texto: '   ' })).toBe(false);
  });

  it('es verdadero con cualquiera de ellos', () => {
    expect(hayFiltros({ ...SIN_FILTROS, texto: 'a' })).toBe(true);
    expect(hayFiltros({ ...SIN_FILTROS, estado: 'Aprobada' })).toBe(true);
    expect(hayFiltros({ ...SIN_FILTROS, prioridad: 'Alta' })).toBe(true);
    expect(hayFiltros({ ...SIN_FILTROS, tipo: 'Otro' })).toBe(true);
  });
});
