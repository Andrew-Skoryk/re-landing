/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        header: "url('./assets/header-background.jpg')",
        subscribeEmail: "url('./assets/Subcribe-backgroud.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
