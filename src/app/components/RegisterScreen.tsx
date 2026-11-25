import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { FirebaseError } from 'firebase/app';
import { LogoBrand } from './LogoMark';
import { GoogleIcon } from './GoogleIcon';
import { RegistroGoogleForm } from './RegistroGoogleForm';
import { DEPARTAMENTOS } from '../config/departamentos';
import { LIMITES } from '../config/limites';
import { elegirCuentaGoogle, registrarAdminConEmpresa, type CuentaGoogle } from '../services/registro';
import { limpiarTexto } from '../utils/texto';
import { esCorreoValido } from '../utils/validaciones';
import { AvisoError, ErrorCampo, claseCampo } from './Formulario';

interface RegisterScreenProps {
  onNavigateToLogin: () => void;
}

const FORM_VACIO = { nombre: '', empresa: '', email: '', departamento: '', clave: '', confirmar: '' };
type Campos = typeof FORM_VACIO;

// Cuando la persona cierra la ventana de Google no hace falta mostrar un error
const VENTANA_CERRADA = ['auth/popup-closed-by-user', 'auth/cancelled-popup-request'];

// Registro para quien va a administrar una empresa nueva. Los integrantes los agrega después su admin.
export function RegisterScreen({ onNavigateToLogin }: RegisterScreenProps) {
  const [form, setForm] = useState<Campos>(FORM_VACIO);
  const [errors, setErrors] = useState<Partial<Campos>>({});
  const [errorGeneral, setErrorGeneral] = useState<string | null>(null);
  const [mostrarClave, setMostrarClave] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [cargandoGoogle, setCargandoGoogle] = useState(false);
  const [cuentaGoogle, setCuentaGoogle] = useState<CuentaGoogle | null>(null);

  const update = (campo: keyof Campos, valor: string) => {
    setForm((p) => ({ ...p, [campo]: valor }));
    setErrors((p) => ({ ...p, [campo]: undefined }));
  };

  const validar = (nombre: string, empresa: string, email: string) => {
    const e: Partial<Campos> = {};
    if (!nombre) e.nombre = 'Escribe tu nombre';
    if (!empresa) e.empresa = 'Escribe el nombre de tu empresa';
    else if (empresa.length < 2) e.empresa = 'Mínimo 2 caracteres';
    if (!email) e.email = 'Escribe tu correo';
    else if (!esCorreoValido(email)) e.email = 'Ese correo no parece válido';
    if (!form.departamento) e.departamento = 'Elige tu oficina';
    if (!form.clave) e.clave = 'Escribe una contraseña';
    else if (form.clave.length < 8) e.clave = 'Mínimo 8 caracteres';
    if (!form.confirmar) e.confirmar = 'Vuelve a escribir la contraseña';
    else if (form.clave !== form.confirmar) e.confirmar = 'Las contraseñas no coinciden';
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const nombre = limpiarTexto(form.nombre);
    const empresa = limpiarTexto(form.empresa);
    const email = limpiarTexto(form.email).toLowerCase();

    const errores = validar(nombre, empresa, email);
    if (Object.keys(errores).length > 0) return setErrors(errores);

    setCargando(true);
    setErrorGeneral(null);
    try {
      await registrarAdminConEmpresa({ nombre, empresa, email, clave: form.clave, departamento: form.departamento });
      // Al iniciar sesión, la app pasa sola al dashboard
    } catch (error) {
      console.error('Registro fallido:', error);
      if (error instanceof FirebaseError && error.code === 'auth/email-already-in-use') {
        setErrorGeneral('Ya existe una cuenta con ese correo.');
      } else {
        setErrorGeneral('No se pudo completar el registro. Revisa los datos e intenta de nuevo.');
      }
      setCargando(false);
    }
  };

  const handleGoogle = async () => {
    setCargandoGoogle(true);
    setErrorGeneral(null);
    try {
      const resultado = await elegirCuentaGoogle();
      if (resultado.yaRegistrado) {
        setErrorGeneral('Esa cuenta de Google ya tiene una empresa. Inicia sesión desde la pantalla de acceso.');
      } else {
        setCuentaGoogle(resultado);
      }
    } catch (error) {
      if (!(error instanceof FirebaseError && VENTANA_CERRADA.includes(error.code))) {
        console.error('Google falló:', error);
        setErrorGeneral('No se pudo conectar con Google. Intenta de nuevo.');
      }
    } finally {
      setCargandoGoogle(false);
    }
  };

  const campoTexto = (
    id: string,
    etiqueta: string,
    campo: 'nombre' | 'empresa' | 'email',
    max: number,
    tipo = 'text',
  ) => (
    <div>
      <label htmlFor={id} className="block text-gray-700 text-[13px] font-semibold mb-1.5">
        {etiqueta}
      </label>
      <input
        id={id}
        type={tipo}
        maxLength={max}
        value={form[campo]}
        onChange={(e) => update(campo, e.target.value)}
        className={claseCampo(errors[campo], 'acceso')}
      />
      <ErrorCampo mensaje={errors[campo]} />
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans">
      <div className="w-full max-w-[480px]">
        <div className="flex justify-center mb-8">
          <LogoBrand iconSize={44} layout="vertical" />
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(30,63,174,0.12)]">
          <h2 className="text-gray-900 text-2xl font-extrabold mb-1">Registra tu empresa</h2>
          <p className="text-gray-500 text-sm mb-6">Serás el administrador. Después podrás agregar a tu equipo.</p>

          <AvisoError mensaje={errorGeneral} className="mb-5" />

          {cuentaGoogle ? (
            <RegistroGoogleForm cuenta={cuentaGoogle} onCancelar={() => setCuentaGoogle(null)} />
          ) : (
            <>
              <button
                type="button"
                onClick={handleGoogle}
                disabled={cargandoGoogle || cargando}
                className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 border border-gray-200 py-3 rounded-lg text-[14px] font-semibold hover:bg-gray-50 transition-colors shadow-sm disabled:opacity-60"
              >
                <GoogleIcon />
                {cargandoGoogle ? 'Conectando con Google...' : 'Registrarme con Google'}
              </button>

              <div className="relative flex items-center py-5">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-medium uppercase tracking-wider">
                  o con tu correo
                </span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                {campoTexto('reg-nombre', 'Tu nombre y apellido', 'nombre', LIMITES.nombre)}
                {campoTexto('reg-empresa', 'Nombre de la empresa', 'empresa', LIMITES.empresa)}
                {campoTexto('reg-email', 'Correo', 'email', LIMITES.email, 'email')}

                <div>
                  <label htmlFor="reg-oficina" className="block text-gray-700 text-[13px] font-semibold mb-1.5">
                    Tu oficina
                  </label>
                  <select
                    id="reg-oficina"
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

                <div>
                  <label htmlFor="reg-clave" className="block text-gray-700 text-[13px] font-semibold mb-1.5">
                    Contraseña
                  </label>
                  <div className="relative">
                    <input
                      id="reg-clave"
                      type={mostrarClave ? 'text' : 'password'}
                      value={form.clave}
                      onChange={(e) => update('clave', e.target.value)}
                      placeholder="Mínimo 8 caracteres"
                      className={`${claseCampo(errors.clave, 'acceso')} pr-11`}
                    />
                    <button
                      type="button"
                      onClick={() => setMostrarClave(!mostrarClave)}
                      aria-label={mostrarClave ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {mostrarClave ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <ErrorCampo mensaje={errors.clave} />
                </div>

                <div>
                  <label htmlFor="reg-confirmar" className="block text-gray-700 text-[13px] font-semibold mb-1.5">
                    Repite la contraseña
                  </label>
                  <input
                    id="reg-confirmar"
                    type={mostrarClave ? 'text' : 'password'}
                    value={form.confirmar}
                    onChange={(e) => update('confirmar', e.target.value)}
                    className={claseCampo(errors.confirmar, 'acceso')}
                  />
                  <ErrorCampo mensaje={errors.confirmar} />
                </div>

                <button
                  type="submit"
                  disabled={cargando}
                  className="w-full mt-2 bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors"
                >
                  {cargando ? 'Creando tu empresa...' : 'Crear empresa'}
                </button>
              </form>
            </>
          )}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={onNavigateToLogin}
            className="flex items-center gap-1.5 text-indigo-600 text-sm font-semibold hover:underline"
          >
            <ArrowLeft size={16} /> Volver al inicio de sesión
          </button>
        </div>
      </div>
    </div>
  );
}
