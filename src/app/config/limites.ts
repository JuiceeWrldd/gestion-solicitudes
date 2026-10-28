// Largos máximos de los campos de texto. Son los mismos que valida firestore.rules.
export const LIMITES = {
  titulo: 100,
  descripcion: 2000,
  respuesta: 1000,
  nombre: 80,
  empresa: 80,
  email: 254,
} as const;

export const MIN_DESCRIPCION = 20;
