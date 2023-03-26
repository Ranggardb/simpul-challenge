/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        'bold-16': ['16px', { fontWeight: '700' }],
        'bold-14': ['14px', { fontWeight: '700' }],
        'regular-16': ['16px', { fontWeight: '400' }],
        'regular-14': ['14px', { fontWeight: '400' }],
        'regular-12': ['12px', { fontWeight: '400' }],
      },
      colors: {
        'primary-blue': '#2F80ED',
        'primary-gray': {
          light: '#E0E0E0',
          medium: '#828282',
          dark: '#4F4F4F',
        },
        'indicator-orange': '#F8B76B',
        'indicator-purple': '#8785FF',
        'indicator-red': '#EB5757',
        'indicator-yellow': '#F2C94C',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
