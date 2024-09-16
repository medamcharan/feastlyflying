const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    flowbite.content(), // Add Flowbite's content paths
  ],
  theme: {
    extend: {colors: {
      'custom-blue': '#E1EFFE',
      'custom-gray': '#374151',
      'custom-id':'#F0F5FF'
    },},
  },
  plugins: [
    flowbite.plugin(), // Add Flowbite's plugin
  ],
};

