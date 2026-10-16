/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        construction: {
          DEFAULT: '#F5A623',
          dark: '#E09000',
          light: '#FFB84D',
        },
        orange: {
          strong: '#FF6B1A',
        },
        chumbo: {
          DEFAULT: '#1C1E22',
          light: '#2A2D33',
          lighter: '#383C43',
          deep: '#0E0F12',
        },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease forwards',
        'slide-up': 'slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
