import { ESTADOS } from '../config/solicitudes';
import type { Solicitud } from '../types';

export interface Conteo {
  nombre: string;
  cantidad: number;
}

// De la categoría con más solicitudes a la que menos; si empatan, por nombre
const masCantidadPrimero = (a: Conteo, b: Conteo) => b.cantidad - a.cantidad || a.nombre.localeCompare(b.nombre, 'es');

// Cuántas solicitudes hay en cada estado. Los tres estados del flujo salen siempre (aunque estén en 0,
// para que se vea que no hay); "Pendiente" solo si alguna solicitud lo tiene.
export function contarPorEstado(solicitudes: Solicitud[]) {
  const conteos = ESTADOS.map((estado) => ({
    nombre: estado,
    cantidad: solicitudes.filter((s) => s.status === estado).length,
  }));

  const posicionEnElFlujo = (nombre: string) => ESTADOS.findIndex((estado) => estado === nombre);

  return conteos
    .filter((c) => c.nombre !== 'Pendiente' || c.cantidad > 0)
    .sort((a, b) => b.cantidad - a.cantidad || posicionEnElFlujo(a.nombre) - posicionEnElFlujo(b.nombre));
}

// Cuántas solicitudes hay en cada categoría. Solo salen las que tienen alguna.
export function contarPorCategoria(solicitudes: Solicitud[]): Conteo[] {
  const cuenta = new Map<string, number>();
  for (const s of solicitudes) cuenta.set(s.type, (cuenta.get(s.type) ?? 0) + 1);

  return [...cuenta].map(([nombre, cantidad]) => ({ nombre, cantidad })).sort(masCantidadPrimero);
}

// Porcentaje entero del total (0 si no hay nada)
export const porcentaje = (cantidad: number, total: number) => (total === 0 ? 0 : Math.round((cantidad / total) * 100));
