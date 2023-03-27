/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        header: "url('./assets/header-background.jpg')",
        mountainCollections:
          "url('./assets/mauntainCollections-background.jpg')",
        subscribeEmail: "url('./assets/Subcribe-backgroud.svg')",
        gradienToTransparent:
          "linear-gradient(rgba(41, 37, 36, 1), rgba(41, 37, 36, 0))",
        gradienToBg:
          "linear-gradient(rgba(41, 37, 36, 0), rgba(41, 37, 36, 1))",
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
