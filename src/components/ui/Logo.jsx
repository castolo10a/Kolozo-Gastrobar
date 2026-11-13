import logo from '@/assets/images/logo.png';
import { site } from '@/config/site';

/** Logo + nombre. `inverted` lo vuelve blanco para fondos oscuros. */
export default function Logo({ inverted = false, className = '' }) {
  return (
    <a href="#inicio" className={`flex items-center gap-3 ${className}`} aria-label={`${site.name}, ir al inicio`}>
      <img src={logo} alt="" className={`h-9 w-9 object-contain ${inverted ? 'invert' : ''}`} />
      <span className="font-display text-2xl font-semibold uppercase tracking-[0.2em]">{site.shortName}</span>
    </a>
  );
}
