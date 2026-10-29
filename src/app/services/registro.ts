import { collection, doc, getDoc, serverTimestamp, writeBatch } from 'firebase/firestore';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  getAdditionalUserInfo,
  signInWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type AuthCredential,
  type User,
} from 'firebase/auth';
import { auth, getAuthSecundario, getDbSecundario } from '../config/firebase';
import type { PerfilUsuario } from '../types';

// Todo el registro se hace en la instancia secundaria de Firebase: así la app no ve una sesión sin perfil
// a medias, y solo al final se inicia sesión de verdad en la principal.

interface DatosEmpresaAdmin {
  nombre: string;
  empresa: string;
  email: string;
  departamento: string;
}

// La empresa y el perfil de admin se escriben juntos: las reglas de Firestore comprueban que van enlazados
async function crearEmpresaYPerfil(user: User, { nombre, empresa, email, departamento }: DatosEmpresaAdmin) {
  const db = getDbSecundario();
  const orgRef = doc(collection(db, 'organizaciones'));
  const lote = writeBatch(db);
  lote.set(orgRef, { nombre: empresa, adminId: user.uid, fechaCreacion: serverTimestamp() });
  lote.set(doc(db, 'usuarios', user.uid), {
    nombre,
    email,
    departamento,
    rol: 'admin',
    orgId: orgRef.id,
    activo: true,
    debeCambiarClave: false,
    fechaRegistro: new Date(),
  } satisfies PerfilUsuario);
  await lote.commit();
}

// --- Registro con correo y contraseña ---

export interface DatosRegistro extends DatosEmpresaAdmin {
  clave: string;
}

export async function registrarAdminConEmpresa({ clave, ...datos }: DatosRegistro) {
  const authSecundario = getAuthSecundario();

  try {
    const { user } = await createUserWithEmailAndPassword(authSecundario, datos.email, clave);

    try {
      await updateProfile(user, { displayName: datos.nombre });
      await crearEmpresaYPerfil(user, datos);
    } catch (error) {
      // Si algo falla, se borra la cuenta recién creada para que pueda volver a intentarlo con el mismo correo
      await deleteUser(user).catch(() => undefined);
      throw error;
    }
  } finally {
    await signOut(authSecundario);
  }

  await signInWithEmailAndPassword(auth, datos.email, clave);
}

// --- Registro con Google (en dos pasos: elegir la cuenta y luego completar los datos de la empresa) ---

export interface CuentaGoogle {
  nombre: string;
  email: string;
  credencial: AuthCredential;
  esNueva: boolean; // la cuenta de Google no existía todavía en Firebase
}

export type ResultadoGoogle = { yaRegistrado: true } | ({ yaRegistrado: false } & CuentaGoogle);

// Paso 1: abre la ventana de Google y revisa si esa cuenta ya tiene empresa
export async function elegirCuentaGoogle(): Promise<ResultadoGoogle> {
  const authSecundario = getAuthSecundario();
  const resultado = await signInWithPopup(authSecundario, new GoogleAuthProvider());

  const perfil = await getDoc(doc(getDbSecundario(), 'usuarios', resultado.user.uid));
  if (perfil.exists()) {
    await signOut(authSecundario);
    return { yaRegistrado: true };
  }

  const credencial = GoogleAuthProvider.credentialFromResult(resultado);
  if (!credencial) {
    await signOut(authSecundario);
    throw new Error('Google no devolvió las credenciales');
  }

  return {
    yaRegistrado: false,
    nombre: resultado.user.displayName ?? '',
    email: resultado.user.email ?? '',
    credencial,
    esNueva: getAdditionalUserInfo(resultado)?.isNewUser ?? false,
  };
}

// Paso 2: crea la empresa y el perfil de admin, y entra con la misma cuenta de Google (sin otra ventana)
export async function completarRegistroGoogle({ nombre, empresa, departamento, credencial }: {
  nombre: string;
  empresa: string;
  departamento: string;
  credencial: AuthCredential;
}) {
  const authSecundario = getAuthSecundario();
  const user = authSecundario.currentUser;
  if (!user?.email) throw new Error('La sesión de Google se cerró. Vuelve a elegir tu cuenta.');

  await crearEmpresaYPerfil(user, { nombre, empresa, email: user.email, departamento });
  await signOut(authSecundario);
  await signInWithCredential(auth, credencial);
}

// Si la persona se arrepiente después del paso 1, se limpia lo que se creó
export async function cancelarRegistroGoogle(esNueva: boolean) {
  const authSecundario = getAuthSecundario();
  try {
    if (esNueva && authSecundario.currentUser) await deleteUser(authSecundario.currentUser).catch(() => undefined);
  } finally {
    await signOut(authSecundario);
  }
}
