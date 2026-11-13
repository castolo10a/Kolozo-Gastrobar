import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Hace aparecer su contenido al entrar en pantalla.
 * react-intersection-observer detecta la visibilidad y Motion anima la entrada.
 */
export default function Reveal({ as = 'div', delay = 0, className = '', children }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  const Component = motion[as];

  return (
    <Component
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
