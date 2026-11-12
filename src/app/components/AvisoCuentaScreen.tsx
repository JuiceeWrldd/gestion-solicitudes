interface AvisoCuentaScreenProps {
  titulo: string;
  mensaje: string;
  onCerrarSesion: () => void;
  onReintentar?: () => void; // si llega, se ofrece volver a intentar antes que cerrar sesión
}

// Pantalla para cuando no se puede entrar al panel (cuenta sin empresa, desactivada o que no cargó)
export function AvisoCuentaScreen({ titulo, mensaje, onCerrarSesion, onReintentar }: AvisoCuentaScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans">
      <div className="bg-white rounded-2xl p-8 w-full max-w-[420px] text-center shadow-[0_8px_40px_rgba(30,63,174,0.12)]">
        <h2 className="text-gray-900 text-xl font-extrabold mb-2">{titulo}</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{mensaje}</p>
        {onReintentar ? (
          <div className="flex flex-col gap-3">
            <button onClick={onReintentar} className="w-full bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700">
              Reintentar
            </button>
            <button onClick={onCerrarSesion} className="text-gray-500 text-sm font-medium hover:underline">Cerrar sesión</button>
          </div>
        ) : (
          <button onClick={onCerrarSesion} className="w-full bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700">
            Cerrar sesión
          </button>
        )}
      </div>
    </div>
  );
}
