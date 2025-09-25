/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavanda: {
          50: '#f8f5fc',
          100: '#f1ebf8',
          200: '#e6d9f3',
          300: '#d4b9e3',
          400: '#c196d1',
          500: '#a870b8',
          600: '#8f549c',
          700: '#764580',
          800: '#623a69',
          900: '#523356',
        },
        mostarda: {
          50: '#fefdf7',
          100: '#fef9e7',
          200: '#fef2c4',
          300: '#fde896',
          400: '#ddcb75',
          500: '#d4b544',
          600: '#c49c37',
          700: '#a37e30',
          800: '#85642e',
          900: '#705329',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}