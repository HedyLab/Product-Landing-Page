module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '992px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '414px' },
      // => @media (max-width: 639px) { ... }

      'xlPc':{ 'max' : '1439px'},
      'pc':{ 'max' : '1204px'},
      'laptop': { 'max': '1024px' },
      'xlTablet':{ 'max' : '834px'},
      'tablet': { 'max': '768px' },
      'mobile': { 'max': '480px' },
      's': { 'max': '420px' },
      'se':{ 'max' : '374px'}
    },
    colors: {
      'white': '#FFFFFF',
      'gray': '#C4C4C4',
      'grayLight': '#F7F7F7',
      'grayDeep': '#666666',
      'blue': '#BADBEE',
      'blueLight': '#BADBEE',
      'blueDeep': '#1A374D',
      'pink': '#F8D4B1',

      // MasterBox
      'primary': '#FFAB37',//黃
      'secondary': '#93C976',//綠
      'tertiary': '#2B84FF',//藍
      'alert': '#EB6666',//紅
      'grayscale': '#666666',//灰
      'black':'#000000',//黑
      'shadowGray': '#CCCCCC',
      'cardShadow': '#EFEFEF',
      'black_tertiary':'#B3B3B3',//淺灰
      'transparent':'rgb(255,255,255,0)',
      'black_purple':'#3F404F',
      'black_dark900':'#5A5A5A',


      'primary_lightest': '#FFEED7',//亮黃
      'secondary_lightest': '#E9F4E4',//亮綠
      'tertiary_lightest': '#B8D6FF',//亮藍
      'quaternary_lightest': '#A5C2EB',//亮綠
      'alert_lightest': '#FBE0E0',//亮紅
      'grayscale_lightest': '#D9D9D9',//亮灰


      'primary_light': '#FFC576',//hover黃
      'secondary_light': '#B8E0A3',//hover綠
      'tertiary_light': '#72ADFF',//hover藍
      'quaternary_light': '#9DB3D2',//hover綠
      'alert_light': '#FFC5C5',//hover紅
      'grayscale_light': '#B3B3B3',//hover灰





    },
    // fontSize: {

    //   headline_small:'14px',
    //   headline_normal:'16px',
    //   headline_medium:'18px',
    //   headline_large:'24px',

    // },
    extend: {
    
    },
  },
  plugins: [],
}
