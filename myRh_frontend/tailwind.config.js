/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#7f387a",
        "secondary": "#e1ddde",
        "danger": "#e3342f",
        "success": "#38c172",
      },
      fontFamily: {
        "sans": ["Arial", "sans-serif"],
        "serif": ["Arial", "serif"],
      },
      textColor: {
        "primary": "#7f387a",
        "secondary": "#e1ddde",
        "default": "#000000",
      }
    },
  },
  plugins: [],
}
