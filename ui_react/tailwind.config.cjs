/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'bgImage':"url('./src/assets/img/crops1.png')",
        'loan':"url('./src/assets/img/farmer.png')",
      }
    },
  },
  plugins: [],
}