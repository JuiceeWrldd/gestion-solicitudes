# Gestión de Solicitudes

Proyecto final del SENA: una aplicación web para la gestión de solicitudes, construida con **React**, **Vite**, **TypeScript**, **Tailwind CSS** y **Firebase** (Authentication y Firestore).

## Funcionalidades

- Registro e inicio de sesión con correo/contraseña y con Google.
- Recuperación de contraseña.
- Rol de **usuario**: crear, editar y eliminar sus propias solicitudes.
- Rol de **administrador**: ver todas las solicitudes, aprobarlas o rechazarlas, y responder a ellas.
- Pantalla de manejo de errores (404/401/500).

## Tecnologías

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/) (Auth + Firestore)
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react) para pruebas unitarias

## Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior
- Una cuenta de [Firebase](https://console.firebase.google.com/) con un proyecto creado (con Authentication y Firestore habilitados)

## Instalación

1. Clona el repositorio e instala las dependencias:

   ```bash
   npm install
   ```

2. Crea un archivo `.env` en la raíz del proyecto a partir de `.env.example`:

   ```bash
   cp .env.example .env
   ```

3. Completa `.env` con las credenciales de tu proyecto de Firebase (las encuentras en **Configuración del proyecto > Tus apps > SDK setup and configuration**):

   ```
   VITE_FIREBASE_API_KEY=
   VITE_FIREBASE_AUTH_DOMAIN=
   VITE_FIREBASE_PROJECT_ID=
   VITE_FIREBASE_STORAGE_BUCKET=
   VITE_FIREBASE_MESSAGING_SENDER_ID=
   VITE_FIREBASE_APP_ID=
   ```

   En Firebase, habilita los métodos de inicio de sesión **Correo/contraseña** y **Google** en Authentication, y crea una base de datos en Firestore.

## Scripts disponibles

| Comando           | Descripción                                      |
| ----------------- | ------------------------------------------------- |
| `npm run dev`       | Levanta el servidor de desarrollo de Vite.         |
| `npm run build`     | Verifica los tipos con TypeScript y genera la build de producción. |
| `npm run preview`   | Sirve localmente la build de producción.           |
| `npm test`          | Ejecuta las pruebas unitarias con Vitest.          |
| `npm run typecheck` | Verifica los tipos de TypeScript sin compilar.     |

## Estructura del proyecto

```
src/
├── app/
│   ├── components/   # Pantallas y componentes de la aplicación
│   └── config/       # Configuración de Firebase
├── styles/           # Estilos globales
└── __tests__/        # Pruebas unitarias
```

## Modelo de datos (Firestore)

- **usuarios/{uid}**: perfil del usuario, incluye el campo `rol` (`usuario` | `admin`).
- **solicitudes/{id}**: solicitudes creadas por los usuarios, con su estado (pendiente/aprobada/rechazada) y respuesta del administrador.

## Autor

Jose — Proyecto final SENA.
