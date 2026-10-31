import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Shield } from 'lucide-react';
import { LogoBrand, LogoBrandWhite } from './LogoMark';
import { 
  signInWithEmailAndPassword, 
  setPersistence, 
  browserLocalPersistence, 
  browserSessionPersistence,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth } from '../config/firebase';
import { GoogleIcon } from './GoogleIcon';

interface LoginScreenProps {
  onNavigateToForgot: () => void;
  onNavigateToRegister: () => void;
}

export function LoginScreen({ onNavigateToForgot, onNavigateToRegister }: LoginScreenProps) {
  // Estados locales
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});

  // Validaciones
  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = 'Escribe tu correo.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Ese correo no parece válido.';
    if (!password) newErrors.password = 'Escribe tu contraseña.';
    return newErrors;
  };

  // Manejadores de autenticación
  const handleLogin = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});
    setLoading(true);

    try {
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setLoading(false);
      let mensajeError = "No pudimos iniciar sesión. Intenta de nuevo.";
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          mensajeError = "Correo o contraseña incorrectos.";
        } else if (error.code === 'auth/too-many-requests') {
          mensajeError = "Demasiados intentos. Espera un momento y vuelve a probar.";
        }
      }
      setErrors({ general: mensajeError });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      setErrors({ general: 'No se pudo entrar con Google.' });
    }
  };

  // --- Renderizado UI ---

  return (
    <div className="min-h-screen flex font-sans bg-indigo-50">
      
      {/* Panel Hero (Solo Escritorio) */}
      <div className="hidden lg:flex flex-col justify-between w-[52%] relative overflow-hidden p-12 bg-gradient-to-br from-indigo-700 to-indigo-900">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white opacity-10" />
        <div className="absolute bottom-10 -right-16 w-96 h-96 rounded-full bg-white opacity-10" />
        
        <LogoBrandWhite iconSize={52} />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Shield size={18} className="text-white/70" />
            <span className="text-white/70 text-sm font-medium">Cada empresa ve solo lo suyo</span>
          </div>
          <h1 className="text-white text-4xl font-extrabold leading-tight mb-4">
            Gestión de Solicitudes<br />
            <span className="text-white/75 font-normal text-3xl">Todo en un solo lugar</span>
          </h1>
          <p className="text-white/65 text-[15px] leading-relaxed max-w-[380px]">
            Crea una solicitud, mira en qué va y recibe la respuesta de tu administrador, sin correos ni papeles.
          </p>
        </div>

        <div className="text-white/35 text-xs">
          © 2026 GestioSync
        </div>
      </div>

      {/* Panel Formulario */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-[420px]">
          <div className="flex justify-center mb-8 lg:hidden">
            <LogoBrand iconSize={44} layout="vertical" />
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_40px_rgba(30,63,174,0.12)]">
            <div className="mb-8">
              <h2 className="text-gray-900 text-2xl font-extrabold mb-1">Bienvenido de nuevo</h2>
              <p className="text-gray-500 text-sm">Entra con tu correo y tu contraseña.</p>
            </div>

            {errors.general && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-6 border border-red-100 flex items-center gap-3">
                <Shield size={18} />
                <span className="font-semibold">{errors.general}</span>
              </div>
            )}

            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="login-email" className="block text-gray-700 text-[13px] font-semibold mb-1.5">Correo</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Mail size={18} /></span>
                  <input
                    id="login-email" type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors(p => ({ ...p, email: undefined })); }}
                    className={`w-full py-3 pl-10 pr-3 border ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-slate-50'} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white transition-colors`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="login-password" className="text-gray-700 text-[13px] font-semibold">Contraseña</label>
                  <button onClick={onNavigateToForgot} className="text-indigo-600 text-xs font-semibold hover:underline">¿Olvidaste tu contraseña?</button>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Lock size={18} /></span>
                  <input
                    id="login-password" type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setErrors(p => ({ ...p, password: undefined })); }}
                    className={`w-full py-3 pl-10 pr-10 border ${errors.password ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-slate-50'} rounded-lg text-sm outline-none focus:border-indigo-600 focus:bg-white transition-colors`}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1 font-medium">{errors.password}</p>}
              </div>

              <div className="flex items-center gap-2 mt-1">
                <input type="checkbox" id="remember" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="remember" className="text-gray-600 text-sm font-medium select-none cursor-pointer">Mantener sesión iniciada</label>
              </div>

              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg text-[15px] font-bold hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors mt-2"
              >
                {loading ? 'Entrando...' : 'Entrar'}
              </button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-medium uppercase tracking-wider">o</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 border border-gray-200 py-3 rounded-lg text-[14px] font-semibold hover:bg-gray-50 transition-colors shadow-sm"
              >
                <GoogleIcon />
                Iniciar sesión con Google
              </button>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-6 flex flex-col gap-1">
            <p>¿Eres parte de una empresa? Pídele a tu administrador que te agregue.</p>
            <p>
              ¿Vas a administrar una empresa nueva?{' '}
              <button onClick={onNavigateToRegister} className="text-indigo-600 font-semibold hover:underline">Regístrala aquí</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}