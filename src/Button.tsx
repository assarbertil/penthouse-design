import React from "react";

import { clickable } from "./lib/animations";
import { motion } from "framer-motion";

export interface Props {
  children?: any;
  onClick?: () => any;
  className?: string;
  as: "button" | "a";
  type: "button" | "submit" | "reset";
  href?: string;
}

export const Button = ({
  children,
  onClick,
  className,
  as = "button",
  type,
  href,
}: Props) => {
  let classes: string[] = [
    "flex items-center justify-center pointer-events-auto p-2 text-gray-400 bg-gray-800 rounded-lg focus:outline-none h-11 shadow-button w-min whitespace-nowrap",
  ];

  className && classes.push(className);

  return as === "button" ? (
    <motion.button
      whileHover={clickable.hover}
      whileTap={clickable.tap}
      className={classes.join(" ")}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  ) : (
    <motion.a
      href={href}
      whileHover={clickable.hover}
      whileTap={clickable.tap}
      className={classes.join(" ")}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.a>
  );
};
