/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        menu: "0 5px 25px 0 rgba(0,0,0,0.3)",
      },
      borderColor: {
        thin: "rgba(255,255,255,0.05)",
      },
      backgroundImage: {
        login: "url('/src/assets/images/background.jpg')",
      },
    },
  },
  plugins: [],
};
