/** @type {import('tailwindcss').Config} */
import { blueGray, emerald } from 'tailwindcss/colors'

export const purge = [
  './src/**/*.vue',
  './src/**/*.js',
  './src/**/*.md',
  './src/**/*.html',
]
export const content = []
export const theme = {
  extend: {
    colors: {
      slate: blueGray,
      emerald: emerald,
    }
  }
}
export const plugins = []
