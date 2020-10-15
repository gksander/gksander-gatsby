const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.red,
        },
        owhite: {
          default: "rgba(255,255,255, 0.95)",
        },
        oblack: {
          default: "rgba(0,0,0, 0.8)",
        },
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fill: (theme) => ({
      primary: theme("colors.primary"),
      gray: theme("colors.gray"),
    }),
  },
  variants: {},
  plugins: [],
  purge: ["./**/*.tsx", "./**/*.html"],
};
