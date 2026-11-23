// Pruebas de firestore.rules: cada caso intenta leer o escribir como una persona distinta
// y comprueba que el emulador lo deje pasar (assertSucceeds) o lo frene (assertFails).
import { readFileSync } from 'node:fs';
import { afterAll, beforeAll, beforeEach, describe, it } from 'vitest';
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  type RulesTestEnvironment,
} from '@firebase/rules-unit-testing';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  writeBatch,
  type DocumentData,
} from 'firebase/firestore';

let env: RulesTestEnvironment;

// --- Personas ---
// org1: admin1 (verificado), ana (usuaria) y beto (desactivado). org2: admin2.
const CUENTAS = {
  admin1: { email: 'admin1@uno.com', email_verified: true },
  admin1SinVerificar: { email: 'admin1@uno.com', email_verified: false },
  ana: { email: 'ana@uno.com', email_verified: false },
  beto: { email: 'beto@uno.com', email_verified: false },
  admin2: { email: 'admin2@dos.com', email_verified: true },
  nuevo: { email: 'nuevo@tres.com', email_verified: false },
};

const como = (uid: keyof typeof CUENTAS) =>
  env.authenticatedContext(uid === 'admin1SinVerificar' ? 'admin1' : uid, CUENTAS[uid]).firestore();

const perfil = (nombre: string, email: string, extra: DocumentData = {}) => ({
  nombre,
  email,
  departamento: 'Operaciones',
  rol: 'usuario',
  orgId: 'org1',
  activo: true,
  debeCambiarClave: false,
  fechaRegistro: new Date(),
  ...extra,
});

const solicitud = (extra: DocumentData = {}) => ({
  titulo: 'Impresora sin tinta',
  tipo: 'Soporte Técnico',
  descripcion: 'La impresora del segundo piso no imprime nada.',
  prioridad: 'Media',
  estado: 'En revisión',
  usuarioId: 'ana',
  orgId: 'org1',
  autorNombre: 'Ana Gómez',
  autorEmail: 'ana@uno.com',
  fecha: new Date(),
  ...extra,
});

// Lo que manda la app al crear una solicitud
const nuevaSolicitud = (extra: DocumentData = {}) => ({ ...solicitud(), fecha: serverTimestamp(), ...extra });

beforeAll(async () => {
  env = await initializeTestEnvironment({
    projectId: 'demo-gestion-solicitudes',
    firestore: { rules: readFileSync('firestore.rules', 'utf8') },
  });
});

afterAll(() => env.cleanup());

// Cada prueba arranca con los mismos datos, cargados sin pasar por las reglas
beforeEach(async () => {
  await env.clearFirestore();
  await env.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await setDoc(doc(db, 'organizaciones/org1'), { nombre: 'Empresa Uno', adminId: 'admin1' });
    await setDoc(doc(db, 'organizaciones/org2'), { nombre: 'Empresa Dos', adminId: 'admin2' });
    await setDoc(doc(db, 'usuarios/admin1'), perfil('Admin Uno', 'admin1@uno.com', { rol: 'admin', departamento: 'Dirección General' }));
    await setDoc(doc(db, 'usuarios/ana'), perfil('Ana Gómez', 'ana@uno.com'));
    await setDoc(doc(db, 'usuarios/beto'), perfil('Beto Ruiz', 'beto@uno.com', { activo: false }));
    await setDoc(doc(db, 'usuarios/admin2'), perfil('Admin Dos', 'admin2@dos.com', { rol: 'admin', orgId: 'org2' }));
    await setDoc(doc(db, 'solicitudes/de-ana'), solicitud());
    await setDoc(doc(db, 'solicitudes/aprobada'), solicitud({ estado: 'Aprobada' }));
    await setDoc(doc(db, 'solicitudes/de-beto'), solicitud({ usuarioId: 'beto', autorNombre: 'Beto Ruiz', autorEmail: 'beto@uno.com' }));
  });
});

describe('solicitudes: leer', () => {
  it('cada uno lee las suyas, pero no las de otro', async () => {
    await assertSucceeds(getDoc(doc(como('ana'), 'solicitudes/de-ana')));
    await assertFails(getDoc(doc(como('ana'), 'solicitudes/de-beto')));
  });

  it('el admin lee las de su empresa, pero no las de otra', async () => {
    await assertSucceeds(getDoc(doc(como('admin1'), 'solicitudes/de-beto')));
    await assertFails(getDoc(doc(como('admin2'), 'solicitudes/de-ana')));
  });

  it('las consultas que hace la app pasan, y la de otra empresa no', async () => {
    await assertSucceeds(getDocs(query(collection(como('ana'), 'solicitudes'), where('usuarioId', '==', 'ana'))));
    await assertSucceeds(getDocs(query(collection(como('admin1'), 'solicitudes'), where('orgId', '==', 'org1'))));
    await assertFails(getDocs(query(collection(como('admin2'), 'solicitudes'), where('orgId', '==', 'org1'))));
  });

  it('un admin con el correo sin verificar no lee las de los demás', async () => {
    await assertFails(getDoc(doc(como('admin1SinVerificar'), 'solicitudes/de-ana')));
  });

  it('sin iniciar sesión no se lee nada', async () => {
    await assertFails(getDoc(doc(env.unauthenticatedContext().firestore(), 'solicitudes/de-ana')));
  });
});

describe('solicitudes: crear', () => {
  it('un usuario crea una solicitud como la que manda la app', async () => {
    await assertSucceeds(addDoc(collection(como('ana'), 'solicitudes'), nuevaSolicitud()));
  });

  it('el autor tiene que ser el de su perfil y su cuenta', async () => {
    const db = como('ana');
    await assertFails(addDoc(collection(db, 'solicitudes'), nuevaSolicitud({ autorNombre: 'Otra Persona' })));
    await assertFails(addDoc(collection(db, 'solicitudes'), nuevaSolicitud({ autorEmail: 'otro@uno.com' })));
    await assertFails(addDoc(collection(db, 'solicitudes'), nuevaSolicitud({ usuarioId: 'beto' })));
  });

  it('no puede empezar aprobada, ni ir a otra empresa, ni traer campos de más', async () => {
    const db = como('ana');
    await assertFails(addDoc(collection(db, 'solicitudes'), nuevaSolicitud({ estado: 'Aprobada' })));
    await assertFails(addDoc(collection(db, 'solicitudes'), nuevaSolicitud({ orgId: 'org2' })));
    await assertFails(addDoc(collection(db, 'solicitudes'), nuevaSolicitud({ respuestaAdmin: 'Aprobada por mí' })));
    await assertFails(addDoc(collection(db, 'solicitudes'), nuevaSolicitud({ fecha: new Date(2020, 0, 1) })));
  });

  it('valida el contenido: título, detalle, categoría y prioridad', async () => {
    const db = como('ana');
    await assertFails(addDoc(collection(db, 'solicitudes'), nuevaSolicitud({ titulo: '' })));
    await assertFails(addDoc(collection(db, 'solicitudes'), nuevaSolicitud({ titulo: 'x'.repeat(101) })));
    await assertFails(addDoc(collection(db, 'solicitudes'), nuevaSolicitud({ descripcion: 'muy corta' })));
    await assertFails(addDoc(collection(db, 'solicitudes'), nuevaSolicitud({ tipo: 'Inventada' })));
    await assertFails(addDoc(collection(db, 'solicitudes'), nuevaSolicitud({ prioridad: 'Urgentísima' })));
  });

  it('una cuenta desactivada o sin sesión no crea', async () => {
    await assertFails(addDoc(collection(como('beto'), 'solicitudes'),
      nuevaSolicitud({ usuarioId: 'beto', autorNombre: 'Beto Ruiz', autorEmail: 'beto@uno.com' })));
    await assertFails(addDoc(collection(env.unauthenticatedContext().firestore(), 'solicitudes'), nuevaSolicitud()));
  });
});

describe('solicitudes: el dueño edita y borra', () => {
  it('edita el contenido mientras sigue en revisión', async () => {
    await assertSucceeds(updateDoc(doc(como('ana'), 'solicitudes/de-ana'), { titulo: 'Impresora sin tóner', prioridad: 'Alta' }));
  });

  it('no edita una ya decidida, ni cambia el estado ni la respuesta', async () => {
    const db = como('ana');
    await assertFails(updateDoc(doc(db, 'solicitudes/aprobada'), { titulo: 'Otro título' }));
    await assertFails(updateDoc(doc(db, 'solicitudes/de-ana'), { estado: 'Aprobada' }));
    await assertFails(updateDoc(doc(db, 'solicitudes/de-ana'), { respuestaAdmin: 'Listo' }));
  });

  it('borra la suya en revisión, pero no una decidida ni la de otro', async () => {
    const db = como('ana');
    await assertSucceeds(deleteDoc(doc(db, 'solicitudes/de-ana')));
    await assertFails(deleteDoc(doc(db, 'solicitudes/aprobada')));
    await assertFails(deleteDoc(doc(db, 'solicitudes/de-beto')));
  });

  it('una cuenta desactivada no lee, ni edita, ni borra las suyas', async () => {
    const db = como('beto');
    await assertFails(getDoc(doc(db, 'solicitudes/de-beto')));
    await assertFails(updateDoc(doc(db, 'solicitudes/de-beto'), { titulo: 'Cambio' }));
    await assertFails(deleteDoc(doc(db, 'solicitudes/de-beto')));
  });
});

describe('solicitudes: el admin decide y responde', () => {
  it('aprueba o rechaza una en revisión, con respuesta', async () => {
    const db = como('admin1');
    await assertSucceeds(updateDoc(doc(db, 'solicitudes/de-ana'), { estado: 'Aprobada', respuestaAdmin: 'Ya pedimos la tinta.' }));
    await assertSucceeds(updateDoc(doc(db, 'solicitudes/de-beto'), { estado: 'Rechazada' }));
  });

  it('decide una sola vez: no cambia una ya decidida ni la devuelve a revisión', async () => {
    const db = como('admin1');
    await assertFails(updateDoc(doc(db, 'solicitudes/aprobada'), { estado: 'Rechazada' }));
    await assertFails(updateDoc(doc(db, 'solicitudes/aprobada'), { estado: 'En revisión' }));
    await assertFails(updateDoc(doc(db, 'solicitudes/de-ana'), { estado: 'Pendiente' }));
  });

  it('puede responder una ya decidida sin cambiar su estado', async () => {
    await assertSucceeds(updateDoc(doc(como('admin1'), 'solicitudes/aprobada'), { respuestaAdmin: 'Llega el lunes.' }));
  });

  it('la respuesta no puede estar vacía ni ser enorme', async () => {
    const db = como('admin1');
    await assertFails(updateDoc(doc(db, 'solicitudes/de-ana'), { respuestaAdmin: '' }));
    await assertFails(updateDoc(doc(db, 'solicitudes/de-ana'), { respuestaAdmin: 'x'.repeat(1001) }));
  });

  it('no toca el contenido ni las solicitudes de otra empresa, y no borra', async () => {
    await assertFails(updateDoc(doc(como('admin1'), 'solicitudes/de-ana'), { titulo: 'Cambiado por el admin' }));
    await assertFails(updateDoc(doc(como('admin2'), 'solicitudes/de-ana'), { estado: 'Aprobada' }));
    await assertFails(deleteDoc(doc(como('admin1'), 'solicitudes/de-ana')));
  });

  it('un usuario normal o un admin sin verificar no deciden', async () => {
    await assertFails(updateDoc(doc(como('ana'), 'solicitudes/de-beto'), { estado: 'Aprobada' }));
    await assertFails(updateDoc(doc(como('admin1SinVerificar'), 'solicitudes/de-ana'), { estado: 'Aprobada' }));
  });
});

describe('usuarios', () => {
  it('cada uno lee su perfil (aunque esté desactivado), pero no el de otro', async () => {
    await assertSucceeds(getDoc(doc(como('ana'), 'usuarios/ana')));
    await assertSucceeds(getDoc(doc(como('beto'), 'usuarios/beto')));
    await assertFails(getDoc(doc(como('ana'), 'usuarios/admin1')));
  });

  it('el admin lee los perfiles de su empresa, pero no los de otra', async () => {
    await assertSucceeds(getDoc(doc(como('admin1'), 'usuarios/ana')));
    await assertSucceeds(getDocs(query(collection(como('admin1'), 'usuarios'), where('orgId', '==', 'org1'))));
    await assertFails(getDoc(doc(como('admin2'), 'usuarios/ana')));
  });

  it('el admin agrega un integrante a su empresa, como usuario y con clave temporal', async () => {
    const db = como('admin1');
    const integrante = perfil('Carla Díaz', 'carla@uno.com', { debeCambiarClave: true });
    await assertSucceeds(setDoc(doc(db, 'usuarios/carla'), integrante));
    await assertFails(setDoc(doc(db, 'usuarios/dani'), { ...integrante, rol: 'admin' }));
    await assertFails(setDoc(doc(db, 'usuarios/dani'), { ...integrante, orgId: 'org2' }));
    await assertFails(setDoc(doc(db, 'usuarios/dani'), { ...integrante, debeCambiarClave: false }));
    await assertFails(setDoc(doc(db, 'usuarios/dani'), { ...integrante, departamento: 'Inventada' }));
  });

  it('un usuario normal no crea perfiles', async () => {
    await assertFails(setDoc(doc(como('ana'), 'usuarios/carla'), perfil('Carla Díaz', 'carla@uno.com', { debeCambiarClave: true })));
  });

  it('el admin cambia la oficina y activa o desactiva a los de su empresa', async () => {
    const db = como('admin1');
    await assertSucceeds(updateDoc(doc(db, 'usuarios/ana'), { departamento: 'Logística' }));
    await assertSucceeds(updateDoc(doc(db, 'usuarios/ana'), { activo: false }));
    await assertSucceeds(updateDoc(doc(db, 'usuarios/beto'), { activo: true }));
  });

  it('el admin no se desactiva a sí mismo, no cambia roles ni toca otra empresa', async () => {
    await assertFails(updateDoc(doc(como('admin1'), 'usuarios/admin1'), { activo: false }));
    await assertFails(updateDoc(doc(como('admin1'), 'usuarios/ana'), { rol: 'admin' }));
    await assertFails(updateDoc(doc(como('admin2'), 'usuarios/ana'), { activo: false }));
  });

  it('cada uno quita su marca de "cambiar clave", pero no toca su rol, oficina ni empresa', async () => {
    const db = como('ana');
    await assertSucceeds(updateDoc(doc(db, 'usuarios/ana'), { debeCambiarClave: false }));
    await assertFails(updateDoc(doc(db, 'usuarios/ana'), { rol: 'admin' }));
    await assertFails(updateDoc(doc(db, 'usuarios/ana'), { departamento: 'Logística' }));
    await assertFails(updateDoc(doc(db, 'usuarios/ana'), { orgId: 'org2' }));
  });

  it('una cuenta desactivada no se reactiva sola', async () => {
    await assertFails(updateDoc(doc(como('beto'), 'usuarios/beto'), { activo: true, debeCambiarClave: false }));
  });

  it('nadie borra perfiles', async () => {
    await assertFails(deleteDoc(doc(como('admin1'), 'usuarios/ana')));
  });
});

describe('organizaciones y registro', () => {
  // Lo que hace la app al registrar una empresa: la empresa y el perfil del admin en un mismo lote
  const registrar = (uid: keyof typeof CUENTAS, empresa: DocumentData = {}, admin: DocumentData = {}) => {
    const db = como(uid);
    const lote = writeBatch(db);
    lote.set(doc(db, 'organizaciones/org-nueva'), { nombre: 'Empresa Tres', adminId: uid, fechaCreacion: serverTimestamp(), ...empresa });
    lote.set(doc(db, `usuarios/${uid}`), perfil('Nuevo Admin', CUENTAS[uid].email, { rol: 'admin', orgId: 'org-nueva', ...admin }));
    return lote.commit();
  };

  it('cada uno lee su empresa, pero no otra', async () => {
    await assertSucceeds(getDoc(doc(como('ana'), 'organizaciones/org1')));
    await assertFails(getDoc(doc(como('ana'), 'organizaciones/org2')));
  });

  it('una persona sin perfil registra su empresa y queda como su admin', async () => {
    await assertSucceeds(registrar('nuevo'));
  });

  it('el registro no deja poner a otro como admin, ni otro correo, ni pedir cambio de clave', async () => {
    await assertFails(registrar('nuevo', { adminId: 'otra-persona' }));
    await assertFails(registrar('nuevo', {}, { email: 'otro@tres.com' }));
    await assertFails(registrar('nuevo', {}, { debeCambiarClave: true }));
    await assertFails(registrar('nuevo', { nombre: 'E' }));
  });

  it('quien ya tiene perfil no registra otra empresa', async () => {
    await assertFails(registrar('ana'));
  });

  it('el perfil de admin solo, sin crear la empresa, no pasa', async () => {
    const db = como('nuevo');
    await assertFails(setDoc(doc(db, 'usuarios/nuevo'), perfil('Nuevo Admin', 'nuevo@tres.com', { rol: 'admin', orgId: 'org1' })));
  });

  it('una empresa ya creada no se modifica ni se borra', async () => {
    await assertFails(updateDoc(doc(como('admin1'), 'organizaciones/org1'), { nombre: 'Otro nombre' }));
    await assertFails(deleteDoc(doc(como('admin1'), 'organizaciones/org1')));
  });
});
