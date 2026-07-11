/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Space Palette
        primary: "#04020f",
        secondary: "#a89fd8",
        tertiary: "#0e0828",
        "black-100": "#090520",
        "black-200": "#04020f",
        "white-100": "#f0eeff",
        // Cosmic accents
        "cosmic-violet": "#7c3aed",
        "cosmic-indigo": "#4f46e5",
        "cosmic-gold": "#d4af37",
        "cosmic-gold-light": "#f0d060",
        "cosmic-border": "rgba(124, 58, 237, 0.25)",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: "0px 35px 120px -12px rgba(124, 58, 237, 0.3)",
        "cosmic": "0 0 20px rgba(124, 58, 237, 0.3), 0 0 40px rgba(124, 58, 237, 0.1)",
        "cosmic-gold": "0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.15)",
        "cosmic-hover": "0 8px 32px rgba(124, 58, 237, 0.25), 0 0 0 1px rgba(124, 58, 237, 0.15)",
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
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orbit-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        },
        'beacon': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(124, 58, 237, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(124, 58, 237, 0)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'blur-to-sharp': 'blur-to-sharp 1s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'orbit-reverse': 'orbit-reverse 15s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'beacon': 'beacon 2s ease-out infinite',
        'blink': 'blink 1s step-end infinite',
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #2563eb 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #d4af37 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(79, 70, 229, 0.05) 100%)',
      }
    },
  },
  plugins: [],
}