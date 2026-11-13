import AutoplayVideo from '@/components/ui/AutoplayVideo';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { experiences } from '@/data/experiences';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export default function Experiences() {
  const { eyebrow, title, description, items } = experiences;

  return (
    <Section id="experiencias" theme="dark">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      {/* En móvil se deslizan de lado a lado; en escritorio, tres columnas. */}
      <ul className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
        {items.map((item, index) => (
          <Reveal as="li" key={item.title} delay={index * 120} className="w-[78%] shrink-0 snap-center md:w-auto">
            <AutoplayVideo
              {...item.video}
              className="aspect-[9/16] overflow-hidden rounded-sm bg-ink-soft"
            />
            <h3 className="mt-6 font-display text-2xl font-semibold">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-cream/70">{item.description}</p>
            {item.cta && (
              <Button
                href={buildWhatsAppUrl(item.cta.message)}
                variant="outlineLight"
                external
                className="mt-5"
              >
                {item.cta.label}
              </Button>
            )}
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
