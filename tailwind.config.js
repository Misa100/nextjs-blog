/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1400px',
        '2xl' : {max : '1180px'},
        '4xl' : {max : '480px'}
      },
    },
  },
  plugins: [],
}

