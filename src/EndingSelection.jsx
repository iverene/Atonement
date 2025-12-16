import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DESCRIPTIONS = {
  A: "Vote to sacrifice the weakest link. Survival requires a blood price.",
  B: "Confess the sins of the past. Total accountability is the only way out."
};

const EndingSelection = ({ choices, onChoose }) => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    // Timer logic
    if (timeLeft === 0) {
      onChoose('A'); // Automatically choose Ending A (Ending 1)
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup interval on unmount or when timer stops
    return () => clearInterval(timerId);
  }, [timeLeft, onChoose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center space-y-12 p-6"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-red-glow">
          Decide Their Fate
        </h2>
        
        {/* Suspense Timer Display */}
        <div className="text-red-600 text-4xl font-mono font-bold tracking-widest animate-pulse">
          00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {Object.entries(choices).map(([key, { label }], index) => (
          <motion.button
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (index * 0.2) }}
            whileHover={{ scale: 1.05, borderColor: "rgba(220, 38, 38, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChoose(key)}
            className="flex-1 bg-[#181818] border border-gray-700 p-8 rounded-lg flex flex-col items-center text-center hover:bg-[#222] transition-all duration-300 group"
          >
            <span className="text-3xl font-bold text-white mb-4 group-hover:text-red-600 transition-colors">
              {label}
            </span>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xs mx-auto group-hover:text-gray-200">
              {DESCRIPTIONS[key]}
            </p>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default EndingSelection;