import React from 'react';
import { motion } from 'framer-motion';

const blurVariants = {
  initial: { 
    opacity: 0, 
    filter: "blur(4px)",
    y: 4
  },
  in: { 
    opacity: 1, 
    filter: "blur(0px)",
    y: 0
  },
  out: { 
    opacity: 0, 
    filter: "blur(2px)",
    y: -4
  },
};

const pageTransition = {
  type: 'tween',
  ease: [0.25, 0.46, 0.45, 0.94], 
  duration: 0.25,
};

function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={blurVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;