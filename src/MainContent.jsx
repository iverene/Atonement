import React from 'react';
import { FaPlay, FaInfoCircle, FaVolumeUp } from 'react-icons/fa';
import cover from '../assets/coverphoto.jpg'; 

const MainContent = ({ onPlay }) => {
  return (
    <div className="h-screen w-full relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={cover}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute top-1/2 left-10 lg:left-24 transform -translate-y-1/2 max-w-xl z-10 space-y-6">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-none drop-shadow-lg">
          ATONEMENT
        </h1>
        <div className="flex items-center space-x-4 text-white text-sm font-semibold">
          <span className="bg-red-600 px-2 py-1 rounded-sm">N SERIES</span>
          <span>2017</span>
          <span>|</span>
          <span>TV-MA</span>
          <span>|</span>
          <span>5 Seasons</span>
          <span>|</span>
          <span>Crime TV Shows</span>
        </div>
        <p className="text-lg text-gray-300 drop-shadow-md">
          Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the policexz
          to carry out his plan.
        </p>
    
        <div className="flex items-center space-x-4">
          <button
            onClick={onPlay}
            className="flex items-center justify-center bg-white text-black px-6 py-3 rounded font-bold text-lg hover:bg-gray-200vr
            transition-colors duration-300"
          >
            <FaPlay className="mr-3" />
            Play
          </button>
          <button className="flex items-center justify-center bg-gray-600/70 text-white px-6 py-3 rounded font-bold text-lg hover:bg-gray-600/50 transition-colors duration-300">
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
        <button className="text-white text-lg font-bold border-b-4 border-red-600 pb-2">OVERVIEwd</button>
        <button className="text-gray-400 text-lg font-bold hover:text-white transition-colors">EPISODES</button>
        <button className="text-gray-400 text-lg font-bold hover:text-white transition-colors">TRAILERS & MORE</button>
        <button className="text-gray-400 text-lg font-bold hover:text-white transition-colors">MORE LIKE THIS</button>
      </div>
    </div>
  );
};

export default MainContent;