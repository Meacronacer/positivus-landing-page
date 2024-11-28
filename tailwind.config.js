/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }
      laptop: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      tablet: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      phone: { max: "480px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
