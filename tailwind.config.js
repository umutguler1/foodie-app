/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#ffc529",
        "custom-orange": "#fe7240",
        "custom-black": "#27202f",
        "custom-gray": "#d7d7d7",
        "custom-white": "#ffffff",
      },
    },
  },
};
