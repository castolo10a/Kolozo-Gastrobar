import almuerzo from '@/assets/images/almuerzo.jpg';
import tacos from '@/assets/images/tacosCamaron.webp';
import emperador from '@/assets/images/emperador.jpg';

export const menu = {
  eyebrow: 'Menú',
  title: 'Para comer, brindar y repetir',
  description:
    'Cocina con raíz mexicana y mediterránea, coctelería de la casa y almuerzos para el día a día. Aquí van algunos favoritos.',
  cta: 'Ver la carta completa',
  categories: [
    {
      title: 'La carta',
      description: 'Platos para poner en el centro de la mesa y pelearse el último bocado.',
      image: { src: tacos, alt: 'Tacos de camarón' },
      items: ['Tacos de camarón', 'Ceviche de chicharrón', 'Elotes carnudos', 'Nachos', 'Osobuco al vino', 'Lomo'],
    },
    {
      title: 'Coctelería',
      description: 'Clásicos bien hechos y creaciones de la casa con fruta natural.',
      image: { src: emperador, alt: 'Cóctel Emperador Kolozo' },
      items: ['Emperador Kolozo', 'Margarita de mango', 'Gin-tonic', 'Piña colada', 'Sangría', 'Limonadas de vino'],
    },
    {
      title: 'Almuerzos',
      description: 'El sazón de la casa también al mediodía, para que el día tenga lo suyo.',
      image: { src: almuerzo, alt: 'Almuerzo ejecutivo' },
      items: ['Almuerzo ejecutivo', 'Platos de la carta', 'Bebidas naturales'],
    },
  ],
};
