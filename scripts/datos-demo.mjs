// Llena los emuladores de Firebase con una empresa de ejemplo para "npm run demo".
// Escribe directo en los emuladores (sin pasar por las reglas), así que solo sirve en local.
// Cuentas de prueba (contraseña de todas: demo1234):
//   admin@demo.test (administradora), carlos@demo.test y ana@demo.test (usuarios)

const PROYECTO = 'demo-gestion-solicitudes';
const AUTH = `http://127.0.0.1:9099/identitytoolkit.googleapis.com/v1/projects/${PROYECTO}`;
const FIRESTORE = `http://127.0.0.1:8080/v1/projects/${PROYECTO}/databases/(default)/documents`;
const CABECERAS = { 'Content-Type': 'application/json', Authorization: 'Bearer owner' };
const CLAVE = 'demo1234';
const ORG = 'org-demo';

const PERSONAS = [
  { uid: 'laura', nombre: 'Laura Méndez', email: 'admin@demo.test', rol: 'admin', departamento: 'Dirección General' },
  { uid: 'carlos', nombre: 'Carlos Pérez', email: 'carlos@demo.test', rol: 'usuario', departamento: 'Logística' },
  { uid: 'ana', nombre: 'Ana Gómez', email: 'ana@demo.test', rol: 'usuario', departamento: 'Recursos Humanos' },
];

const hace = (dias, horas = 0) => new Date(Date.now() - (dias * 24 + horas) * 3600 * 1000);

const SOLICITUDES = [
  [
    'carlos',
    'Impresora del segundo piso sin tóner',
    'Soporte Técnico',
    'Alta',
    'En revisión',
    hace(0, 3),
    'La impresora del segundo piso dejó de imprimir esta mañana. Muestra el aviso de tóner vacío.',
  ],
  [
    'ana',
    'Vacaciones del 15 al 26 de diciembre',
    'Recursos Humanos',
    'Media',
    'Aprobada',
    hace(2),
    'Quiero tomar mis vacaciones pendientes del año entre el 15 y el 26 de diciembre.',
    'Aprobadas. ¡Que las disfrutes!',
  ],
  [
    'carlos',
    'Camión para el despacho del viernes',
    'Logística',
    'Alta',
    'Aprobada',
    hace(3),
    'Necesitamos un camión adicional para el despacho grande del viernes a Medellín.',
    'Listo, ya quedó reservado.',
  ],
  [
    'ana',
    'Reembolso de gastos de viaje a Cali',
    'Financiera',
    'Baja',
    'En revisión',
    hace(1, 5),
    'Adjunto los gastos del viaje a Cali de la semana pasada: transporte y alimentación.',
  ],
  [
    'carlos',
    'Silla ergonómica para mi puesto',
    'Administrativa',
    'Baja',
    'Rechazada',
    hace(6),
    'Mi silla actual está dañada y me está causando dolor de espalda. Pido una ergonómica.',
    'Por ahora no hay presupuesto; lo revisamos en enero.',
  ],
  [
    'ana',
    'Acceso al sistema de nómina',
    'Soporte Técnico',
    'Media',
    'Aprobada',
    hace(8),
    'Necesito acceso de lectura al sistema de nómina para preparar los informes del mes.',
    'Ya tienes acceso.',
  ],
  [
    'carlos',
    'Inventario de fin de año',
    'Logística',
    'Media',
    'En revisión',
    hace(0, 8),
    'Propongo hacer el inventario de la bodega principal el 28 de diciembre, con todo el equipo.',
  ],
];

// Valores al formato REST de Firestore
const valor = (v) =>
  v instanceof Date
    ? { timestampValue: v.toISOString() }
    : typeof v === 'boolean'
      ? { booleanValue: v }
      : { stringValue: v };
const campos = (obj) => ({ fields: Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, valor(v)])) });

async function pedir(url, metodo, cuerpo) {
  const r = await fetch(url, { method: metodo, headers: CABECERAS, body: JSON.stringify(cuerpo) });
  if (!r.ok) throw new Error(`${metodo} ${url}: ${r.status} ${await r.text()}`);
}
const guardar = (ruta, datos) => pedir(`${FIRESTORE}/${ruta}`, 'PATCH', campos(datos));

for (const p of PERSONAS) {
  await pedir(`${AUTH}/accounts`, 'POST', {
    localId: p.uid,
    email: p.email,
    password: CLAVE,
    displayName: p.nombre,
    emailVerified: true,
  });
}

await guardar(`organizaciones/${ORG}`, { nombre: 'Distribuidora Andina', adminId: 'laura', fechaCreacion: hace(30) });

for (const p of PERSONAS) {
  await guardar(`usuarios/${p.uid}`, {
    nombre: p.nombre,
    email: p.email,
    departamento: p.departamento,
    rol: p.rol,
    orgId: ORG,
    activo: true,
    debeCambiarClave: false,
    fechaRegistro: hace(30),
  });
}

for (const [i, [uid, titulo, tipo, prioridad, estado, fecha, descripcion, respuestaAdmin]] of SOLICITUDES.entries()) {
  const autor = PERSONAS.find((p) => p.uid === uid);
  await guardar(`solicitudes/demo-${i + 1}`, {
    titulo,
    tipo,
    prioridad,
    estado,
    fecha,
    descripcion,
    usuarioId: uid,
    orgId: ORG,
    autorNombre: autor.nombre,
    autorEmail: autor.email,
    ...(respuestaAdmin ? { respuestaAdmin } : {}),
  });
}

console.log('Datos de ejemplo listos. Entra con admin@demo.test / demo1234 (o carlos@ / ana@demo.test).');
