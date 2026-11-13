import { animate } from 'motion';

const EASE = [0.65, 0, 0.35, 1];
const INTERRUPT_EVENTS = ['wheel', 'touchstart', 'keydown'];

let current = null;

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function stop() {
  current?.stop();
  current = null;
  INTERRUPT_EVENTS.forEach((type) => window.removeEventListener(type, stop));
}

/**
 * Desplaza la página hasta `element` con una animación de Motion.
 * Respeta el `scroll-margin-top` del elemento (compensa el header fijo)
 * y se cancela si el usuario hace scroll manual mientras se mueve.
 */
export function scrollToElement(element) {
  const margin = parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
  const from = window.scrollY;
  const to = element.getBoundingClientRect().top + from - margin;
  const distance = Math.abs(to - from);

  stop();

  if (prefersReducedMotion() || distance < 2) {
    window.scrollTo(0, to);
    return;
  }

  INTERRUPT_EVENTS.forEach((type) => window.addEventListener(type, stop, { passive: true }));

  current = animate(from, to, {
    // Trayectos largos tardan un poco más, entre 0.8 s y 1.4 s.
    duration: Math.min(0.8 + distance / 8000, 1.4),
    ease: EASE,
    onUpdate: (value) => window.scrollTo(0, value),
    onComplete: stop,
  });
}
