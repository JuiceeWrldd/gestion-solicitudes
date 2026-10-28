// Tipos compartidos del dominio de la aplicación (usuarios y solicitudes en Firestore)

export type Rol = 'usuario' | 'admin';

export type EstadoSolicitud = 'En revisión' | 'Pendiente' | 'Aprobada' | 'Rechazada';

export type Prioridad = 'Alta' | 'Media' | 'Baja';

export interface PerfilUsuario {
  nombre: string;
  email: string;
  departamento: string;
  rol: Rol;
  fechaRegistro: Date;
  orgId?: string; // empresa a la que pertenece (el uid del admin dueño)
  activo?: boolean; // false cuando el admin lo desactiva
  debeCambiarClave?: boolean; // true hasta que cambie la clave temporal
}

// Perfil con su id (el uid), para las listas
export type Integrante = PerfilUsuario & { id: string };

// Empresa: organizaciones/{orgId}. El orgId (ej. "gestiosync") es el id del documento
export interface Organizacion {
  nombre: string;
  adminId: string;
  fechaCreacion?: unknown; // Timestamp de Firestore (las empresas creadas por registro lo traen)
}

// Documento tal como se guarda en la colección "solicitudes" de Firestore
export interface SolicitudDoc {
  titulo: string;
  tipo: string;
  descripcion: string;
  prioridad: Prioridad;
  estado: EstadoSolicitud;
  usuarioId: string;
  orgId: string;
  autorNombre: string;
  autorEmail: string;
  respuestaAdmin: string | null;
  fecha: unknown; // Timestamp de Firestore (serverTimestamp)
}

// Solicitud ya normalizada para mostrarse en la UI del dashboard
export interface Solicitud {
  id: string;
  title: string;
  type: string;
  status: EstadoSolicitud;
  date: string;
  time: string;
  autorNombre: string;
  autorEmail: string;
  descripcion: string;
  prioridad: Prioridad;
  respuestaAdmin: string | null;
}
