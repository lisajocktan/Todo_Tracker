  // tailwind.config.js
  module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     
     theme: {
       extend: {
        fontFamily: {
          Roboto: ["Poppins, sans-serif"],
        },
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }