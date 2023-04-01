/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";
export const purge = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const darkMode = false;
export const theme = {
  extend: {
    backgroundImage: {
      header: "url('./assets/header-background.webp')",
      mountainCollections:
        "url('./assets/mauntainCollections-background.webp')",
      subscribeEmail: "url('./assets/Subcribe-backgroud.webp')",
      gradienToTransparent:
        "linear-gradient(rgba(41, 37, 36, 1), rgba(41, 37, 36, 0))",
      gradienToBg: "linear-gradient(rgba(41, 37, 36, 0), rgba(41, 37, 36, 1))",
    },
    fontFamily: {
      sans: ["Roboto", ..._fontFamily.sans],
    },
  },
};
export const variants = {
  extend: {},
};
export const plugins = [
  require("postcss-import"),
  require("tailwindcss"),
  require("autoprefixer"),
  require("@tailwindcss/typography"),
];
