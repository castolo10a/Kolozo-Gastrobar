import terraza from '@/assets/images/kolozo-gastrobar.jpg';
import premio from '@/assets/images/premioHamburguesa.jpg';

export const about = {
  eyebrow: 'Nosotros',
  title: 'Una jungla gastronómica y musical',
  description:
    'Kolozo es una jungla en las alturas donde se unen la gastronomía, la mixología y la buena música, con un ambiente premium y chill que transmite el mejor confort a la hora de comer y disfrutar de cócteles de autor.',
  image: { src: terraza, alt: 'Interior de Kolozo Gastrobar con luces de neón y plantas' },
  pillars: [
    {
      title: 'Gastronomía',
      description:
        'Platos inspirados en las cocinas mexicana y mediterránea: una mezcla de sabores e infusiones únicas en el Magdalena Medio.',
    },
    {
      title: 'Mixología',
      description:
        'Mixología clásica y natural, con sabores frutales y especias que dan vida a nuestros cócteles de autor.',
    },
    {
      title: 'Ubicación',
      description:
        'Una terraza en el centro de La Dorada con vista al río Magdalena, el río más importante de Colombia.',
    },
  ],
  award: {
    year: '2022',
    title: 'Mejor Hamburguesa de La Dorada',
    description:
      'Premio por votación popular en el Festival de la Hamburguesa Dorada, organizado por la Cámara de Comercio de La Dorada.',
    image: { src: premio, alt: 'Premio a la mejor hamburguesa de La Dorada 2022' },
  },
};
