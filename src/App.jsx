import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Signature from '@/sections/Signature';
import Menu from '@/sections/Menu';
import Events from '@/sections/Events';
import Gallery from '@/sections/Gallery';
import Visit from '@/sections/Visit';
import { useSmoothAnchors } from '@/hooks/useSmoothAnchors';

export default function App() {
  useSmoothAnchors();

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Signature />
        <Menu />
        <Events />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
