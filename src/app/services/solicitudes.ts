import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
  type DocumentData,
  type QueryDocumentSnapshot,
} from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import type { EstadoSolicitud, Prioridad, Solicitud } from '../types';

// Lo que el usuario escribe en el formulario
export interface DatosSolicitud {
  titulo: string;
  tipo: string;
  descripcion: string;
  prioridad: Prioridad;
}

// Convierte los documentos de Firestore en solicitudes listas para mostrar, las más recientes primero
// (se ordena aquí para no depender de índices en Firestore)
export function aSolicitudes(docs: QueryDocumentSnapshot<DocumentData>[]): Solicitud[] {
  const ahora = Date.now();
  const ordenados = [...docs].sort(
    (a, b) => (b.data().fecha?.toMillis() ?? ahora) - (a.data().fecha?.toMillis() ?? ahora)
  );

  return ordenados.map((d) => {
    const data = d.data();
    const fecha = data.fecha?.toDate();
    return {
      id: d.id,
      title: data.titulo || 'Sin título',
      type: data.tipo || 'Sin tipo',
      status: (data.estado || 'En revisión') as EstadoSolicitud,
      date: fecha ? fecha.toLocaleDateString('es-CO') : 'Reciente',
      time: fecha ? fecha.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }) : '',
      autorNombre: data.autorNombre || 'Usuario',
      autorEmail: data.autorEmail || '',
      descripcion: data.descripcion || 'Sin descripción detallada.',
      prioridad: (data.prioridad || 'Media') as Prioridad,
      respuestaAdmin: data.respuestaAdmin || null,
    };
  });
}

// El admin ve las solicitudes de su empresa
export async function obtenerSolicitudesDeEmpresa(orgId: string): Promise<Solicitud[]> {
  const snap = await getDocs(query(collection(db, 'solicitudes'), where('orgId', '==', orgId)));
  return aSolicitudes(snap.docs);
}

// El usuario ve solo las suyas
export async function obtenerSolicitudesDeUsuario(uid: string): Promise<Solicitud[]> {
  const snap = await getDocs(query(collection(db, 'solicitudes'), where('usuarioId', '==', uid)));
  return aSolicitudes(snap.docs);
}

export async function crearSolicitud(datos: DatosSolicitud, orgId: string) {
  const user = auth.currentUser;
  await addDoc(collection(db, 'solicitudes'), {
    ...datos,
    estado: 'En revisión',
    usuarioId: user?.uid,
    orgId,
    autorNombre: user?.displayName || 'Usuario',
    autorEmail: user?.email || '',
    fecha: serverTimestamp(),
  });
}

export const editarSolicitud = (id: string, datos: DatosSolicitud) =>
  updateDoc(doc(db, 'solicitudes', id), { ...datos });

export const actualizarEstadoSolicitud = (id: string, estado: EstadoSolicitud) =>
  updateDoc(doc(db, 'solicitudes', id), { estado });

export const guardarRespuestaAdmin = (id: string, respuesta: string) =>
  updateDoc(doc(db, 'solicitudes', id), { respuestaAdmin: respuesta });

export const borrarSolicitud = (id: string) => deleteDoc(doc(db, 'solicitudes', id));
