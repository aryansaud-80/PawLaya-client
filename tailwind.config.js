/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logoFnt: ['Lobster', 'sans-serif'],
      },
      screens: {
        navScreen: '380px',
      },
      colors: {
        // Background Colors
        'bg-soft-green': '#A8D5BA',
        'bg-light-orange': '#FFBC8D',
        'bg-warm-beige': '#F0E2B6',
        'bg-gentle-coral': '#FF7F50',
        'bg-soft-aqua': '#79C7C5',

        // Text Colors
        'text-dark-brown': '#6E4B3A',
        'text-light-orange': '#FFBC8D',
        'text-soft-green': '#A8D5BA',
        'text-soft-brown': '#8F5C3C',
        'text-muted-grey': '#D3D3D3',

        // Button Colors
        'btn-bright-yellow': '#FFDA44',
        'btn-sky-blue': '#6CC9D6',
        'btn-forest-green': '#2C6E49',

        // Accent Colors
        'accent-dark-brown': '#6E4B3A',
        'accent-forest-green': '#2C6E49',
      },
    },
  },
  plugins: [],
};
