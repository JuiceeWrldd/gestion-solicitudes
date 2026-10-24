import { useEffect, useState } from 'react';
import { collection, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { Copy, UserPlus, X } from 'lucide-react';
import { db, getAuthSecundario } from '../config/firebase';
import { DEPARTAMENTOS } from '../config/departamentos';
import { generarClave } from '../utils/clave';
import type { Integrante, PerfilUsuario } from '../types';

interface IntegrantesScreenProps {
  orgId: string;
  adminUid: string;
}

interface ClaveGenerada {
  nombre: string;
  email: string;
  clave: string;
}

const FORM_VACIO = { nombre: '', email: '', departamento: '' };

export function IntegrantesScreen({ orgId, adminUid }: IntegrantesScreenProps) {
  const [integrantes, setIntegrantes] = useState<Integrante[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState(FORM_VACIO);
  const [formErrors, setFormErrors] = useState<Partial<typeof FORM_VACIO>>({});
  const [creando, setCreando] = useState(false);
  const [claveGenerada, setClaveGenerada] = useState<ClaveGenerada | null>(null);
  const [copiada, setCopiada] = useState(false);

  const cargarIntegrantes = async () => {
    setCargando(true);
    try {
      const snap = await getDocs(query(collection(db, 'usuarios'), where('orgId', '==', orgId)));
      const lista = snap.docs.map((d) => ({ id: d.id, ...(d.data() as PerfilUsuario) }));
      setIntegrantes(lista.sort((a, b) => a.nombre.localeCompare(b.nombre)));
    } catch (err) {
      console.error('Error al cargar integrantes:', err);
      setError('No se pudieron cargar los integrantes.');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarIntegrantes();
  }, [orgId]);

  const updateForm = (campo: keyof typeof FORM_VACIO, valor: string) => {
    setForm((p) => ({ ...p, [campo]: valor }));
    setFormErrors((p) => ({ ...p, [campo]: undefined }));
  };

  const validar = () => {
    const e: Partial<typeof FORM_VACIO> = {};
    if (!form.nombre.trim()) e.nombre = 'Requerido';
    if (!form.email.trim()) e.email = 'Requerido';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Formato inválido';
    if (!form.departamento) e.departamento = 'Seleccione la oficina';
    return e;
  };

  const crearIntegrante = async (e: React.FormEvent) => {
    e.preventDefault();
    const errores = validar();
    if (Object.keys(errores).length > 0) return setFormErrors(errores);

    setCreando(true);
    setError(null);
    const clave = generarClave();
    const nombre = form.nombre.trim();
    const email = form.email.trim();
    const authSecundario = getAuthSecundario();
    let cuentaCreada = false;

    try {
      const credencial = await createUserWithEmailAndPassword(authSecundario, email, clave);
      cuentaCreada = true;
      await updateProfile(credencial.user, { displayName: nombre });

      await setDoc(doc(db, 'usuarios', credencial.user.uid), {
        nombre,
        email,
        departamento: form.departamento,
        rol: 'usuario',
        orgId,
        activo: true,
        debeCambiarClave: true,
        fechaRegistro: new Date(),
      } satisfies PerfilUsuario);

      setClaveGenerada({ nombre, email, clave });
      setCopiada(false);
      setForm(FORM_VACIO);
      cargarIntegrantes();
    } catch (err) {
      console.error('Error al crear integrante:', err);
      if (err instanceof FirebaseError && err.code === 'auth/email-already-in-use') {
        setError('Ya existe una cuenta con ese correo.');
      } else if (cuentaCreada) {
        setError('La cuenta se creó, pero no se pudo guardar su perfil. Revisa los permisos e inténtalo de nuevo.');
      } else {
        setError('No se pudo crear el integrante. Revisa los datos e intenta de nuevo.');
      }
    } finally {
      await signOut(authSecundario);
      setCreando(false);
    }
  };

  const cambiarDepartamento = async (id: string, departamento: string) => {
    try {
      await updateDoc(doc(db, 'usuarios', id), { departamento });
      setIntegrantes((prev) => prev.map((i) => (i.id === id ? { ...i, departamento } : i)));
    } catch (err) {
      console.error('Error al cambiar la oficina:', err);
      setError('No se pudo cambiar la oficina.');
    }
  };

  const cambiarActivo = async (id: string, activo: boolean) => {
    try {
      await updateDoc(doc(db, 'usuarios', id), { activo });
      setIntegrantes((prev) => prev.map((i) => (i.id === id ? { ...i, activo } : i)));
    } catch (err) {
      console.error('Error al cambiar el estado:', err);
      setError('No se pudo cambiar el estado del integrante.');
    }
  };

  const copiarClave = async () => {
    if (!claveGenerada) return;
    try {
      await navigator.clipboard.writeText(claveGenerada.clave);
      setCopiada(true);
    } catch {
      // si el navegador no deja copiar, la clave sigue visible para copiarla a mano
    }
  };

  const inputClase = (hayError?: string) =>
    `w-full py-2.5 px-3 border rounded-lg text-sm outline-none focus:border-indigo-600 ${hayError ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'}`;

  return (
    <div className="max-w-4xl">
      <h1 className="text-gray-900 text-2xl font-extrabold mb-1">Integrantes</h1>
      <p className="text-gray-500 text-sm mb-6">Personas de tu empresa. Aquí las agregas y defines en qué oficina están.</p>

      {error && (
        <div role="alert" className="mb-5 flex items-start justify-between gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          <span>{error}</span>
          <button onClick={() => setError(null)} aria-label="Cerrar aviso" className="shrink-0 text-red-400 hover:text-red-600">
            <X size={18} />
          </button>
        </div>
      )}

      {claveGenerada && (
        <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="text-green-800 text-sm font-semibold mb-1">Integrante creado: {claveGenerada.nombre}</p>
          <p className="text-green-700 text-sm mb-3">
            Entrégale esta contraseña temporal a <strong>{claveGenerada.email}</strong>. No se vuelve a mostrar, y al entrar tendrá que cambiarla.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <code className="rounded-lg bg-white border border-green-200 px-3 py-2 text-base font-bold tracking-wider text-gray-900">{claveGenerada.clave}</code>
            <button onClick={copiarClave} className="flex items-center gap-2 rounded-lg border border-green-300 bg-white px-3 py-2 text-sm font-semibold text-green-700 hover:bg-green-100">
              <Copy size={14} /> {copiada ? 'Copiada' : 'Copiar'}
            </button>
            <button onClick={() => setClaveGenerada(null)} className="text-sm font-medium text-green-700 hover:underline">Cerrar</button>
          </div>
        </div>
      )}

      <form onSubmit={crearIntegrante} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-8">
        <h2 className="text-gray-900 text-base font-bold mb-4 flex items-center gap-2"><UserPlus size={18} /> Agregar integrante</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 text-[13px] font-semibold mb-1.5">Nombre y apellido</label>
            <input value={form.nombre} onChange={(e) => updateForm('nombre', e.target.value)} className={inputClase(formErrors.nombre)} />
            {formErrors.nombre && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.nombre}</p>}
          </div>
          <div>
            <label className="block text-gray-700 text-[13px] font-semibold mb-1.5">Correo</label>
            <input type="email" value={form.email} onChange={(e) => updateForm('email', e.target.value)} className={inputClase(formErrors.email)} />
            {formErrors.email && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.email}</p>}
          </div>
          <div>
            <label className="block text-gray-700 text-[13px] font-semibold mb-1.5">Oficina</label>
            <select value={form.departamento} onChange={(e) => updateForm('departamento', e.target.value)} className={inputClase(formErrors.departamento)}>
              <option value="" disabled>Seleccionar...</option>
              {DEPARTAMENTOS.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            {formErrors.departamento && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.departamento}</p>}
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button type="submit" disabled={creando} className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-indigo-700 disabled:bg-indigo-300">
            {creando ? 'Creando...' : 'Crear integrante'}
          </button>
        </div>
      </form>

      <h2 className="text-gray-900 text-base font-bold mb-3">Equipo ({integrantes.length})</h2>
      {cargando ? (
        <p className="text-gray-400 text-sm">Cargando...</p>
      ) : (
        <div className="flex flex-col gap-3">
          {integrantes.map((i) => {
            const esYo = i.id === adminUid;
            const activo = i.activo !== false;
            return (
              <div key={i.id} className={`bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-5 ${activo ? '' : 'opacity-60'}`}>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-900 text-sm font-semibold truncate">
                    {i.nombre}
                    {i.rol === 'admin' && <span className="ml-2 rounded bg-indigo-50 px-1.5 py-0.5 text-[11px] font-bold text-indigo-600">Admin</span>}
                    {!activo && <span className="ml-2 rounded bg-gray-100 px-1.5 py-0.5 text-[11px] font-bold text-gray-500">Desactivado</span>}
                  </div>
                  <div className="text-gray-500 text-xs truncate">{i.email}</div>
                </div>
                <select
                  value={i.departamento}
                  onChange={(e) => cambiarDepartamento(i.id, e.target.value)}
                  aria-label={`Oficina de ${i.nombre}`}
                  className="md:w-56 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-600"
                >
                  {!DEPARTAMENTOS.includes(i.departamento) && <option value={i.departamento}>{i.departamento}</option>}
                  {DEPARTAMENTOS.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
                {!esYo && (
                  <button
                    onClick={() => cambiarActivo(i.id, !activo)}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold ${activo ? 'border-red-100 bg-red-50 text-red-600 hover:bg-red-100' : 'border-green-200 bg-green-50 text-green-700 hover:bg-green-100'}`}
                  >
                    {activo ? 'Desactivar' : 'Activar'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
