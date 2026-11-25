import { collection, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { createUserWithEmailAndPassword, deleteUser, signOut, updateProfile, type User } from 'firebase/auth';
import { db, getAuthSecundario } from '../config/firebase';
import { generarClave } from '../utils/clave';
import type { Integrante, PerfilUsuario } from '../types';

// La cuenta se creó, no se pudo guardar su perfil y tampoco se pudo borrar: el correo quedó ocupado
export class CuentaSinPerfilError extends Error {}

export interface NuevoIntegrante {
  nombre: string;
  email: string;
  departamento: string;
  orgId: string;
}

// Personas de la empresa, ordenadas por nombre
export async function obtenerIntegrantes(orgId: string): Promise<Integrante[]> {
  const snap = await getDocs(query(collection(db, 'usuarios'), where('orgId', '==', orgId)));
  const lista = snap.docs.map((d) => ({ id: d.id, ...(d.data() as PerfilUsuario) }));
  return lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
}

// Crea la cuenta con una contraseña temporal y su perfil de usuario. Devuelve la contraseña para entregársela.
// Se usa la instancia secundaria para no cerrar la sesión del admin.
export async function crearIntegrante({ nombre, email, departamento, orgId }: NuevoIntegrante): Promise<string> {
  const clave = generarClave();
  const authSecundario = getAuthSecundario();
  let cuenta: User | null = null;

  try {
    cuenta = (await createUserWithEmailAndPassword(authSecundario, email, clave)).user;
    await updateProfile(cuenta, { displayName: nombre });

    await setDoc(doc(db, 'usuarios', cuenta.uid), {
      nombre,
      email,
      departamento,
      rol: 'usuario',
      orgId,
      activo: true,
      debeCambiarClave: true,
      fechaRegistro: new Date(),
    } satisfies PerfilUsuario);

    return clave;
  } catch (error) {
    // Si la cuenta alcanzó a crearse, se borra: sin perfil no sirve y dejaría ese correo ocupado
    if (
      cuenta &&
      !(await deleteUser(cuenta).then(
        () => true,
        () => false,
      ))
    ) {
      console.error('No se pudo guardar el perfil:', error);
      throw new CuentaSinPerfilError('No se pudo guardar el perfil ni borrar la cuenta');
    }
    throw error;
  } finally {
    await signOut(authSecundario);
  }
}

export const cambiarDepartamento = (id: string, departamento: string) =>
  updateDoc(doc(db, 'usuarios', id), { departamento });

export const cambiarActivo = (id: string, activo: boolean) => updateDoc(doc(db, 'usuarios', id), { activo });
