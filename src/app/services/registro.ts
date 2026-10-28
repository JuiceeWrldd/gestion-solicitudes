import { collection, doc, serverTimestamp, writeBatch } from 'firebase/firestore';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth, getAuthSecundario, getDbSecundario } from '../config/firebase';
import type { PerfilUsuario } from '../types';

export interface DatosRegistro {
  nombre: string;
  empresa: string;
  email: string;
  clave: string;
  departamento: string;
}

// Crea la cuenta, la empresa nueva y el perfil de admin de esa empresa, y al final inicia sesión.
// Todo se hace en la instancia secundaria para que la app no vea una sesión sin perfil a medias.
export async function registrarAdminConEmpresa({ nombre, empresa, email, clave, departamento }: DatosRegistro) {
  const authSecundario = getAuthSecundario();
  const dbSecundario = getDbSecundario();

  try {
    const { user } = await createUserWithEmailAndPassword(authSecundario, email, clave);

    try {
      await updateProfile(user, { displayName: nombre });

      // La empresa y el perfil se escriben juntos: las reglas de Firestore comprueban que van enlazados
      const orgRef = doc(collection(dbSecundario, 'organizaciones'));
      const lote = writeBatch(dbSecundario);
      lote.set(orgRef, { nombre: empresa, adminId: user.uid, fechaCreacion: serverTimestamp() });
      lote.set(doc(dbSecundario, 'usuarios', user.uid), {
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
    } catch (error) {
      // Si algo falla, se borra la cuenta recién creada para que pueda volver a intentarlo con el mismo correo
      await deleteUser(user).catch(() => undefined);
      throw error;
    }
  } finally {
    await signOut(authSecundario);
  }

  await signInWithEmailAndPassword(auth, email, clave);
}
