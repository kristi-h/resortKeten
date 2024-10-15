/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ["libre-baskerville-regular, libre-baskerville-regular-italic"],
      },
    },
  },
  plugins: [],
};
