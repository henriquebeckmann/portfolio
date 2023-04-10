/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        entry: 'entry 0.2s linear 1',
      },
      keyframes: {
        entry: {
          '0%': { transform: 'translateY(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

