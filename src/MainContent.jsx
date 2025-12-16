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
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute top-1/2 left-10 lg:left-24 transform -translate-y-1/2 max-w-xl z-10 space-y-6">
        <img 
          src={titleImg} 
          alt="Atonement Title" 
          className="w-full max-w-lg drop-shadow-2xl"
        />
        <div className="flex items-center space-x-4 text-white text-sm font-semibold">
          <span className="bg-red-600 px-2 py-1 rounded-sm">SHORT FILM</span>
          <span>2025</span>
          <span>|</span>
          <span>ETHICS</span>
          <span>|</span>
          <span>Psychological Thriller</span>
        </div>
        <p className="text-lg text-gray-300 drop-shadow-md">
          Old friends attending a reunion are trapped and manipulated by a mysterious link that exposes their dark secrets, revealing the event as a calculated setup rather than a celebration.
        </p>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={onPlay}
            className="flex items-center justify-center bg-white text-black px-6 py-3 rounded font-bold text-lg hover:bg-gray-200 transition-colors duration-300"
          >
            <FaPlay className="mr-3" />
            Play
          </button>
          
          {/* UPDATED: More Info Button with onClick */}
          <button 
            onClick={onMoreInfo}
            className="flex items-center justify-center bg-gray-600/70 text-white px-6 py-3 rounded font-bold text-lg hover:bg-gray-600/50 transition-colors duration-300"
          >
            <FaInfoCircle className="mr-3" />
            More Info
          </button>
        </div>
      </div>

      {/* Volume Icon */}
      <div className="absolute bottom-44 right-10 z-10">
        <div className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors cursor-pointer">
          <FaVolumeUp className="text-white h-6 w-6" />
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="absolute bottom-0 left-0 w-full z-10 bg-gradient-to-t from-black to-transparent p-10 lg:p-24 flex items-center space-x-10">
        <button className="text-white text-lg font-bold border-b-4 border-red-600 pb-2">OVERVIEW</button>
        
        <button 
          onClick={onCast}
          className="text-gray-400 text-lg font-bold hover:text-white transition-colors"
        >
          CASTS
        </button>
      </div>
    </div>
  );
};

export default MainContent;