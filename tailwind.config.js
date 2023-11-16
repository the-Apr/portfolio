/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  corePlugins: {
    preflight: false,
  },

  theme: {
    extend: {
    },

    // colors: {
    //   "card-bg" : "#272729",
    // },
    container: {
      center: true,
      padding: "5rem",
    },
    screen: {
      lg:"1124px",
      xl:"1124px",
      "2xl":"1124px",
    }
  },
  
  plugins: [],
}
