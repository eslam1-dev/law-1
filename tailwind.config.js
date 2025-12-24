/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#231f20', // اللون الأسود الخاص بالموقع
          light: '#333333',
        },
        secondary: {
          DEFAULT: '#b59530', // اللون الذهبي الخاص بالموقع
          light: '#c5a059',
        },
        gray: {
          50: '#f9f9f9',
          100: '#f4f4f4',
        }
      },
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1200px',
        },
      },
    },
  },
  plugins: [],
}