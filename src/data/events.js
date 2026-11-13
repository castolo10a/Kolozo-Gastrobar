import celebraciones from '@/assets/images/marimondas2.jpg';
import romantico from '@/assets/images/aniversario.jpg';
import { whatsappMessages } from '@/utils/whatsapp';

export const events = {
  eyebrow: 'Celebraciones y eventos',
  title: 'El espacio para tu próxima celebración',
  description:
    'Desde eventos corporativos hasta celebraciones íntimas: cocina excepcional, una atmósfera envolvente y un servicio cuidado en cada detalle.',
  occasions: ['Cumpleaños', 'Bautizos', 'Aniversarios', 'Eventos empresariales', 'Fechas especiales'],
  plans: [
    {
      title: 'Eventos y celebraciones',
      description:
        'Somos los anfitriones ideales para dar vida a tus recuerdos: decoración, menú y música pensados para tu ocasión.',
      image: { src: celebraciones, alt: 'Celebración en Kolozo' },
      message: whatsappMessages.event,
    },
    {
      title: 'Planes románticos',
      description:
        'Cenas y celebraciones de pareja en un entorno íntimo, con detalles cuidadosamente diseñados para ustedes.',
      image: { src: romantico, alt: 'Mesa decorada para aniversario' },
      message: whatsappMessages.romantic,
    },
  ],
};
