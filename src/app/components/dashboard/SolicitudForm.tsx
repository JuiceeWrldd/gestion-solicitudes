import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { TIPOS, PRIORIDADES, getPriorityColors } from '../../config/solicitudes';
import { LIMITES, MIN_DESCRIPCION } from '../../config/limites';
import { limpiarTexto } from '../../utils/texto';
import type { DatosSolicitud } from '../../services/solicitudes';
import type { Prioridad, Solicitud } from '../../types';

interface FormState {
  title: string;
  type: string;
  description: string;
  priority: Prioridad;
}

const FORM_VACIO: FormState = { title: '', type: 'Soporte Técnico', description: '', priority: 'Media' };

interface SolicitudFormProps {
  inicial: Solicitud | null; // la solicitud que se está editando, o null si es nueva
  onGuardar: (datos: DatosSolicitud) => Promise<boolean>;
  onCancelar: () => void;
  onTerminado: () => void;
}

const etiqueta = { display: 'block', color: '#374151', fontSize: '13px', fontWeight: 600, marginBottom: '6px' } as const;
const campo = (hayError?: string) => ({
  width: '100%',
  padding: '12px 14px',
  border: `1.5px solid ${hayError ? '#DC3545' : '#E5E7EB'}`,
  borderRadius: '8px',
  outline: 'none',
});

export function SolicitudForm({ inicial, onGuardar, onCancelar, onTerminado }: SolicitudFormProps) {
  const [esEdicion] = useState(inicial !== null);
  const [form, setForm] = useState<FormState>(
    inicial ? { title: inicial.title, type: inicial.type, description: inicial.descripcion, priority: inicial.prioridad } : FORM_VACIO
  );
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Tras guardar se muestra el mensaje de éxito 2 segundos y se pasa a la lista
  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(onTerminado, 2000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const updateForm = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((p) => ({ ...p, [field]: value }));
    setFormErrors((p) => ({ ...p, [field]: undefined }));
  };

  // Se valida (y se guarda) el texto ya limpio, sin etiquetas HTML ni caracteres raros
  const validar = (titulo: string, descripcion: string) => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!titulo) e.title = 'Requerido';
    else if (titulo.length > LIMITES.titulo) e.title = `Máximo ${LIMITES.titulo} caracteres`;
    if (!form.type) e.type = 'Requerido';
    if (!descripcion) e.description = 'Requerido';
    else if (descripcion.length < MIN_DESCRIPCION) e.description = `Mínimo ${MIN_DESCRIPCION} caracteres`;
    else if (descripcion.length > LIMITES.descripcion) e.description = `Máximo ${LIMITES.descripcion} caracteres`;
    return e;
  };

  const handleSubmit = async () => {
    const titulo = limpiarTexto(form.title);
    const descripcion = limpiarTexto(form.description, true);

    const errores = validar(titulo, descripcion);
    if (Object.keys(errores).length > 0) {
      setFormErrors(errores);
      return;
    }

    setSubmitting(true);
    const ok = await onGuardar({
      titulo,
      tipo: form.type,
      descripcion,
      prioridad: form.priority,
    });
    setSubmitting(false);
    if (ok) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-5" style={{ background: '#DCFCE7' }}>
            <CheckCircle2 size={44} style={{ color: '#22C55E' }} />
          </div>
          <h2 style={{ color: '#111827', fontSize: '22px', fontWeight: 800, marginBottom: '5px' }}>
            {esEdicion ? 'Solicitud actualizada' : '¡Solicitud enviada!'}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-7">
        <h1 style={{ color: '#111827', fontSize: '26px', fontWeight: 800, marginBottom: '5px' }}>
          {esEdicion ? 'Editar solicitud' : 'Nueva solicitud'}
        </h1>
      </div>
      <div className="bg-white rounded-2xl p-6 lg:p-8 max-w-2xl" style={{ boxShadow: '0 2px 20px rgba(30,63,174,0.08)' }}>
        <div className="flex flex-col gap-5">
          <div>
            <label htmlFor="sol-titulo" style={etiqueta}>Título</label>
            <input id="sol-titulo" type="text" maxLength={LIMITES.titulo} value={form.title} onChange={(e) => updateForm('title', e.target.value)} style={campo(formErrors.title)} />
            {formErrors.title && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.title}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sol-tipo" style={etiqueta}>Categoría</label>
              <select id="sol-tipo" value={form.type} onChange={(e) => updateForm('type', e.target.value)} style={campo(formErrors.type)}>
                <option value="" disabled>Seleccione</option>
                {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label style={etiqueta}>Prioridad</label>
              <div className="flex gap-2">
                {PRIORIDADES.map((p) => {
                  const isActive = form.priority === p;
                  const colors = getPriorityColors(p, isActive);
                  return (
                    <button key={p} type="button" onClick={() => updateForm('priority', p)} style={{ flex: 1, padding: '10px 6px', borderRadius: '8px', border: `1.5px solid ${colors.border}`, background: colors.bg, color: colors.text, fontWeight: isActive ? 700 : 500, cursor: 'pointer', transition: 'all 0.2s' }}>
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="sol-detalles" style={etiqueta}>Detalles</label>
            <textarea id="sol-detalles" rows={5} maxLength={LIMITES.descripcion} value={form.description} onChange={(e) => updateForm('description', e.target.value)} style={{ ...campo(formErrors.description), resize: 'vertical' }} />
            {formErrors.description && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.description}</p>}
            <p className="text-gray-400 text-xs mt-1 text-right">{form.description.length}/{LIMITES.descripcion}</p>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            {esEdicion && (
              <button onClick={onCancelar} className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                Cancelar
              </button>
            )}
            <button onClick={handleSubmit} disabled={submitting} style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', background: submitting ? '#93A8E8' : '#1E3FAE', color: 'white', fontWeight: 700, cursor: submitting ? 'not-allowed' : 'pointer' }}>
              {submitting ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
