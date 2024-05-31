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
          colorDark:'#081C38'
        }
        
    },
  },
  plugins: [],
}

