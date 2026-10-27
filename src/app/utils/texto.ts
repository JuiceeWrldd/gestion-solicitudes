// React ya escapa el texto al mostrarlo, así que un <script> escrito en un campo se ve como texto y no se ejecuta.
// Esto es una capa extra: se limpia lo que el usuario escribe antes de validarlo y guardarlo.

const ETIQUETAS_HTML = /<\/?[a-zA-Z!][^>]*>/g; // <b>, </div>, <script ...>, <!-- (no toca "a < b")
const CARACTERES_INVISIBLES = /[​-‏‪-‮⁦-⁩﻿]/g; // ancho cero y giros de texto

export function limpiarTexto(texto: string, multilinea = false): string {
  const base = texto.replace(ETIQUETAS_HTML, '').replace(CARACTERES_INVISIBLES, '').replace(/\r\n?/g, '\n');

  if (multilinea) {
    return base
      .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '') // controles, menos salto de línea y tabulación
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  // en una sola línea los saltos y tabulaciones pasan a ser espacios
  return base.replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/ {2,}/g, ' ').trim();
}
