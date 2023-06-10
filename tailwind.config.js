/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#969ddd",

          "secondary": "#ffbcf6",

          "accent": "#76f278",

          "neutral": "#342839",

          "base-100": "#EBECEF",

          "info": "#85A5D6",

          "success": "#7FE6D1",

          "warning": "#B29006",

          "error": "#E4446C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}



