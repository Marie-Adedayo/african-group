import React, { useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const textVariants = {
    initial: { opacity: 0, scale: 1 },
    visible: { opacity: 0.6, scale: 1, transition: { duration: 1 } }, // appears at normal scale, slightly transparent
    zoom: { opacity: 0.3, scale: 15, transition: { duration: 1.5 } }, // zooms in more transparent
    exit: { opacity: 0, scale: 19, transition: { duration: 0.5 } }, // final fade out
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#248232] font-TT-Commons"
        variants={textVariants}
        initial="initial"
        animate={["visible", "zoom"]}
        exit="exit"
      >
        African Group
      </motion.h1>
    </motion.div>
  );
};

export default LoadingScreen;
