import { useCallback, useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { obtenerOrganizacion, obtenerPerfil } from '../services/perfil';
import type { Organizacion, PerfilUsuario } from '../types';

// Perfil del usuario que inició sesión y la empresa a la que pertenece
export function usePerfil() {
  const [perfil, setPerfil] = useState<PerfilUsuario | null>(null);
  const [organizacion, setOrganizacion] = useState<Organizacion | null>(null);
  const [sinPerfil, setSinPerfil] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  const cargar = useCallback(async () => {
    const user = auth.currentUser;
    if (!user) return setCargando(false);

    setCargando(true);
    setError(false);
    try {
      const datos = await obtenerPerfil(user.uid);
      if (!datos) return setSinPerfil(true);

      setPerfil(datos);
      if (datos.activo === false || !datos.orgId) return;

      // Si la empresa no carga se puede seguir trabajando: solo falta su nombre en la cabecera
      setOrganizacion(await obtenerOrganizacion(datos.orgId).catch((err) => {
        console.error('Error al cargar la organización:', err);
        return null;
      }));
    } catch (err) {
      console.error('Error al cargar el perfil:', err);
      setError(true);
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  return { perfil, setPerfil, organizacion, sinPerfil, cargando, error, reintentar: cargar };
}
