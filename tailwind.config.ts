/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './App.{js,jsx,ts,tsx}',
    './root/**/*.{js,jsx,ts,tsx}',
    './root/*.{js,jsx,ts,tsx}',
    './root/screens/**/*.{js,jsx,ts,tsx}',
    './root/screens/*.{js,jsx,ts,tsx}',
    './root/components/**/*.{js,jsx,ts,tsx}',
    './root/components/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        bg: '#1A0B2E',
        primary: '#9F2B68',
        secondary: '#B565A7',
        'secondary-50': '#D4A5C7',
        text: '#E6B8D9',
        accent: '#FFD700',
        'mystic-overlay': '#2A1B3D80',
        'divine-white': '#FFF9F0',
        error: '#FF4B4B',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-10px)'},
        },
      },
    },
  },
  plugins: [],
};
