/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm:'640px',
      md: '768px',
      xl:'1024px',
      lg: '1280px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'grayLight': '#d3dce6',
      'black': '#000',
      'white': '#fff',
      'darkBlue': 'hsl(209, 23%, 22%)',
      'veryDarkBlue': 'hsl(207, 26%, 17%)',
      'darkGray': 'hsl(0, 0%, 52%)',
      'veryLightGray': 'hsl(0, 0%, 98%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
  },
}