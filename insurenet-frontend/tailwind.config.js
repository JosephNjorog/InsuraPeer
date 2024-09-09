// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'], 
      },
      colors: {
        'custom-green': '#32a852', 
      },
    },
  },
  plugins: [],
}