import { describe, it, expect } from 'vitest';
import { db, auth } from '../app/config/firebase';

describe('Prueba 1: Validación del Módulo de Configuración de Firebase', () => {
  it('Debe inicializar correctamente los servicios de Firestore y Auth', () => {
    expect(db).toBeDefined();
    expect(auth).toBeDefined();
  });
});