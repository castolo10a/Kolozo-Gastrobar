/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'premio': "url('C:/Users/Usuario/Desktop/Repos/Kolozo/src/assets/images/premioHamburguesa.jpg')",
        'fondo': "url('C:/Users/Usuario/Desktop/Repos/Kolozo/src/assets/images/fondo.jpg')",
      },
      fontFamily : {
        norse: ['Norsebold', 'static']
      }
    },
  },
  plugins: [],
}