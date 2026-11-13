import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { events } from '@/data/events';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export default function Events() {
  const { eyebrow, title, description, occasions, cta, plans } = events;

  return (
    <Section id="eventos" theme="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="mt-8 flex flex-wrap gap-2">
        {occasions.map((occasion) => (
          <li key={occasion} className="rounded-full border border-ink/15 px-4 py-1.5 text-sm text-ink/80">
            {occasion}
          </li>
        ))}
      </ul>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {plans.map((plan, index) => (
          <Reveal
            as="article"
            key={plan.title}
            delay={index * 150}
            className="flex flex-col overflow-hidden rounded-sm bg-cream-dark"
          >
            <img src={plan.image.src} alt={plan.image.alt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
            <div className="flex flex-1 flex-col p-8">
              <h3 className="font-display text-3xl font-semibold">{plan.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink/70">{plan.description}</p>
              <Button href={buildWhatsAppUrl(plan.message)} variant="outlineDark" external className="mt-8 self-start">
                {cta}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
