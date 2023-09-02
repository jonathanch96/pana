/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        snell: ['Snell Roundhand', 'cursive'],
        lucette: ['Lucette', 'sans'],
        uncut: ['Uncut Sans', 'sans'],
      },
      spacing: {
        '30px': '30px',
        '50px': '50px',
        '304px': '304px',
        '400px': '400px',
      },
      colors: {
        customGray: '#D9D9D9',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
