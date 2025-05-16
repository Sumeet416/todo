const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default {

  content: [
    './templates/**/*.{html,js}',
    './static/**/*.{js,html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bevietnam: ['"Be Vietnam Pro"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        robotoslab: ['"Roboto Slab"', 'serif'],
        sourcesans: ['"Source Sans 3"', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],

};
