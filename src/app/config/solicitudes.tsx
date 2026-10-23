import { CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import type { Prioridad } from '../types';

export const TIPOS = ['Soporte Técnico', 'Administrativa', 'Recursos Humanos', 'Financiera', 'Logística', 'Otro'];
export const PRIORIDADES: Prioridad[] = ['Alta', 'Media', 'Baja'];

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
