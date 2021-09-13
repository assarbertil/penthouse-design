/* 
  Clickable items animations
*/
export const clickable = {
  hover: {
    filter: "brightness(1.4)",
    transition: { duration: 0 },
  },
  tap: {
    filter: "brightness(1.3)",
    transition: { duration: 0 },
  },
};

export const clickableWithScale = {
  hover: {
    ...clickable.hover,
  },
  tap: {
    ...clickable.tap,
    scale: 1.04,
  },
};
