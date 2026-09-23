import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Disc, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';

export default function MusicPlayer({ isMusicPlaying, setIsMusicPlaying }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.65);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  
  const userPausedRef = useRef(false);

  // Synchronize external prop if provided
  useEffect(() => {
    if (setIsMusicPlaying) {
      setIsMusicPlaying(isPlaying);
    }
  }, [isPlaying, setIsMusicPlaying]);

  // Handle Autoplay & Instagram In-App Browser Unlock
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    // Function to safely try playing audio
    const attemptPlay = () => {
      if (userPausedRef.current) return;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setShowPrompt(false);
          })
          .catch((err) => {
            // Autoplay blocked by browser policy (Instagram / iOS / Safari / Chrome)
            console.log("Autoplay waiting for user gesture:", err?.message || err);
            setIsPlaying(false);
            setShowPrompt(true);
          });
      }
    };

    // 1. Initial attempt
    attemptPlay();

    // 2. Multi-event listener for first user interaction (tap, click, scroll, touch)
    const handleFirstGesture = () => {
      if (userPausedRef.current) return;
      attemptPlay();
      removeGestureListeners();
    };

    const gestureEvents = ['touchstart', 'touchend', 'pointerdown', 'click', 'keydown', 'scroll'];
    
    const removeGestureListeners = () => {
      gestureEvents.forEach((ev) => {
        window.removeEventListener(ev, handleFirstGesture, { passive: true });
        document.removeEventListener(ev, handleFirstGesture, { passive: true });
      });
    };

    gestureEvents.forEach((ev) => {
      window.addEventListener(ev, handleFirstGesture, { passive: true, once: true });
      document.addEventListener(ev, handleFirstGesture, { passive: true, once: true });
    });

    return () => {
      removeGestureListeners();
    };
  }, []);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Audio event handlers
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      userPausedRef.current = true;
      audio.pause();
      setIsPlaying(false);
      setShowPrompt(false);
    } else {
      userPausedRef.current = false;
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setShowPrompt(false);
        })
        .catch((err) => console.error("Play failed:", err));
    }
  };

  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src="/audio/timeless.mp3"
        preload="auto"
        loop
        playsInline
        webkit-playsinline="true"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Floating Instagram / First-Gesture "Tap to Play" Toast */}
      {showPrompt && !isPlaying && (
        <div 
          onClick={togglePlay}
          className="fixed bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-50 cursor-pointer animate-bounce transition-all duration-300 w-[92%] sm:w-auto max-w-md"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-slate-900/95 text-white border border-indigo-500/50 shadow-2xl shadow-indigo-500/30 backdrop-blur-xl hover:border-indigo-400">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                <Music className="w-4 h-4 text-white animate-pulse" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-indigo-300 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>Tap to Play Song</span>
                </div>
                <div className="text-[11px] text-slate-300 truncate max-w-[200px] sm:max-w-[240px]">
                  The Weeknd & Playboi Carti - Timeless
                </div>
              </div>
            </div>

            <button
              onClick={togglePlay}
              className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/40 shrink-0 flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Play</span>
            </button>
          </div>
        </div>
      )}

      {/* Persistent Floating Music Controller Widget */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 select-none">
        <div 
          className={`glass-card border border-slate-700/80 hover:border-indigo-500/50 shadow-2xl backdrop-blur-xl rounded-2xl sm:rounded-3xl transition-all duration-300 overflow-hidden ${
            isExpanded ? 'w-[300px] sm:w-[340px] p-4 bg-slate-900/95' : 'p-2 sm:p-2.5 bg-slate-900/90 hover:bg-slate-900/95'
          }`}
        >
          {/* Collapsed Compact Pill */}
          {!isExpanded ? (
            <div 
              onClick={() => setIsExpanded(true)}
              className="flex items-center gap-2.5 sm:gap-3 cursor-pointer"
            >
              {/* Spinning Vinyl Disk */}
              <div 
                className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-slate-950 via-slate-800 to-slate-950 border border-indigo-500/40 flex items-center justify-center shrink-0 shadow-md ${
                  isPlaying ? 'animate-spin-slow' : ''
                }`}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 border border-slate-900 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-slate-900"></div>
                </div>
                {isPlaying && (
                  <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping opacity-25 pointer-events-none"></div>
                )}
              </div>

              {/* Song Info & Equalizer */}
              <div className="flex flex-col min-w-0 pr-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-100 truncate max-w-[110px] sm:max-w-[130px]">
                    Timeless
                  </span>
                  {isPlaying ? (
                    <div className="flex items-end gap-[2px] h-3.5">
                      <span className="w-[2.5px] bg-indigo-400 rounded-full animate-equalizer-1"></span>
                      <span className="w-[2.5px] bg-cyan-400 rounded-full animate-equalizer-2"></span>
                      <span className="w-[2.5px] bg-purple-400 rounded-full animate-equalizer-3"></span>
                      <span className="w-[2.5px] bg-indigo-400 rounded-full animate-equalizer-4"></span>
                    </div>
                  ) : (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                      Paused
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 truncate max-w-[110px] sm:max-w-[130px]">
                  The Weeknd
                </span>
              </div>

              {/* Quick Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 shrink-0 transition-transform active:scale-95 ml-1"
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                )}
              </button>

              {/* Expand Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(true);
                }}
                className="p-1 text-slate-400 hover:text-white transition-colors"
                aria-label="Expand music controls"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Expanded Full Player View */
            <div className="space-y-3.5 animate-fade-in">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-wider font-mono">
                  <Music className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Portfolio Soundtrack</span>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
                  aria-label="Collapse player"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Track Details & Vinyl */}
              <div className="flex items-center gap-3">
                <div 
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-900 via-slate-900 to-purple-900 border border-indigo-500/30 flex items-center justify-center shrink-0 shadow-lg relative overflow-hidden ${
                    isPlaying ? 'ring-2 ring-indigo-500/30' : ''
                  }`}
                >
                  <Disc className={`w-7 h-7 text-indigo-400 ${isPlaying ? 'animate-spin-slow' : ''}`} />
                  {isPlaying && (
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold text-white truncate">
                    Timeless (Instrumental)
                  </div>
                  <div className="text-xs text-indigo-300/90 truncate">
                    The Weeknd & Playboi Carti
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Background Audio Loop
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-cyan-400"
                />
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls: Play/Pause, Mute & Volume Slider */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="w-9 h-9 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 transition-transform active:scale-95"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    className={`p-2 rounded-xl border transition-colors ${
                      isMuted 
                        ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' 
                        : 'bg-slate-800/80 border-slate-700/60 text-slate-300 hover:text-white'
                    }`}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Volume Slider */}
                <div className="flex items-center gap-2 w-28">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    aria-label="Volume level"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
