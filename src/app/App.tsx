import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { LoginScreen } from './components/LoginScreen';
import { RegisterScreen } from './components/RegisterScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { ErrorScreen } from './components/ErrorScreen';
import { ForgotPasswordScreen } from './components/ForgotPasswordScreen';

type Screen = 'login' | 'register' | 'dashboard' | 'error' | 'forgot';
type ErrorType = '404' | 'session' | 'general';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [errorType, setErrorType] = useState<ErrorType>('general');
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

  const goToError = (type: ErrorType = 'general') => {
    setErrorType(type);
    setCurrentScreen('error');
  };

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
          onNavigateToRegister={() => setCurrentScreen('register')}
          onNavigateToError={() => goToError('general')}
          onNavigateToDashboard={() => setCurrentScreen('dashboard')}
          onNavigateToForgot={() => setCurrentScreen('forgot')}
        />
      )}

      {currentScreen === 'register' && (
        <RegisterScreen
          onNavigateToLogin={() => setCurrentScreen('login')}
          onNavigateToError={() => goToError('general')}
        />
      )}

      {currentScreen === 'dashboard' && (
        <DashboardScreen
          onNavigateToLogin={() => setCurrentScreen('login')}
          onNavigateToError={() => goToError('session')}
        />
      )}

      {currentScreen === 'error' && (
        <ErrorScreen
          onNavigateBack={() => setCurrentScreen('login')}
          errorType={errorType}
        />
      )}

      {currentScreen === 'forgot' && (
        <ForgotPasswordScreen
          onNavigateToLogin={() => setCurrentScreen('login')}
        />
      )}
    </>
  );
}