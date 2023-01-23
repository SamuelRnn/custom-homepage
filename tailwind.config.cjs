/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#19171a",
        accent: "#ab4060",
        card: "#201e21",
        light: "#d8dee9",
      },
    },
  },
  plugins: [],
};
