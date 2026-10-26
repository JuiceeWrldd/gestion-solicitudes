import { describe, it, expect } from 'vitest';
import { generarClave } from '../app/utils/clave';

describe('generarClave', () => {
  it('genera una contraseña de 12 caracteres por defecto', () => {
    expect(generarClave()).toHaveLength(12);
  });

  it('respeta el largo que se le pida', () => {
    expect(generarClave(20)).toHaveLength(20);
  });

  it('no usa caracteres que se confunden (0, O, 1, l, I)', () => {
    // se generan muchas para que la prueba sea confiable
    const todas = Array.from({ length: 200 }, () => generarClave()).join('');
    expect(todas).not.toMatch(/[0O1lI]/);
  });

  it('solo usa letras y números', () => {
    expect(generarClave(50)).toMatch(/^[A-Za-z0-9]+$/);
  });

  it('genera una contraseña distinta cada vez', () => {
    const claves = new Set(Array.from({ length: 50 }, () => generarClave()));
    expect(claves.size).toBe(50);
  });
});
