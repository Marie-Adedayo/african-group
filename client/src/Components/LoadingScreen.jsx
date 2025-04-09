import React, { useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const textVariants = {
    hidden: { opacity: 0, scale: 0.5 }, 
    visible: { opacity: 1, scale: 15 }, 
    exit: { opacity: 0, scale: 19 }, 
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); 
    }, 3500);

    return () => clearTimeout(timer); 
  }, [onComplete]);

  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#248232] font-TT-Commons"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 1.5 }}
      >
        African Group
      </motion.h1>
    </motion.div>
  );
};

export default LoadingScreen;