/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f98a3',
          50: '#f0f9fa',
          100: '#d9f0f3',
          200: '#b7e2e7',
          300: '#86cdd6',
          400: '#4f98a3',
          500: '#3a8a96',
          600: '#32717c',
          700: '#2d5c65',
          800: '#2a4d54',
          900: '#274148',
        },
        gold: {
          DEFAULT: '#e8af34',
          50: '#fdf9eb',
          100: '#f9efc8',
          200: '#f3dd8d',
          300: '#ecc652',
          400: '#e8af34',
          500: '#d49320',
          600: '#b8711a',
          700: '#935319',
          800: '#7a431b',
          900: '#68381c',
        },
        'bg-dark': '#0f1117',
        surface: '#1c1b19',
        'surface-hover': '#2a2826',
        'board-light': '#f0d9b5',
        'board-dark': '#b58863',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-gold': 'pulseGold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232, 175, 52, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(232, 175, 52, 0)' },
        },
      },
    },
  },
  plugins: [],
};
