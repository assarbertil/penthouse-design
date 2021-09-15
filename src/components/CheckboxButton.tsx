/*  import { motion } from "framer-motion";

export default function TodoMenuButtonCollection({ variant, onChange }) {
  const animations = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={animations}
      className="flex flex-1 text-gray-400 capitalize bg-gray-900 rounded-lg appearance-none pointer-events-auto select-none focus:outline-none h-11 shadow-button"
    >
      <input
        defaultChecked
        onChange={onChange}
        type="checkbox"
        name={variant}
        id={variant}
        className={`${variant} hidden`}
      />
      <label
        htmlFor={variant}
        className={`${variantClasses} text-sm md:text-base flex flex-grow items-center cursor-pointer justify-center rounded-lg border bg-opacity-40 transition duration-100 ease-in-out hover:bg-opacity-50 active:bg-opacity-60 h-full`}
      >
        {variant}
      </label>
    </motion.div>
  );
}
 
 */
