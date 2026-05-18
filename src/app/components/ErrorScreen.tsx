import { RefreshCw, Ticket } from 'lucide-react';
import { LogoBrand } from './LogoMark';

interface ErrorScreenProps {
  onNavigateBack: () => void;
  errorType?: '404' | 'session' | 'general';
}

// Configuración de tipos de error
const errorContent = {
  '404': {
    code: '404',
    title: '¡Vaya! Página no encontrada',
    description: 'La página que está buscando no existe o fue movida a otra dirección. Verifique la URL e intente de nuevo.',
  },
  session: {
    code: '401',
    title: '¡Sesión expirada!',
    description: 'Su sesión ha caducado por inactividad. Por seguridad, debe iniciar sesión nuevamente para continuar.',
  },
  general: {
    code: '500',
    title: '¡Vaya! Algo salió mal',
    description: 'Ocurrió un error interno en el sistema. Si el problema persiste, contacte al administrador.',
  },
};

export function ErrorScreen({ onNavigateBack, errorType = 'general' }: ErrorScreenProps) {
  const content = errorContent[errorType];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-indigo-50 font-sans">
      {/* Background decorations */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none translate-x-[30%] -translate-y-[30%]"
        style={{ background: 'radial-gradient(circle, #1E3FAE, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15 pointer-events-none -translate-x-[30%] translate-y-[30%]"
        style={{ background: 'radial-gradient(circle, #DC3545, transparent 70%)' }}
      />

      <div className="mb-10 relative z-10">
        <LogoBrand iconSize={40} />
      </div>

      {/* Main Error Card */}
      <div className="bg-white rounded-2xl p-8 lg:p-12 w-full max-w-[460px] text-center relative shadow-[0_8px_40px_rgba(30,63,174,0.12)]">
        
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 border border-red-200">
              <Ticket size={48} className="text-red-500 opacity-80" />
            </div>
            <div className="absolute top-0 right-0 w-8 h-8 bg-red-100 rounded-full border border-red-200" />
            <div className="absolute bottom-4 left-0 w-4 h-4 bg-red-200 rounded-full" />
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold tracking-widest border border-red-200">
            ERROR {content.code}
          </span>
        </div>

        <h2 className="text-gray-900 text-2xl font-extrabold mb-3">{content.title}</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">{content.description}</p>

        <button
          onClick={onNavigateBack}
          className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white border-none rounded-lg py-3 px-6 text-[15px] font-bold cursor-pointer hover:bg-indigo-700 transition-colors"
        >
          <RefreshCw size={18} />
          Volver al inicio
        </button>
      </div>
    </div>
  );
}