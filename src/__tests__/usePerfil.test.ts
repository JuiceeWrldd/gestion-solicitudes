import { renderHook, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { usePerfil } from '../app/hooks/usePerfil';
import { obtenerOrganizacion, obtenerPerfil } from '../app/services/perfil';

const authFalso = vi.hoisted(() => ({ currentUser: { uid: 'u1' } as { uid: string } | null }));

vi.mock('../app/config/firebase', () => ({ auth: authFalso }));
vi.mock('../app/services/perfil', () => ({ obtenerPerfil: vi.fn(), obtenerOrganizacion: vi.fn() }));

const perfil = { nombre: 'Ana', email: 'ana@empresa.com', departamento: 'Logística', rol: 'usuario' as const, orgId: 'gestiosync', activo: true, fechaRegistro: new Date() };
const empresa = { nombre: 'GestioSync', adminId: 'admin1' };

describe('usePerfil', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'error').mockImplementation(() => {});
    authFalso.currentUser = { uid: 'u1' };
    vi.mocked(obtenerPerfil).mockResolvedValue(perfil);
    vi.mocked(obtenerOrganizacion).mockResolvedValue(empresa);
  });

  it('empieza cargando y termina con el perfil y su empresa', async () => {
    const { result } = renderHook(() => usePerfil());
    expect(result.current.cargando).toBe(true);

    await waitFor(() => expect(result.current.cargando).toBe(false));
    expect(result.current.perfil).toEqual(perfil);
    expect(result.current.organizacion).toEqual(empresa);
    expect(result.current.error).toBe(false);
    expect(obtenerPerfil).toHaveBeenCalledWith('u1');
  });

  it('marca sinPerfil cuando la cuenta no tiene perfil', async () => {
    vi.mocked(obtenerPerfil).mockResolvedValue(null);
    const { result } = renderHook(() => usePerfil());

    await waitFor(() => expect(result.current.cargando).toBe(false));
    expect(result.current.sinPerfil).toBe(true);
    expect(result.current.error).toBe(false);
  });

  it('no pide la empresa de una cuenta desactivada', async () => {
    vi.mocked(obtenerPerfil).mockResolvedValue({ ...perfil, activo: false });
    const { result } = renderHook(() => usePerfil());

    await waitFor(() => expect(result.current.cargando).toBe(false));
    expect(obtenerOrganizacion).not.toHaveBeenCalled();
  });

  it('si el perfil no carga, deja de cargar y avisa del error', async () => {
    vi.mocked(obtenerPerfil).mockRejectedValue(new Error('sin internet'));
    const { result } = renderHook(() => usePerfil());

    await waitFor(() => expect(result.current.cargando).toBe(false));
    expect(result.current.error).toBe(true);
    expect(result.current.perfil).toBeNull();
    expect(result.current.sinPerfil).toBe(false);
  });

  it('al reintentar vuelve a pedir el perfil y quita el error', async () => {
    vi.mocked(obtenerPerfil).mockRejectedValueOnce(new Error('sin internet'));
    const { result } = renderHook(() => usePerfil());
    await waitFor(() => expect(result.current.error).toBe(true));

    await act(() => result.current.reintentar());

    expect(result.current.error).toBe(false);
    expect(result.current.perfil).toEqual(perfil);
    expect(obtenerPerfil).toHaveBeenCalledTimes(2);
  });

  it('si solo falla la empresa, el perfil sirve igual', async () => {
    vi.mocked(obtenerOrganizacion).mockRejectedValue(new Error('sin permiso'));
    const { result } = renderHook(() => usePerfil());

    await waitFor(() => expect(result.current.cargando).toBe(false));
    expect(result.current.perfil).toEqual(perfil);
    expect(result.current.organizacion).toBeNull();
    expect(result.current.error).toBe(false);
  });
});
