import { useState } from 'react';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth } from '../../config/firebase';

const FORM_VACIO = { actual: '', nueva: '', confirmar: '' };
type Campos = typeof FORM_VACIO;

const inputClase = (hayError?: string) =>
  `w-full py-2.5 px-3 border ${hayError ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'} rounded-lg text-sm outline-none focus:border-indigo-600`;

// Firebase devuelve uno u otro código según la versión cuando la contraseña actual no coincide
const CLAVE_INCORRECTA = ['auth/wrong-password', 'auth/invalid-credential'];

// Cambio de contraseña desde el perfil. Pide la actual para confirmar que es la misma persona.
export function CambiarClavePerfil() {
  const [form, setForm] = useState<Campos>(FORM_VACIO);
  const [errors, setErrors] = useState<Partial<Campos>>({});
  const [mensaje, setMensaje] = useState<{ tipo: 'ok' | 'error'; texto: string } | null>(null);
  const [guardando, setGuardando] = useState(false);

  const user = auth.currentUser;
  const usaClave = user?.providerData.some((p) => p.providerId === 'password') ?? false;

  if (!usaClave) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-6">
        <h2 className="text-gray-900 text-base font-bold mb-1">Contraseña</h2>
        <p className="text-gray-500 text-sm">Entras con tu cuenta de Google, así que tu contraseña se cambia desde Google.</p>
      </div>
    );
  }

  const update = (campo: keyof Campos, valor: string) => {
    setForm((p) => ({ ...p, [campo]: valor }));
    setErrors((p) => ({ ...p, [campo]: undefined }));
    setMensaje(null);
  };

  const validar = () => {
    const e: Partial<Campos> = {};
    if (!form.actual) e.actual = 'Escribe tu contraseña actual';
    if (!form.nueva) e.nueva = 'Escribe la nueva contraseña';
    else if (form.nueva.length < 8) e.nueva = 'Mínimo 8 caracteres';
    else if (form.nueva === form.actual) e.nueva = 'Tiene que ser distinta de la actual';
    if (!form.confirmar) e.confirmar = 'Repite la nueva contraseña';
    else if (form.nueva !== form.confirmar) e.confirmar = 'Las contraseñas no coinciden';
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!user?.email) return;

    const errores = validar();
    if (Object.keys(errores).length > 0) return setErrors(errores);

    setGuardando(true);
    setMensaje(null);
    try {
      await reauthenticateWithCredential(user, EmailAuthProvider.credential(user.email, form.actual));
      await updatePassword(user, form.nueva);
      setForm(FORM_VACIO);
      setMensaje({ tipo: 'ok', texto: 'Tu contraseña se cambió.' });
    } catch (error) {
      if (error instanceof FirebaseError && CLAVE_INCORRECTA.includes(error.code)) {
        setErrors({ actual: 'La contraseña actual no es correcta' });
      } else if (error instanceof FirebaseError && error.code === 'auth/too-many-requests') {
        setMensaje({ tipo: 'error', texto: 'Demasiados intentos. Espera un momento y vuelve a probar.' });
      } else {
        console.error('Error al cambiar la contraseña:', error);
        setMensaje({ tipo: 'error', texto: 'No se pudo cambiar la contraseña. Intenta de nuevo.' });
      }
    } finally {
      setGuardando(false);
    }
  };

  const campo = (id: string, etiqueta: string, nombre: keyof Campos, autoComplete: string) => (
    <div>
      <label htmlFor={id} className="block text-gray-700 text-[13px] font-semibold mb-1.5">{etiqueta}</label>
      <input id={id} type="password" autoComplete={autoComplete} value={form[nombre]} onChange={(e) => update(nombre, e.target.value)} className={inputClase(errors[nombre])} />
      {errors[nombre] && <p className="text-red-500 text-xs mt-1 font-medium">{errors[nombre]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-6">
      <h2 className="text-gray-900 text-base font-bold mb-4">Cambiar contraseña</h2>

      {mensaje && (
        <div
          role={mensaje.tipo === 'error' ? 'alert' : 'status'}
          className={`p-3 rounded-xl text-sm mb-4 border font-medium ${mensaje.tipo === 'error' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-700 border-green-100'}`}
        >
          {mensaje.texto}
        </div>
      )}

      <div className="flex flex-col gap-4 max-w-sm">
        {campo('perfil-clave-actual', 'Contraseña actual', 'actual', 'current-password')}
        {campo('perfil-clave-nueva', 'Nueva contraseña', 'nueva', 'new-password')}
        {campo('perfil-clave-confirmar', 'Repite la nueva contraseña', 'confirmar', 'new-password')}

        <button type="submit" disabled={guardando} className="self-start rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-indigo-700 disabled:bg-indigo-300">
          {guardando ? 'Guardando...' : 'Cambiar contraseña'}
        </button>
      </div>
    </form>
  );
}
