import { useState } from 'react';
import { porcentaje } from '../../utils/estadisticas';

export interface DatoBarra {
  nombre: string;
  cantidad: number;
  color: string;
  icono?: React.ReactNode;
}

interface GraficoBarrasProps {
  titulo: string;
  descripcion: string;
  columna: string; // encabezado de la primera columna en la vista de tabla
  datos: DatoBarra[];
  verTabla: boolean;
}

const GROSOR_BARRA = 16; // las barras nunca pasan de 24 px
const ANCHO_MAXIMO = 80; // la barra más larga ocupa el 80 % del espacio; el resto es para su valor

// Colores de texto: el color de la barra identifica, el texto va siempre en tinta neutra
const TINTA = { principal: 'text-[#0b0b0b]', secundaria: 'text-[#52514e]', suave: 'text-[#898781]' };

const solicitudesTexto = (n: number) => `${n} ${n === 1 ? 'solicitud' : 'solicitudes'}`;

// Barras horizontales, de la mayor a la menor. Cada una lleva su valor al final; al pasar el cursor
// o enfocarla con el teclado muestra el detalle. La vista de tabla da los mismos datos sin depender del color.
export function GraficoBarras({ titulo, descripcion, columna, datos, verTabla }: GraficoBarrasProps) {
  const [activo, setActivo] = useState<string | null>(null);

  const total = datos.reduce((suma, d) => suma + d.cantidad, 0);
  const maximo = Math.max(1, ...datos.map((d) => d.cantidad));

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100">
      <h3 className={`${TINTA.principal} text-[15px] font-bold`}>{titulo}</h3>
      <p className={`${TINTA.suave} text-xs mt-0.5 mb-4`}>{descripcion}</p>

      {verTabla ? (
        <table className="w-full text-sm">
          <caption className="sr-only">{titulo}</caption>
          <thead>
            <tr className={`${TINTA.suave} text-xs text-left`}>
              <th className="pb-2 font-semibold">{columna}</th>
              <th className="pb-2 font-semibold text-right">Solicitudes</th>
              <th className="pb-2 font-semibold text-right">% del total</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((d) => (
              <tr key={d.nombre} className="border-t border-gray-100">
                <td className={`py-2 ${TINTA.secundaria}`}>{d.nombre}</td>
                <td className={`py-2 text-right font-semibold tabular-nums ${TINTA.principal}`}>{d.cantidad}</td>
                <td className={`py-2 text-right tabular-nums ${TINTA.secundaria}`}>{porcentaje(d.cantidad, total)}%</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-gray-200">
              <td className={`pt-2 font-semibold ${TINTA.principal}`}>Total</td>
              <td className={`pt-2 text-right font-semibold tabular-nums ${TINTA.principal}`}>{total}</td>
              <td />
            </tr>
          </tfoot>
        </table>
      ) : (
        <ul aria-label={titulo} className="flex flex-col gap-1">
          {datos.map((d) => {
            const pct = porcentaje(d.cantidad, total);
            const resaltada = activo === d.nombre;

            return (
              <li key={d.nombre} className="relative">
                {/* La primera columna (8.5rem) es la de los nombres; el detalle se abre justo donde empieza la barra */}
                <div
                  tabIndex={0}
                  aria-label={`${d.nombre}: ${solicitudesTexto(d.cantidad)}, ${pct}% del total`}
                  onMouseEnter={() => setActivo(d.nombre)}
                  onMouseLeave={() => setActivo(null)}
                  onFocus={() => setActivo(d.nombre)}
                  onBlur={() => setActivo(null)}
                  className="grid grid-cols-[minmax(0,8.5rem)_minmax(0,1fr)] min-h-8 items-center gap-3 rounded-md px-1 py-1.5 outline-none transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <span className={`flex items-center gap-1.5 truncate text-[13px] ${TINTA.secundaria}`}>
                    {d.icono}
                    <span className="truncate">{d.nombre}</span>
                  </span>

                  <div className="flex items-center gap-2 min-w-0">
                    {/* El ancho y el color salen de los datos, por eso van en style */}
                    <div
                      className={`transition-[filter] duration-100 ${resaltada ? 'brightness-110' : ''}`}
                      style={{
                        width: `${(d.cantidad / maximo) * ANCHO_MAXIMO}%`,
                        height: `${GROSOR_BARRA}px`,
                        background: d.color,
                        borderRadius: '0 4px 4px 0', // cuadrada en la base, redondeada donde termina el dato
                      }}
                    />
                    <span className={`shrink-0 text-[13px] font-semibold ${TINTA.principal}`}>{d.cantidad}</span>
                  </div>
                </div>

                {resaltada && (
                  <div
                    role="tooltip"
                    className="pointer-events-none absolute left-[calc(8.5rem+0.75rem)] top-full z-10 mt-1 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-md"
                  >
                    <div className={`text-[13px] font-bold ${TINTA.principal}`}>{solicitudesTexto(d.cantidad)}</div>
                    <div className={`flex items-center gap-1.5 text-xs ${TINTA.secundaria}`}>
                      <span aria-hidden="true" className="w-2.5 h-[3px] rounded-sm" style={{ background: d.color }} />
                      {d.nombre} · {pct}% del total
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
