/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      primary: '#2871E6',
      heading: '#14181F',
      body: '#414750',
      disable: '#565E69',
      placeholder: '#8B939F',
      informative: '#1C51A4',
      white: '#f1f1f1',
      success: '#60830D',
      warning: '#82620F',
      error: '#AB2816',
      red: '#FF6347',
      informativeStroke: '#2C68C6',
      successStroke: '#98C729',
      warningStroke: '#E8B93F',
      errorStroke: '#DD331D',
      bgPrimary: '#EDF4FF'
    },
    fontFamily: {
      // eslint-disable-next-line prettier/prettier
      heading: ['Poppins', 'sans-serif']
    },
    extend: {
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem'
      },
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.25rem',
        lg: '.5rem',
        full: '9999px'
      }
    }
  },
  plugins: []
}
