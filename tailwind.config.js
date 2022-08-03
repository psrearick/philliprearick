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
                secondary: colors.blue,
                primary: colors.blue,
                test: colors.slate,
            },
        },
    },
    plugins: [],
}
