/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      white: '#ffffff',
      gunmetal: {
        100: '#006340',
        200: '#2d473e',
        300: '#293632',
      },
      gray: {
        100: '#dbdbdb',
        200: '#adadad',
        300: '#808080',
        400: '#f5f5f5',
      },
      red: {
        100: '#ff3333',
      },
    },
  },
}