/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          dark: '#450c3f',
          hover: '#33082e',
          light: '#5e1056'
        },
        lime: {
          pistachio: '#b9d175',
          soft: '#d9efbd',
          accent: '#c9e89d'
        },
        cream: {
          bg: '#f5fbda',
          card: '#ffffff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
