const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand';

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  outlineLight: 'border border-white/40 text-white hover:border-white hover:bg-white/10',
  outlineDark: 'border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-cream',
};

/**
 * Enlace con estilo de botón. Los enlaces externos se abren en una nueva pestaña.
 */
export default function Button({ href, variant = 'primary', external = false, className = '', children, ...props }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...externalProps} {...props}>
      {children}
    </a>
  );
}
