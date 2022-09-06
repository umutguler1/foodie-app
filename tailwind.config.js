/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#ffc529",
        "custom-orange": "#fe724c",
        "custom-black": "#272d2f",
        "custom-gray": "#d7d7d7",
        "custom-white": "#ffffff",
      },
    },
  },
};
