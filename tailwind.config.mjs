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
        'west': ['"Rye"', 'serif']
      }
    },
  },
  plugins: [],
};
