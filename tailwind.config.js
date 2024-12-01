/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        slideshow: 'url("/assets/about/gili_island.jpg")',
      },
      keyframes: {
        aboutSlideShow: {
          "0%": {
            backgroundImage: 'url("/assets/about/gili_island.jpg")',
          },
          "14%": { backgroundImage: 'url("/assets/about/moto.jpg")' },
          "28%": {
            backgroundImage: 'url("/assets/about/fieldworker.jpg")',
          },
          "42%": {
            backgroundImage: 'url("/assets/about/fields_kids.jpg")',
          },
          "56%": { backgroundImage: 'url("/assets/about/drums.jpg")' },
          "70%": { backgroundImage: 'url("/assets/about/prayer.jpg")' },
          "84%": { backgroundImage: 'url("/assets/about/bananas.jpg")' },
          "100%": { backgroundImage: 'url("/assets/about/boat.jpg")' },
        },
      },
      animation: {
        aboutSlideShow: "aboutSlideShow 40s infinite",
      },
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
