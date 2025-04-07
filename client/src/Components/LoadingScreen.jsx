import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 10 }, // Zoom out effect
  };

  useEffect(() => {
    // Simulate loading duration
    const timer = setTimeout(() => {
      onComplete(); // Trigger the completion callback
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, [onComplete]);

  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gray-900"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#248232]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        African Group
      </motion.h1>
    </motion.div>
  );
};

export default LoadingScreen;