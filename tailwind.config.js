module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  presets: [require("./src/tailwindPreset.ts")],
  theme: {},
};
