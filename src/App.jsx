import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Play, Pause, RotateCcw } from 'lucide-react';

// --- CONFIGURATION ---
const FILM_DATA = {
  intro: {
    id: 'eUolLUnN0co', // Replace with your Intro Video ID
    title: "Atonement",
  },
  endings: {
    A: {
      id: 'ifyTnA6kJMU', // Replace with Ending 1 Video ID
      label: "Ending 1",
    },
    B: {
      id: 'eUolLUnN0co', // Replace with Ending 2 Video ID
      label: "Ending 2",
    }
  }
};

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(FILM_DATA.intro.id);
  const [showChoices, setShowChoices] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // --- LOGIC ---
  const startExperience = () => setHasStarted(true);

  const onPlayerReady = (event) => {
    setPlayer(event.target);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnd = () => {
    if (currentVideo === FILM_DATA.intro.id) {
      setShowChoices(true);
    } else {
      setHasEnded(true);
    }
  };

  const chooseEnding = (endingKey) => {
    setShowChoices(false);
    setCurrentVideo(FILM_DATA.endings[endingKey].id);
    setHasEnded(false);
    setIsPlaying(true);
  };

  const restartFilm = () => {
    setShowChoices(false);
    setHasEnded(false);
    setIsPlaying(true);
    
    if (currentVideo === FILM_DATA.intro.id) {
      if (player) {
        player.seekTo(0);
        player.playVideo();
      }
    } else {
      setCurrentVideo(FILM_DATA.intro.id);
    }
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0, 
      fs: 0,
      disablekb: 1,
      iv_load_policy: 3,
    },
  };

  // --- SHARED STYLES ---
  // Using the exact styles from your Title Page
  const GRADIENT_BG = "bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-red-950 via-black to-black";
  const BUTTON_STYLE = "group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white transition-all duration-300 bg-linear-to-br from-red-800 to-red-950 rounded-sm hover:from-red-700 hover:to-red-900 hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:scale-105 tracking-wider uppercase border border-red-900/30";
  const TITLE_STYLE = "text-6xl md:text-8xl font-black tracking-tighter uppercase text-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)]";

  return (
    <div className={`min-h-screen w-full ${GRADIENT_BG} text-white font-sans selection:bg-red-700 selection:text-white`}>

      {/* --- SCENE 1: START SCREEN --- */}
      {!hasStarted ? (
        <div className="flex flex-col items-center justify-center h-screen w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-red-900/20 to-transparent animate-pulse duration-5000"></div>
          
          <div className="text-center space-y-8 animate-in fade-in zoom-in duration-1000 relative z-10">
            <h1 className={TITLE_STYLE}>
              Atonement
            </h1>
            <p className="text-red-200/70 text-lg uppercase tracking-[0.3em]">
              a film by group (di ko alam group number)
            </p>
            
            <button onClick={startExperience} className={BUTTON_STYLE}>
              Play the Video
              <Play className="ml-3 w-6 h-6 fill-white group-hover:fill-red-200" />
            </button>
          </div>
        </div>
      ) : (

      /* --- SCENE 2: THE THEATER --- */
      <div className="flex flex-col items-center justify-center min-h-screen p-4 relative">
        
        {/* HEADER */}
        <header className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-linear-to-b from-black to-transparent pointer-events-auto">
          <div className="flex items-center gap-6">
            <button 
              onClick={togglePlay}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-100 hover:text-red-500 transition-colors drop-shadow-md"
            >
              {isPlaying ? (
                <><Pause size={16} className="text-red-500" /> Pause</>
              ) : (
                <><Play size={16} className="text-red-500" /> Resume</>
              )}
            </button>
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase border-l border-zinc-800 pl-6">
              Now Playing: <span className="text-red-700">Atonement</span>
            </span>
          </div>

          <button 
            onClick={restartFilm} 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-red-600 transition-colors"
          >
            <RotateCcw size={16} /> Restart
          </button>
        </header>

        {/* MAIN CINEMA CONTAINER */}
        <div className="relative w-full max-w-6xl aspect-video bg-black shadow-[0_0_100px_rgba(220,38,38,0.15)] rounded-sm overflow-hidden border-y border-red-950/50">
          
          {/* YOUTUBE PLAYER WRAPPER */}
          {/* CRITICAL FIX: We set opacity-0 when menus are open. This physically hides the player, 
              so users cannot see recommendations. */}
          <div className={`w-full h-full pointer-events-none relative z-0 transition-opacity duration-700 ${showChoices || hasEnded ? 'opacity-0' : 'opacity-100'}`}>
            <YouTube
              videoId={currentVideo}
              opts={opts}
              onEnd={handleVideoEnd}
              onReady={onPlayerReady}
              className="w-full h-full"
            />
          </div>

          {/* --- OVERLAY: CHOICE MENU (Z-20) --- */}
          {/* Uses exact Title Page Gradient Background to cover the player */}
          {showChoices && (
            <div className={`absolute inset-0 z-20 ${GRADIENT_BG} flex flex-col items-center justify-center animate-in fade-in duration-500`}>
              
              {/* Background Pulse Effect (Same as Title) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-red-900/20 to-transparent animate-pulse duration-5000 pointer-events-none"></div>

              <div className="relative z-30 text-center w-full max-w-5xl px-6">
                <h2 className={`${TITLE_STYLE} mb-16 text-4xl md:text-6xl`}>
                  Make Your Choice
                </h2>
                
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                  <button 
                    onClick={() => chooseEnding('A')}
                    className={`${BUTTON_STYLE} w-full md:w-auto min-w-62.5`}
                  >
                    {FILM_DATA.endings.A.label}
                  </button>

                  <button 
                    onClick={() => chooseEnding('B')}
                    className={`${BUTTON_STYLE} w-full md:w-auto min-w-62.5`}
                  >
                    {FILM_DATA.endings.B.label}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* --- OVERLAY: ENDING SCREEN (Z-20) --- */}
          {hasEnded && (
            <div className={`absolute inset-0 z-20 ${GRADIENT_BG} flex flex-col items-center justify-center animate-in zoom-in duration-700`}>
              <h2 className={`${TITLE_STYLE} mb-6 text-red-600`}>THE END</h2>
              <p className="text-zinc-500 mb-12 uppercase tracking-[0.3em] text-sm">Thanks for watching</p>
              
              <button 
                onClick={restartFilm}
                className="group flex items-center gap-4 px-10 py-4 bg-transparent border-2 border-red-900 text-red-100 font-bold uppercase tracking-wider rounded-sm hover:bg-red-900/20 hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-300"
              >
                <RotateCcw size={20} className="group-hover:-rotate-90 transition-transform duration-300" />
                Replay Path
              </button>
            </div>
          )}
        </div>
      </div>
      )}
    </div>
  );
}

export default App;