// Tipos compartidos del dominio de la aplicación (usuarios y solicitudes en Firestore)

export type Rol = 'usuario' | 'admin';

export type EstadoSolicitud = 'En revisión' | 'Aprobada' | 'Rechazada';

export type Prioridad = 'Alta' | 'Media' | 'Baja';

export interface PerfilUsuario {
  nombre: string;
  email: string;
  departamento: string;
  rol: Rol;
  fechaRegistro: Date;
  orgId?: string; // id de su empresa en organizaciones/{orgId}
  activo?: boolean; // false cuando el admin lo desactiva
  debeCambiarClave?: boolean; // true hasta que cambie la clave temporal
}

// Perfil con su id (el uid), para las listas
export type Integrante = PerfilUsuario & { id: string };

// Empresa: organizaciones/{orgId}. El orgId es el id del documento, que Firestore genera al registrarla
export interface Organizacion {
  nombre: string;
  adminId: string;
  fechaCreacion?: unknown; // Timestamp de Firestore (las empresas creadas por registro lo traen)
}

// Solicitud ya normalizada para mostrarse en la UI del dashboard
export interface Solicitud {
  id: string;
  titulo: string;
  tipo: string;
  estado: EstadoSolicitud;
  fecha: string; // ya formateada para mostrar (ej. 20/11/2026)
  hora: string;
  autorNombre: string;
  autorEmail: string;
  descripcion: string;
  prioridad: Prioridad;
  respuestaAdmin: string | null;
}
