/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {

      colors: {
        //***** WHITE THEME *****//
        darkBg: '#171717',
        redText: '#E44D4D',
        darkLightBg: '#FFFFFF12',

        grayLightText: 'rgb(64, 64, 64)',
        grayDarkText: 'rgb(23, 23, 23)',
        grayMediumText: 'rgb(82, 82, 82)',

        blue: '#4A66CD',
        white: '#FFFFFF',
        darkWhite: 'rgba(228, 231, 236, 0.5)',
        blueLight: '#DDE5F5',
        darkBlue: '#0C0A48',
        gray: '#627080',
        lightGray: '#929EAA',

        //***** DARK THEME *****//
        dMBlue: '#222B4F',
        dMWhite: '#E9E9F3',
        dMBlackBlue: '#1E2333',
        dMBlackBlueBg: '#1D1F27',
        dMLightBlue: '#708EF',
        dMGray: '#ACACB7',
      },
    },
  },
  plugins: [],
};
