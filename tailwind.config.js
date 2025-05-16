/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0e1111",
        secondary: "#FFFDFA",
        tertiary: "#191970", //midnight blue
      },
      backgroundImage: {
        slideshow: 'url("/assets/about/gili_island.jpg")',
      },
      keyframes: {
        "fade-slide": {
          "0%": { opacity: 0, transform: "translateX(10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-slide": "fade-slide 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        libre: ["Libre Baskerville", "serif"],
        boda: ["Bodoni Moda", "serif"],
        saol: ["SaolDisplay-Regular", "serif"],
        helv: ['"Neue Helvetica"', "sans-serif"],
        gara: ['"Monotype Garamond"', "serif"],
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
          values: Object.assign(theme("bgGradientDeg", {}), {
            10: "10deg",
            15: "15deg",
            20: "20deg",
            25: "25deg",
            30: "30deg",
            45: "45deg",
            60: "60deg",
            90: "90deg",
            120: "120deg",
            135: "135deg",
          }),
        }
      );
    }),
  ],
};
