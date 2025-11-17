/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#011627',
        'teal-accent': '#2EC4B6',
        'light-text': '#FDFFFC',
        'card-bg': '#012A4A',
      }
    },
  },
  plugins: [],
}

