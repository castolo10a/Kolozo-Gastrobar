import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import { navigation } from '@/data/navigation';
import { useActiveSection } from '@/context/activeSection';
import { useScrolled } from '@/hooks/useScrolled';
import { buildWhatsAppUrl, whatsappMessages } from '@/utils/whatsapp';

const ease = [0.22, 1, 0.36, 1];

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const { active } = useActiveSection();
  const solid = scrolled || open;
  const bookingUrl = buildWhatsAppUrl(whatsappMessages.booking);

  const close = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className={`fixed inset-x-0 top-0 z-40 text-cream transition-colors duration-300 ${
        solid ? 'bg-ink/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:px-8">
        <Logo inverted />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm">
            {navigation.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id} className="relative">
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block py-2 transition-colors hover:text-cream ${isActive ? 'text-cream' : 'text-cream/70'}`}
                  >
                    {label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
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

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Principal"
            className="overflow-hidden border-t border-ink-line bg-ink lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            <ul className="flex flex-col px-5 py-6">
              {navigation.map(({ id, label }, index) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.1, duration: 0.3, ease }}
                >
                  <a
                    href={`#${id}`}
                    onClick={close}
                    className={`block py-3 font-display text-2xl ${active === id ? 'text-brand' : ''}`}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4">
                <Button href={bookingUrl} external onClick={close} className="w-full">
                  Reservar por WhatsApp
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
