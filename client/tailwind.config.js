/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "background-color": "var( --background-color)",
        "color-gray": "var(--color-gray)",
        "modal-background-color": "var(--modal-background-color)",
      },
      gridTemplateColumns: {
        "70/30": "70% 30%",
        "60/40": "60% 40%",
      },
      borderColor: {
        thin: "#ffffff1A",
      },
      screens: {
        xs: "500px",
      },
      backgroundImage: {
        "comment-bg":
          "url('https://static2.vieon.vn/vieon-images/conversion/registration/comment_background_web_20220106.png')",
      },
    },
  },
  plugins: [],
};
