// Sin letras que se confunden (0/O, 1/l/I) para que sea fácil de dictar o copiar
const CARACTERES = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';

export function generarClave(largo = 12): string {
  const valores = crypto.getRandomValues(new Uint32Array(largo));
  return Array.from(valores, (v) => CARACTERES[v % CARACTERES.length]).join('');
}
