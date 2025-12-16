import React from 'react';
import { motion } from 'framer-motion';

const EndingSelection = ({ choices, onChoose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center space-y-16"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-white text-5xl md:text-6xl font-bold"
      >
        Choose Your Destiny
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-8">
        {Object.entries(choices).map(([key, { label }]) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChoose(key)}
            className="bg-white text-black px-12 py-6 rounded font-bold text-2xl hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            {label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default EndingSelection;