import type { EstadoSolicitud, Prioridad, Solicitud } from '../types';

export interface Filtros {
  texto: string;
  estado: EstadoSolicitud | '';
  prioridad: Prioridad | '';
  tipo: string;
}

export const SIN_FILTROS: Filtros = { texto: '', estado: '', prioridad: '', tipo: '' };

// Sin tildes ni mayúsculas, para que "logistica" encuentre "Logística"
const normalizar = (texto: string) => texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export const hayFiltros = (f: Filtros) => f.texto.trim() !== '' || f.estado !== '' || f.prioridad !== '' || f.tipo !== '';

// Deja las solicitudes que cumplen todos los filtros. En el texto, cada palabra escrita tiene que aparecer
// en algún lugar de la solicitud (título, detalle, categoría, autor, respuesta o referencia).
export function filtrarSolicitudes(solicitudes: Solicitud[], filtros: Filtros): Solicitud[] {
  const palabras = normalizar(filtros.texto).split(/\s+/).filter(Boolean);

  return solicitudes.filter((s) => {
    if (filtros.estado && s.status !== filtros.estado) return false;
    if (filtros.prioridad && s.prioridad !== filtros.prioridad) return false;
    if (filtros.tipo && s.type !== filtros.tipo) return false;
    if (palabras.length === 0) return true;

    const contenido = normalizar([s.title, s.descripcion, s.type, s.autorNombre, s.respuestaAdmin ?? '', s.id.slice(0, 8)].join(' '));
    return palabras.every((palabra) => contenido.includes(palabra));
  });
}
