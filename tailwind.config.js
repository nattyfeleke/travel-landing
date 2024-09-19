/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-50': 'linear-gradient(50deg, var(--tw-gradient-stops))'
      },
      fontFamily: {
        'firma-black':['FirmaBlack','sans-serif'],
        'firma-bold':['FirmaBold','sans-serif'],
        'firma-light':['FirmaLight','sans-serif'],
        'firma-medium':['FirmaMedium','sans-serif'],
        'firma': ['FirmaRegular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}