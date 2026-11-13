import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { site } from '@/config/site';
import { menu } from '@/data/menu';

export default function Menu() {
  const { eyebrow, title, description, cta, categories } = menu;

  return (
    <Section id="menu" theme="light">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <Button href={site.menuUrl} variant="outlineDark" external className="self-start md:self-auto">
          {cta}
        </Button>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {categories.map((category, index) => (
          <Reveal as="article" key={category.title} delay={index * 120} className="group">
            <div className="overflow-hidden rounded-sm">
              <img
                src={category.image.src}
                alt={category.image.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold">{category.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{category.description}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-ink/85">
              {category.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-brand" aria-hidden="true">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
