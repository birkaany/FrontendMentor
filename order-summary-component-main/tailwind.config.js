/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      fontRedHat: ["Red Hat Display", "sans-serif"],
    },
    extend: {
      colors: {
        paleBlue: "hsl(225, 100%, 94%)",
        brightBlue: "hsl(245, 75%, 52%)",
        veryPaleblue: "hsl(225, 100%, 98%)",
        dsBlue: "hsl(224, 23%, 55%)",
        darkBlue: "hsl(223, 47%, 23%)",
      },
    },
  },
  plugins: [],
};
