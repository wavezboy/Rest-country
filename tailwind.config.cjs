/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Source Sans Pro",
      },

      backgroundImage: {
        hero: "url('/src/assets/images/bg-sidebar-desktop.svg')",
        heroMobile: "url('/src/assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
  variants: {
    extend: {
      borderstyle: ["responsive", "hover"],
      borderwidth: ["responsive", "hover"],
    },
  },
};
