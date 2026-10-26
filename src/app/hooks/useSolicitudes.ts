import { useCallback, useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import {
  actualizarEstadoSolicitud,
  borrarSolicitud,
  crearSolicitud,
  editarSolicitud,
  guardarRespuestaAdmin,
  obtenerSolicitudesDeEmpresa,
  obtenerSolicitudesDeUsuario,
  type DatosSolicitud,
} from '../services/solicitudes';
import type { EstadoSolicitud, PerfilUsuario, Solicitud } from '../types';

// Lista de solicitudes y las acciones sobre ellas. Cada acción avisa con onError si falla.
export function useSolicitudes(perfil: PerfilUsuario | null, onError: (mensaje: string) => void) {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const [cargando, setCargando] = useState(true);

  const rol = perfil?.rol;
  const orgId = perfil?.orgId;
  const listo = perfil !== null && perfil.activo !== false;

  const recargar = useCallback(async () => {
    const user = auth.currentUser;
    if (!user || !rol) return;

    setCargando(true);
    try {
      const esAdmin = rol === 'admin';
      if (esAdmin && !orgId) {
        setSolicitudes([]);
        onError('Tu cuenta no tiene una empresa asignada.');
        return;
      }
      // El admin ve las de su empresa; el usuario, solo las suyas
      setSolicitudes(esAdmin && orgId ? await obtenerSolicitudesDeEmpresa(orgId) : await obtenerSolicitudesDeUsuario(user.uid));
    } catch (error) {
      console.error('Error al obtener datos:', error);
      onError('No se pudieron cargar las solicitudes. Intenta de nuevo.');
    } finally {
      setCargando(false);
    }
  }, [rol, orgId, onError]);

  useEffect(() => {
    if (listo) recargar();
  }, [listo, recargar]);

  const cambiarEstado = async (id: string, estado: EstadoSolicitud) => {
    try {
      await actualizarEstadoSolicitud(id, estado);
      setSolicitudes((prev) => prev.map((s) => (s.id === id ? { ...s, status: estado } : s)));
    } catch (error) {
      console.error('Error actualizando estado:', error);
      onError('No se pudo cambiar el estado de la solicitud.');
    }
  };

  const responder = async (id: string, respuesta: string): Promise<boolean> => {
    try {
      await guardarRespuestaAdmin(id, respuesta);
      setSolicitudes((prev) => prev.map((s) => (s.id === id ? { ...s, respuestaAdmin: respuesta } : s)));
      return true;
    } catch (error) {
      console.error('Error al responder:', error);
      onError('No se pudo enviar la respuesta.');
      return false;
    }
  };

  const eliminar = async (id: string): Promise<boolean> => {
    try {
      await borrarSolicitud(id);
      setSolicitudes((prev) => prev.filter((s) => s.id !== id));
      return true;
    } catch (error) {
      console.error('Error eliminando documento:', error);
      onError('No se pudo eliminar la solicitud.');
      return false;
    }
  };

  // Crea una solicitud nueva o, si llega idEdicion, actualiza esa
  const guardar = async (datos: DatosSolicitud, idEdicion: string | null): Promise<boolean> => {
    try {
      if (idEdicion) {
        await editarSolicitud(idEdicion, datos);
      } else {
        if (!orgId) {
          onError('Tu cuenta no tiene una empresa asignada. Pídele a tu administrador que la configure.');
          return false;
        }
        await crearSolicitud(datos, orgId);
      }
      await recargar();
      return true;
    } catch (error) {
      console.error('Error de escritura:', error);
      onError('No se pudo guardar la solicitud. Revisa tu conexión e intenta de nuevo.');
      return false;
    }
  };

  return { solicitudes, cargando, cambiarEstado, responder, eliminar, guardar };
}
