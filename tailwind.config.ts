import type { Config } from 'tailwindcss'

const plugin = require('tailwindcss/plugin')

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        celestial: {
          '50': '#f7f5f8',
          '100': '#f1edf2',
          '200': '#e5dde8',
          '300': '#d5c8d9',
          '400': '#c5b1c8',
          '500': '#b59cb8',
          '600': '#a586a5',
          '700': '#8f738f',
          '800': '#755e74',
          '900': '#604f60',
          '950': '#2a232a',
        },
        'celestial-gray': {
          50: "#F2F1F3",
          100: "#E6E3E8",
          200: "#CFCAD3",
          300: "#B6AEBC",
          400: "#9D92A5",
          500: "#85778F",
          600: "#6D6175",
          700: "#564C5C",
          800: "#3E3743",
          900: "#242027",
          950: "#1A171C"
        },
        infernal: {
          '50': '#fef6ee',
          '100': '#fcebd8',
          '200': '#f8d3b0',
          '300': '#f3b47e',
          '400': '#ed8a4a',
          '500': '#e86c27',
          '600': '#d9531d',
          '700': '#b43f1a',
          '800': '#90331c',
          '900': '#792e1b',
          '950': '#3f140b',
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ]
};
