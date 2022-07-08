/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'costum': ['Kdam Thmor Pro', 'sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  darkMode: 'class'
}
