/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      dark: '#191a23',
      grey: '#f3f3f3',
      green: '#b9ff66',
      black: '#000',
      white: '#fff',
    },
    screens: {
      dekstop: { max: '1280px' },
      // => @media (max-width: 1279px) { ... }
      laptop: { max: '1024px' },
      // => @media (max-width: 1023px) { ... }

      tablet: { max: '768px' },
      // => @media (max-width: 767px) { ... }

      mobile: { max: '480px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
