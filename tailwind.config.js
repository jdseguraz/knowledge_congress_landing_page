/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#163457',
          light: '#89c1e2',
        },
        orange: {
          DEFAULT: '#ea4e2b',
          hover: '#c43d1e',
        },
        sky: {
          DEFAULT: '#c1e4f5',
          light: '#c1e4f5',
          bg: '#F2F6FA',
        },
      },
      fontFamily: {
        bahnschrift: ['Bahnschrift', 'sans-serif'],
        sans: ['Bahnschrift', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
