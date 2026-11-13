import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { about } from '@/data/about';

export default function About() {
  const { eyebrow, title, description, image, pillars, award } = about;

  return (
    <Section id="nosotros" theme="light">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <Reveal delay={150}>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        </Reveal>
      </div>

      <ol className="mt-20 grid gap-10 border-t border-ink/10 pt-12 md:grid-cols-3">
        {pillars.map(({ title: pillarTitle, description: text }, index) => (
          <Reveal as="li" key={pillarTitle} delay={index * 120}>
            <span className="font-display text-lg text-brand">0{index + 1}</span>
            <h3 className="mt-2 font-display text-2xl font-semibold">{pillarTitle}</h3>
            <p className="mt-3 leading-relaxed text-ink/70">{text}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal as="article" className="mt-20 grid overflow-hidden rounded-sm bg-ink text-cream md:grid-cols-[2fr_3fr]">
        <img src={award.image.src} alt={award.image.alt} loading="lazy" className="h-64 w-full object-cover md:h-full" />
        <div className="flex flex-col justify-center p-8 md:p-12">
          <p className="text-xs font-medium uppercase tracking-eyebrow text-brand">{award.eyebrow}</p>
          <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{award.title}</h3>
          <p className="mt-4 leading-relaxed text-cream/70">{award.description}</p>
        </div>
      </Reveal>
    </Section>
  );
}
