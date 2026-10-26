import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as api from '../app/services/solicitudes';
import { useSolicitudes } from '../app/hooks/useSolicitudes';
import type { PerfilUsuario, Solicitud } from '../app/types';

vi.mock('../app/config/firebase', () => ({ auth: { currentUser: { uid: 'u1' } }, db: {} }));
vi.mock('../app/services/solicitudes', () => ({
  obtenerSolicitudesDeEmpresa: vi.fn(),
  obtenerSolicitudesDeUsuario: vi.fn(),
  crearSolicitud: vi.fn(),
  editarSolicitud: vi.fn(),
  actualizarEstadoSolicitud: vi.fn(),
  guardarRespuestaAdmin: vi.fn(),
  borrarSolicitud: vi.fn(),
}));

const perfil = (extra: Partial<PerfilUsuario> = {}): PerfilUsuario => ({
  nombre: 'Ana',
  email: 'ana@test.com',
  departamento: 'Logística',
  rol: 'usuario',
  fechaRegistro: new Date(),
  orgId: 'gestiosync',
  ...extra,
});

const solicitud = (id: string, extra: Partial<Solicitud> = {}): Solicitud => ({
  id,
  title: `Solicitud ${id}`,
  type: 'Otro',
  status: 'En revisión',
  date: '1/1/2026',
  time: '10:00',
  autorNombre: 'Ana',
  autorEmail: 'ana@test.com',
  descripcion: 'detalle',
  prioridad: 'Media',
  respuestaAdmin: null,
  ...extra,
});

const datos = { titulo: 'T', tipo: 'Otro', descripcion: 'D'.repeat(25), prioridad: 'Baja' as const };

describe('useSolicitudes', () => {
  const onError = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(api.obtenerSolicitudesDeUsuario).mockResolvedValue([solicitud('a'), solicitud('b')]);
    vi.mocked(api.obtenerSolicitudesDeEmpresa).mockResolvedValue([solicitud('x'), solicitud('y'), solicitud('z')]);
  });

  describe('carga inicial', () => {
    it('un usuario normal ve solo sus solicitudes', async () => {
      const { result } = renderHook(() => useSolicitudes(perfil(), onError));

      await waitFor(() => expect(result.current.cargando).toBe(false));
      expect(api.obtenerSolicitudesDeUsuario).toHaveBeenCalledWith('u1');
      expect(api.obtenerSolicitudesDeEmpresa).not.toHaveBeenCalled();
      expect(result.current.solicitudes).toHaveLength(2);
    });

    it('un admin ve las solicitudes de su empresa', async () => {
      const { result } = renderHook(() => useSolicitudes(perfil({ rol: 'admin' }), onError));

      await waitFor(() => expect(result.current.cargando).toBe(false));
      expect(api.obtenerSolicitudesDeEmpresa).toHaveBeenCalledWith('gestiosync');
      expect(api.obtenerSolicitudesDeUsuario).not.toHaveBeenCalled();
      expect(result.current.solicitudes).toHaveLength(3);
    });

    it('un admin sin empresa no consulta nada y recibe un aviso', async () => {
      const { result } = renderHook(() => useSolicitudes(perfil({ rol: 'admin', orgId: undefined }), onError));

      await waitFor(() => expect(result.current.cargando).toBe(false));
      expect(onError).toHaveBeenCalledWith('Tu cuenta no tiene una empresa asignada.');
      expect(api.obtenerSolicitudesDeEmpresa).not.toHaveBeenCalled();
      expect(result.current.solicitudes).toEqual([]);
    });

    it('no consulta mientras el perfil no ha cargado', () => {
      renderHook(() => useSolicitudes(null, onError));
      expect(api.obtenerSolicitudesDeUsuario).not.toHaveBeenCalled();
      expect(api.obtenerSolicitudesDeEmpresa).not.toHaveBeenCalled();
    });

    it('no consulta si la cuenta está desactivada', () => {
      renderHook(() => useSolicitudes(perfil({ activo: false }), onError));
      expect(api.obtenerSolicitudesDeUsuario).not.toHaveBeenCalled();
    });

    it('avisa si la consulta falla', async () => {
      vi.mocked(api.obtenerSolicitudesDeUsuario).mockRejectedValue(new Error('sin permisos'));
      const { result } = renderHook(() => useSolicitudes(perfil(), onError));

      await waitFor(() => expect(result.current.cargando).toBe(false));
      expect(onError).toHaveBeenCalledWith('No se pudieron cargar las solicitudes. Intenta de nuevo.');
    });
  });

  describe('acciones', () => {
    const cargado = async (p = perfil()) => {
      const hook = renderHook(() => useSolicitudes(p, onError));
      await waitFor(() => expect(hook.result.current.cargando).toBe(false));
      return hook.result;
    };

    it('cambiarEstado actualiza la solicitud en la lista', async () => {
      const result = await cargado();

      await act(() => result.current.cambiarEstado('a', 'Aprobada'));

      expect(api.actualizarEstadoSolicitud).toHaveBeenCalledWith('a', 'Aprobada');
      expect(result.current.solicitudes.find((s) => s.id === 'a')?.status).toBe('Aprobada');
      expect(result.current.solicitudes.find((s) => s.id === 'b')?.status).toBe('En revisión');
    });

    it('cambiarEstado avisa si falla y deja la lista igual', async () => {
      vi.mocked(api.actualizarEstadoSolicitud).mockRejectedValue(new Error('x'));
      const result = await cargado();

      await act(() => result.current.cambiarEstado('a', 'Rechazada'));

      expect(onError).toHaveBeenCalledWith('No se pudo cambiar el estado de la solicitud.');
      expect(result.current.solicitudes.find((s) => s.id === 'a')?.status).toBe('En revisión');
    });

    it('responder guarda la respuesta y la muestra', async () => {
      const result = await cargado();

      let ok = false;
      await act(async () => {
        ok = await result.current.responder('a', 'Listo, ya quedó');
      });

      expect(ok).toBe(true);
      expect(api.guardarRespuestaAdmin).toHaveBeenCalledWith('a', 'Listo, ya quedó');
      expect(result.current.solicitudes.find((s) => s.id === 'a')?.respuestaAdmin).toBe('Listo, ya quedó');
    });

    it('eliminar quita la solicitud de la lista', async () => {
      const result = await cargado();

      let ok = false;
      await act(async () => {
        ok = await result.current.eliminar('a');
      });

      expect(ok).toBe(true);
      expect(api.borrarSolicitud).toHaveBeenCalledWith('a');
      expect(result.current.solicitudes.map((s) => s.id)).toEqual(['b']);
    });

    it('eliminar devuelve false y avisa si falla', async () => {
      vi.mocked(api.borrarSolicitud).mockRejectedValue(new Error('x'));
      const result = await cargado();

      let ok = true;
      await act(async () => {
        ok = await result.current.eliminar('a');
      });

      expect(ok).toBe(false);
      expect(onError).toHaveBeenCalledWith('No se pudo eliminar la solicitud.');
      expect(result.current.solicitudes).toHaveLength(2);
    });
  });

  describe('guardar', () => {
    const cargado = async (p = perfil()) => {
      const hook = renderHook(() => useSolicitudes(p, onError));
      await waitFor(() => expect(hook.result.current.cargando).toBe(false));
      return hook.result;
    };

    it('crea una solicitud nueva con la empresa del usuario y recarga la lista', async () => {
      const result = await cargado();
      vi.mocked(api.obtenerSolicitudesDeUsuario).mockClear();

      let ok = false;
      await act(async () => {
        ok = await result.current.guardar(datos, null);
      });

      expect(ok).toBe(true);
      expect(api.crearSolicitud).toHaveBeenCalledWith(datos, 'gestiosync');
      expect(api.obtenerSolicitudesDeUsuario).toHaveBeenCalledTimes(1);
    });

    it('edita la solicitud si recibe su id', async () => {
      const result = await cargado();

      await act(async () => {
        await result.current.guardar(datos, 'abc');
      });

      expect(api.editarSolicitud).toHaveBeenCalledWith('abc', datos);
      expect(api.crearSolicitud).not.toHaveBeenCalled();
    });

    it('no crea nada si el usuario no tiene empresa', async () => {
      const result = await cargado(perfil({ orgId: undefined }));

      let ok = true;
      await act(async () => {
        ok = await result.current.guardar(datos, null);
      });

      expect(ok).toBe(false);
      expect(api.crearSolicitud).not.toHaveBeenCalled();
      expect(onError).toHaveBeenCalledWith(expect.stringContaining('no tiene una empresa asignada'));
    });

    it('devuelve false y avisa si Firestore rechaza la escritura', async () => {
      vi.mocked(api.crearSolicitud).mockRejectedValue(new Error('permission-denied'));
      const result = await cargado();

      let ok = true;
      await act(async () => {
        ok = await result.current.guardar(datos, null);
      });

      expect(ok).toBe(false);
      expect(onError).toHaveBeenCalledWith(expect.stringContaining('No se pudo guardar la solicitud'));
    });
  });
});
