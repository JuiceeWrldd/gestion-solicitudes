import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectAuthEmulator, getAuth } from 'firebase/auth';

// Configuración inyectada vía variables de entorno (.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Con "npm run demo" la app usa los emuladores locales en vez del proyecto real (ver .env.emulador)
const conectarEmuladores = (a: FirebaseApp) => {
  if (import.meta.env.VITE_EMULADOR !== 'true') return;
  connectAuthEmulator(getAuth(a), 'http://127.0.0.1:9099', { disableWarnings: true });
  connectFirestoreEmulator(getFirestore(a), '127.0.0.1', 8080);
};

const app = initializeApp(firebaseConfig);
conectarEmuladores(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Segunda instancia para crear cuentas sin tocar la sesión principal: al crear un usuario
// Firebase inicia sesión con él (en un registro se vería "sin empresa" antes de tiempo,
// y al agregar un integrante se cerraría la sesión del admin).
const getAppSecundaria = () => {
  const existente = getApps().find((a) => a.name === 'secundaria');
  if (existente) return existente;
  const nueva = initializeApp(firebaseConfig, 'secundaria');
  conectarEmuladores(nueva);
  return nueva;
};

export const getAuthSecundario = () => getAuth(getAppSecundaria());
export const getDbSecundario = () => getFirestore(getAppSecundaria());
