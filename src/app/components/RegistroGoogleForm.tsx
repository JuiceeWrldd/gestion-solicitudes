import { useState } from 'react';
import { DEPARTAMENTOS } from '../config/departamentos';
import { LIMITES } from '../config/limites';
import { cancelarRegistroGoogle, completarRegistroGoogle, type CuentaGoogle } from '../services/registro';
import { limpiarTexto } from '../utils/texto';
import { AvisoError, ErrorCampo, claseCampo } from './Formulario';

interface RegistroGoogleFormProps {
  cuenta: CuentaGoogle;
  onCancelar: () => void;
}

const FORM_VACIO = { nombre: '', empresa: '', departamento: '' };
type Campos = typeof FORM_VACIO;

// Segundo paso del registro con Google: la cuenta ya está elegida, faltan los datos de la empresa
export function RegistroGoogleForm({ cuenta, onCancelar }: RegistroGoogleFormProps) {
  const [form, setForm] = useState<Campos>({ ...FORM_VACIO, nombre: cuenta.nombre.slice(0, LIMITES.nombre) });
  const [errors, setErrors] = useState<Partial<Campos>>({});
  const [errorGeneral, setErrorGeneral] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  const update = (campo: keyof Campos, valor: string) => {
    setForm((p) => ({ ...p, [campo]: valor }));
    setErrors((p) => ({ ...p, [campo]: undefined }));
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const nombre = limpiarTexto(form.nombre);
    const empresa = limpiarTexto(form.empresa);

    const e: Partial<Campos> = {};
    if (!nombre) e.nombre = 'Escribe tu nombre';
    if (!empresa) e.empresa = 'Escribe el nombre de tu empresa';
    else if (empresa.length < 2) e.empresa = 'Mínimo 2 caracteres';
    if (!form.departamento) e.departamento = 'Elige tu oficina';
    if (Object.keys(e).length > 0) return setErrors(e);

    setCargando(true);
    setErrorGeneral(null);
    try {
      await completarRegistroGoogle({
        nombre,
        empresa,
        departamento: form.departamento,
        credencial: cuenta.credencial,
      });
      // Al iniciar sesión, la app pasa sola al dashboard
    } catch (error) {
      console.error('Registro con Google fallido:', error);
      setErrorGeneral('No se pudo completar el registro. Intenta de nuevo o elige otra cuenta.');
      setCargando(false);
    }
  };

  const cancelar = async () => {
    await cancelarRegistroGoogle(cuenta.esNueva).catch(() => undefined);
    onCancelar();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <p className="text-gray-500 text-sm">Elegiste esta cuenta de Google. Solo faltan los datos de tu empresa.</p>

      <AvisoError mensaje={errorGeneral} />

      <div>
        <label htmlFor="goo-correo" className="block text-gray-700 text-[13px] font-semibold mb-1.5">
          Correo (de Google)
        </label>
        <input
          id="goo-correo"
          value={cuenta.email}
          disabled
          readOnly
          className={`${claseCampo(undefined, 'acceso')} text-gray-500`}
        />
      </div>

      <div>
        <label htmlFor="goo-nombre" className="block text-gray-700 text-[13px] font-semibold mb-1.5">
          Tu nombre y apellido
        </label>
        <input
          id="goo-nombre"
          maxLength={LIMITES.nombre}
          value={form.nombre}
          onChange={(e) => update('nombre', e.target.value)}
          className={claseCampo(errors.nombre, 'acceso')}
        />
        <ErrorCampo mensaje={errors.nombre} />
      </div>

      <div>
        <label htmlFor="goo-empresa" className="block text-gray-700 text-[13px] font-semibold mb-1.5">
          Nombre de la empresa
        </label>
        <input
          id="goo-empresa"
          maxLength={LIMITES.empresa}
          value={form.empresa}
          onChange={(e) => update('empresa', e.target.value)}
          className={claseCampo(errors.empresa, 'acceso')}
        />
        <ErrorCampo mensaje={errors.empresa} />
      </div>

      <div>
        <label htmlFor="goo-oficina" className="block text-gray-700 text-[13px] font-semibold mb-1.5">
          Tu oficina
        </label>
        <select
          id="goo-oficina"
          value={form.departamento}
          onChange={(e) => update('departamento', e.target.value)}
          className={claseCampo(errors.departamento, 'acceso')}
        >
          <option value="" disabled>
            Seleccionar...
          </option>
          {DEPARTAMENTOS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <ErrorCampo mensaje={errors.departamento} />
      </div>

      <button
        type="submit"
        disabled={cargando}
        className="w-full mt-1 bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors"
      >
        {cargando ? 'Creando tu empresa...' : 'Crear empresa'}
      </button>
      <button
        type="button"
        onClick={cancelar}
        disabled={cargando}
        className="text-gray-500 text-sm font-medium hover:underline"
      >
        Usar otra cuenta
      </button>
    </form>
  );
}
