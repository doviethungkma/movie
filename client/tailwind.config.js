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
    },
  },
  plugins: [],
};
