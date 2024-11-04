/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // backgroundImage: (theme) => ({
      //   "gradient-to-45": "linear-gradient(45deg, #ffed4a, #ff3860)",
      //   "gradient-to-135": "linear-gradient(135deg, #ffed4a, #ff3860)",
      //   // You can add more custom classes here
      // }),
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        libre: ["libre-baskerville-regular, libre-baskerville-regular-italic"],
        boda: ["Bodoni Moda", "bodoni-moda-regular"],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme("bgGradientDeg", {}), // name of config key. Must be unique
            {
              10: "10deg", // bg-gradient-10
              15: "15deg",
              20: "20deg",
              25: "25deg",
              30: "30deg",
              45: "45deg",
              60: "60deg",
              90: "90deg",
              120: "120deg",
              135: "135deg",
            }
          ),
        }
      );
    }),
  ],
};
