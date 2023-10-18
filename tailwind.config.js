/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
        float: {
          "0%": {
            transform: "translatey(0px)",

          },
          "25%":{
            transform: "translatey(0px)",
          },
          "50%":{
            animationTimingFunction: "infinite", 
          },  
          "75%":{
            transform: "translatey(20px)",
          },
          "100%":{
            transform: "translatey(0px)",
          },
        }
      },
      animation: {
        typing: "typing 1.5s steps(20) infinite alternate, blink .7s infinite",
        float: "float 5s infinite"
      },

    },
  },
  plugins: [],
}
