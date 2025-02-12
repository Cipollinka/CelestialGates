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
        bg: '#48126F',
        primary: '#624F00',
        secondary: '#816801',
        'secondary-50': '#FFD000',
        text: '#FBC000',
        red: '#FF0000',
        'white-50': '#ffffff80',
        'white-20': '#ffffff40',
      },
    },
  },
  plugins: [],
};
