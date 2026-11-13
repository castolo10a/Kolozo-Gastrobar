import Logo from '@/components/ui/Logo';
import SocialLinks from '@/components/ui/SocialLinks';
import { site } from '@/config/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-line bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-xs">
          <Logo inverted />
          <p className="mt-4 text-sm uppercase tracking-eyebrow text-cream/60">{site.tagline}</p>
        </div>

        <address className="text-sm not-italic leading-relaxed text-cream/70">
          <p>{site.address.street}</p>
          <p>
            {site.address.area}, {site.address.city}
          </p>
          <a href={site.contact.phoneHref} className="mt-2 inline-block hover:text-brand">
            {site.contact.phoneDisplay}
          </a>
        </address>

        <SocialLinks />
      </div>

      <div className="border-t border-ink-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-cream/50 md:flex-row md:justify-between md:px-8">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <a href={site.credits.href} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
            Creado por {site.credits.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
