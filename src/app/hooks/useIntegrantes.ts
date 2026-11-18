import { useCallback, useEffect, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import {
  CuentaSinPerfilError,
  cambiarActivo,
  cambiarDepartamento,
  crearIntegrante,
  obtenerIntegrantes,
  type NuevoIntegrante,
} from '../services/integrantes';
import type { Integrante } from '../types';

// Equipo de la empresa y las acciones del admin sobre él. Los errores quedan en `error` para mostrarlos.
export function useIntegrantes(orgId: string) {
  const [integrantes, setIntegrantes] = useState<Integrante[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cargar = useCallback(async () => {
    setCargando(true);
    try {
      setIntegrantes(await obtenerIntegrantes(orgId));
    } catch (err) {
      console.error('Error al cargar integrantes:', err);
      setError('No se pudieron cargar los integrantes.');
    } finally {
      setCargando(false);
    }
  }, [orgId]);

  useEffect(() => {
    cargar();
  }, [cargar]);

  // Devuelve la contraseña temporal, o null si no se pudo crear
  const crear = async (datos: Omit<NuevoIntegrante, 'orgId'>): Promise<string | null> => {
    setError(null);
    try {
      const clave = await crearIntegrante({ ...datos, orgId });
      cargar();
      return clave;
    } catch (err) {
      console.error('Error al crear integrante:', err);
      if (err instanceof FirebaseError && err.code === 'auth/email-already-in-use') {
        setError('Ya existe una cuenta con ese correo.');
      } else if (err instanceof CuentaSinPerfilError) {
        setError('La cuenta se creó, pero no se pudo guardar su perfil ni deshacer el cambio. Ese correo quedó ocupado: bórralo desde la consola de Firebase.');
      } else {
        setError('No se pudo crear el integrante. Revisa los datos e intenta de nuevo.');
      }
      return null;
    }
  };

  const moverDeOficina = async (id: string, departamento: string) => {
    try {
      await cambiarDepartamento(id, departamento);
      setIntegrantes((prev) => prev.map((i) => (i.id === id ? { ...i, departamento } : i)));
    } catch (err) {
      console.error('Error al cambiar la oficina:', err);
      setError('No se pudo cambiar la oficina.');
    }
  };

  const activar = async (id: string, activo: boolean) => {
    try {
      await cambiarActivo(id, activo);
      setIntegrantes((prev) => prev.map((i) => (i.id === id ? { ...i, activo } : i)));
    } catch (err) {
      console.error('Error al cambiar el estado:', err);
      setError('No se pudo cambiar el estado del integrante.');
    }
  };

  return { integrantes, cargando, error, setError, crear, moverDeOficina, activar };
}
