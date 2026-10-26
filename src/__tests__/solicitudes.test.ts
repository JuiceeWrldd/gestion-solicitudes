import { describe, it, expect } from 'vitest';
import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { aSolicitudes } from '../app/services/solicitudes';
import { getPriorityColors } from '../app/config/solicitudes';

// Documento de Firestore de mentira, con la forma que usa aSolicitudes
const fakeDoc = (id: string, data: DocumentData) =>
  ({ id, data: () => data }) as unknown as QueryDocumentSnapshot<DocumentData>;

const fecha = (ms: number) => ({ toMillis: () => ms, toDate: () => new Date(ms) });

describe('aSolicitudes', () => {
  it('ordena las solicitudes de la más reciente a la más antigua', () => {
    const lista = aSolicitudes([
      fakeDoc('vieja', { titulo: 'A', fecha: fecha(1000) }),
      fakeDoc('nueva', { titulo: 'B', fecha: fecha(3000) }),
      fakeDoc('media', { titulo: 'C', fecha: fecha(2000) }),
    ]);
    expect(lista.map((s) => s.id)).toEqual(['nueva', 'media', 'vieja']);
  });

  it('pone valores por defecto cuando faltan datos', () => {
    const [s] = aSolicitudes([fakeDoc('x', {})]);
    expect(s).toMatchObject({
      id: 'x',
      title: 'Sin título',
      type: 'Sin tipo',
      status: 'En revisión',
      prioridad: 'Media',
      autorNombre: 'Usuario',
      autorEmail: '',
      respuestaAdmin: null,
      date: 'Reciente',
      time: '',
    });
  });

  it('respeta los datos que sí vienen', () => {
    const [s] = aSolicitudes([
      fakeDoc('y', {
        titulo: 'Impresora',
        tipo: 'Soporte Técnico',
        estado: 'Aprobada',
        prioridad: 'Alta',
        autorNombre: 'Ana',
        autorEmail: 'ana@test.com',
        respuestaAdmin: 'Listo',
        fecha: fecha(Date.now()),
      }),
    ]);
    expect(s).toMatchObject({
      title: 'Impresora',
      type: 'Soporte Técnico',
      status: 'Aprobada',
      prioridad: 'Alta',
      autorNombre: 'Ana',
      respuestaAdmin: 'Listo',
    });
    expect(s.date).not.toBe('Reciente');
  });

  it('no modifica la lista original', () => {
    const docs = [
      fakeDoc('a', { fecha: fecha(1) }),
      fakeDoc('b', { fecha: fecha(2) }),
    ];
    aSolicitudes(docs);
    expect(docs.map((d) => d.id)).toEqual(['a', 'b']);
  });
});

describe('getPriorityColors', () => {
  it('usa colores neutros cuando el botón no está activo', () => {
    expect(getPriorityColors('Alta', false)).toEqual(getPriorityColors('Baja', false));
  });

  it('cada prioridad activa tiene su propio color', () => {
    const alta = getPriorityColors('Alta', true).text;
    const media = getPriorityColors('Media', true).text;
    const baja = getPriorityColors('Baja', true).text;
    expect(new Set([alta, media, baja]).size).toBe(3);
  });
});
