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
          colorDark2:"#113D77",
          cartColorWoman : '#CC655D',
          buttonDivBackgroundSlider:"#FFFFFFCC",
          servervicesColorText:"#32323D",
          customColorGradient:"#B7C9E1",
          brownCustom:"#733934",
          DressColor1: "#D62121",
          DeressColor2 :"#B3AD84",
          DeressColor3:'#B79B89',
          DeressColor4:"#16519F",
       
        }
        
    },
  },
  plugins: [
    require('daisyui')
  ],
}

