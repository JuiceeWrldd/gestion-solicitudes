# Gestión de Solicitudes

Proyecto final del SENA: una aplicación web para la gestión de solicitudes, construida con **React**, **Vite**, **TypeScript**, **Tailwind CSS** y **Firebase** (Authentication y Firestore).

## Funcionalidades

- Registro de empresas nuevas, con correo y contraseña o con Google: quien se registra crea su empresa y queda como su administrador.
- Inicio de sesión con correo y contraseña o con Google. Los integrantes no se registran solos: los agrega el administrador de su empresa.
- Recuperación de contraseña.
- Rol de **usuario**: crear, editar y eliminar sus propias solicitudes.
- Rol de **administrador**: ver las solicitudes de su empresa, aprobarlas o rechazarlas, y responder a ellas.
- El administrador también agrega integrantes a su empresa (con una contraseña temporal que cada persona cambia en su primer ingreso), define en qué oficina está cada uno y puede desactivarlos.
- Cada empresa ve solo sus propios datos.

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

- **organizaciones/{orgId}**: la empresa (`nombre`, `adminId`, `fechaCreacion`). Se crea al registrarse el administrador.
- **usuarios/{uid}**: perfil del usuario, con `rol` (`usuario` | `admin`), `orgId` (su empresa), `departamento`, `activo` y `debeCambiarClave`.
- **solicitudes/{id}**: solicitudes creadas por los usuarios, con su `orgId`, su estado y la respuesta del administrador.

Las reglas de seguridad están en `firestore.rules`.

## Autor

Jose Ramirez— Proyecto final SENA.
