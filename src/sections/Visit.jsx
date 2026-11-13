import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { site } from '@/config/site';
import { buildWhatsAppUrl, whatsappMessages } from '@/utils/whatsapp';

function InfoBlock({ title, children }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-eyebrow text-brand">{title}</h3>
      <div className="mt-3 leading-relaxed text-cream/85">{children}</div>
    </div>
  );
}

export default function Visit() {
  const { address, hours, contact } = site;

  return (
    <Section id="visitanos" theme="dark">
      <div className="grid gap-12 md:grid-cols-[2fr_3fr] md:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Visítanos"
            title="Te guardamos la mesa"
            description="Escríbenos por WhatsApp y te la apartamos, ya sea para almorzar, celebrar o arrancar la noche."
          />

          <InfoBlock title="Dirección">
            <address className="not-italic">
              {address.street}
              <br />
              {address.area}, {address.city}
            </address>
            <a
              href={address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm underline underline-offset-4 hover:text-brand"
            >
              Cómo llegar
            </a>
          </InfoBlock>

          <InfoBlock title="Horario">
            <dl>
              {hours.map(({ days, time }) => (
                <div key={days}>
                  <dt className="inline">{days}: </dt>
                  <dd className="inline">{time}</dd>
                </div>
              ))}
            </dl>
          </InfoBlock>

          <InfoBlock title="Reservas">
            <a href={contact.phoneHref} className="hover:text-brand">
              {contact.phoneDisplay}
            </a>
          </InfoBlock>

          <Button href={buildWhatsAppUrl(whatsappMessages.booking)} external className="self-start">
            Reserva por WhatsApp
          </Button>
        </div>

        <Reveal delay={150} className="min-h-[360px] overflow-hidden rounded-sm">
          <iframe
            src={address.mapEmbedUrl}
            title={`Mapa de ubicación de ${site.name}`}
            className="h-full min-h-[360px] w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </Section>
  );
}
