import { useState } from 'react';
import { Copy, UserPlus } from 'lucide-react';
import { DEPARTAMENTOS } from '../config/departamentos';
import { LIMITES } from '../config/limites';
import { useIntegrantes } from '../hooks/useIntegrantes';
import { limpiarTexto } from '../utils/texto';
import { esCorreoValido } from '../utils/validaciones';
import { AvisoError, ErrorCampo, claseCampo } from './Formulario';

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
  const { integrantes, cargando, error, setError, crear, moverDeOficina, activar } = useIntegrantes(orgId);

  const [form, setForm] = useState(FORM_VACIO);
  const [formErrors, setFormErrors] = useState<Partial<typeof FORM_VACIO>>({});
  const [creando, setCreando] = useState(false);
  const [claveGenerada, setClaveGenerada] = useState<ClaveGenerada | null>(null);
  const [copiada, setCopiada] = useState(false);

  const updateForm = (campo: keyof typeof FORM_VACIO, valor: string) => {
    setForm((p) => ({ ...p, [campo]: valor }));
    setFormErrors((p) => ({ ...p, [campo]: undefined }));
  };

  const validar = (nombre: string, email: string) => {
    const e: Partial<typeof FORM_VACIO> = {};
    if (!nombre) e.nombre = 'Escribe su nombre';
    else if (nombre.length > LIMITES.nombre) e.nombre = `Máximo ${LIMITES.nombre} caracteres`;
    if (!email) e.email = 'Escribe su correo';
    else if (!esCorreoValido(email)) e.email = 'Ese correo no parece válido';
    if (!form.departamento) e.departamento = 'Elige su oficina';
    return e;
  };

  const crearIntegrante = async (e: React.FormEvent) => {
    e.preventDefault();
    const nombre = limpiarTexto(form.nombre);
    const email = limpiarTexto(form.email).toLowerCase();
    const errores = validar(nombre, email);
    if (Object.keys(errores).length > 0) return setFormErrors(errores);

    setCreando(true);
    const clave = await crear({ nombre, email, departamento: form.departamento });
    setCreando(false);
    if (!clave) return;

    setClaveGenerada({ nombre, email, clave });
    setCopiada(false);
    setForm(FORM_VACIO);
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

  return (
    <div className="max-w-4xl">
      <h1 className="text-gray-900 text-2xl font-extrabold mb-1">Integrantes</h1>
      <p className="text-gray-500 text-sm mb-6">Personas de tu empresa. Aquí las agregas y defines en qué oficina están.</p>

      <AvisoError mensaje={error} onCerrar={() => setError(null)} className="mb-5" />

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

      <form onSubmit={crearIntegrante} noValidate className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-8">
        <h2 className="text-gray-900 text-base font-bold mb-4 flex items-center gap-2"><UserPlus size={18} /> Agregar integrante</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="int-nombre" className="block text-gray-700 text-[13px] font-semibold mb-1.5">Nombre y apellido</label>
            <input id="int-nombre" value={form.nombre} maxLength={LIMITES.nombre} onChange={(e) => updateForm('nombre', e.target.value)} className={claseCampo(formErrors.nombre)} />
            <ErrorCampo mensaje={formErrors.nombre} />
          </div>
          <div>
            <label htmlFor="int-correo" className="block text-gray-700 text-[13px] font-semibold mb-1.5">Correo</label>
            <input id="int-correo" type="email" value={form.email} maxLength={LIMITES.email} onChange={(e) => updateForm('email', e.target.value)} className={claseCampo(formErrors.email)} />
            <ErrorCampo mensaje={formErrors.email} />
          </div>
          <div>
            <label htmlFor="int-oficina" className="block text-gray-700 text-[13px] font-semibold mb-1.5">Oficina</label>
            <select id="int-oficina" value={form.departamento} onChange={(e) => updateForm('departamento', e.target.value)} className={claseCampo(formErrors.departamento)}>
              <option value="" disabled>Seleccionar...</option>
              {DEPARTAMENTOS.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <ErrorCampo mensaje={formErrors.departamento} />
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
                  onChange={(e) => moverDeOficina(i.id, e.target.value)}
                  aria-label={`Oficina de ${i.nombre}`}
                  className="md:w-56 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-600"
                >
                  {!DEPARTAMENTOS.includes(i.departamento) && <option value={i.departamento}>{i.departamento}</option>}
                  {DEPARTAMENTOS.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
                {!esYo && (
                  <button
                    onClick={() => activar(i.id, !activo)}
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
