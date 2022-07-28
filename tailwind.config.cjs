/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui : {
    themes: ['dracula']
  }
}
