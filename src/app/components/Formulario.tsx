import { X } from 'lucide-react';

// Piezas que comparten todos los formularios de la app

// Clase de un campo de texto o desplegable. "acceso" es el estilo de las pantallas de entrada y registro
// (fondo gris que se aclara al escribir); "panel" el de los formularios dentro del panel.
export const claseCampo = (hayError?: string, estilo: 'acceso' | 'panel' = 'panel') => {
  const base = 'w-full px-3 border rounded-lg text-sm outline-none focus:border-indigo-600';
  const normal =
    estilo === 'acceso' ? 'border-gray-200 bg-slate-50 focus:bg-white transition-colors' : 'border-gray-200 bg-white';
  return `${base} ${estilo === 'acceso' ? 'py-3' : 'py-2.5'} ${hayError ? 'border-red-400 bg-red-50' : normal}`;
};

// Mensaje en rojo debajo de un campo; no muestra nada si no hay error
export function ErrorCampo({ mensaje }: { mensaje?: string }) {
  if (!mensaje) return null;
  return <p className="text-red-500 text-xs mt-1 font-medium">{mensaje}</p>;
}

interface AvisoErrorProps {
  mensaje: string | null;
  onCerrar?: () => void; // si llega, el aviso trae una X para cerrarlo
  className?: string; // para el espacio alrededor, que cambia según la pantalla
}

// Aviso rojo de error general (no de un campo en particular)
export function AvisoError({ mensaje, onCerrar, className = '' }: AvisoErrorProps) {
  if (!mensaje) return null;
  return (
    <div
      role="alert"
      className={`flex items-start justify-between gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 ${className}`}
    >
      <span>{mensaje}</span>
      {onCerrar && (
        <button
          type="button"
          onClick={onCerrar}
          aria-label="Cerrar aviso"
          className="shrink-0 text-red-400 hover:text-red-600"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
