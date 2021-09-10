module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primay: '#06202A'
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover','hover', 'focus', 'active'],
      textColor: ['active'],
      padding: ['last']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
