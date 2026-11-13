import { useInView } from '@/hooks/useInView';

/** Hace aparecer su contenido con un leve desplazamiento hacia arriba al entrar en pantalla. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
