/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        recoletta: ["Recoleta", "sans-serif"],
        advent: ['Advent Pro', "sans-serif"],
      },
      width: {
        1: "1px",
        18: "360px",
        310: "310px",
        370: "370px",
        430: "430px",
        450: "450px",
      },
      borderWidth: {
        1: "1px",
      },
      objectPosition: {
        370: "370px",
        450: "450px",
      },
      objectPosition: {},
      borderWidth: {
        1: "0.5px",
        2: "1px",
        3: "1.5px",
        4: "2px",
      },
      colors: {
        customBlue: "#cccccc",
        lightBlue: "rgba(63, 96, 172, 0.6)"
      },
      boxShadow: {
        xmd: "0px 4px 40px 0px rgba(0, 0, 0, 0.15)",
        "3xl": "0px 0px 8px rgba(34, 34, 34, 0.07)",
      },
      gridTemplateColumns: {
        profileLayoutL: "auto 305px",
        profileLayoutM: "auto 278px",
      },
      borderRadius: {
        100: "100px",
        20: "20px",
        10: "10px",
      },
      backgroundColor: {
        lightPink: "rgba(255, 2, 2, 0.13)",
        profileHeroBg: "linear-gradient(90deg, #3D7EAA 0%, #FFE47A 100%)",
      
      },
      inset: {
        "135px": "-135px",
      },
      backgroundImage: {
        "percent-image": "url('../public/Ellipse 95.svg')",
      },
    },
  },
  plugins: [],
};
