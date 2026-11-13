import { useEffect } from 'react';
import { scrollToElement } from '@/utils/smoothScroll';

/**
 * Intercepta los clics en enlaces internos (`href="#seccion"`) de toda la app
 * y los anima con `scrollToElement`, sin tener que tocar cada componente.
 */
export function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;

      const link = event.target.closest('a[href^="#"]');
      const id = link?.getAttribute('href').slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      scrollToElement(target);
      window.history.replaceState(null, '', `#${id}`);

      // Mueve el foco a la sección para lectores de pantalla y navegación con teclado.
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}
