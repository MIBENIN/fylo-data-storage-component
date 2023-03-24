/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      container:{
        padding:{
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      colors:{
        'sweetPink':'hsl(6, 100%, 80%)',
        'wildStrawBerry':'hsl(335, 100%, 65%)',
        'paleBlue': 'hsl(243, 100%, 93%)',
        'grayishBlue':'hsl(229, 7%, 55%)',
        'darkBlue': 'hsl(228, 56%, 26%)',
        'veryDarkBlue':'hsl(229, 57%, 11%)'
      },
      fontFamily:{
        'raleway':'Raleway, sans-serif',
      },
      borderRadius:{
        '4xl':'5rem',
      }
    },
  },
  plugins: [],
}
