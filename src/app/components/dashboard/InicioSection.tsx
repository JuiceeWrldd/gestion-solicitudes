import { useState } from 'react';
import { CheckCircle2, Clock, FileText } from 'lucide-react';
import { COLOR_GRAFICO_SERIE, colorGraficoEstado, statusConfig } from '../../config/solicitudes';
import { contarPorCategoria, contarPorEstado } from '../../utils/estadisticas';
import { GraficoBarras } from './GraficoBarras';
import type { Solicitud } from '../../types';

interface InicioSectionProps {
  solicitudes: Solicitud[];
  esAdmin: boolean;
}

export function InicioSection({ solicitudes, esAdmin }: InicioSectionProps) {
  const [verTabla, setVerTabla] = useState(false);

  const total = solicitudes.length;
  const pendientes = solicitudes.filter((req) => req.estado === 'En revisión').length;
  const completadas = solicitudes.filter((req) => req.estado === 'Aprobada' || req.estado === 'Rechazada').length;

  const tarjetas = [
    { label: 'Total', value: total, icon: <FileText size={20} />, clase: 'bg-indigo-50 text-[#1E3FAE]' },
    { label: 'En revisión', value: pendientes, icon: <Clock size={20} />, clase: 'bg-amber-100 text-amber-600' },
    {
      label: 'Resueltas',
      value: completadas,
      icon: <CheckCircle2 size={20} />,
      clase: 'bg-emerald-100 text-emerald-600',
    },
  ];

  const porEstado = contarPorEstado(solicitudes).map((c) => ({
    nombre: c.nombre,
    cantidad: c.cantidad,
    color: colorGraficoEstado[c.nombre],
    icono: statusConfig[c.nombre]?.icon,
  }));
  const porCategoria = contarPorCategoria(solicitudes).map((c) => ({ ...c, color: COLOR_GRAFICO_SERIE }));

  const botonVista = (activo: boolean) =>
    `rounded-md px-3 py-1 text-xs font-semibold transition-colors ${activo ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-gray-900 text-2xl font-bold tracking-tight">Inicio</h2>
        <p className="text-gray-500 text-sm mt-1">
          {esAdmin ? 'Cómo van las solicitudes de tu empresa.' : 'Cómo van tus solicitudes.'}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {tarjetas.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.clase}`}>{stat.icon}</div>
              <div>
                <div className="text-gray-500 text-[13px] font-medium">{stat.label}</div>
                <div className="text-gray-900 text-2xl font-bold mt-0.5">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {total === 0 ? (
        <p className="text-gray-400 text-sm">Cuando haya solicitudes, aquí verás cómo se reparten.</p>
      ) : (
        <section aria-label="Cómo se reparten las solicitudes">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900 text-base font-bold">Cómo se reparten</h3>
            <div
              role="group"
              aria-label="Forma de ver los datos"
              className="inline-flex rounded-lg border border-gray-200 bg-white p-0.5"
            >
              <button onClick={() => setVerTabla(false)} aria-pressed={!verTabla} className={botonVista(!verTabla)}>
                Gráfica
              </button>
              <button onClick={() => setVerTabla(true)} aria-pressed={verTabla} className={botonVista(verTabla)}>
                Tabla
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GraficoBarras
              titulo="Por estado"
              descripcion="En qué punto está cada solicitud"
              columna="Estado"
              datos={porEstado}
              verTabla={verTabla}
            />
            <GraficoBarras
              titulo="Por categoría"
              descripcion="De qué trata cada solicitud"
              columna="Categoría"
              datos={porCategoria}
              verTabla={verTabla}
            />
          </div>
        </section>
      )}
    </div>
  );
}
