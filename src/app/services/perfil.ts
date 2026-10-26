import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Organizacion, PerfilUsuario } from '../types';

export async function obtenerPerfil(uid: string): Promise<PerfilUsuario | null> {
  const snap = await getDoc(doc(db, 'usuarios', uid));
  return snap.exists() ? (snap.data() as PerfilUsuario) : null;
}

export async function obtenerOrganizacion(orgId: string): Promise<Organizacion | null> {
  const snap = await getDoc(doc(db, 'organizaciones', orgId));
  return snap.exists() ? (snap.data() as Organizacion) : null;
}
