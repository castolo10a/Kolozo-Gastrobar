import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import heroImage from '@/assets/images/espacio.jpg';
import Button from '@/components/ui/Button';
import { site } from '@/config/site';
import { buildWhatsAppUrl, whatsappMessages } from '@/utils/whatsapp';

const highlights = [
  'Mejor hamburguesa de La Dorada · 2022',
  'Cocina mexicana y mediterránea',
  'Abierto todos los días hasta la 1 a. m.',
];

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // Parallax suave: la foto baja más lento que el contenido al hacer scroll.
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-cream"
    >
      <motion.img
        src={heroImage}
        alt="Terraza de Kolozo Gastrobar iluminada de noche"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y: imageY }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" aria-hidden="true" />

      <motion.div
        className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={item} className="mb-6 text-xs font-medium uppercase tracking-eyebrow text-brand">
          {site.address.city} · Gastrobar
        </motion.p>
        <motion.h1
          variants={item}
          className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] md:text-7xl"
        >
          Aquí se come, se brinda y se celebra
        </motion.h1>
        <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
          Una jungla en las alturas, en pleno centro de La Dorada. Cocina mexicana y mediterránea, coctelería de la
          casa y música crossover todos los días.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={buildWhatsAppUrl(whatsappMessages.booking)} external>
            Reserva tu mesa
          </Button>
          <Button href="#menu" variant="outlineLight">
            Mira el menú
          </Button>
        </motion.div>

        <motion.ul
          variants={item}
          className="mt-16 grid gap-4 border-t border-cream/15 pt-6 text-sm text-cream/70 sm:grid-cols-3"
        >
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
