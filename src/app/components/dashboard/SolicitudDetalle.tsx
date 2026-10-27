import { useState } from 'react';
import { MessageSquare, Pencil, Trash2 } from 'lucide-react';
import { LIMITES } from '../../config/limites';
import { limpiarTexto } from '../../utils/texto';
import type { Solicitud } from '../../types';

interface SolicitudDetalleProps {
  solicitud: Solicitud;
  esAdmin: boolean;
  onResponder: (id: string, respuesta: string) => Promise<boolean>;
  onEditar: (solicitud: Solicitud) => void;
  onEliminar: (id: string) => void;
}

const subtitulo = 'text-gray-400 text-[11px] font-bold uppercase tracking-wider';

const colorPrioridad = (p: string) =>
  p === 'Alta'
    ? { background: '#FEE2E2', color: '#DC2626' }
    : p === 'Media'
      ? { background: '#FEF3C7', color: '#D97706' }
      : { background: '#DCFCE7', color: '#16A34A' };

// Parte que se despliega al abrir una solicitud de la tabla
export function SolicitudDetalle({ solicitud: req, esAdmin, onResponder, onEditar, onEliminar }: SolicitudDetalleProps) {
  const [respuesta, setRespuesta] = useState('');

  const enviar = async () => {
    const limpia = limpiarTexto(respuesta, true);
    if (!limpia) return;
    if (await onResponder(req.id, limpia)) setRespuesta('');
  };

  return (
    <div className="px-3 sm:px-5 pb-4 sm:pb-5 bg-indigo-50/10">
      <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="md:col-span-2">
          <h4 className={`${subtitulo} mb-2`}>Desglose</h4>
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{req.descripcion}</p>

          <div className="mt-6 pt-5 border-t border-gray-100">
            <h4 className={`${subtitulo} mb-3`}><MessageSquare size={12} className="inline mr-1 -mt-0.5" /> Interacción Administrativa</h4>
            {req.respuestaAdmin ? (
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-blue-800 text-sm">{req.respuestaAdmin}</div>
            ) : esAdmin ? (
              <div className="flex flex-col gap-3">
                <textarea placeholder="Anotación interna o respuesta..." maxLength={LIMITES.respuesta} value={respuesta} onChange={(e) => setRespuesta(e.target.value)} className="w-full p-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-indigo-500 focus:ring-1" rows={3} />
                <button onClick={enviar} disabled={!respuesta.trim()} className="self-end px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50">Responder</button>
              </div>
            ) : (
              <p className="text-gray-400 text-sm italic">Sin notas registradas.</p>
            )}
          </div>

          {!esAdmin && req.status === 'En revisión' && (
            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap justify-end gap-3">
              <button onClick={() => onEditar(req)} className="px-4 py-2 border border-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-50 flex items-center gap-2"><Pencil size={14} /> Modificar</button>
              <button onClick={() => onEliminar(req.id)} className="px-4 py-2 bg-red-50 text-red-600 border border-red-100 text-sm font-semibold rounded-lg hover:bg-red-100 flex items-center gap-2"><Trash2 size={14} /> Eliminar</button>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h4 className={`${subtitulo} mb-1`}>Autor</h4>
            <div className="text-gray-900 text-sm font-semibold">{req.autorNombre}</div>
            <div className="text-gray-500 text-xs">{req.autorEmail}</div>
          </div>
          <div>
            <h4 className={`${subtitulo} mb-1`}>Timestamp</h4>
            <div className="text-gray-700 text-sm font-medium">{req.date} <span className="text-gray-400 font-normal">a las</span> {req.time}</div>
          </div>
          <div>
            <h4 className={`${subtitulo} mb-1`}>Severidad</h4>
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold" style={colorPrioridad(req.prioridad)}>{req.prioridad}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
