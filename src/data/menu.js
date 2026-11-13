import almuerzo from '@/assets/images/almuerzo.jpg';
import tacos from '@/assets/images/tacosCamaron.webp';
import emperador from '@/assets/images/emperador.jpg';

export const menu = {
  eyebrow: 'Menú',
  title: 'Una experiencia de sabores única',
  description:
    'Una fusión de influencias mexicanas y mediterráneas, cócteles de autor y almuerzos para el día a día.',
  categories: [
    {
      title: 'Cocina de autor',
      description: 'Inspirada en las tradiciones culinarias mexicana y mediterránea.',
      image: { src: tacos, alt: 'Tacos de camarón' },
      items: ['Tacos de camarón', 'Ceviche de chicharrón', 'Elotes carnudos', 'Nachos', 'Osobuco al vino', 'Lomo'],
    },
    {
      title: 'Mixología',
      description: 'Clásicos y cócteles de autor con frutas naturales y especias.',
      image: { src: emperador, alt: 'Cóctel Emperador Kolozo' },
      items: ['Emperador Kolozo', 'Margarita de mango', 'Gin-tonic', 'Piña colada', 'Sangría', 'Limonadas de vino'],
    },
    {
      title: 'Almuerzos ejecutivos',
      description: 'Nuestra distintiva combinación de sabores auténticos, también al mediodía.',
      image: { src: almuerzo, alt: 'Almuerzo ejecutivo' },
      items: ['Menú del día', 'Opciones de la carta', 'Bebidas naturales'],
    },
  ],
};
