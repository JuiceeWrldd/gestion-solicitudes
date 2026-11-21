import { describe, it, expect } from 'vitest';
import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { aSolicitudes } from '../app/services/solicitudes';
import { clasePrioridad, statusConfig } from '../app/config/solicitudes';

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
      titulo: 'Sin título',
      tipo: 'Sin tipo',
      estado: 'En revisión',
      prioridad: 'Media',
      autorNombre: 'Usuario',
      autorEmail: '',
      respuestaAdmin: null,
      fecha: 'Reciente',
      hora: '',
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
      titulo: 'Impresora',
      tipo: 'Soporte Técnico',
      estado: 'Aprobada',
      prioridad: 'Alta',
      autorNombre: 'Ana',
      respuestaAdmin: 'Listo',
    });
    expect(s.fecha).not.toBe('Reciente');
  });

  it('un estado que la app no conoce se muestra como "En revisión"', () => {
    const [vieja, rara] = aSolicitudes([
      fakeDoc('a', { estado: 'Pendiente', fecha: fecha(2) }),
      fakeDoc('b', { estado: 123, fecha: fecha(1) }),
    ]);
    expect(vieja.estado).toBe('En revisión');
    expect(rara.estado).toBe('En revisión');
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

describe('colores de prioridad y estado', () => {
  it('cada prioridad tiene su propio color', () => {
    expect(new Set(Object.values(clasePrioridad)).size).toBe(3);
  });

  it('cada estado tiene su propio color', () => {
    const clases = Object.values(statusConfig).map((e) => e.clase);
    expect(new Set(clases).size).toBe(clases.length);
  });
});
