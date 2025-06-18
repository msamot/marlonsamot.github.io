/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/views/**/*.edge',
    './resources/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#800020', // Maroon
        secondary: '#A52A2A',
        dark: '#4A0000',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}