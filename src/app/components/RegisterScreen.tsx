import { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Building2, CheckCircle2, ArrowLeft } from 'lucide-react';
import { LogoBrand } from './LogoMark';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

interface RegisterScreenProps {
  onNavigateToLogin: () => void;
  onNavigateToError: () => void;
}

const DEPARTMENTS = [
  'Tecnología e Innovación',
  'Recursos Humanos',
  'Finanzas y Contabilidad',
  'Operaciones',
  'Jurídica y Cumplimiento',
  'Comunicaciones',
  'Logística',
  'Atención al Cliente',
  'Dirección General',
];

// Componente auxiliar de input encapsulado
const InputField = ({ label, icon, type = 'text', placeholder, rightElement, value, error, onChange }: any) => (
  <div>
    <label className="block text-gray-700 text-[13px] font-semibold mb-1.5">{label}</label>
    <div className="relative">
      <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${error ? 'text-red-500' : 'text-gray-400'}`}>{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full py-3 pl-10 ${rightElement ? 'pr-11' : 'pr-3'} border ${error ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-slate-50'} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white transition-colors`}
      />
      {rightElement && <span className="absolute right-3 top-1/2 -translate-y-1/2">{rightElement}</span>}
    </div>
    {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
  </div>
);

export function RegisterScreen({ onNavigateToLogin }: RegisterScreenProps) {
  // Estados de formulario
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '', department: '' });
  const [errors, setErrors] = useState<Partial<typeof form & { general: string }>>({});
  
  // Estados de UI interactiva
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (field: keyof typeof form, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: undefined }));
  };

  // Validaciones del cliente
  const validate = () => {
    const e: typeof errors = {};
    if (!form.fullName.trim()) e.fullName = 'Requerido';
    if (!form.email) e.email = 'Requerido';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Formato inválido';
    if (!form.password) e.password = 'Requerida';
    else if (form.password.length < 8) e.password = 'Mínimo 8 caracteres';
    if (!form.confirmPassword) e.confirmPassword = 'Requerido';
    else if (form.password !== form.confirmPassword) e.confirmPassword = 'Las contraseñas no coinciden';
    if (!form.department) e.department = 'Seleccione su área';
    return e;
  };

  // Lógica de registro en Firebase Auth y Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) return setErrors(errs);

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: form.fullName });
      await setDoc(doc(db, 'usuarios', user.uid), {
        nombre: form.fullName,
        email: form.email,
        departamento: form.department,
        rol: 'usuario',
        fechaRegistro: new Date()
      });

      setSuccess(true);
      setTimeout(() => onNavigateToLogin(), 2500);
    } catch (error: any) {
      console.error("Registro fallido:", error);
      let msj = "Error en la creación de cuenta.";
      if (error.code === 'auth/email-already-in-use') msj = "Usuario ya registrado.";
      setErrors({ general: msj });
    } finally {
      setLoading(false);
    }
  };

  // Lógica de fuerza de contraseña
  const passwordStrength = (pw: string) => {
    if (!pw) return 0;
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  };

  const strengthLevel = passwordStrength(form.password);
  const strengthColors = ['', '#DC3545', '#F97316', '#FBBF24', '#22C55E'];
  const strengthLabels = ['', 'Débil', 'Regular', 'Buena', 'Óptima'];

  // --- Renderizado UI ---

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans">
        <div className="bg-white rounded-2xl p-10 w-full max-w-[420px] text-center shadow-[0_8px_40px_rgba(30,63,174,0.12)]">
          <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-6">
            <CheckCircle2 size={44} className="text-green-500" />
          </div>
          <h2 className="text-gray-900 text-2xl font-extrabold mb-3">Registro exitoso</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Su cuenta corporativa ha sido aprovisionada correctamente con el correo <strong className="text-indigo-600">{form.email}</strong>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-indigo-50 font-sans">
      <div className="w-full max-w-[480px]">
        
        <div className="flex justify-center mb-8">
          <LogoBrand iconSize={44} layout="vertical" />
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(30,63,174,0.12)]">
          <div className="mb-7">
            <h2 className="text-gray-900 text-2xl font-extrabold mb-1">Solicitud de Cuenta</h2>
            <p className="text-gray-500 text-sm">Registro para personal interno.</p>
          </div>

          {errors.general && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-6 border border-red-100 flex items-center gap-3">
              <span className="font-semibold">{errors.general}</span>
            </div>
          )}

          <div className="flex flex-col gap-5">
            <InputField label="Nombre y Apellido" icon={<User size={18} />} placeholder="Ej. Ana Martínez" value={form.fullName} error={errors.fullName} onChange={(v: string) => update('fullName', v)} />
            <InputField label="Correo Institucional" type="email" icon={<Mail size={18} />} placeholder="correo@empresa.com" value={form.email} error={errors.email} onChange={(v: string) => update('email', v)} />

            <div>
              <InputField label="Clave de Acceso" icon={<Lock size={18} />} type={showPassword ? 'text' : 'password'} placeholder="Mínimo 8 caracteres" value={form.password} error={errors.password} onChange={(v: string) => update('password', v)} rightElement={<button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>} />
              {form.password && (
                <div className="mt-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex-1 h-1 rounded transition-colors" style={{ background: i <= strengthLevel ? strengthColors[strengthLevel] : '#E5E7EB' }} />
                    ))}
                  </div>
                  <p className="text-[11px] font-bold mt-1" style={{ color: strengthColors[strengthLevel] }}>{strengthLabels[strengthLevel]}</p>
                </div>
              )}
            </div>

            <InputField label="Verificación de Clave" icon={<Lock size={18} />} type={showConfirm ? 'text' : 'password'} placeholder="Reingrese su clave" value={form.confirmPassword} error={errors.confirmPassword} onChange={(v: string) => update('confirmPassword', v)} rightElement={<button type="button" onClick={() => setShowConfirm(!showConfirm)} className="text-gray-400">{showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}</button>} />

            <div>
              <label className="block text-gray-700 text-[13px] font-semibold mb-1.5">Unidad Organizacional</label>
              <div className="relative">
                <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.department ? 'text-red-500' : 'text-gray-400'}`}><Building2 size={18} /></span>
                <select value={form.department} onChange={(e) => update('department', e.target.value)} className={`w-full py-3 pl-10 pr-10 border ${errors.department ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-slate-50'} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white appearance-none cursor-pointer transition-colors`}>
                  <option value="" disabled>Seleccionar división...</option>
                  {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6l4 4 4-4"/></svg>
                </span>
              </div>
              {errors.department && <p className="text-red-500 text-xs mt-1 font-medium">{errors.department}</p>}
            </div>

            <button onClick={handleSubmit} disabled={loading} className="w-full mt-2 bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors">
              {loading ? 'Procesando...' : 'Crear Identidad'}
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button onClick={onNavigateToLogin} className="flex items-center gap-1.5 text-indigo-600 text-sm font-semibold hover:underline">
            <ArrowLeft size={16} /> Volver al portal
          </button>
        </div>
      </div>
    </div>
  );
}