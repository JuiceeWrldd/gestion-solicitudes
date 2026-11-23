// Pruebas de firestore.rules contra el emulador de Firestore (npm run test:reglas).
// Van aparte de las pruebas normales porque necesitan el emulador encendido (y Java).
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['pruebas-reglas/**/*.test.ts'],
    environment: 'node',
    fileParallelism: false, // todas usan la misma base del emulador
    testTimeout: 20000,
    hookTimeout: 30000,
  },
});
