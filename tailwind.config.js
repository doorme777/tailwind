/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        sanfransico: "url(./public/assets/Convertido-sanFrancisco.jpg)",
        sanfransiscoDesktop:
          "url(./public/assets/Convertido-sanFranciscoDesktop.jpg)",
        yosemite: "url(public/assets/Convertido-yosemite.jpg)",
        LA: "url(public/assets/Convertido-LA.jpg)",
        seattle: "url(public/assets/Convertido-seattle.jpg)",
        new_york: "url(public/assets/Convertido-new_york.jpg)",
        norway: "url(public/assets/Convertido-norway.jpg)",
        sydney: "url(public/assets/Convertido-sydney.jpg)",
        miami: "url(public/assets/Convertido-miami.jpg)",
        switzerland: "url(public/assets/Convertido-switzerland.jpg)",
        europa: "url(public/assets/Convertido-europe.jpg)",
        iceland: "url(public/assets/Convertido-iceland.jpg)",
      },

      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      }),

      textColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      },
      fontFamily: {
        Monserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [],
};
