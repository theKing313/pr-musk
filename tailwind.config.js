/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 'hero-pattern': "url('./src/image/game-icons_feather.svg')",
      margin: {
        '0': '0px auto',
      }
    },
    fontFamily: {
      sans: [
        "Inter, sans-serif",
      ],
      Yantramanav: [
        "Yantramanav ,sans-serif"
      ]
    },
  },
  plugins: [],
}