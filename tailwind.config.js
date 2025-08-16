/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -12px #211e35",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'blur-to-sharp': {
          '0%': { filter: 'blur(20px)' },
          '100%': { filter: 'blur(0px)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'blur-to-sharp': 'blur-to-sharp 1s ease-out forwards'
      }
    },
  },
  plugins: [],
} 