import { useState } from 'react';
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import { navigation } from '@/data/navigation';
import { useScrolled } from '@/hooks/useScrolled';
import { useActiveSection } from '@/hooks/useActiveSection';
import { buildWhatsAppUrl, whatsappMessages } from '@/utils/whatsapp';

const sectionIds = navigation.map(({ id }) => id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);
  const solid = scrolled || open;
  const bookingUrl = buildWhatsAppUrl(whatsappMessages.booking);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 text-cream transition-colors duration-300 ${
        solid ? 'bg-ink/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:px-8">
        <Logo inverted />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm">
            {navigation.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`transition-colors hover:text-brand ${active === id ? 'text-brand' : 'text-cream/80'}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={bookingUrl} external className="px-5 py-2.5">
            Reservar
          </Button>
        </div>

        <button
          type="button"
          className="p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <HiX size={26} /> : <HiOutlineMenuAlt4 size={26} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Principal" className="border-t border-ink-line bg-ink lg:hidden">
          <ul className="flex flex-col px-5 py-6">
            {navigation.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={close} className="block py-3 font-display text-2xl">
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Button href={bookingUrl} external onClick={close} className="w-full">
                Reservar por WhatsApp
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
