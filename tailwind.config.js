/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    boxShadow: {
      neu1: 'inset 0.2em 0.2em 0.4em #54f6d2, inset -0.2em -0.2em 0.4em #fff',
      neu2: '0.2em 0.2em 0.4em #54f6d2, -0.2em -0.2em 0.4em #fff',
    },
    screens: {
      xs: '10px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '3.5rem',
      },
    },
    extend: {
      colors: {
        dark: '#141414',
      },
      fontFamily: {
        primary: ["'Lato'", ...fontFamily.sans],
        secondary: ['Alexana', ...fontFamily.serif],
        display: ["'Rubik Dirt Display'", 'cursive'],
        'cyber-normal': ['Punk Cyber Extrude', ...fontFamily.sans],
        'cyber-outline': ['Punk Cyber Outline', 'Arial'],
        'cyber-regular': ['Punk Cyber Regular', 'sans-serif'],
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
    },
  },
  plugins: [],
};
