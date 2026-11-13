import terraza from '@/assets/images/kolozo-gastrobar.jpg';
import premio from '@/assets/images/premioHamburguesa.jpg';

export const about = {
  eyebrow: 'Nosotros',
  title: 'Bienvenidos a la jungla',
  description:
    'Plantas, luces de neón, buena mesa y música crossover. Kolozo es ese lugar al que llegas a almorzar, te quedas a brindar y terminas celebrando.',
  image: { src: terraza, alt: 'Interior de Kolozo Gastrobar con luces de neón y plantas' },
  pillars: [
    {
      title: 'Cocina',
      description:
        'Tacos, ceviches, osobuco y hamburguesas con carácter. Recetas con raíz mexicana y mediterránea, hechas para compartir… o no tanto.',
    },
    {
      title: 'Coctelería',
      description: 'Fruta natural, especias y mucho oficio detrás de la barra. Pide un Emperador y nos entiendes.',
    },
    {
      title: 'La terraza',
      description: 'En pleno centro de La Dorada, en las alturas y con la brisa del Magdalena de fondo.',
    },
  ],
  award: {
    eyebrow: 'Votada por La Dorada · 2022',
    title: 'La mejor hamburguesa de La Dorada',
    description:
      'La ganamos por votación popular en el Festival de la Hamburguesa Dorada de la Cámara de Comercio. La gente habló, y desde entonces no bajamos el estándar.',
    image: { src: premio, alt: 'Premio a la mejor hamburguesa de La Dorada 2022' },
  },
};
