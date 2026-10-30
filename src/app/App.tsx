import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { LoginScreen } from './components/LoginScreen';
import { RegisterScreen } from './components/RegisterScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { ForgotPasswordScreen } from './components/ForgotPasswordScreen';

type Screen = 'login' | 'register' | 'dashboard' | 'forgot';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [cargandoSesion, setCargandoSesion] = useState(true);

  // Listener de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentScreen('dashboard');
      } else {
        setCurrentScreen((prev) => (prev === 'dashboard' ? 'login' : prev));
      }
      setCargandoSesion(false);
    });

    return () => unsubscribe();
  }, []);

  // Splash screen mientras Firebase verifica el token
  if (cargandoSesion) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#F9FAFB]">
        <div className="w-10 h-10 border-4 border-[#1E3FAE] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Router manual
  return (
    <>
      {currentScreen === 'login' && (
        <LoginScreen
          onNavigateToForgot={() => setCurrentScreen('forgot')}
          onNavigateToRegister={() => setCurrentScreen('register')}
        />
      )}

      {currentScreen === 'register' && (
        <RegisterScreen onNavigateToLogin={() => setCurrentScreen('login')} />
      )}

      {currentScreen === 'dashboard' && (
        <DashboardScreen onNavigateToLogin={() => setCurrentScreen('login')} />
      )}

      {currentScreen === 'forgot' && (
        <ForgotPasswordScreen
          onNavigateToLogin={() => setCurrentScreen('login')}
        />
      )}
    </>
  );
}
