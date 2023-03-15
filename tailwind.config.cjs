/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "1024px" }, // Mobile screens
        laptop: { min: "1024px" }, // Laptop screens
      },
    },
  },
  plugins: [],
};

module.exports = config;
