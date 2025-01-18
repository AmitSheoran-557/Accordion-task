/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#191423',
        'darkTeal': '#026070',
        'lightBlack': '#222',
        'yellowGreen': '#56E3CB',
      },
      
    },
  },
  plugins: [],
}
