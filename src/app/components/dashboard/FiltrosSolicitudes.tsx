import { Search, X } from 'lucide-react';
import { ESTADOS, PRIORIDADES, TIPOS } from '../../config/solicitudes';
import { SIN_FILTROS, hayFiltros, type Filtros } from '../../utils/filtros';
import type { EstadoSolicitud, Prioridad } from '../../types';

interface FiltrosSolicitudesProps {
  filtros: Filtros;
  onCambiar: (filtros: Filtros) => void;
  total: number;
  mostrando: number;
}

const selectClase = 'w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-indigo-600';

export function FiltrosSolicitudes({ filtros, onCambiar, total, mostrando }: FiltrosSolicitudesProps) {
  const activos = hayFiltros(filtros);

  return (
    <div className="mb-5 flex flex-col gap-3">
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          aria-label="Buscar solicitudes"
          placeholder="Buscar por título, detalle, autor o referencia..."
          value={filtros.texto}
          onChange={(e) => onCambiar({ ...filtros, texto: e.target.value })}
          className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-indigo-600"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <select aria-label="Filtrar por estado" value={filtros.estado} onChange={(e) => onCambiar({ ...filtros, estado: e.target.value as EstadoSolicitud | '' })} className={selectClase}>
          <option value="">Todos los estados</option>
          {ESTADOS.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
        <select aria-label="Filtrar por prioridad" value={filtros.prioridad} onChange={(e) => onCambiar({ ...filtros, prioridad: e.target.value as Prioridad | '' })} className={selectClase}>
          <option value="">Todas las prioridades</option>
          {PRIORIDADES.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
        <select aria-label="Filtrar por categoría" value={filtros.tipo} onChange={(e) => onCambiar({ ...filtros, tipo: e.target.value })} className={selectClase}>
          <option value="">Todas las categorías</option>
          {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="flex min-h-[28px] items-center justify-between text-xs text-gray-500">
        <span aria-live="polite">{activos ? `Mostrando ${mostrando} de ${total}` : `${total} ${total === 1 ? 'solicitud' : 'solicitudes'}`}</span>
        {activos && (
          <button onClick={() => onCambiar(SIN_FILTROS)} className="flex items-center gap-1 font-semibold text-indigo-600 hover:underline">
            <X size={14} /> Limpiar filtros
          </button>
        )}
      </div>
    </div>
  );
}
