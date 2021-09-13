/* import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

import { clickable } from "@/lib/animations";
import { IconCross } from "./Icons";

export const Input = ({ prefix, suffix, placeholder, type, onChange }) => {
  const [value, setValue] = useState("");
  const [showX, setShowX] = useState(false);

  return (
    <motion.div
      whileHover={clickable.hover}
      className="flex items-center justify-start flex-grow px-2 text-gray-400 bg-gray-800 rounded-lg pointer-events-auto focus:outline-none h-11 shadow-button"
    >
      {prefix && <div className="mr-2">{prefix}</div>}
      <input
        onChange={e => {
          e.target.value.length > 0 && setShowX(true);
          setValue(e.target.value);
          onChange && onChange(e.target);
        }}
        value={value}
        className="w-full h-full bg-transparent focus:outline-none"
        placeholder={placeholder}
        type={type}
      />
      {suffix && suffix}
      {showX && (
        <button
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
};
 */
