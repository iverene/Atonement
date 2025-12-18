import React, { useState } from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import VideoPlayer from './VideoPlayer';
import EndingSelection from './EndingSelection';
import MoreInfoModal from './MoreInfoModal';
import CastModal from './CastModal'; 
import { AnimatePresence } from 'framer-motion';

const FILM_DATA = {
  intro: {
    id: 'UwyNFbFUrVA',
    title: "Atonement",
  },
  endings: {
    A: {
      id: 'QPJen1fM-Rk',
      label: "Ending 1",
    },
    B: {
      id: '75xgk1Uc-d4',
      label: "Ending 2",
    }
  }
};

const NetflixUi = () => {
  const [currentVideo, setCurrentVideo] = useState(FILM_DATA.intro.id);
  const [showChoices, setShowChoices] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Modals state
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isCastModalOpen, setIsCastModalOpen] = useState(false); 

  const handlePlay = () => {
    setIsPlaying(true);
    setHasEnded(false);
    setShowChoices(false);
    setCurrentVideo(FILM_DATA.intro.id);
  };

  const handleVideoEnd = () => {
    if (currentVideo === FILM_DATA.intro.id) {
      setShowChoices(true);
    } else {
      setHasEnded(true);
      setIsPlaying(false);
    }
  };

  const chooseEnding = (endingKey) => {
    setShowChoices(false);
    setCurrentVideo(FILM_DATA.endings[endingKey].id);
    setHasEnded(false);
  };

  const handleBack = () => {
    setIsPlaying(false);
    setShowChoices(false);
    setHasEnded(false);
    setCurrentVideo(FILM_DATA.intro.id);
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Navbar />
      
      <MainContent 
        onPlay={handlePlay} 
        onMoreInfo={() => setIsInfoModalOpen(true)} 
        onCast={() => setIsCastModalOpen(true)} 
      />

      <AnimatePresence>
        {isInfoModalOpen && (
          <MoreInfoModal 
            isOpen={isInfoModalOpen} 
            onClose={() => setIsInfoModalOpen(false)} 
            onPlay={handlePlay} 
          />
        )}
        
        {/* Render Cast Modal */}
        {isCastModalOpen && (
          <CastModal 
            isOpen={isCastModalOpen} 
            onClose={() => setIsCastModalOpen(false)} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPlaying && !showChoices && !hasEnded && (
          <VideoPlayer
            videoId={currentVideo}
            onEnd={handleVideoEnd}
            onBack={handleBack}
          />
        )}
        {showChoices && (
          <EndingSelection
            choices={FILM_DATA.endings}
            onChoose={chooseEnding}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default NetflixUi;
