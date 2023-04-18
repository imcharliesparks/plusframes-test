/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'nunito': ['"Nunito", sans-serif'],
    },
    container: {
      center: true,
      padding: {
          DEFAULT: '12px',
          sm: '1rem',
          lg: '45px',
          xl: '5rem',
          '2xl': '13rem',
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // TODO: Revisit color palette
        pfBlue: '#67669a',
        pfPink: '#ad5682',
        pfLightBlue: '#7f6a93',
        pfLightPink: '#c37196',
        pfPurple: '#a5a0c0',
        pfWarmPink: '#f1b6cc'
      },
    },
  },
  plugins: [require("daisyui")]
}
