/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color:{
          1: "#FF7400",
          2: "#D67E35",
          3: "#BC9060",
        }
      },
      backgroundImage:{
        'header': "url('src/assets/header.jpg')",
        'black_bg': "url('src/assets/black-bg.jpg')"
      },
      fontFamily:{
        'tinos': "Tinos",
        'opensans': "Open Sans"
      }
    },
  },
  plugins: [],
}