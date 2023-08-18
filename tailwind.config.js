/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'tacos': "url('./assets/images/tacosCamaron.png')",
        'bebida2': "url('./assets/images/bebida2.png')",
        'bebida1': "url('./assets/images/bebida1.png')",
        'bebida4': "url('./assets/images/bebida4.png')",
        'hamburguesa': "url('./assets/images/Hamburguesa.png')",
        'ceviche': "url('./assets/images/cevicheChicharron.png')",
        'crumble': "url('./assets/images/crumble.png')",
        'bebida3': "url('./assets/images/bebida3.png')",
        'bebida5': "url('./assets/images/bebida5.png')",
        'elotes': "url('./assets/images/elotesCarnudos.png')",
        'nachos': "url('./assets/images/nachos.png')",
        'lomo': "url('./assets/images/lomo.jpeg')",
        'osobuco': "url('./assets/images/osobuco.png')",
        'espacio': "url('./assets/images/espacio.jpg')",
        'ginTonic': "url('./assets/images/gin-tonic-tradicional.jpg')",
        'premio': "url('./assets/images/premioHamburguesa.jpg')",
        'margarita': "url('./assets/images/margarita-de-mango.jpg')",
        'piñaColada': "url('./assets/images/pina-colada.jpg')",
        'kolozoGastrobar': "url('./assets/images/kolozo-gastrobar.jpg')",
        'amigos': "url('./assets/images/amigos.jpg')",
        'cumple': "url('./assets/images/cumpleaños.jpg')",
        'bautizo': "url('./assets/images/bautizo.jpg')",
        'cumpleDec': "url('./assets/images/cumpleañosDec.jpg')",
        'deco': "url('./assets/images/deco.jpg')",
        'emperador': "url('./assets/images/emperador.jpg')",
        'decoBautizo': "url('./assets/images/decoracionBautizo.jpg')",
        'beerKolozo': "url('./assets/images/kolozoBeer.jpg')",
        'hamburguesa2': "url('./assets/images/hamburguesa2.jpg')",
        'decoracion2': "url('./assets/images/decoracion.jpg')",
        'kolozoSitio': "url('./assets/images/kolozoSitio.jpg')",
        'decoracion': "url('./assets/images/decoracion.png')",
        'marimondas2' : "url('./assets/images/marimondas2.jpg')",
        'kolozoom' : "url('./assets/images/kolozoZoom.jpg')",
        'fondo' : "url('./assets/images/fondo.jpg')",
        'hamburguesaGanadora' : "url('./assets/images/hamburguesaGanadora.jpg')",
        'celebracion' : "url('./assets/images/celebracion.jpg')",
        'aniversario' : "url('./assets/images/aniversario.jpg')",
        'almuerzo' : "url('./assets/images/almuerzo.jpg')",
      },
      fontFamily : {
        norse: ['Norsebold', 'static']
      }
    },
  },
  plugins: [],
}