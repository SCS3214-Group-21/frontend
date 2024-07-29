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
        'custom-pink': '#CE427B',
      },
      backgroundColor: {
        'custom-primary': '#A57E17',
        'custom-secondary': '#006972',
        'custom-gray': '#ECF2F3',
        'white-80': 'rgba(255, 255, 255, 0.8)',
        'custom-pink': '#CE427B',
      },
      textColor: {
        'custom-primary': '#A57E17',
        'custom-secondary': '#006972',
        'custom-gray': '#ECF2F3',
        'custom-pink': '#CE427B',
      },
      boxShadow: {
        'custom-inset': 'inset 0px 5px 10px 0px rgba(255, 255, 255, 1)',
      },
      colors: {
        'custom-primary': '#A57E17',
        'custom-secondary': '#006972',
        'custom-gray': '#ECF2F3',
        'custom-yellow-light': '#FFD700', // light golden yellow
        'custom-yellow-dark': '#B8860B',  // dark golden yellow
        'custom-blue-light': '#00BFFF', // light blue
        'custom-blue-dark': '#005f6b',  // dark teal blue
        'custom-pink': '#CE427B',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

