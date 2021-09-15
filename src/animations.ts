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
  hover: { ...clickable.hover },
  tap: { ...clickable.tap, scale: 1.04 },
};

/* 
Element appear animations
*/
export const appear = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

/* 
  Staggering animations
*/
export const basicStaggering = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

export const slowStaggering = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 1 },
  },
};
