/* import React from 'react';

import { clickable } from './lib/animations';
import { motion } from 'framer-motion';

export const Button = ({ children, onClick, className, type }) => (
  <motion.button
    whileHover={clickable.hover}
    whileTap={clickable.tap}
    className={`flex items-center justify-center pointer-events-auto p-2 text-gray-400 bg-gray-800 rounded-lg focus:outline-none h-11 shadow-button ${
      className ? className : ''
    }`}
    onClick={onClick}
    type={type}
  >
    {children}
  </motion.button>
);

Button.defaultProps = {
  children: 'Button',
  type: 'button',
  onClick: () => null,
};
 */
