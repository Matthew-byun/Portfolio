/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'san-serif'],
        outfit: ['Outfit', 'san-serif']
      },
      backgroundImage: {
        'hero-img': "url('assets/img/grid-hero.svg')"
      },
      width: {
        '100%': '100%',
        '50%': '50%',
      },
      height: {
        '100%': '100%',
        '50%': '50%',
      },
      fontSize: {
        'hero': '5.5em',
        'sm-hero': '3.1em',
        'xs-hero': '2.1em'
      },
      lineHeight: {
        'hero': '1.1em'
      },
      inset: {
        '1/4': '30%'
      },
      screens: {
        '400': '400px'
      }
    },
  },
  plugins: [],
}