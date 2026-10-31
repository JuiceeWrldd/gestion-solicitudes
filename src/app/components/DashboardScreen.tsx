import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { Home, FilePlus, FileText, User, Users, Menu, X } from 'lucide-react';
import { auth } from '../config/firebase';
import { usePerfil } from '../hooks/usePerfil';
import { useSolicitudes } from '../hooks/useSolicitudes';
import type { DatosSolicitud } from '../services/solicitudes';
import type { Solicitud } from '../types';
import { Sidebar, type ItemMenu, type NavItem } from './dashboard/Sidebar';
import { InicioSection } from './dashboard/InicioSection';
import { SolicitudForm } from './dashboard/SolicitudForm';
import { SolicitudesTabla } from './dashboard/SolicitudesTabla';
import { PerfilSection } from './dashboard/PerfilSection';
import { IntegrantesScreen } from './IntegrantesScreen';
import { CambiarClaveScreen } from './CambiarClaveScreen';
import { AvisoCuentaScreen } from './AvisoCuentaScreen';

interface DashboardScreenProps {
  onNavigateToLogin: () => void;
}

export function DashboardScreen({ onNavigateToLogin }: DashboardScreenProps) {
  const [activeNav, setActiveNav] = useState<NavItem>('nueva');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Solicitud que se está editando; formKey reinicia el formulario cuando hace falta
  const [editando, setEditando] = useState<Solicitud | null>(null);
  const [formKey, setFormKey] = useState(0);

  const { perfil, setPerfil, organizacion, sinPerfil } = usePerfil();
  const { solicitudes, cargando, cambiarEstado, responder, eliminar, guardar } = useSolicitudes(perfil, setErrorMsg);

  const esAdmin = perfil?.rol === 'admin';
  const nombre = auth.currentUser?.displayName ?? '';

  const cerrarSesion = () => {
    signOut(auth);
    onNavigateToLogin();
  };

  const irA = (id: NavItem) => {
    setActiveNav(id);
    setSidebarOpen(false);
    setErrorMsg(null);
    if (id === 'nueva' && !editando) setFormKey((k) => k + 1);
  };

  const iniciarEdicion = (solicitud: Solicitud) => {
    setEditando(solicitud);
    setFormKey((k) => k + 1);
    setActiveNav('nueva');
  };

  const cancelarEdicion = () => {
    setEditando(null);
    setFormKey((k) => k + 1);
  };

  const guardarSolicitud = async (datos: DatosSolicitud) => {
    const ok = await guardar(datos, editando?.id ?? null);
    if (ok) setEditando(null);
    return ok;
  };

  // Pantallas que reemplazan al dashboard
  if (sinPerfil) {
    return (
      <AvisoCuentaScreen
        titulo="Tu cuenta no pertenece a ninguna empresa"
        mensaje="Pídele a tu administrador que te agregue desde la sección Integrantes. Si vas a administrar una empresa nueva, cierra sesión y regístrala desde la pantalla de acceso."
        onCerrarSesion={cerrarSesion}
      />
    );
  }

  if (perfil?.activo === false) {
    return (
      <AvisoCuentaScreen
        titulo="Cuenta desactivada"
        mensaje="Tu administrador desactivó tu acceso. Si crees que es un error, habla con él."
        onCerrarSesion={cerrarSesion}
      />
    );
  }

  if (perfil?.debeCambiarClave) {
    return (
      <CambiarClaveScreen
        onListo={() => setPerfil((p) => (p ? { ...p, debeCambiarClave: false } : p))}
        onCerrarSesion={cerrarSesion}
      />
    );
  }

  const items: ItemMenu[] = [
    { id: 'inicio', label: 'Inicio', icon: <Home size={20} /> },
    { id: 'nueva', label: 'Nueva solicitud', icon: <FilePlus size={20} /> },
    { id: 'mis', label: esAdmin ? 'Solicitudes' : 'Mis solicitudes', icon: <FileText size={20} /> },
    ...(esAdmin ? [{ id: 'integrantes' as const, label: 'Integrantes', icon: <Users size={20} /> }] : []),
    { id: 'perfil', label: 'Perfil', icon: <User size={20} /> },
  ];
  const seccionActual = items.find((n) => n.id === activeNav)?.label;

  const sidebar = (
    <Sidebar
      items={items}
      activo={activeNav}
      nombre={nombre}
      rolTexto={esAdmin ? 'Administrador' : (perfil?.departamento || 'Usuario')}
      onSeleccionar={irA}
      onCerrarSesion={cerrarSesion}
    />
  );

  const contenido: Record<NavItem, React.ReactNode> = {
    inicio: <InicioSection solicitudes={solicitudes} esAdmin={esAdmin} />,
    nueva: (
      <SolicitudForm
        key={formKey}
        inicial={editando}
        onGuardar={guardarSolicitud}
        onCancelar={cancelarEdicion}
        onTerminado={() => setActiveNav('mis')}
      />
    ),
    mis: (
      <SolicitudesTabla
        solicitudes={solicitudes}
        cargando={cargando}
        esAdmin={esAdmin}
        onCambiarEstado={cambiarEstado}
        onResponder={responder}
        onEditar={iniciarEdicion}
        onEliminar={eliminar}
      />
    ),
    integrantes: esAdmin && perfil?.orgId && auth.currentUser
      ? <IntegrantesScreen orgId={perfil.orgId} adminUid={auth.currentUser.uid} />
      : null,
    perfil: <PerfilSection perfil={perfil} organizacion={organizacion} />,
  };

  return (
    <div className="flex min-h-screen font-sans bg-slate-50">
      <aside className="hidden lg:flex flex-col w-64 shrink-0 fixed top-0 left-0 h-full bg-gradient-to-br from-indigo-700 to-indigo-900">
        {sidebar}
      </aside>

      {/* Menú lateral deslizable (celular y tablet) */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`lg:hidden fixed top-0 left-0 z-50 h-full w-64 flex flex-col bg-gradient-to-br from-indigo-700 to-indigo-900 transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          aria-label="Cerrar menú"
          className="absolute top-4 right-4 text-white/70 hover:text-white"
        >
          <X size={22} />
        </button>
        {sidebar}
      </aside>

      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0">
        <header className="sticky top-0 z-40 flex items-center gap-3 px-4 sm:px-8 h-16 bg-white border-b border-gray-100 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menú"
            className="lg:hidden p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <Menu size={22} />
          </button>
          <span className="lg:hidden text-gray-900 text-sm font-semibold">{seccionActual}</span>
          <div className="hidden lg:flex items-center gap-2 text-sm">
            <span className="text-gray-400">{organizacion?.nombre ?? 'GestioSync'}</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-semibold">{seccionActual}</span>
          </div>
        </header>
        <div className="flex-1 p-4 sm:p-8">
          {errorMsg && (
            <div role="alert" className="mb-5 flex items-start justify-between gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              <span>{errorMsg}</span>
              <button onClick={() => setErrorMsg(null)} aria-label="Cerrar aviso" className="shrink-0 text-red-400 hover:text-red-600">
                <X size={18} />
              </button>
            </div>
          )}
          {contenido[activeNav]}
        </div>
      </main>
    </div>
  );
}
