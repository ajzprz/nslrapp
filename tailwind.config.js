/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BB86FC",
        secondary: "#03DAC6",
        background: "#121212",
        surface: "#1E1E1E",
        error: "#CF6679",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "luxury", "dracula"],
  },
}
