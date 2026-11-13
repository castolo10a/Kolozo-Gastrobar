import heroImage from '@/assets/images/espacio.jpg';
import Button from '@/components/ui/Button';
import { site } from '@/config/site';
import { buildWhatsAppUrl, whatsappMessages } from '@/utils/whatsapp';

const highlights = ['Mejor hamburguesa de La Dorada 2022', 'Cocina mexicana y mediterránea', 'Abierto todos los días'];

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-cream">
      <img
        src={heroImage}
        alt="Terraza de Kolozo Gastrobar iluminada de noche"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl animate-fade-up px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <p className="mb-6 text-xs font-medium uppercase tracking-eyebrow text-brand">
          {site.address.city} · Gastrobar
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
          Gastronomía, mixología y buena música
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
          Una jungla en las alturas con vista al río Magdalena. {site.tagline}.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={buildWhatsAppUrl(whatsappMessages.booking)} external>
            Reservar mesa
          </Button>
          <Button href="#menu" variant="outlineLight">
            Ver menú
          </Button>
        </div>

        <ul className="mt-16 grid gap-4 border-t border-cream/15 pt-6 text-sm text-cream/70 sm:grid-cols-3">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
