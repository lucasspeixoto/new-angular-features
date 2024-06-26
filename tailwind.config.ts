/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '5xs': '8px',
        '4xs': '9px',
        '3xs': '10px',
        '2xs': '11px',
        tiny: '13px',
        md: '15px',
      },
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        serif: ['Open Sans', ...defaultTheme.fontFamily.serif],
        icon: [
          'Material Symbols Outlined',
          {
            fontsize: '24px',
            fontVariationSettings: `"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24`,
          },
        ],
        'icon-filled': [
          'Material Symbols Outlined',
          {
            fontsize: '24px',
            fontVariationSettings: `"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24`,
          },
        ],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
};
