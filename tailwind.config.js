/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      addUtilities({
        ".pill-lg": {
          "border-radius": "2rem",
        },
      });
    }),
  ],
  darkMode: "class",
};
