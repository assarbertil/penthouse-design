import React, { FC } from "react";

import { clickable } from "../animations";
import { motion } from "framer-motion";

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
  let classes: string[] = [
    "flex items-center justify-between px-3 border shadow-xl cursor-pointer select-none peer-checked:bg-opacity-100 bg-opacity-40 rounded-xl",
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
      classes.push("text-gray-300 bg-gray-800 border-gray-600");
      break;
    case "blue":
      classes.push("text-blue-50 bg-blue-900 border-blue-700");
      break;
    case "green":
      classes.push("text-green-50 bg-green-900 border-green-700");
      break;
    case "rose":
      classes.push("text-rose-50 bg-rose-900 border-rose-700");
      break;
    case "amber":
      classes.push("text-amber-50 bg-amber-900 border-amber-700");
      break;
  }

  className && classes.push(className);

  return (
    <div>
      <input
        id={children}
        className="hidden peer"
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={onChange && onChange}
      />
      <label
        htmlFor={children}
        className={classes.join(" ")}
        style={style && style}
      >
        {children}
      </label>
    </div>
  );
};
