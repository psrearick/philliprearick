/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.md',
    './src/**/*.html',
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        slate: colors.blueGray,
        amber: colors.amber,
        emerald: colors.emerald,
        test: colors.slate,
      }
    }
  },
  plugins: [],
}