/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl' : '0px 0px 25px 0px rgb(0 0 0 / 0.50)'
      }
    },
    fontFamily: {
      'costum': ['Kdam Thmor Pro', 'sans-serif'],
      'nama' : ['Edu QLD Beginner','cursive']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  darkMode: 'class'
}
