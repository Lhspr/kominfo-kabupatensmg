/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind');
// const hero = require('@/assets/bg1.jpg')

module.exports = {
  content: [
    './node_modules/flowbite-react/lib/esm/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': "url('/assets/bg1.jpg')",
      },
    },
  },
  plugins: [require('flowbite/plugin'), flowbite.plugin(), require('@tailwindcss/forms')],
};