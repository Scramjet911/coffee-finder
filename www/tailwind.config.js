/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Raleway', ...fontFamily.sans]
    },
    extend: {
      colors: {
        primary: '#003B40'
      },
      fontFamily: {
        raleway: ['Raleway']
      }
    }
  },
  plugins: []
};
