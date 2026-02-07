/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bellina': ['Bellina', 'sans-serif'],
        'gilroy': ['Gilroy', 'sans-serif']
      },
    },
  },
  plugins: [],
}
