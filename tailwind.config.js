const { indigo } = require("color-name");

module.exports = {
  content: ["./**/*.html","./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
