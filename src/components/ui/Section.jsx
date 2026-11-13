import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '@/context/activeSection';

const themes = {
  light: 'bg-cream text-ink',
  sand: 'bg-cream-dark text-ink',
  dark: 'bg-ink text-cream',
};

/**
 * Contenedor base de cada sección de la landing.
 * Avisa al header cuál es la sección visible (franja central de la pantalla).
 */
export default function Section({ id, theme = 'light', className = '', children }) {
  const { setActive } = useActiveSection();
  const { ref } = useInView({
    rootMargin: '-45% 0px -50% 0px',
    onChange: (inView) => inView && setActive(id),
  });

  return (
    <section ref={ref} id={id} className={`scroll-mt-20 py-20 md:py-28 ${themes[theme]} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}
