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

// Colores e ícono de cada estado
export const statusConfig: Record<string, { color: string; bg: string; icon: React.ReactNode }> = {
  'En revisión': { color: '#B45309', bg: '#FEF3C7', icon: <Clock size={12} /> },
  'Aprobada': { color: '#15803D', bg: '#DCFCE7', icon: <CheckCircle2 size={12} /> },
  'Pendiente': { color: '#6B7280', bg: '#F3F4F6', icon: <Clock size={12} /> },
  'Rechazada': { color: '#DC3545', bg: '#FEF2F2', icon: <AlertTriangle size={12} /> },
};

// Colores de los botones de prioridad (el activo se resalta)
export const getPriorityColors = (p: string, isActive: boolean) => {
  if (!isActive) return { border: '#E5E7EB', bg: '#F9FAFB', text: '#6B7280' };
  if (p === 'Alta') return { border: '#FCA5A5', bg: '#FEF2F2', text: '#DC2626' };
  if (p === 'Media') return { border: '#FDE68A', bg: '#FEF3C7', text: '#D97706' };
  if (p === 'Baja') return { border: '#A7F3D0', bg: '#DCFCE7', text: '#16A34A' };
  return { border: '#E5E7EB', bg: '#F9FAFB', text: '#374151' };
};
