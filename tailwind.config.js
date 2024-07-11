/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderColor: {
        'custom-primary': '#A57E17',
        'custom-secondary': '#006972',
        'custom-gray': '#ECF2F3',
      },
      backgroundColor: {
        'custom-primary': '#A57E17',
        'custom-secondary': '#006972',
        'custom-gray': '#ECF2F3',
        'white-80': 'rgba(255, 255, 255, 0.8)',
      },
      textColor: {
        'custom-primary': '#A57E17',
        'custom-secondary': '#006972',
        'custom-gray': '#ECF2F3',
      },
      boxShadow: {
        'custom-inset': 'inset 0px 5px 10px 0px rgba(255, 255, 255, 1)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

