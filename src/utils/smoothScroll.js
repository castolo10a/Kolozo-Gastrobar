const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let frame = null;

/**
 * Desplaza la página hasta `element` con una curva de aceleración suave.
 * Respeta el `scroll-margin-top` del elemento (compensa el header fijo).
 */
export function scrollToElement(element, { duration = 900 } = {}) {
  const margin = parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
  const start = window.scrollY;
  const target = element.getBoundingClientRect().top + start - margin;
  const distance = target - start;

  if (frame) cancelAnimationFrame(frame);

  if (prefersReducedMotion() || Math.abs(distance) < 2) {
    window.scrollTo(0, target);
    return;
  }

  // Trayectos largos tardan un poco más, sin pasar de 1.4 s.
  const time = Math.min(duration + Math.abs(distance) / 10, 1400);
  const startTime = performance.now();

  const step = (now) => {
    const progress = Math.min((now - startTime) / time, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    frame = progress < 1 ? requestAnimationFrame(step) : null;
  };

  frame = requestAnimationFrame(step);
}
