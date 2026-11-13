import celebraciones from '@/assets/images/marimondas2.jpg';
import romantico from '@/assets/images/aniversario.jpg';
import { whatsappMessages } from '@/utils/whatsapp';

export const events = {
  eyebrow: 'Celebraciones',
  title: 'Tú pones el motivo, nosotros la fiesta',
  description:
    'Cumpleaños, aniversarios, bautizos o la reunión de la empresa: nos encargamos de la decoración, el menú y la música para que tú solo llegues a celebrar.',
  occasions: ['Cumpleaños', 'Aniversarios', 'Bautizos', 'Eventos de empresa', 'Fechas especiales'],
  cta: 'Cotiza por WhatsApp',
  plans: [
    {
      title: 'Celebraciones en grupo',
      description:
        'Cuéntanos qué celebras y cuántos vienen. Armamos el plan contigo, de la decoración al último brindis.',
      image: { src: celebraciones, alt: 'Grupo celebrando en Kolozo' },
      message: whatsappMessages.event,
    },
    {
      title: 'Planes en pareja',
      description:
        'Mesa decorada, buena comida y un par de cócteles para celebrar a dos en el lugar más romántico de La Dorada.',
      image: { src: romantico, alt: 'Mesa decorada para un aniversario' },
      message: whatsappMessages.romantic,
    },
  ],
};
