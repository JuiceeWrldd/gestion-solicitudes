interface AvisoCuentaScreenProps {
  titulo: string;
  mensaje: string;
  onCerrarSesion: () => void;
}

// Pantalla para cuentas que no pueden usar el sistema (sin empresa o desactivadas)
export function AvisoCuentaScreen({ titulo, mensaje, onCerrarSesion }: AvisoCuentaScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans">
      <div className="bg-white rounded-2xl p-8 w-full max-w-[420px] text-center shadow-[0_8px_40px_rgba(30,63,174,0.12)]">
        <h2 className="text-gray-900 text-xl font-extrabold mb-2">{titulo}</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{mensaje}</p>
        <button onClick={onCerrarSesion} className="w-full bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
