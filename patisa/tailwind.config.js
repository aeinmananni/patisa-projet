/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors :{

          redLigth:"#FF7E74",
          garyCustom : '#7E7E96',
          colorPrimary:'#16519F',
          colorPrimary2:'#334966',
          blueLigth:"#E8EEF5",
          orangeCustom : "#FF7E74", 
          colorDark:'#081C38' ,
          cartColorWoman : '#CC655D',
          buttonDivBackgroundSlider:"#FFFFFFCC",
          servervicesColorText:"#32323D",
          customColorGradient:"#B7C9E1"
        }
        
    },
  },
  plugins: [
    require('daisyui')
  ],
}

