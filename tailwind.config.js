module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black-0': 'rgba(0, 0, 0, 0)',
        'black-80': 'rgba(0, 0, 0, 0.8)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
