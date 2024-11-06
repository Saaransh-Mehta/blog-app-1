/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cream: '#FFFDF2',
       
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

