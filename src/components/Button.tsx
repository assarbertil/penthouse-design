import React, { FC } from "react";

import { clickable } from "../animations";
import { motion } from "framer-motion";

import { Colors } from "../lib/ColorTypes";

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
  style?: React.CSSProperties;
}

export const Button: FC<Props> = ({
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
  style,
}) => {
  let classes: string[] = [
    "flex items-center justify-center pointer-events-auto rounded-lg leading-none focus:outline-none shadow-button whitespace-nowrap",
  ];
  let iconClasses: string[] = [""];

  switch (size) {
    case "sm":
      classes.push(
        `${
          icon || prefix || suffix ? "w-7" : "px-2 w-min"
        } rounded-md h-7 text-14`
      );
      iconClasses.push("w-4 h-4");
      break;
    case "base":
      classes.push(
        `${
          icon || prefix || suffix ? "w-9" : "px-3 w-min"
        } rounded-lg h-9 text-16`
      );
      iconClasses.push("w-5 h-5");
      break;
    case "lg":
      classes.push(
        `${
          icon || prefix || suffix ? "w-11" : "px-4 w-min"
        } rounded-lg h-11 text-16`
      );
      iconClasses.push("w-5 h-5");
      break;
  }

  switch (color) {
    case "gray":
      classes.push("text-gray-300 bg-gray-800");
      break;
    case "blue":
      classes.push("text-blue-50 bg-blue-900");
      break;
    case "green":
      classes.push("text-green-50 bg-green-900");
      break;
    case "rose":
      classes.push("text-rose-50 bg-rose-900");
      break;
    case "amber":
      classes.push("text-amber-50 bg-amber-900");
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
      style={style}
    >
      {prefix && (
        <span className={`${iconClasses.join(" ")} mr-2`}>{prefix}</span>
      )}
      {icon && <span className={iconClasses.join(" ")}>{icon}</span>}
      {children && (
        <span className={size === "sm" ? "mb-[1px]" : ""}>{children}</span>
      )}
      {suffix && (
        <span className={`${iconClasses.join(" ")} ml-2`}>{suffix}</span>
      )}
    </motion.button>
  ) : (
    <motion.a
      href={href}
      whileHover={clickable.hover}
      whileTap={clickable.tap}
      className={classes.join(" ")}
      onClick={onClick}
      type={type}
      style={style}
    >
      {prefix && (
        <span className={`${iconClasses.join(" ")} mr-2`}>{prefix}</span>
      )}
      {icon && <span className={iconClasses.join(" ")}>{icon}</span>}
      {children && (
        <span className={size === "sm" ? "mb-[1px]" : ""}>{children}</span>
      )}
      {suffix && (
        <span className={`${iconClasses.join(" ")} ml-2`}>{suffix}</span>
      )}
    </motion.a>
  );
};
