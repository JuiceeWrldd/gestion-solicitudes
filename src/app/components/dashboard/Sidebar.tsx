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
            aria-current={activo === item.id ? 'page' : undefined}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl mb-1 text-left text-sm transition-all ${
              activo === item.id
                ? 'bg-white/20 text-white font-semibold'
                : 'text-white/65 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span className={activo === item.id ? '' : 'opacity-70'}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 mx-3 mb-4 rounded-xl bg-black/15">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-white/20">
            <span className="text-white text-sm font-bold">{nombre.charAt(0) || 'U'}</span>
          </div>
          <div>
            <div className="text-white text-[13px] font-semibold">{nombre}</div>
            <div className="text-white/55 text-[11px]">{rolTexto}</div>
          </div>
        </div>
        <button
          onClick={onCerrarSesion}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-red-600/25 text-red-300 border border-red-600/30 text-[13px] font-semibold hover:bg-red-600/35 transition-colors"
        >
          <LogOut size={15} /> Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
