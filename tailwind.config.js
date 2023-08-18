/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
      Raleway: 'Raleway'
    },
    extend: {
      colors:{
        PaleBlue: 'hsl(243, 100%, 93%)',
        GrayishBlue: 'hsl(229, 7%, 55%)',
        DarkBlue: 'hsl(228, 56%, 26%)',
        VeryDarkBlue: 'hsl(229, 57%, 11%)'
      }
    },
  },
  plugins: [],
}

