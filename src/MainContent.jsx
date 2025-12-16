import React from 'react';
import { FaPlay, FaInfoCircle, FaVolumeUp } from 'react-icons/fa';
import cover from '../assets/coverphoto.jpg'; 
import titleImg from '../assets/title.png';

const MainContent = ({ onPlay, onMoreInfo, onCast }) => {
  return (
    <div className="h-screen w-full relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={cover}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="absolute top-1/2 left-4 md:left-10 lg:left-24 transform -translate-y-1/2 w-full max-w-xl z-10 space-y-4 md:space-y-6 pr-4">
        
        {/* Title Image */}
        <img 
          src={titleImg} 
          alt="Atonement Title" 
          className="w-[80%] md:w-full max-w-xs md:max-w-lg drop-shadow-2xl"
        />

        {/* Metadata Tags */}
        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-white text-xs md:text-sm font-semibold">
          <span className="bg-red-600 px-2 py-1 rounded-sm">SHORT FILM</span>
          <span>2025</span>
          <span className="hidden md:inline">|</span>
          <span>ETHICS</span>
          <span className="hidden md:inline">|</span>
          <span>Psychological Thriller</span>
        </div>

        {/* Synopsis */}
        <p className="text-sm md:text-lg text-gray-300 drop-shadow-md line-clamp-3 md:line-clamp-none">
          Old friends attending a reunion are trapped and manipulated by a mysterious link that exposes their dark secrets, revealing the event as a calculated setup rather than a celebration.
        </p>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-3 md:space-x-4 pt-2">
          <button
            onClick={onPlay}
            className="flex items-center justify-center bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded font-bold text-base md:text-lg hover:bg-gray-200 transition-colors duration-300"
          >
            <FaPlay className="mr-2 md:mr-3 text-sm md:text-base" />
            Play
          </button>
          
          <button 
            onClick={onMoreInfo}
            className="flex items-center justify-center bg-gray-600/70 text-white px-4 py-2 md:px-6 md:py-3 rounded font-bold text-base md:text-lg hover:bg-gray-600/50 transition-colors duration-300"
          >
            <FaInfoCircle className="mr-2 md:mr-3 text-sm md:text-base" />
            More Info
          </button>
        </div>
      </div>

      {/* Volume Icon (Hidden on very small screens to save space) */}
      <div className="hidden sm:block absolute bottom-32 md:bottom-44 right-4 md:right-10 z-10">
        <div className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors cursor-pointer border border-white/20">
          <FaVolumeUp className="text-white h-5 w-5 md:h-6 md:w-6" />
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="absolute bottom-0 left-0 w-full z-10 bg-linear-to-t from-black to-transparent p-4 md:p-10 lg:p-24 flex items-center space-x-6 md:space-x-10 overflow-x-auto no-scrollbar">
        <button className="text-white text-sm md:text-lg font-bold border-b-4 border-red-600 pb-2 whitespace-nowrap">OVERVIEW</button>
        <button 
          onClick={onCast}
          className="text-gray-400 text-sm md:text-lg font-bold hover:text-white transition-colors whitespace-nowrap"
        >
          CASTS
        </button>
      </div>
    </div>
  );
};

export default MainContent;