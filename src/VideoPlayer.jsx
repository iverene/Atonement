import React from 'react';
import YouTube from 'react-youtube';
import { FaArrowLeft } from 'react-icons/fa';

const VideoPlayer = ({ videoId, onEnd, onBack }) => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      fs: 1,
    },
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      <button
        onClick={onBack}
        className="absolute top-6 left-6 z-50 flex items-center text-white hover:text-red-600 transition-colors"
      >
        <FaArrowLeft className="mr-2 h-6 w-6" />
        <span className="text-lg font-semibold">Back to Browse</span>
      </button>
      <div className="flex-grow relative">
        <YouTube
          videoId={videoId}
          opts={opts}
          onEnd={onEnd}
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;