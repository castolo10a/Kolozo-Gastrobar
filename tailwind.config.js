/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'fondo': "url('C:/Users/Usuario/Desktop/Repos/Kolozo/src/assets/images/fondo.jpg')",
        'premio': "url('C:/Users/Usuario/Desktop/Repos/Kolozo/src/assets/images/premioHamburguesa.jpg')",
      },
      fontFamily : {
        norse: ['Norsebold', 'static']
      }
    },
  },
  plugins: [],
}