/**
 * Vite Configuration
 * Configuración central del bundler. Integra React, el compilador 
 * de Tailwind CSS v4 y la resolución de rutas absolutas.
 */

/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';

// Interceptor para resolver assets nativos exportados desde Figma
function figmaAssetResolver(): Plugin {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '');
        return path.resolve(__dirname, 'src/assets', filename);
      }
    },
  };
}

export default defineConfig({

  base: '/gestion-solicitudes/',
  
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Configuración de alias '@' para importaciones limpias
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});

