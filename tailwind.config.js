/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'white': '#fff',
      'gray-400': '#BDBDBD',
      'gray-border': '#e7e7e9',
      'blue-50': '#E1F5FE',
      'blue-200': '#81D4FA',
      'blue-500': '#03A9F4',
      'blue-800': '#0277BD',
      'blue-A100': '#80D8FF',
      'blue-A400': '#00B0FF',
    },
  },
  plugins: [],
};
