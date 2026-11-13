import Reveal from '@/components/ui/Reveal';

/** Encabezado consistente para las secciones: antetítulo, título y bajada. */
export default function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <Reveal as="header" className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && <p className="mb-4 text-xs font-medium uppercase tracking-eyebrow text-brand">{eyebrow}</p>}
      <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-relaxed opacity-75 md:text-lg">{description}</p>}
    </Reveal>
  );
}
