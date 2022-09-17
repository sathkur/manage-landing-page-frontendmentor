/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bright_red: 'hsl(12, 88%, 59%)',
        dark_blue: 'hsl(228, 39%, 23%)',
        dark_grayish_blue: 'hsl(227, 12%, 61%)',
        very_dark_blue: 'hsl(233, 12%, 13%)',
        very_pale_red: 'hsl(13, 100%, 96%)',
        vary_light_gray: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}