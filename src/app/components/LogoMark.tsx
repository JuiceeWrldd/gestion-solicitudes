interface LogoIconProps {
  size?: number;
}

// Componente SVG puro
export function LogoIcon({ size = 48 }: LogoIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#1E3FAE" />
      <rect x="7" y="12" width="34" height="24" rx="4" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <circle cx="7" cy="24" r="4" fill="#1E3FAE" />
      <circle cx="41" cy="24" r="4" fill="#1E3FAE" />
      <line x1="11" y1="24" x2="37" y2="24" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2.5 2" />
      <text x="24" y="21" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="800" fill="white" fontFamily="Inter, Arial, sans-serif">G</text>
      <text x="24" y="32" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="800" fill="white" fontFamily="Inter, Arial, sans-serif">S</text>
    </svg>
  );
}

interface LogoProps {
  iconSize?: number;
  layout?: 'horizontal' | 'vertical';
}

// Branding principal de la aplicación
export function LogoBrand({ iconSize = 38, layout = 'horizontal' }: LogoProps) {
  return (
    <div className={`flex ${layout === 'vertical' ? 'flex-col' : 'items-center'} gap-3 font-sans`}>
      <LogoIcon size={iconSize} />
      <div className={layout === 'vertical' ? 'text-center' : ''}>
        <div className="text-gray-900 text-[19px] font-extrabold leading-none tracking-tight">GestioSync</div>
        <div className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.1em] mt-1">Plataforma</div>
      </div>
    </div>
  );
}

// Branding adaptado para fondos oscuros
export function LogoBrandWhite({ iconSize = 38, layout = 'horizontal' }: LogoProps) {
  return (
    <div className={`flex ${layout === 'vertical' ? 'flex-col' : 'items-center'} gap-3 font-sans`}>
      <LogoIcon size={iconSize} />
      <div className={layout === 'vertical' ? 'text-center' : ''}>
        <div className="text-white text-[19px] font-extrabold leading-none tracking-tight">GestioSync</div>
        <div className="text-white/60 text-[11px] font-bold uppercase tracking-[0.1em] mt-1">Plataforma</div>
      </div>
    </div>
  );
}