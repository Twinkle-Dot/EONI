/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1366px",
      },
      fontFamily: {
        aldrich: "'Aldrich', sans-serif",
        audio: "'Audiowide', cursive",
      },
      backgroundImage: {
        "hero-pattern": "url('./images/Smoke.jpg')",
      },

      colors: {
        brand: "#2EB0CD",
        lightTurquoise: "#C7FAF1",
        plainWhite: "#EEEEEE",
        tangerine: "#F1AA3F",
        darkBlue: "#2EB0CD",
        newBlack: "#090B0D",
      },
    },
  },
  plugins: [],
};
