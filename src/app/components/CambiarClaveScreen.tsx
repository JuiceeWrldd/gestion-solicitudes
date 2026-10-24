import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { updatePassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth, db } from '../config/firebase';

interface CambiarClaveScreenProps {
  onListo: () => void;
  onCerrarSesion: () => void;
}

// Se muestra en el primer ingreso, cuando la clave todavía es la temporal que dio el admin
export function CambiarClaveScreen({ onListo, onCerrarSesion }: CambiarClaveScreenProps) {
  const [nueva, setNueva] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return;

    if (nueva.length < 8) return setError('La contraseña debe tener mínimo 8 caracteres.');
    if (nueva !== confirmar) return setError('Las contraseñas no coinciden.');

    setGuardando(true);
    setError(null);
    try {
      await updatePassword(user, nueva);
      await updateDoc(doc(db, 'usuarios', user.uid), { debeCambiarClave: false });
      onListo();
    } catch (err) {
      console.error('Error al cambiar la contraseña:', err);
      if (err instanceof FirebaseError && err.code === 'auth/requires-recent-login') {
        setError('Por seguridad, cierra sesión y vuelve a entrar con tu contraseña temporal.');
      } else {
        setError('No se pudo cambiar la contraseña. Intenta de nuevo.');
      }
    } finally {
      setGuardando(false);
    }
  };

  const inputClase = 'w-full py-3 px-3 border border-gray-200 bg-slate-50 rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white';

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 w-full max-w-[420px] shadow-[0_8px_40px_rgba(30,63,174,0.12)]">
        <h2 className="text-gray-900 text-2xl font-extrabold mb-1">Crea tu contraseña</h2>
        <p className="text-gray-500 text-sm mb-6">Entraste con una contraseña temporal. Elige una nueva para continuar.</p>

        {error && <div role="alert" className="bg-red-50 text-red-600 p-3 rounded-xl text-sm mb-5 border border-red-100 font-semibold">{error}</div>}

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="nueva" className="block text-gray-700 text-[13px] font-semibold mb-1.5">Nueva contraseña</label>
            <input id="nueva" type="password" value={nueva} onChange={(e) => setNueva(e.target.value)} placeholder="Mínimo 8 caracteres" className={inputClase} />
          </div>
          <div>
            <label htmlFor="confirmar" className="block text-gray-700 text-[13px] font-semibold mb-1.5">Repite la contraseña</label>
            <input id="confirmar" type="password" value={confirmar} onChange={(e) => setConfirmar(e.target.value)} className={inputClase} />
          </div>
          <button type="submit" disabled={guardando} className="w-full mt-1 bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300">
            {guardando ? 'Guardando...' : 'Guardar y continuar'}
          </button>
          <button type="button" onClick={onCerrarSesion} className="text-gray-500 text-sm font-medium hover:underline">Cerrar sesión</button>
        </div>
      </form>
    </div>
  );
}
