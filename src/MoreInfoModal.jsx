import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaTimes, FaPlus, FaThumbsUp } from 'react-icons/fa';
import Cast from './CastModal';
import cover from '../assets/coverphoto.jpg';

const MoreInfoModal = ({ isOpen, onClose, onPlay }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-center overflow-y-auto bg-black/60  p-4 pt-8">
      {/* Overlay to close when clicking outside */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-4xl bg-[#181818] rounded-md shadow-2xl overflow-hidden text-white mb-8"
        style={{ height: 'fit-content' }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-[#181818] rounded-full p-2 hover:bg-gray-700 transition-colors"
        >
          <FaTimes className="w-6 h-6 text-white" />
        </button>

        {/* Hero Image Section */}
        <div className="relative w-full h-96">
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent z-10" />
          <img 
            src={cover} 
            alt="Atonement Cover" 
            className="w-full h-full object-cover"
          />
          
          {/* Action Buttons Overlay */}
          <div className="absolute bottom-10 left-10 z-20 flex items-center space-x-4">
            <button 
              onClick={() => { onPlay(); onClose(); }}
              className="flex items-center bg-white text-black px-8 py-2 rounded font-bold hover:bg-gray-200 transition-colors"
            >
              <FaPlay className="mr-2" /> Play
            </button>
            <button className="border-2 border-gray-500 rounded-full p-2 hover:border-white transition-colors">
              <FaPlus className="w-5 h-5 text-gray-300" />
            </button>
            <button className="border-2 border-gray-500 rounded-full p-2 hover:border-white transition-colors">
              <FaThumbsUp className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>

        {/* Info Content Grid */}
        <div className="px-10 pb-10 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          
          {/* Left Column: Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-sm font-bold">
              <span className="text-gray-400">2025</span>
              <span className="border border-gray-500 px-1 text-xs">TV-MA</span>
              <span className="text-gray-400">Interactive Film</span>
            </div>

            <p className="text-white text-base leading-relaxed">
              Four successful high school friends—Joaquin, Nigel, Chloe, and Bea—are lured to a mysterious reunion at "The Loft." 
              Trapped in a secluded place, they are forced to confront a dark secret from their past: the bullying and death of their classmate, Nicole. 
              <br /><br />
              In this interactive experience, <strong>you</strong> decide who takes the fall.
            </p>
          </div>

          {/* Right Column: Cast & Genres */}
          <div className="space-y-6">
            <div className="text-sm">
              <span className="text-gray-500">Cast: </span>
              <span className="text-white hover:underline cursor-pointer">Ron Andrew Arizala</span>,{" "}
              <span className="text-white hover:underline cursor-pointer">Nicoll Mitch Maningat</span>,{" "}
              <span className="text-white hover:underline cursor-pointer">Cielo Tadas</span>,{" "}
              <span className="text-white hover:underline cursor-pointer">Trishia Mae Piliin</span>,{" "}
              <span className="text-white hover:underline cursor-pointer">Iverene Grace Causapin</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-500">Genres: </span>
              <span className="text-white">Psychological Thriller, Tragedy, Drama</span>
            </div>
          </div>
        </div>

{/* About the Film Section */}
        <div className="px-10 pb-10">
          <h3 className="text-xl font-bold mb-4 border-t border-gray-700 pt-6">About the Film</h3>
          
          <div className="space-y-6 text-gray-300">
            
            {/* Main Ethical Issue */}
            <div>
              <span className="block text-white font-bold mb-1 text-base">Main Ethical Issue: Moral Dilemma</span>
              <p className="text-sm leading-relaxed text-gray-400 text-justify">
                The story places its characters in an extreme <strong>Moral Dilemma</strong>, a situation where they are forced to choose between two difficult alternatives: self-preservation at the cost of another, or total accountability. It challenges the viewer to question how far they would go to survive when ethical principles collide with primal fear.
              </p>
            </div>

            {/* Additional Ethical Themes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <span className="block text-white font-semibold mb-1 text-sm">Human Dignity</span>
                <p className="text-xs leading-relaxed text-gray-400 text-justify">
                  The film explores the consequences of violating <strong>Human Dignity</strong>. It examines how treating individuals as "disposable" or "irrelevant" creates a cycle of dehumanization that eventually demands a reckoning.
                </p>
              </div>
              
              <div>
                <span className="block text-white font-semibold mb-1 text-sm">Accountability vs. Impunity</span>
                <p className="text-xs leading-relaxed text-gray-400 text-justify">
                  A central theme is the tension between escaping the past and facing the truth. The narrative questions whether <strong>Justice</strong> can ever truly be outrun, or if the guilt of evaded responsibility acts as its own form of imprisonment.
                </p>
              </div>

              <div>
                <span className="block text-white font-semibold mb-1 text-sm">Reason vs. Self-Interest</span>
                <p className="text-xs leading-relaxed text-gray-400 text-justify">
                  The narrative exposes how <strong>Reason</strong>, the foundation of morality, clashes with <strong>Self-Interest</strong>. It depicts characters distorting logic to justify who is "expendable," ultimately failing the moral standard of impartiality in their desperate bid for survival.
                </p>
              </div>
            </div>

          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default MoreInfoModal;