/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        bgCurveMobile: "url('images/bg-curve-mobile.svg')",
        bgCurveDesktop: "url('images/bg-curve-desktop.svg')",
      },
      colors: {
        veryDarkblue: "hsl(243, 87%, 12%)",
        dsBlue: "hsl(238, 22%, 44%)",
        brightblue: "hsl(224, 93%, 58%)",
        dsCyan: "hsl(170, 45%, 43%)",
        lightBlue: "hsl(240, 75%, 98%)",
        lightGray: "hsl(0, 0%, 75%)",
      },
    },
  },
  plugins: [],
};
