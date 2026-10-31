import { useState } from 'react';
import { AlertTriangle, CheckCircle2, ChevronDown, FileText } from 'lucide-react';
import { statusConfig } from '../../config/solicitudes';
import { SolicitudDetalle } from './SolicitudDetalle';
import type { EstadoSolicitud, Solicitud } from '../../types';

interface SolicitudesTablaProps {
  solicitudes: Solicitud[];
  cargando: boolean;
  esAdmin: boolean;
  onCambiarEstado: (id: string, estado: EstadoSolicitud) => void;
  onResponder: (id: string, respuesta: string) => Promise<boolean>;
  onEditar: (solicitud: Solicitud) => void;
  onEliminar: (id: string) => Promise<boolean>;
}

export function SolicitudesTabla({ solicitudes, cargando, esAdmin, onCambiarEstado, onResponder, onEditar, onEliminar }: SolicitudesTablaProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const eliminar = async (id: string) => {
    if (!window.confirm('¿Eliminar esta solicitud? No se puede deshacer.')) return;
    if (await onEliminar(id)) setExpandedId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-7">
        <h1 style={{ color: '#111827', fontSize: '26px', fontWeight: 800 }}>{esAdmin ? 'Solicitudes de la empresa' : 'Mis solicitudes'}</h1>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <div className="hidden sm:flex items-center px-5 py-3 bg-gray-50 border-b border-gray-100">
          <span className="text-gray-500 text-xs font-semibold flex-1">Solicitud</span>
          <span className="text-gray-500 text-xs font-semibold w-[120px]">Estado</span>
          {esAdmin && <span className="text-gray-500 text-xs font-semibold w-[90px] text-right">Acciones</span>}
          <span className="w-8"></span>
        </div>

        {cargando ? (
          <div className="p-10 flex justify-center text-gray-400">Cargando...</div>
        ) : solicitudes.length === 0 ? (
          <div className="p-10 text-center text-gray-400">Aún no hay solicitudes.</div>
        ) : (
          solicitudes.map((req) => {
            const isExpanded = expandedId === req.id;

            return (
              <div key={req.id} className="border-b border-gray-50 flex flex-col">
                {/* Fila compacta */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : req.id)}
                  className={`flex flex-wrap sm:flex-nowrap items-center gap-x-3 gap-y-3 sm:gap-4 p-4 sm:p-5 cursor-pointer transition-colors ${isExpanded ? 'bg-indigo-50/20' : 'hover:bg-gray-50'}`}
                >
                  <div className="hidden sm:flex w-10 h-10 rounded-lg items-center justify-center bg-indigo-50 shrink-0">
                    <FileText size={18} className="text-indigo-600" />
                  </div>

                  {/* Título y datos: arriba en celular, junto a la flecha */}
                  <div className="order-1 flex-1 min-w-0">
                    <div className="text-gray-900 text-sm font-semibold leading-snug break-words sm:truncate">{req.title}</div>
                    <div className="text-gray-400 text-xs mt-1">
                      <span className="font-medium">{req.id.slice(0, 8)}</span> · {req.type}
                    </div>
                    {esAdmin && (
                      <span className="block w-fit mt-1.5 text-indigo-500 text-xs font-medium bg-indigo-50 px-1.5 py-0.5 rounded max-w-full truncate">De: {req.autorNombre}</span>
                    )}
                  </div>

                  <div className="order-2 sm:order-4 w-8 flex justify-end text-gray-300 shrink-0">
                    <ChevronDown size={18} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Estado y acciones: en celular van en su propia línea, debajo del título */}
                  <div className="order-3 w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 sm:gap-4">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full shrink-0 sm:w-[120px] justify-center text-xs font-semibold" style={{ background: statusConfig[req.status]?.bg, color: statusConfig[req.status]?.color }}>
                      {statusConfig[req.status]?.icon} {req.status}
                    </div>

                    {esAdmin && (
                      <div className="flex items-center justify-end gap-2 sm:w-[90px] shrink-0">
                        {req.status === 'En revisión' ? (
                          <>
                            <button onClick={(e) => { e.stopPropagation(); onCambiarEstado(req.id, 'Aprobada'); }} className="w-9 h-9 sm:w-8 sm:h-8 rounded border border-green-200 text-green-600 bg-green-50 hover:bg-green-100 flex justify-center items-center"><CheckCircle2 size={16} /></button>
                            <button onClick={(e) => { e.stopPropagation(); onCambiarEstado(req.id, 'Rechazada'); }} className="w-9 h-9 sm:w-8 sm:h-8 rounded border border-red-200 text-red-600 bg-red-50 hover:bg-red-100 flex justify-center items-center"><AlertTriangle size={16} /></button>
                          </>
                        ) : <span className="text-xs font-medium text-gray-300 sm:mr-2">Revisada</span>}
                      </div>
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <SolicitudDetalle solicitud={req} esAdmin={esAdmin} onResponder={onResponder} onEditar={onEditar} onEliminar={eliminar} />
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
