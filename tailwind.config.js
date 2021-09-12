module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primay: '#06202A'
      },
      screens: {
        "3xl": "2000px"
      }
    },
  },
  variants: {
    extend: {
      animation: ['group-hover','hover', 'focus', 'active'],
      textColor: ['active'],
      padding: ['last'],
      scale: ['active', 'group-hover', 'hover'],
      zIndex: ['hover', 'active','group-hover'],
      fontWeight: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
