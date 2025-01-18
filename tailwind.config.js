/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        moveBackground: 'moveBackground 10s linear infinite',
      },
      keyframes: {
        moveBackground: {
          '0%': { backgroundPosition: 'top left' },
          '100%': { backgroundPosition: 'bottom right' },
        },
      },
    },
  },
  plugins: [],
}


