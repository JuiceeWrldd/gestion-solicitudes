import { LogOut } from 'lucide-react';
import { LogoBrandWhite } from '../LogoMark';

export type NavItem = 'inicio' | 'nueva' | 'mis' | 'integrantes' | 'perfil';

export interface ItemMenu {
  id: NavItem;
  label: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  items: ItemMenu[];
  activo: NavItem;
  nombre: string;
  rolTexto: string;
  onSeleccionar: (id: NavItem) => void;
  onCerrarSesion: () => void;
}

export function Sidebar({ items, activo, nombre, rolTexto, onSeleccionar, onCerrarSesion }: SidebarProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 pb-8">
        <LogoBrandWhite iconSize={40} />
      </div>
      <nav className="flex-1 px-3">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSeleccionar(item.id)}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl mb-1 transition-all"
            style={{
              background: activo === item.id ? 'rgba(255,255,255,0.18)' : 'transparent',
              color: activo === item.id ? 'white' : 'rgba(255,255,255,0.65)',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: activo === item.id ? 600 : 400,
              textAlign: 'left',
            }}
          >
            <span style={{ opacity: activo === item.id ? 1 : 0.7 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 mx-3 mb-4 rounded-xl" style={{ background: 'rgba(0,0,0,0.15)' }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
            <span style={{ color: 'white', fontSize: '14px', fontWeight: 700 }}>{nombre.charAt(0) || 'U'}</span>
          </div>
          <div>
            <div style={{ color: 'white', fontSize: '13px', fontWeight: 600 }}>{nombre}</div>
            <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '11px' }}>{rolTexto}</div>
          </div>
        </div>
        <button
          onClick={onCerrarSesion}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg"
          style={{ background: 'rgba(220,53,69,0.25)', color: '#FCA5A5', border: '1px solid rgba(220,53,69,0.3)', cursor: 'pointer', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}
        >
          <LogOut size={15} /> Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
