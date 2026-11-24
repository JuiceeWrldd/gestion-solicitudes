// Reglas de ESLint: las recomendadas de JavaScript y TypeScript, más las de los hooks de React
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Los hooks cargan los datos de Firebase al montarse (cargar() pone "cargando" y luego los datos):
      // es el uso normal de un efecto para traer datos de afuera, no un estado derivado
      'react-hooks/set-state-in-effect': 'off',
    },
  },
);
