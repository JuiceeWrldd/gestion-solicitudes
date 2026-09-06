import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy, doc, getDoc, where, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../config/firebase'; 
import {
  Home,
  FilePlus,
  FileText,
  User,
  LogOut,
  ChevronDown,
  CheckCircle2,
  Clock,
  AlertTriangle,
  TrendingUp,
  MessageSquare,
  Pencil,
  Trash2
} from 'lucide-react';
import { LogoBrandWhite } from './LogoMark';
import { signOut } from 'firebase/auth';
import type { PerfilUsuario, Solicitud, EstadoSolicitud, Prioridad } from '../types';

interface DashboardScreenProps {
  onNavigateToLogin: () => void;
  onNavigateToError: () => void;
}

type NavItem = 'inicio' | 'nueva' | 'mis' | 'perfil';

const TIPOS = ['Soporte Técnico', 'Administrativa', 'Recursos Humanos', 'Financiera', 'Logística', 'Otro'];
const PRIORIDADES: Prioridad[] = ['Alta', 'Media', 'Baja'];

// Configuración de UI para estados
const statusConfig: Record<string, { color: string; bg: string; icon: React.ReactNode }> = {
  'En revisión': { color: '#B45309', bg: '#FEF3C7', icon: <Clock size={12} /> },
  'Aprobada': { color: '#15803D', bg: '#DCFCE7', icon: <CheckCircle2 size={12} /> },
  'Pendiente': { color: '#6B7280', bg: '#F3F4F6', icon: <Clock size={12} /> },
  'Rechazada': { color: '#DC3545', bg: '#FEF2F2', icon: <AlertTriangle size={12} /> },
};

const getPriorityColors = (p: string, isActive: boolean) => {
  if (!isActive) return { border: '#E5E7EB', bg: '#F9FAFB', text: '#6B7280' };
  if (p === 'Alta') return { border: '#FCA5A5', bg: '#FEF2F2', text: '#DC2626' };
  if (p === 'Media') return { border: '#FDE68A', bg: '#FEF3C7', text: '#D97706' };
  if (p === 'Baja') return { border: '#A7F3D0', bg: '#DCFCE7', text: '#16A34A' };
  return { border: '#E5E7EB', bg: '#F9FAFB', text: '#374151' };
};

export function DashboardScreen({ onNavigateToLogin }: DashboardScreenProps) {
  // Estados de navegación
  const [activeNav, setActiveNav] = useState<NavItem>('nueva');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // Estados de datos
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const [cargando, setCargando] = useState(true);
  const [perfilUsuario, setPerfilUsuario] = useState<PerfilUsuario | null>(null);
  
  // Estados de formularios y acciones
  const [respuestaLocal, setRespuestaLocal] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [form, setForm] = useState({ title: '', type: 'Soporte Técnico', description: '', priority: 'Media' });
  const [formErrors, setFormErrors] = useState<Partial<typeof form>>({});

  // Inicialización de datos del usuario
  useEffect(() => {
    const inicializarDatos = async () => {
      if (auth.currentUser) {
        const docRef = doc(db, 'usuarios', auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        
        let rolUsuario = 'usuario';
        if (docSnap.exists()) {
          const perfil = docSnap.data() as PerfilUsuario;
          setPerfilUsuario(perfil);
          rolUsuario = perfil.rol;
        }
        
        cargarSolicitudes(rolUsuario);
      }
    };
    inicializarDatos();
  }, []);

  // Fetch de solicitudes según el rol (Admin ve global, Usuario ve personal)
  const cargarSolicitudes = async (rolActual?: string) => {
    const user = auth.currentUser; 
    if (!user) return;

    setCargando(true);
    try {
      const esAdmin = rolActual === 'admin';
      const q = esAdmin 
        ? query(collection(db, 'solicitudes'), orderBy('fecha', 'desc'))
        : query(collection(db, 'solicitudes'), where('usuarioId', '==', user.uid), orderBy('fecha', 'desc'));

      const querySnapshot = await getDocs(q);
      const lista: Solicitud[] = querySnapshot.docs.map(doc => {
        const data = doc.data();
        const fechaObj = data.fecha?.toDate();
        return {
          id: doc.id,
          title: data.titulo || 'Sin título',
          type: data.tipo || 'Sin tipo',
          status: (data.estado || 'En revisión') as EstadoSolicitud,
          date: fechaObj ? fechaObj.toLocaleDateString('es-CO') : 'Reciente',
          time: fechaObj ? fechaObj.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }) : '',
          autorNombre: data.autorNombre || 'Usuario',
          autorEmail: data.autorEmail || '',
          descripcion: data.descripcion || 'Sin descripción detallada.',
          prioridad: (data.prioridad || 'Media') as Prioridad,
          respuestaAdmin: data.respuestaAdmin || null
        };
      });
      setSolicitudes(lista);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    } finally {
      setCargando(false);
    }
  };

  // --- Funciones de Administrador ---
  
  const actualizarEstado = async (id: string, nuevoEstado: EstadoSolicitud) => {
    try {
      await updateDoc(doc(db, 'solicitudes', id), { estado: nuevoEstado });
      setSolicitudes(prev => prev.map(s => s.id === id ? { ...s, status: nuevoEstado } : s));
    } catch (error) {
      console.error("Error actualizando estado:", error);
    }
  };

  const enviarRespuesta = async (id: string) => {
    if (!respuestaLocal.trim()) return;
    try {
      await updateDoc(doc(db, 'solicitudes', id), { respuestaAdmin: respuestaLocal });
      setSolicitudes(prev => prev.map(s => s.id === id ? { ...s, respuestaAdmin: respuestaLocal } : s));
      setRespuestaLocal('');
    } catch (error) {
      console.error("Error al responder:", error);
    }
  };

  // --- Funciones de Usuario (CRUD) ---

  const eliminarSolicitud = async (id: string) => {
    if (window.confirm("¿Está seguro de cancelar esta solicitud? La acción es irreversible.")) {
      try {
        await deleteDoc(doc(db, 'solicitudes', id));
        setSolicitudes(prev => prev.filter(s => s.id !== id));
        setExpandedId(null);
      } catch (error) {
        console.error("Error eliminando documento:", error);
      }
    }
  };

  const iniciarEdicion = (req: Solicitud) => {
    setForm({ title: req.title, type: req.type, description: req.descripcion, priority: req.prioridad });
    setEditingId(req.id);
    setActiveNav('nueva');
    setExpandedId(null);
  };

  const updateForm = (field: keyof typeof form, value: string) => {
    setForm(p => ({ ...p, [field]: value }));
    setFormErrors(p => ({ ...p, [field]: undefined }));
  };

  const validateForm = () => {
    const e: Partial<typeof form> = {};
    if (!form.title.trim()) e.title = 'Requerido';
    if (!form.type) e.type = 'Requerido';
    if (!form.description.trim()) e.description = 'Requerido';
    else if (form.description.trim().length < 20) e.description = 'Mínimo 20 caracteres';
    return e;
  };
  
  const handleSubmit = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setSubmitting(true);
    try {
      const baseData = {
        titulo: form.title,
        tipo: form.type,
        descripcion: form.description,
        prioridad: form.priority,
      };

      if (editingId) {
        await updateDoc(doc(db, 'solicitudes', editingId), baseData);
      } else {
        await addDoc(collection(db, 'solicitudes'), {
          ...baseData,
          estado: 'En revisión',
          usuarioId: auth.currentUser?.uid, 
          autorNombre: auth.currentUser?.displayName || 'Usuario',
          autorEmail: auth.currentUser?.email || '',
          fecha: serverTimestamp()
        });
      }

      await cargarSolicitudes(perfilUsuario?.rol); 
      setSubmitting(false);
      setSubmitted(true);
      setEditingId(null);

      setTimeout(() => {
        setActiveNav('mis');
        setSubmitted(false);
      }, 2000);

    } catch (error) {
      console.error("Error de escritura:", error);
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm({ title: '', type: 'Soporte Técnico', description: '', priority: 'Media' });
    setFormErrors({});
    setSubmitted(false);
    setEditingId(null);
  };

  // --- Renderizado UI ---

  const navItems: { id: NavItem; label: string; icon: React.ReactNode }[] = [
    { id: 'inicio', label: 'Inicio', icon: <Home size={20} /> },
    { id: 'nueva', label: 'Nueva Solicitud', icon: <FilePlus size={20} /> },
    { id: 'mis', label: perfilUsuario?.rol === 'admin' ? 'Gestión Solicitudes' : 'Mis Solicitudes', icon: <FileText size={20} /> },
    { id: 'perfil', label: 'Perfil', icon: <User size={20} /> },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 pb-8">
        <LogoBrandWhite iconSize={40} />
      </div>
      <nav className="flex-1 px-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveNav(item.id);
              if (item.id === 'nueva' && !editingId) resetForm();
            }}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl mb-1 transition-all"
            style={{
              background: activeNav === item.id ? 'rgba(255,255,255,0.18)' : 'transparent',
              color: activeNav === item.id ? 'white' : 'rgba(255,255,255,0.65)',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: activeNav === item.id ? 600 : 400,
              textAlign: 'left',
            }}
          >
            <span style={{ opacity: activeNav === item.id ? 1 : 0.7 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 mx-3 mb-4 rounded-xl" style={{ background: 'rgba(0,0,0,0.15)' }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
            <span style={{ color: 'white', fontSize: '14px', fontWeight: 700 }}>{auth.currentUser?.displayName?.charAt(0) || 'U'}</span>
          </div>
          <div>
            <div style={{ color: 'white', fontSize: '13px', fontWeight: 600 }}>{auth.currentUser?.displayName}</div>
            <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '11px' }}>
              {perfilUsuario?.rol === 'admin' ? 'Administrador' : (perfilUsuario?.departamento || 'Usuario')}
            </div>
          </div>
        </div>
        <button
          onClick={() => { signOut(auth); onNavigateToLogin(); }}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg"
          style={{ background: 'rgba(220,53,69,0.25)', color: '#FCA5A5', border: '1px solid rgba(220,53,69,0.3)', cursor: 'pointer', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}
        >
          <LogOut size={15} /> Cerrar Sesión
        </button>
      </div>
    </div>
  );

  const renderInicio = () => {
    const total = solicitudes.length;
    const pendientes = solicitudes.filter(req => req.status === 'En revisión').length;
    const completadas = solicitudes.filter(req => req.status === 'Aprobada' || req.status === 'Rechazada').length;

    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 style={{ color: '#111827', fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em' }}>Dashboard</h2>
          <p style={{ color: '#6B7280', fontSize: '14px', marginTop: '4px' }}>
            {perfilUsuario?.rol === 'admin' ? 'Resumen operativo general.' : 'Resumen de actividad.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Total Registros', value: total, icon: <FileText size={20} />, color: '#1E3FAE', bg: '#EEF2FF' },
            { label: 'En Proceso', value: pendientes, icon: <Clock size={20} />, color: '#D97706', bg: '#FEF3C7' },
            { label: 'Finalizadas', value: completadas, icon: <CheckCircle2 size={20} />, color: '#059669', bg: '#D1FAE5' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border" style={{ borderColor: '#F3F4F6' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: stat.bg, color: stat.color }}>{stat.icon}</div>
                <div>
                  <div style={{ color: '#6B7280', fontSize: '13px', fontWeight: 500 }}>{stat.label}</div>
                  <div style={{ color: '#111827', fontSize: '24px', fontWeight: 700, marginTop: '2px' }}>{stat.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderFormulario = () => {
    if (submitted) {
      return (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center max-w-sm">
            <div className="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-5" style={{ background: '#DCFCE7' }}>
              <CheckCircle2 size={44} style={{ color: '#22C55E' }} />
            </div>
            <h2 style={{ color: '#111827', fontSize: '22px', fontWeight: 800, marginBottom: '5px' }}>
              {editingId ? 'Datos actualizados' : 'Solicitud procesada'}
            </h2>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="mb-7">
          <h1 style={{ color: '#111827', fontSize: '26px', fontWeight: 800, marginBottom: '5px' }}>
            {editingId ? 'Edición de registro' : 'Nuevo registro'}
          </h1>
        </div>
        <div className="bg-white rounded-2xl p-6 lg:p-8 max-w-2xl" style={{ boxShadow: '0 2px 20px rgba(30,63,174,0.08)' }}>
          <div className="flex flex-col gap-5">
            <div>
              <label style={{ display: 'block', color: '#374151', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Título</label>
              <input type="text" value={form.title} onChange={(e) => updateForm('title', e.target.value)} style={{ width: '100%', padding: '12px 14px', border: `1.5px solid ${formErrors.title ? '#DC3545' : '#E5E7EB'}`, borderRadius: '8px', outline: 'none' }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={{ display: 'block', color: '#374151', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Categoría</label>
                <select value={form.type} onChange={(e) => updateForm('type', e.target.value)} style={{ width: '100%', padding: '12px 14px', border: `1.5px solid ${formErrors.type ? '#DC3545' : '#E5E7EB'}`, borderRadius: '8px', outline: 'none' }}>
                  <option value="" disabled>Seleccione</option>
                  {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', color: '#374151', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Prioridad</label>
                <div className="flex gap-2">
                  {PRIORIDADES.map((p) => {
                    const isActive = form.priority === p;
                    const colors = getPriorityColors(p, isActive);
                    return (
                      <button key={p} type="button" onClick={() => updateForm('priority', p)} style={{ flex: 1, padding: '10px 6px', borderRadius: '8px', border: `1.5px solid ${colors.border}`, background: colors.bg, color: colors.text, fontWeight: isActive ? 700 : 500, cursor: 'pointer', transition: 'all 0.2s' }}>
                        {p}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <label style={{ display: 'block', color: '#374151', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Detalles</label>
              <textarea rows={5} value={form.description} onChange={(e) => updateForm('description', e.target.value)} style={{ width: '100%', padding: '12px 14px', border: `1.5px solid ${formErrors.description ? '#DC3545' : '#E5E7EB'}`, borderRadius: '8px', outline: 'none', resize: 'vertical' }} />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              {editingId && (
                <button onClick={resetForm} className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                  Cancelar
                </button>
              )}
              <button onClick={handleSubmit} disabled={submitting} style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', background: submitting ? '#93A8E8' : '#1E3FAE', color: 'white', fontWeight: 700, cursor: submitting ? 'not-allowed' : 'pointer' }}>
                {submitting ? 'Procesando...' : 'Guardar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTabla = () => {
    const isAdmin = perfilUsuario?.rol === 'admin';
    
    return (
      <div>
        <div className="flex items-center justify-between mb-7">
          <h1 style={{ color: '#111827', fontSize: '26px', fontWeight: 800 }}>Directorio de Solicitudes</h1>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <div className="flex items-center px-5 py-3 bg-gray-50 border-b border-gray-100">
            <span className="text-gray-500 text-xs font-semibold flex-1">Referencia</span>
            <span className="text-gray-500 text-xs font-semibold w-[120px]">Status</span>
            {isAdmin && <span className="text-gray-500 text-xs font-semibold w-[90px] text-right">Control</span>}
            <span className="w-8"></span> 
          </div>

          {cargando ? (
            <div className="p-10 flex justify-center text-gray-400">Cargando...</div>
          ) : solicitudes.length === 0 ? (
            <div className="p-10 text-center text-gray-400">Sin registros.</div>
          ) : (
            solicitudes.map((req) => {
              const isExpanded = expandedId === req.id;

              return (
                <div key={req.id} className="border-b border-gray-50 flex flex-col">
                  {/* Fila compacta */}
                  <div 
                    onClick={() => { setExpandedId(isExpanded ? null : req.id); setRespuestaLocal(''); }}
                    className={`flex items-center gap-4 p-5 cursor-pointer transition-colors ${isExpanded ? 'bg-indigo-50/20' : 'hover:bg-gray-50'}`}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-50 shrink-0">
                      <FileText size={18} className="text-indigo-600" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="text-gray-900 text-sm font-semibold truncate">{req.title}</div>
                      <div className="text-gray-400 text-xs mt-0.5">
                        <span className="font-medium">{req.id.slice(0, 8)}</span> · {req.type}
                        {isAdmin && <span className="ml-2 text-indigo-500 font-medium bg-indigo-50 px-1.5 rounded">De: {req.autorNombre}</span>}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 px-3 py-1 rounded-full shrink-0 w-[120px] justify-center text-xs font-semibold" style={{ background: statusConfig[req.status]?.bg, color: statusConfig[req.status]?.color }}>
                      {statusConfig[req.status]?.icon} {req.status}
                    </div>

                    {isAdmin && (
                      <div className="flex items-center justify-end gap-2 w-[90px] shrink-0">
                        {req.status === 'En revisión' ? (
                          <>
                            <button onClick={(e) => { e.stopPropagation(); actualizarEstado(req.id, 'Aprobada'); }} className="w-8 h-8 rounded border border-green-200 text-green-600 bg-green-50 hover:bg-green-100 flex justify-center items-center"><CheckCircle2 size={16} /></button>
                            <button onClick={(e) => { e.stopPropagation(); actualizarEstado(req.id, 'Rechazada'); }} className="w-8 h-8 rounded border border-red-200 text-red-600 bg-red-50 hover:bg-red-100 flex justify-center items-center"><AlertTriangle size={16} /></button>
                          </>
                        ) : <span className="text-xs font-medium text-gray-300 mr-2">Auditado</span>}
                      </div>
                    )}
                    
                    <div className="w-8 flex justify-end text-gray-300">
                      <ChevronDown size={18} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* Detalle expandido */}
                  {isExpanded && (
                    <div className="px-5 pb-5 bg-indigo-50/10">
                      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        <div className="md:col-span-2">
                          <h4 className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-2">Desglose</h4>
                          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{req.descripcion}</p>

                          <div className="mt-6 pt-5 border-t border-gray-100">
                            <h4 className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-3"><MessageSquare size={12} className="inline mr-1 -mt-0.5" /> Interacción Administrativa</h4>
                            {req.respuestaAdmin ? (
                              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-blue-800 text-sm">{req.respuestaAdmin}</div>
                            ) : isAdmin ? (
                              <div className="flex flex-col gap-3">
                                <textarea placeholder="Anotación interna o respuesta..." value={respuestaLocal} onChange={(e) => setRespuestaLocal(e.target.value)} className="w-full p-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-indigo-500 focus:ring-1" rows={3} />
                                <button onClick={() => enviarRespuesta(req.id)} disabled={!respuestaLocal.trim()} className="self-end px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50">Responder</button>
                              </div>
                            ) : (
                              <p className="text-gray-400 text-sm italic">Sin notas registradas.</p>
                            )}
                          </div>
                          
                          {!isAdmin && req.status === 'En revisión' && (
                            <div className="mt-6 pt-5 border-t border-gray-100 flex justify-end gap-3">
                              <button onClick={() => iniciarEdicion(req)} className="px-4 py-2 border border-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-50 flex items-center gap-2"><Pencil size={14} /> Modificar</button>
                              <button onClick={() => eliminarSolicitud(req.id)} className="px-4 py-2 bg-red-50 text-red-600 border border-red-100 text-sm font-semibold rounded-lg hover:bg-red-100 flex items-center gap-2"><Trash2 size={14} /> Eliminar</button>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col gap-4">
                          <div>
                            <h4 className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1">Autor</h4>
                            <div className="text-gray-900 text-sm font-semibold">{req.autorNombre}</div>
                            <div className="text-gray-500 text-xs">{req.autorEmail}</div>
                          </div>
                          <div>
                            <h4 className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1">Timestamp</h4>
                            <div className="text-gray-700 text-sm font-medium">{req.date} <span className="text-gray-400 font-normal">a las</span> {req.time}</div>
                          </div>
                          <div>
                            <h4 className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1">Severidad</h4>
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold" style={{ background: req.prioridad === 'Alta' ? '#FEE2E2' : req.prioridad === 'Media' ? '#FEF3C7' : '#DCFCE7', color: req.prioridad === 'Alta' ? '#DC2626' : req.prioridad === 'Media' ? '#D97706' : '#16A34A' }}>{req.prioridad}</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  };

  const renderPerfil = () => (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-gray-900 text-2xl font-bold mb-6">Configuración de Cuenta</h1>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-5 pb-6 border-b border-gray-100">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-indigo-50 shrink-0">
            <span className="text-indigo-600 text-2xl font-bold">{auth.currentUser?.displayName?.charAt(0) || 'U'}</span>
          </div>
          <div>
            <div className="text-gray-900 text-lg font-bold">{auth.currentUser?.displayName}</div>
            <div className="text-gray-500 text-sm">{auth.currentUser?.email}</div>
            <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-semibold">
              <TrendingUp size={11} /> {perfilUsuario?.rol === 'admin' ? 'Superadmin' : perfilUsuario?.departamento}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {[
            { label: 'ID Interno', value: auth.currentUser?.uid },
            { label: 'Rol del sistema', value: perfilUsuario?.rol === 'admin' ? 'Administrador' : 'Usuario estándar' },
            { label: 'División', value: perfilUsuario?.departamento || 'N/A' },
          ].map((f, i) => (
            <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
              <span className="text-gray-500 text-sm font-medium">{f.label}</span>
              <span className="text-gray-900 text-sm font-semibold">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const contentMap: Record<NavItem, React.ReactNode> = {
    inicio: renderInicio(),
    nueva: renderFormulario(),
    mis: renderTabla(),
    perfil: renderPerfil(),
  };

  return (
    <div className="flex min-h-screen font-sans bg-slate-50">
      <aside className="hidden lg:flex flex-col w-64 shrink-0 fixed top-0 left-0 h-full bg-gradient-to-br from-indigo-700 to-indigo-900">
        <SidebarContent />
      </aside>
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <header className="sticky top-0 z-40 flex items-center justify-between px-8 h-16 bg-white border-b border-gray-100 shadow-sm">
          <div className="hidden lg:flex items-center gap-2 text-sm">
            <span className="text-gray-400">Workspace</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-semibold">{navItems.find((n) => n.id === activeNav)?.label}</span>
          </div>
        </header>
        <div className="flex-1 p-8">
          {contentMap[activeNav]}
        </div>
      </main>
    </div>
  );
}