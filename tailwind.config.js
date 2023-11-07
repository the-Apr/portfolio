/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors:{
        "my-gradient": [""],
      }
    },
    fontFamily:{
      "worksans" : ["Work sans, sans-serif"],
      "poppins" :["Poppins, sans-serif"],
    },
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
