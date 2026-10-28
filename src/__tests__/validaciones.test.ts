import { describe, it, expect } from 'vitest';
import { esCorreoValido } from '../app/utils/validaciones';

describe('esCorreoValido', () => {
  it('acepta correos normales', () => {
    expect(esCorreoValido('ana@empresa.com')).toBe(true);
    expect(esCorreoValido('ana.gomez+prueba@mi-empresa.com.co')).toBe(true);
  });

  it('rechaza correos mal formados', () => {
    expect(esCorreoValido('')).toBe(false);
    expect(esCorreoValido('ana')).toBe(false);
    expect(esCorreoValido('ana@')).toBe(false);
    expect(esCorreoValido('@empresa.com')).toBe(false);
    expect(esCorreoValido('ana@empresa')).toBe(false);
    expect(esCorreoValido('ana @empresa.com')).toBe(false);
  });

  it('rechaza correos más largos de 254 caracteres', () => {
    expect(esCorreoValido(`${'a'.repeat(250)}@x.co`)).toBe(false);
  });
});
