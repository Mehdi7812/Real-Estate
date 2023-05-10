/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#363333',
        secondary: '#272121',
        graytext: '#9B9B9B',
        primaryOrange: '#E16428',
        hoverPrimaryOrange: '#A74A1E',
        sec222831: '#222831',
        black50: 'rgba(0, 0, 0, 50%)',
      }
    },
  },
  plugins: [],
}

