/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily:{
        "pri":"Poppins, sans-serif",
        "sec":"Raleway, sans-serif",
      },
      colors:{
        // 'pri': {
        //   "10":"#fcfaff",
        //   "25":"#faf5ff",
        //   "50": "#f5ebff",
        //   "75":"#eedbff",
        //   "100": "#d9adff",
        //   "200": "#c685ff",
        //   "300": "#b35cff",
        //   "400": "#a033ff",
        //   "500": "#8800ff",
        //   "600": "#7800e0",
        //   "700": "#6200b8",
        //   "800": "#4c008f",
        //   "900": "#360066",
        //   "1000":"#21003d",
        //   "1100":"#0b0014",
        // },    
        'pri': {
          '10':'#fafcff',
          '25':'#f6f9fe',
          '50': '#f2f7fd',
          '100': '#e5edf9',
          '200': '#c5dbf2',
          '300': '#92bde7',
          '400': '#589ad8',
          '500': '#327cc5',
          '600': '#205a99',
          '700': '#1d4e87',
          '800': '#1c4470',
          '900': '#1c3a5e',
          '1000':'#0f2f57',
          '1100':'#04172f',
      },      
      }
    },
  },
  plugins: [],
}
