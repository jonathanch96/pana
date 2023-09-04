/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '60px': '60px',
        '80px': '80px',
        '100px': '100px',
        '120px': '120px',
        '140px': '140px',
      },
      fontFamily: {
        snell: ['Snell Roundhand', 'cursive'],
        lucette: ['Lucette', 'sans'],
        uncut: ['Uncut Sans', 'sans'],
      },
      spacing: {
        '30px': '30px',
        '50px': '50px',
        '54px': '54px',
        '83px': '83px',
        '93px': '93px',
        '106px': '106px',
        '146px': '146px',
        '164px': '164px',
        '200px': '200px',
        '206px': '206px',
        '304px': '304px',
        '400px': '400px',
        '658px': '658px',
      },
      colors: {
        customGray: '#D9D9D9',
        customOrange: '#E83C00'
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
