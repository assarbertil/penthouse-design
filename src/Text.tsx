import React from "react";

export interface Props {
  children?: any;
  as?: string;
  // as: String | FunctionComponent<{}> | ComponentClass<{}, any>;
  size?: 10 | 12 | 14 | 16 | 20 | 24 | 32 | 40 | 48;
  lineHeight?: "normal" | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  transform?: "capitalize" | "uppercase" | "lowercase";
  align?: "left" | "center" | "right";
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Text = ({
  children,
  as = "p",
  size = 14,
  lineHeight = "normal",
  weight,
  transform,
  align,
  color,
  className,
  style,
}: Props) => {
  let classes: string[] = [];

  className && classes.push(className);

  switch (size) {
    case 10:
      classes.push("text-10");
      break;
    case 12:
      classes.push("text-12");
      break;
    case 14:
      classes.push("text-14");
      break;
    case 16:
      classes.push("text-16");
      break;
    case 20:
      classes.push("text-20");
      break;
    case 24:
      classes.push("text-24");
      break;
    case 32:
      classes.push("text-32");
      break;
    case 40:
      classes.push("text-40");
      break;
    case 10:
      classes.push("text-48");
  }
  switch (lineHeight) {
    case 12:
      classes.push("leading-12");
      break;
    case 16:
      classes.push("leading-16");
      break;
    case 20:
      classes.push("leading-20");
      break;
    case 24:
      classes.push("leading-24");
      break;
    case 32:
      classes.push("leading-32");
      break;
    case 40:
      classes.push("leading-40");
      break;
    case 48:
      classes.push("leading-48");
      break;
    case 56:
      classes.push("leading-56");
      break;
    default:
      classes.push("normal");
  }
  switch (weight) {
    case 100:
      classes.push("font-thin");
      break;
    case 200:
      classes.push("font-extralight");
      break;
    case 300:
      classes.push("font-light");
      break;
    case 400:
      classes.push("font-normal");
      break;
    case 500:
      classes.push("font-medium");
      break;
    case 600:
      classes.push("font-semibold");
      break;
    case 700:
      classes.push("font-bold");
      break;
    case 800:
      classes.push("font-extrabold");
      break;
    case 900:
      classes.push("font-black");
  }
  switch (transform) {
    case "capitalize":
      classes.push("capitalize");
      break;
    case "uppercase":
      classes.push("uppercase");
      break;
    case "lowercase":
      classes.push("lowercase");
  }
  switch (align) {
    case "left":
      classes.push("text-left");
      break;
    case "center":
      classes.push("text-center");
      break;
    case "right":
      classes.push("text-right");
  }
  switch (color) {
    case "black":
      classes.push("text-black");
      break;
    case "gray-50":
      classes.push("text-gray-50");
      break;
    case "gray-100":
      classes.push("text-gray-100");
      break;
    case "gray-200":
      classes.push("text-gray-200");
      break;
    case "gray-300":
      classes.push("text-gray-300");
      break;
    case "gray-400":
      classes.push("text-gray-400");
      break;
    case "gray-500":
      classes.push("text-gray-500");
      break;
    case "gray-600":
      classes.push("text-gray-600");
      break;
    case "gray-700":
      classes.push("text-gray-700");
      break;
    case "gray-800":
      classes.push("text-gray-800");
      break;
    case "gray-900":
      classes.push("text-gray-900");
      break;
  }

  return React.createElement(
    as,
    { className: classes.join(" "), style: style },
    children
  );
};
