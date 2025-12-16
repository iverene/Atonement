import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const CAST_DATA = {
  main: [
    { actor: "Iverene Grace Causapin", character: "Abby" }, 
    { actor: "Ron Andrew Arizala", character: "Joaquin" },
    { actor: "Nicoll Mitch Maningat", character: "Nigel" },
    { actor: "Cielo Tadas", character: "Chloe" },
    { actor: "Trishia Mae Piliin", character: "Bea" },
  ],
  supporting: [
    { actor: "Raniel Carl Lopez", character: "Foreman" },
    { actor: "John Rey Bagunas", character: "Nigel's Employee" },
    { actor: "Ramon Pascual", character: "Joaquin's Manager" },
  ],
  crew: [
    { role: "Director", name: "Charlie Villacoba" },
    { role: "Co-Director", name: "Iverene Grace Causapin" },
    { role: "Editors", name: "Charlie Villacoba, Nicoll Mitch Maningat, John Rey Bagunas" },
    { role: "Videographers", name: "Charlie Villacoba, John Rey Bagunas" },
    { role: "Scriptwriter", name: "Cielo Tadas" },
  ]
};

const CastModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex justify-center items-center bg-black/80 p-4 backdrop-blur-sm">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      <div className="absolute inset-0" onClick={onClose}></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="relative w-full max-w-3xl bg-[#181818] rounded-lg shadow-2xl overflow-hidden text-white border border-gray-800 flex flex-col"
        style={{ maxHeight: '85vh' }}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#181818] px-6 py-4 md:px-8 md:py-6 border-b border-gray-700 flex justify-between items-center shadow-md">
          <h2 className="text-xl md:text-2xl font-bold text-white">Cast & Crew</h2>
          <button 
            onClick={onClose}
            className="bg-gray-800 rounded-full p-2 hover:bg-gray-600 transition-colors"
          >
            <FaTimes className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto no-scrollbar space-y-8 md:space-y-10">
          
          {/* Section: Main Cast */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-400 mb-4 border-l-4 border-red-600 pl-3">Main Cast</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CAST_DATA.main.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-[#2b2b2b] p-3 rounded-md border border-gray-700">
                  <span className="font-bold text-white text-sm md:text-base">{item.actor}</span>
                  <span className="text-gray-400 text-xs md:text-sm">as <span className="text-gray-200">{item.character}</span></span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Supporting Characters */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-400 mb-4 border-l-4 border-red-600 pl-3">Supporting Characters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CAST_DATA.supporting.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-[#2b2b2b] p-3 rounded-md border border-gray-700">
                  <span className="font-bold text-white text-sm md:text-base">{item.actor}</span>
                  <span className="text-gray-400 text-xs md:text-sm">as <span className="text-gray-200">{item.character}</span></span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Crew */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-400 mb-4 border-l-4 border-red-600 pl-3">Crew</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CAST_DATA.crew.map((item, index) => (
                <div key={index} className="flex flex-col bg-[#202020] p-3 rounded-md border border-gray-800">
                  <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest mb-1">{item.role}</span>
                  <span className="font-medium text-white text-sm md:text-base">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default CastModal;