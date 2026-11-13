/**
 * Información general del negocio.
 * Única fuente de verdad para datos de contacto, horarios y redes:
 * si algo cambia, se actualiza solo aquí.
 */
export const site = {
  name: 'Kolozo Gastrobar',
  shortName: 'Kolozo',
  tagline: 'Food, fiesta, drinks & crossover music',

  contact: {
    phoneDisplay: '320 242 9870',
    phoneHref: 'tel:+573202429870',
    whatsapp: '573202429870',
  },

  address: {
    street: 'Cra. 1 # 15-73',
    area: 'Barrio Centro',
    city: 'La Dorada, Caldas',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kolozo+Gastrobar+La+Dorada+Caldas',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.748646198384!2d-74.66517302552445!3d5.455069334657478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40df6e680f47f1%3A0xb3ad1b65c2e6b98a!2sKOLOZO!5e0!3m2!1ses-419!2sco!4v1691975834487!5m2!1ses-419!2sco',
  },

  hours: [{ days: 'Lunes a domingo', time: '11:00 a. m. – 1:00 a. m.' }],

  menuUrl: 'https://drive.google.com/drive/folders/1z53XbrxWQKNYW5ofkZI9q93aamANB5R4',

  socials: [
    { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/kolozo_gastrobar/' },
    { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/kolozo.gastrobar' },
    {
      id: 'tripadvisor',
      label: 'Tripadvisor',
      href: 'https://www.tripadvisor.co/Restaurant_Review-g4446037-d23897576-Reviews-Kolozo_Gastrobar-La_Dorada_Caldas_Department.html',
    },
  ],

  credits: { label: 'CastilloCoder', href: 'https://fullstack-colombia.netlify.app/' },
};
