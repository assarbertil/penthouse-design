import React from "react";

import { clickable } from "./lib/animations";
import { motion } from "framer-motion";

import { Colors } from "./lib/ColorTypes";

export interface Props {
  children?: any;
  icon?: any;
  onClick?: () => any;
  className?: string;
  as: "button" | "a";
  type: "button" | "submit" | "reset";
  href?: string;
  size?: "sm" | "base" | "lg";
  color?: Colors;
  prefix?: any;
  suffix?: any;
}

export const Button = ({
  children,
  icon,
  onClick,
  className,
  as = "button",
  type,
  href,
  size = "base",
  color = "gray",
  prefix,
  suffix,
}: Props) => {
  let classes: string[] = [
    "flex items-center justify-center pointer-events-auto rounded-lg leading-none focus:outline-none shadow-button w-min whitespace-nowrap",
  ];

  switch (size) {
    case "sm":
      classes.push("px-2 py-2 text-14 rounded-md");
      break;
    case "base":
      classes.push("p-3 rounded-lg");
      break;
    case "lg":
      classes.push("p-4  rounded-lg");
      break;
  }

  switch (color) {
    case "gray":
      classes.push("text-gray-300 bg-gray-800");
      break;
    case "blue":
      classes.push("text-blue-50 bg-blue-800");
      break;
    case "green":
      classes.push("text-green-50 bg-green-800");
      break;
    case "rose":
      classes.push("text-rose-50 bg-rose-800");
      break;
    case "amber":
      classes.push("text-amber-50 bg-amber-800");
      break;
  }

  className && classes.push(className);

  return as === "button" ? (
    <motion.button
      whileHover={clickable.hover}
      whileTap={clickable.tap}
      className={classes.join(" ")}
      onClick={onClick}
      type={type}
    >
      {prefix && <span className="w-4 h-4 mr-2">{prefix}</span>}
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
      {suffix && <span className="w-4 h-4 ml-2">{suffix}</span>}
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
      {prefix && <span className="w-4 h-4 mr-2">{prefix}</span>}
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
      {suffix && <span className="w-4 h-4 ml-2">{suffix}</span>}
    </motion.a>
  );
};
