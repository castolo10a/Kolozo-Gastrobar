import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { signature } from '@/data/signature';
import { buildWhatsAppUrl, whatsappMessages } from '@/utils/whatsapp';

export default function Signature() {
  const { eyebrow, title, description, image, ingredients, cta } = signature;

  return (
    <Section id="salvaje" theme="dark">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover"
          />
        </Reveal>

        <div>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />

          <ul className="mt-10 divide-y divide-cream/10 border-y border-cream/10">
            {ingredients.map((ingredient, index) => (
              <Reveal
                as="li"
                key={ingredient}
                delay={index * 80}
                className="flex items-center gap-4 py-3 text-cream/85"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                {ingredient}
              </Reveal>
            ))}
          </ul>

          <Button href={buildWhatsAppUrl(whatsappMessages.signature)} external className="mt-10">
            {cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
