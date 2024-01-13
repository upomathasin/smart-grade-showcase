/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        upDownAnimation: "upDownAnimation 3s  ease-in-out infinite",
      },
      keyframes: {
        upDownAnimation: {
          "0% 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-40px)",
          },
        },
      },

      container: {
        center: true,
        padding: "1.25rem",
      },
      colors: {
        clifford: "#da373d",
      },
    },
  },
  plugins: [],
};
