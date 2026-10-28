import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración inyectada vía variables de entorno (.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Segunda instancia para crear cuentas sin tocar la sesión principal: al crear un usuario
// Firebase inicia sesión con él (en un registro se vería "sin empresa" antes de tiempo,
// y al agregar un integrante se cerraría la sesión del admin).
const getAppSecundaria = () =>
  getApps().find((a) => a.name === 'secundaria') ?? initializeApp(firebaseConfig, 'secundaria');

export const getAuthSecundario = () => getAuth(getAppSecundaria());
export const getDbSecundario = () => getFirestore(getAppSecundaria());