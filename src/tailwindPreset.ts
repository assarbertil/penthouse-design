const { fontFamily } = require("tailwindcss/defaultTheme");

export const tailwindPreset = {
  theme: {
    fontFamily: {
      sans: ["Inter", ...fontFamily.sans],
    },
    fontSize: {
      10: "0.625rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
    },
    lineHeight: {
      base: "1.5",
      12: "0.75rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      56: "3.5rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      gray: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
