/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainPrimary: '#03A84E',
        mainSecondary: '#F4F7F7'
      },
      fontFamily: {
        headingFont: ['Parkinsans', 'sans-serif']
      }
    },
  },
  plugins: [require('daisyui')],
}