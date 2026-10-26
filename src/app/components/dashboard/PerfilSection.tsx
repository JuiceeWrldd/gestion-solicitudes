import { TrendingUp } from 'lucide-react';
import { auth } from '../../config/firebase';
import type { Organizacion, PerfilUsuario } from '../../types';

interface PerfilSectionProps {
  perfil: PerfilUsuario | null;
  organizacion: Organizacion | null;
}

export function PerfilSection({ perfil, organizacion }: PerfilSectionProps) {
  const user = auth.currentUser;
  const esAdmin = perfil?.rol === 'admin';

  const datos = [
    { label: 'ID Interno', value: user?.uid },
    { label: 'Rol del sistema', value: esAdmin ? 'Administrador' : 'Usuario estándar' },
    { label: 'Empresa', value: organizacion?.nombre || 'N/A' },
    { label: 'División', value: perfil?.departamento || 'N/A' },
  ];

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-gray-900 text-2xl font-bold mb-6">Configuración de Cuenta</h1>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-5 pb-6 border-b border-gray-100">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-indigo-50 shrink-0">
            <span className="text-indigo-600 text-2xl font-bold">{user?.displayName?.charAt(0) || 'U'}</span>
          </div>
          <div>
            <div className="text-gray-900 text-lg font-bold">{user?.displayName}</div>
            <div className="text-gray-500 text-sm">{user?.email}</div>
            <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-semibold">
              <TrendingUp size={11} /> {esAdmin ? 'Superadmin' : perfil?.departamento}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {datos.map((f) => (
            <div key={f.label} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
              <span className="text-gray-500 text-sm font-medium">{f.label}</span>
              <span className="text-gray-900 text-sm font-semibold">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
