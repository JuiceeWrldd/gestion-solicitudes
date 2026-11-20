import { CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import type { EstadoSolicitud, Prioridad } from '../types';

export const TIPOS = ['Soporte Técnico', 'Administrativa', 'Recursos Humanos', 'Financiera', 'Logística', 'Otro'];
export const PRIORIDADES: Prioridad[] = ['Alta', 'Media', 'Baja'];
export const ESTADOS: EstadoSolicitud[] = ['En revisión', 'Aprobada', 'Rechazada', 'Pendiente'];

// Color de cada estado en las gráficas (paleta de estados: bueno, advertencia, crítico y neutro).
// Siempre se muestran junto al nombre y al ícono del estado, nunca solos.
export const colorGraficoEstado: Record<EstadoSolicitud, string> = {
  'En revisión': '#fab219',
  'Aprobada': '#0ca30c',
  'Rechazada': '#d03b3b',
  'Pendiente': '#898781',
};

// Azul de las barras que cuentan una sola serie (por ejemplo, solicitudes por categoría)
export const COLOR_GRAFICO_SERIE = '#2a78d6';

// Colores (clases de Tailwind) e ícono de cada estado
export const statusConfig: Record<string, { clase: string; icon: React.ReactNode }> = {
  'En revisión': { clase: 'bg-amber-100 text-amber-700', icon: <Clock size={12} /> },
  'Aprobada': { clase: 'bg-green-100 text-green-700', icon: <CheckCircle2 size={12} /> },
  'Pendiente': { clase: 'bg-gray-100 text-gray-500', icon: <Clock size={12} /> },
  'Rechazada': { clase: 'bg-red-50 text-red-600', icon: <AlertTriangle size={12} /> },
};

// Colores de cada prioridad: los usan la etiqueta del detalle y el botón elegido del formulario
export const clasePrioridad: Record<Prioridad, string> = {
  Alta: 'border-red-300 bg-red-50 text-red-600',
  Media: 'border-amber-200 bg-amber-100 text-amber-600',
  Baja: 'border-emerald-200 bg-green-100 text-green-600',
};
