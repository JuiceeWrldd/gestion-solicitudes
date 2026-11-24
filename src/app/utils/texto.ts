// React ya escapa el texto al mostrarlo, así que un <script> escrito en un campo se ve como texto y no se ejecuta.
// Esto es una capa extra: se limpia lo que el usuario escribe antes de validarlo y guardarlo.

const ETIQUETAS_HTML = /<\/?[a-zA-Z!][^>]*>/g; // <b>, </div>, <script ...>, <!-- (no toca "a < b")
const CARACTERES_INVISIBLES = /[\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFEFF]/g; // ancho cero y giros de texto

// Buscar caracteres de control es justo lo que hacen estas dos expresiones, por eso se apaga no-control-regex
// eslint-disable-next-line no-control-regex
const CONTROLES_SIN_SALTOS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g; // menos salto de línea y tabulación
// eslint-disable-next-line no-control-regex
const CONTROLES = /[\u0000-\u001F\u007F]/g;

export function limpiarTexto(texto: string, multilinea = false): string {
  const base = texto.replace(ETIQUETAS_HTML, '').replace(CARACTERES_INVISIBLES, '').replace(/\r\n?/g, '\n');

  if (multilinea) {
    return base
      .replace(CONTROLES_SIN_SALTOS, '')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  // en una sola línea los saltos y tabulaciones pasan a ser espacios
  return base.replace(CONTROLES, ' ').replace(/ {2,}/g, ' ').trim();
}
