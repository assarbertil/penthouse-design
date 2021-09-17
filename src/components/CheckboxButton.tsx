import React, { FC } from "react";
import { motion } from "framer-motion";

import { clickable, appear } from "../animations";
import { Colors } from "../lib/ColorTypes";

export interface Props {
  children?: any;
  icon?: any;
  onChange?: () => any;
  className?: string;
  size?: "sm" | "base" | "lg";
  color?: Colors;
  prefix?: any;
  suffix?: any;
  style?: React.CSSProperties;
  defaultChecked?: boolean;
}

export const CheckboxButton: FC<Props> = ({
  children,
  icon,
  onChange,
  className,
  size = "base",
  color = "gray",
  prefix,
  suffix,
  style,
  defaultChecked = true,
}) => {
  let labelClasses: string[] = [
    "flex items-center justify-center px-3 border shadow-xl cursor-pointer select-none peer-checked:bg-opacity-100 bg-opacity-40 rounded-xl",
  ];
  let containerClasses: string[] = ["pointer-events-auto"];
  let iconClasses: string[] = [];

  switch (size) {
    case "sm":
      labelClasses.push(
        `${icon || prefix || suffix ? "w-7" : "px-2"} rounded-md h-7 text-14`
      );
      iconClasses.push("w-4 h-4");
      break;
    case "base":
      labelClasses.push(
        `${icon || prefix || suffix ? "w-9" : "px-3"} rounded-lg h-9 text-16`
      );
      iconClasses.push("w-5 h-5");
      break;
    case "lg":
      labelClasses.push(
        `${icon || prefix || suffix ? "w-11" : "px-4"} rounded-lg h-11 text-16`
      );
      iconClasses.push("w-5 h-5");
      break;
  }

  switch (color) {
    case "gray":
      labelClasses.push("text-gray-50 bg-gray-800 border-gray-800");
      break;
    case "blue":
      labelClasses.push("text-blue-50 bg-blue-900 border-blue-900");
      break;
    case "green":
      labelClasses.push("text-green-50 bg-green-900 border-green-900");
      break;
    case "rose":
      labelClasses.push("text-rose-50 bg-rose-900 border-rose-900");
      break;
    case "amber":
      labelClasses.push("text-amber-50 bg-amber-900 border-amber-900");
      break;
  }

  className && containerClasses.push(className);

  return (
    <motion.div
      whileHover={clickable.hover}
      whileTap={clickable.tap}
      className={containerClasses.join(" ")}
      variants={appear}
    >
      <input
        id={children}
        name={children}
        className="hidden peer"
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={onChange && onChange}
      />
      <label
        htmlFor={children}
        className={labelClasses.join(" ")}
        style={style && style}
      >
        {children}
      </label>
    </motion.div>
  );
};
