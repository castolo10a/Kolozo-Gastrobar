/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#121413',
          soft: '#1b1e1c',
          line: '#2a2e2b',
        },
        cream: {
          DEFAULT: '#f6f2ea',
          dark: '#ebe4d6',
        },
        brand: {
          DEFAULT: '#d4622a',
          dark: '#b54f1d',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.25em',
      },
    },
  },
  plugins: [],
};
