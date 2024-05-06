/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    container: {
      padding: '60px',
      center: true,
    },
    screens: {
      desktop: '700px',
      mobile: '385px',
      middle: '480px',
    },
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      black: 'rgb(var(--black) / <alpha-value>)',
      white: 'rgb(var(--white) / <alpha-value>)',
      gray: 'rgb(var(--gray) / <alpha-value>)',
      'dark-gray': 'rgb(var(--dark-gray) / <alpha-value>)',
      border: 'rgb(var(--border) / <alpha-value>)',
      text: 'rgb(var(--text) / <alpha-value>)',
      link: 'rgb(var(--link) / <alpha-value>)',
      red: 'rgb(var(--red) / <alpha-value>)',
      green: 'rgb(var(--green) / <alpha-value>)',
      orange: 'rgb(var(--orange) / <alpha-value>)',
      disabled: 'rgb(var(--disabled) / <alpha-value>)',
      'main-bg': 'rgb(var(--main-bg) / <alpha-value>)',
      'secondary-bg': 'rgb(var(--secondary-bg) / <alpha-value>)',
      yellow: 'rgb(var(--yellow) / <alpha-value>)',
    },
    extend: {
      fontFamily: {
        monoton: ['Monoton', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      height: {
        small: '10px',
      },
      minHeight: {
        content: 'calc(100vh - 110px - 69px)',
        'mobile-content': 'calc(100vh - 69px - 158px)',
        'сontent-without-footer': 'calc(100vh - 108px)',
        'mobile-content-without-footer': 'calc(100vh - 69px)',
      },

      width: {
        small: '10px',
      },
      margin: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        medium: '25px',
        large: '30px',
      },
      padding: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        medium: '25px',
        large: '30px',
      },
      gap: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        medium: '25px',
        large: '30px',
      },
      borderRadius: {
        base: '10px',
        large: '20px',
      },
      boxShadow: {
        base: ['0 4px 4px rgba(0, 0, 0, 0.15)', '0 0px 30px rgba(0, 0, 0, 0.11)'],
        button: '0 4px 4px rgba(0, 0, 0, 0.25)',
        'mobile-button': '0px -20px 30px rgba(0, 0, 0, 0.11)',
        panel: '0px 0px 30px rgba(0, 0, 0, 0.11)',
        switch: ['0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24)'],
      },
      dropShadow: {
        base: ['0 4px 4px rgba(0, 0, 0, 0.15)', '0 0px 30px rgba(0, 0, 0, 0.11)'],
      },
      cursor: {
        inherit: 'inherit',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/line-clamp')],
}
