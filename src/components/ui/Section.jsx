const themes = {
  light: 'bg-cream text-ink',
  sand: 'bg-cream-dark text-ink',
  dark: 'bg-ink text-cream',
};

/** Contenedor base de cada sección de la landing. */
export default function Section({ id, theme = 'light', className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 ${themes[theme]} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}
