import retoVideo from '@/assets/videos/reto-cronometro.mp4';
import retoPoster from '@/assets/images/posters/reto-cronometro.webp';
import cineVideo from '@/assets/videos/cine-ratatouille.mp4';
import cinePoster from '@/assets/images/posters/cine-ratatouille.webp';
import lugarVideo from '@/assets/videos/puerto-lanchas.mp4';
import lugarPoster from '@/assets/images/posters/puerto-lanchas.webp';
import { whatsappMessages } from '@/utils/whatsapp';

export const experiences = {
  eyebrow: 'Experiencias',
  title: 'Aquí siempre pasa algo',
  description: 'Retos en la barra, cine con menú de siete tiempos y noches que se alargan en la terraza.',
  items: [
    {
      title: 'El reto del cronómetro',
      description: 'Detén el cronómetro en 10:00 exactos y tu Salvaje es gratis. Solo tienes un intento. ¿Te le mides?',
      video: { src: retoVideo, poster: retoPoster, label: 'Cliente intentando detener el cronómetro en la barra de Kolozo' },
    },
    {
      title: 'Cine a la mesa',
      description:
        'Una película, siete tiempos inspirados en sus escenas y una copa de vino. La función empieza en la pantalla y sigue en tu plato.',
      video: { src: cineVideo, poster: cinePoster, label: 'Función de Cine a la mesa en la terraza de Kolozo' },
      cta: { label: 'Pregunta por la próxima función', message: whatsappMessages.cinema },
    },
    {
      title: 'El lugar',
      description: 'Neón, plantas, una barra que no para y mesas para quedarse. En pleno centro de La Dorada.',
      video: { src: lugarVideo, poster: lugarPoster, label: 'Recorrido por el interior de Kolozo' },
    },
  ],
};
