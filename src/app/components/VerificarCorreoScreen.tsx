import { useState } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth } from '../config/firebase';

interface VerificarCorreoScreenProps {
  email: string;
  onVerificado: () => void;
  onCerrarSesion: () => void;
}

// Se muestra a los administradores mientras su correo no esté verificado
export function VerificarCorreoScreen({ email, onVerificado, onCerrarSesion }: VerificarCorreoScreenProps) {
  const [mensaje, setMensaje] = useState<{ tipo: 'ok' | 'error'; texto: string } | null>(null);
  const [ocupado, setOcupado] = useState(false);

  const reenviar = async () => {
    const user = auth.currentUser;
    if (!user) return;

    setOcupado(true);
    setMensaje(null);
    try {
      auth.languageCode = 'es';
      await sendEmailVerification(user);
      setMensaje({ tipo: 'ok', texto: 'Te enviamos el correo de nuevo. Revisa también la carpeta de spam.' });
    } catch (error) {
      console.error('Error al reenviar la verificación:', error);
      setMensaje({
        tipo: 'error',
        texto:
          error instanceof FirebaseError && error.code === 'auth/too-many-requests'
            ? 'Pediste demasiados correos. Espera unos minutos e intenta de nuevo.'
            : 'No se pudo enviar el correo. Intenta de nuevo.',
      });
    } finally {
      setOcupado(false);
    }
  };

  const yaVerifique = async () => {
    const user = auth.currentUser;
    if (!user) return;

    setOcupado(true);
    setMensaje(null);
    try {
      await user.reload();
      if (!user.emailVerified) {
        setMensaje({ tipo: 'error', texto: 'Todavía no aparece verificado. Abre el enlace del correo y vuelve a intentar.' });
        return;
      }
      await user.getIdToken(true); // renueva la sesión para que el servidor vea el correo verificado
      onVerificado();
    } catch (error) {
      console.error('Error al comprobar la verificación:', error);
      setMensaje({ tipo: 'error', texto: 'No se pudo comprobar. Intenta de nuevo.' });
    } finally {
      setOcupado(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans">
      <div className="bg-white rounded-2xl p-8 w-full max-w-[440px] text-center shadow-[0_8px_40px_rgba(30,63,174,0.12)]">
        <h2 className="text-gray-900 text-xl font-extrabold mb-2">Verifica tu correo</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Para administrar tu empresa necesitamos confirmar que <strong className="text-gray-900">{email}</strong> es tuyo.
          Te enviamos un enlace: ábrelo y luego vuelve aquí.
        </p>

        {mensaje && (
          <div
            role={mensaje.tipo === 'error' ? 'alert' : 'status'}
            className={`p-3 rounded-xl text-sm mb-5 border font-medium ${mensaje.tipo === 'error' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-700 border-green-100'}`}
          >
            {mensaje.texto}
          </div>
        )}

        <div className="flex flex-col gap-3">
          <button onClick={yaVerifique} disabled={ocupado} className="w-full bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300">
            Ya lo verifiqué
          </button>
          <button onClick={reenviar} disabled={ocupado} className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg text-sm font-semibold hover:bg-gray-50 disabled:opacity-60">
            Reenviar correo
          </button>
          <button onClick={onCerrarSesion} className="text-gray-500 text-sm font-medium hover:underline">Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
}
