/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors:{
        'custom-blue': '#172554', // Add your custom color here,
        'dark-bg': '#0d1117',
      }
    },
  },
  plugins: [],
};


