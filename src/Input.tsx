import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import { clickable } from "./lib/animations";
import { IconCross } from "./Icons";

import { Colors } from "./lib/ColorTypes";

export interface Props {
  prefix?: any;
  placeholder: string;
  type?: "email" | "number" | "password" | "search" | "tel" | "text";
  color?: Colors;
  onChange?: (e?: any) => any;
  withCross?: boolean;
  defaultValue?: string;
  id?: string;
  shadow?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Input: FC<Props> = React.memo(
  ({
    prefix,
    placeholder,
    type = "text",
    color = "gray",
    onChange,
    withCross = false,
    defaultValue,
    id,
    shadow = false,
    disabled = false,
    className,
    style,
  }) => {
    const [value, setValue] = useState(() =>
      defaultValue ? defaultValue : ""
    );
    const [showX, setShowX] = useState(() => (value.length > 0 ? true : false));

    let containerClasses: string[] = [
      "flex items-center justify-start w-full px-2 rounded-lg pointer-events-auto focus:outline-none",
    ];
    let inputClasses: string[] = [
      "w-full h-10 bg-transparent focus:outline-none",
    ];

    switch (color) {
      case "gray":
        inputClasses.push("placeholder-gray-300");
        containerClasses.push("bg-gray-800 text-gray-200");
        break;
      case "blue":
        inputClasses.push("placeholder-blue-300");
        containerClasses.push("bg-blue-900 text-blue-200");
        break;
      case "green":
        inputClasses.push("placeholder-green-300");
        containerClasses.push("bg-green-900 text-green-200");
        break;
      case "rose":
        inputClasses.push("placeholder-rose-300");
        containerClasses.push("bg-rose-900 text-rose-200");
        break;
      case "amber":
        inputClasses.push("placeholder-amber-300");
        containerClasses.push("bg-amber-900 text-amber-200");
        break;
    }

    className && containerClasses.push(className);
    shadow && containerClasses.push("shadow-button");
    disabled && containerClasses.push("cursor-not-allowed bg-opacity-60");
    disabled && inputClasses.push("cursor-not-allowed");

    return (
      <motion.div
        whileHover={disabled ? "" : clickable.hover}
        className={containerClasses.join(" ")}
      >
        {prefix && <span className="flex-shrink-0 w-5 h-5 mr-2">{prefix}</span>}

        <input
          id={id}
          type={type}
          value={value}
          disabled={disabled}
          style={style}
          placeholder={placeholder}
          className={inputClasses.join(" ")}
          onChange={(e) => {
            setValue(e.target.value);
            setShowX(e.target.value.length > 0 ? true : false);
            console.log("log on change");
            onChange && onChange(e);
          }}
        />

        {withCross && showX && (
          <button
            className="flex-shrink-0 w-5 h-5 ml-2"
            onClick={() => {
              setValue("");
              setShowX(false);
            }}
          >
            <IconCross />
          </button>
        )}
      </motion.div>
    );
  }
);
