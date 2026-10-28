import { LIMITES } from '../config/limites';

export const esCorreoValido = (correo: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) && correo.length <= LIMITES.email;
