/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(var(--color-primary) / <alpha-value> )",
        secondary: "rgb(var(--color-secondary) / <alpha-value> )",
      },
      textColor: {
        base: "rgb(var(--color-text-base) / <alpha-value> )",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      backgroundImage: {
        "mesh-gradient-large":
          "radial-gradient( circle at 15% 50%, #fef9c3, rgba(255, 255, 255, 0) 25% ), radial-gradient(circle at 85% 30%, #d1fae5, rgba(255, 255, 255, 0) 25%)",
        "mesh-gradient-small":
          "radial-gradient( circle at center left, #fef9c3, rgba(255, 255, 255, 0) 25% ), radial-gradient(circle at 80% 20%, #d1fae5, rgba(255, 255, 255, 0) 25%);",
      },
    },
  },
  plugins: [],
};
