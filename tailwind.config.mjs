/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        pop: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(2)' },
        },
      },
      animation: {
        pop: 'pop 0.5s ease-in',
      },
      fontFamily: {
        'west': ['"Rye"', 'serif'],
        'oswald': ['"Oswald", sans-serif']
      },
      colors: {
        'ww-green': '#4EC69B',
        'ww-green-100': '#9EEFD0',
        'ww-black': '#2d2e2b',
        'ww-white': '#E8F4E7',
        'egg': '#F9F1CB',
        'red': '#DE6138',
        'orange': '#FC6736',
        'dark-orange': '#C28E24',
        'purple': '#9E88ED'
      
      },
      boxShadow: {
        'test': '0px 0px 16px 6px #4EC69B'
  
      }
    },
  },
  plugins: [],
};
