import { CheckCircle2, Clock, FileText } from 'lucide-react';
import type { Solicitud } from '../../types';

interface InicioSectionProps {
  solicitudes: Solicitud[];
  esAdmin: boolean;
}

export function InicioSection({ solicitudes, esAdmin }: InicioSectionProps) {
  const total = solicitudes.length;
  const pendientes = solicitudes.filter((req) => req.status === 'En revisión').length;
  const completadas = solicitudes.filter((req) => req.status === 'Aprobada' || req.status === 'Rechazada').length;

  const tarjetas = [
    { label: 'Total Registros', value: total, icon: <FileText size={20} />, color: '#1E3FAE', bg: '#EEF2FF' },
    { label: 'En Proceso', value: pendientes, icon: <Clock size={20} />, color: '#D97706', bg: '#FEF3C7' },
    { label: 'Finalizadas', value: completadas, icon: <CheckCircle2 size={20} />, color: '#059669', bg: '#D1FAE5' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 style={{ color: '#111827', fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em' }}>Dashboard</h2>
        <p style={{ color: '#6B7280', fontSize: '14px', marginTop: '4px' }}>
          {esAdmin ? 'Resumen operativo general.' : 'Resumen de actividad.'}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {tarjetas.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border" style={{ borderColor: '#F3F4F6' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: stat.bg, color: stat.color }}>{stat.icon}</div>
              <div>
                <div style={{ color: '#6B7280', fontSize: '13px', fontWeight: 500 }}>{stat.label}</div>
                <div style={{ color: '#111827', fontSize: '24px', fontWeight: 700, marginTop: '2px' }}>{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
