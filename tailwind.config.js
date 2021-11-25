module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
         'card-texture': "url('./assets/cardTexture6.png')",
         'feature-graphic': "url('./assets/featureGraphicSW.png')",
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
