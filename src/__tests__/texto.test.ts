import { describe, it, expect } from 'vitest';
import { limpiarTexto } from '../app/utils/texto';

describe('limpiarTexto (una línea)', () => {
  it('quita etiquetas HTML y scripts', () => {
    expect(limpiarTexto('<script>alert(1)</script>Hola')).toBe('alert(1)Hola');
    expect(limpiarTexto('<b>negrita</b> y <img src=x onerror=alert(1)>')).toBe('negrita y');
  });

  it('no toca símbolos < y > que no forman una etiqueta', () => {
    expect(limpiarTexto('si a < b y c > d')).toBe('si a < b y c > d');
    expect(limpiarTexto('presupuesto <5000')).toBe('presupuesto <5000');
  });

  it('recorta espacios y junta los repetidos', () => {
    expect(limpiarTexto('   Hola     mundo   ')).toBe('Hola mundo');
  });

  it('convierte saltos de línea y tabulaciones en espacios', () => {
    expect(limpiarTexto('uno\ndos\t tres')).toBe('uno dos tres');
  });

  it('quita caracteres de control e invisibles', () => {
    expect(limpiarTexto('a\u0000b\u0007c')).toBe('a b c');
    expect(limpiarTexto('ho​la')).toBe('hola');
    expect(limpiarTexto('‮evil')).toBe('evil');
  });

  it('respeta tildes, ñ y emojis', () => {
    expect(limpiarTexto('  Contraseña — niño 😀 ')).toBe('Contraseña — niño 😀');
  });

  it('devuelve vacío si solo había etiquetas o espacios', () => {
    expect(limpiarTexto('<div></div>   ')).toBe('');
  });
});

describe('limpiarTexto (varias líneas)', () => {
  it('conserva los saltos de línea', () => {
    expect(limpiarTexto('uno\ndos', true)).toBe('uno\ndos');
  });

  it('limita las líneas en blanco seguidas a una', () => {
    expect(limpiarTexto('uno\n\n\n\n\ndos', true)).toBe('uno\n\ndos');
  });

  it('normaliza los saltos de Windows', () => {
    expect(limpiarTexto('uno\r\ndos', true)).toBe('uno\ndos');
  });

  it('también quita las etiquetas y los caracteres de control', () => {
    expect(limpiarTexto('hola <script>x</script>\u0000 mundo', true)).toBe('hola x mundo');
  });
});
