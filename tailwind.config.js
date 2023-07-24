const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    iconsPlugin({
      // 利用したい icon collection を利用する
      // https://icones.js.org/
      collections: getIconCollections(["tabler", "lucide"]),
    }),
  ],
};
