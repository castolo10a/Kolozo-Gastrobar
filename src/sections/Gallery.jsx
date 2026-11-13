import { FaInstagram } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { site } from '@/config/site';
import { gallery } from '@/data/gallery';

const instagram = site.socials.find(({ id }) => id === 'instagram');

export default function Gallery() {
  return (
    <Section id="galeria" theme="sand">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Galería" title="Momentos Kolozo" />
        <Button href={instagram.href} variant="outlineDark" external className="self-start md:self-auto">
          <FaInstagram aria-hidden="true" /> Síguenos en Instagram
        </Button>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {gallery.map(({ src, alt }, index) => (
          <Reveal as="li" key={alt} delay={(index % 4) * 80} className="overflow-hidden rounded-sm">
            <img
              src={src}
              alt={alt}
              title={alt}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
