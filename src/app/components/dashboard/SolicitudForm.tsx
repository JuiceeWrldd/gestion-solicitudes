import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { TIPOS, PRIORIDADES, clasePrioridad } from '../../config/solicitudes';
import { LIMITES, MIN_DESCRIPCION } from '../../config/limites';
import { limpiarTexto } from '../../utils/texto';
import type { DatosSolicitud } from '../../services/solicitudes';
import type { Solicitud } from '../../types';
import { claseCampo, ErrorCampo } from '../Formulario';

const FORM_VACIO: DatosSolicitud = { titulo: '', tipo: 'Soporte Técnico', descripcion: '', prioridad: 'Media' };

interface SolicitudFormProps {
  inicial: Solicitud | null; // la solicitud que se está editando, o null si es nueva
  onGuardar: (datos: DatosSolicitud) => Promise<boolean>;
  onCancelar: () => void;
  onTerminado: () => void;
}

const etiqueta = 'block text-gray-700 text-[13px] font-semibold mb-1.5';

export function SolicitudForm({ inicial, onGuardar, onCancelar, onTerminado }: SolicitudFormProps) {
  const [esEdicion] = useState(inicial !== null);
  const [form, setForm] = useState<DatosSolicitud>(
    inicial ? { titulo: inicial.titulo, tipo: inicial.tipo, descripcion: inicial.descripcion, prioridad: inicial.prioridad } : FORM_VACIO
  );
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof DatosSolicitud, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Tras guardar se muestra el mensaje de éxito 2 segundos y se pasa a la lista
  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(onTerminado, 2000);
    return () => clearTimeout(timer);
  }, [submitted, onTerminado]);

  const updateForm = <K extends keyof DatosSolicitud>(field: K, value: DatosSolicitud[K]) => {
    setForm((p) => ({ ...p, [field]: value }));
    setFormErrors((p) => ({ ...p, [field]: undefined }));
  };

  // Se valida (y se guarda) el texto ya limpio, sin etiquetas HTML ni caracteres raros
  const validar = (titulo: string, descripcion: string) => {
    const e: Partial<Record<keyof DatosSolicitud, string>> = {};
    if (!titulo) e.titulo = 'Ponle un título';
    else if (titulo.length > LIMITES.titulo) e.titulo = `Máximo ${LIMITES.titulo} caracteres`;
    if (!form.tipo) e.tipo = 'Elige una categoría';
    if (!descripcion) e.descripcion = 'Cuenta qué necesitas';
    else if (descripcion.length < MIN_DESCRIPCION) e.descripcion = `Mínimo ${MIN_DESCRIPCION} caracteres`;
    else if (descripcion.length > LIMITES.descripcion) e.descripcion = `Máximo ${LIMITES.descripcion} caracteres`;
    return e;
  };

  const handleSubmit = async () => {
    const titulo = limpiarTexto(form.titulo);
    const descripcion = limpiarTexto(form.descripcion, true);

    const errores = validar(titulo, descripcion);
    if (Object.keys(errores).length > 0) {
      setFormErrors(errores);
      return;
    }

    setSubmitting(true);
    const ok = await onGuardar({ ...form, titulo, descripcion });
    setSubmitting(false);
    if (ok) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-5 bg-green-100">
            <CheckCircle2 size={44} className="text-green-500" />
          </div>
          <h2 className="text-gray-900 text-[22px] font-extrabold mb-1">
            {esEdicion ? 'Solicitud actualizada' : '¡Solicitud enviada!'}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-gray-900 text-[26px] font-extrabold mb-1">
          {esEdicion ? 'Editar solicitud' : 'Nueva solicitud'}
        </h1>
      </div>
      <div className="bg-white rounded-2xl p-6 lg:p-8 max-w-2xl shadow-[0_2px_20px_rgba(30,63,174,0.08)]">
        <div className="flex flex-col gap-5">
          <div>
            <label htmlFor="sol-titulo" className={etiqueta}>Título</label>
            <input id="sol-titulo" type="text" maxLength={LIMITES.titulo} value={form.titulo} onChange={(e) => updateForm('titulo', e.target.value)} className={claseCampo(formErrors.titulo)} />
            <ErrorCampo mensaje={formErrors.titulo} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sol-tipo" className={etiqueta}>Categoría</label>
              <select id="sol-tipo" value={form.tipo} onChange={(e) => updateForm('tipo', e.target.value)} className={claseCampo(formErrors.tipo)}>
                <option value="" disabled>Elige una</option>
                {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className={etiqueta}>Prioridad</label>
              <div className="flex gap-2">
                {PRIORIDADES.map((p) => {
                  const isActive = form.prioridad === p;
                  const colores = isActive ? `${clasePrioridad[p]} font-bold` : 'border-gray-200 bg-gray-50 text-gray-500 font-medium';
                  return (
                    <button key={p} type="button" aria-pressed={isActive} onClick={() => updateForm('prioridad', p)} className={`flex-1 px-1.5 py-2.5 rounded-lg border-[1.5px] transition-all ${colores}`}>
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="sol-detalles" className={etiqueta}>Detalles</label>
            <textarea id="sol-detalles" rows={5} maxLength={LIMITES.descripcion} value={form.descripcion} onChange={(e) => updateForm('descripcion', e.target.value)} className={`${claseCampo(formErrors.descripcion)} resize-y`} />
            <ErrorCampo mensaje={formErrors.descripcion} />
            <p className="text-gray-400 text-xs mt-1 text-right">{form.descripcion.length}/{LIMITES.descripcion}</p>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            {esEdicion && (
              <button onClick={onCancelar} className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                Cancelar
              </button>
            )}
            <button onClick={handleSubmit} disabled={submitting} className="px-6 py-3 rounded-lg bg-[#1E3FAE] text-white font-bold hover:bg-[#19358f] transition-colors disabled:bg-[#93A8E8] disabled:cursor-not-allowed">
              {submitting ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
