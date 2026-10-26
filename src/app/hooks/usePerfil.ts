import { useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { obtenerOrganizacion, obtenerPerfil } from '../services/perfil';
import type { Organizacion, PerfilUsuario } from '../types';

// Perfil del usuario que inició sesión y la empresa a la que pertenece
export function usePerfil() {
  const [perfil, setPerfil] = useState<PerfilUsuario | null>(null);
  const [organizacion, setOrganizacion] = useState<Organizacion | null>(null);
  const [sinPerfil, setSinPerfil] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const cargar = async () => {
      const datos = await obtenerPerfil(user.uid);
      if (!datos) {
        setSinPerfil(true);
        return;
      }
      setPerfil(datos);
      if (datos.activo === false || !datos.orgId) return;

      try {
        setOrganizacion(await obtenerOrganizacion(datos.orgId));
      } catch (error) {
        console.error('Error al cargar la organización:', error);
      }
    };
    cargar();
  }, []);

  return { perfil, setPerfil, organizacion, sinPerfil };
}
