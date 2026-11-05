import { useState, useRef, useEffect, useCallback } from "react";

export interface MusicPlayerProps {
  isVisible: boolean;
  src?: string;
}

/**
 * MusicPlayer renders a floating royal music button in the bottom-right corner.
 * It is hidden while the intro video is active, and appears smoothly once the
 * intro page video ends, providing seamless play/pause controls.
 */
export default function MusicPlayer({
  isVisible,
  src = "music/Prem-mandir-audio.mp3",
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Pre-load audio on initial user gesture so browser autoplay policy allows immediate playback
  useEffect(() => {
    const handleFirstGesture = () => {
      if (audioRef.current) {
        audioRef.current.load();
      }
    };
    window.addEventListener("pointerdown", handleFirstGesture, { once: true });
    window.addEventListener("touchstart", handleFirstGesture, { once: true });
    window.addEventListener("click", handleFirstGesture, { once: true });
    return () => {
      window.removeEventListener("pointerdown", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("click", handleFirstGesture);
    };
  }, []);

  // When isVisible becomes true (intro video ended), start playing background music
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isVisible) {
      audio.currentTime = 0;
      audio.volume = 0.85;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("Autoplay waiting for user gesture:", err);
            setIsPlaying(false);

            // Fallback: If browser autoplay policy requires user gesture,
            // play immediately on the very next user tap / scroll
            const startOnInteraction = () => {
              if (audioRef.current && isVisible) {
                audioRef.current.volume = 0.85;
                audioRef.current
                  .play()
                  .then(() => setIsPlaying(true))
                  .catch(() => {});
              }
              cleanup();
            };

            const cleanup = () => {
              window.removeEventListener("click", startOnInteraction);
              window.removeEventListener("touchstart", startOnInteraction);
              window.removeEventListener("scroll", startOnInteraction);
              window.removeEventListener("pointerdown", startOnInteraction);
            };

            window.addEventListener("click", startOnInteraction, { once: true });
            window.addEventListener("touchstart", startOnInteraction, { once: true });
            window.addEventListener("scroll", startOnInteraction, { once: true });
            window.addEventListener("pointerdown", startOnInteraction, { once: true });
          });
      }
    } else {
      if (!audio.paused) {
        audio.pause();
      }
      setIsPlaying(false);
    }
  }, [isVisible, src]);

  const toggleMusic = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.volume = 0.85;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("Audio play error:", err));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <div
      className={`music-player-wrap ${isVisible ? "is-visible" : "is-hidden"}`}
      aria-label="Wedding background music player"
    >
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
      />

      {isVisible && (
        <button
          type="button"
          onClick={toggleMusic}
          className={`music-toggle-btn ${isPlaying ? "is-playing" : "is-paused"}`}
          aria-label={isPlaying ? "Pause background wedding music" : "Play background wedding music"}
          title={isPlaying ? "Pause music" : "Play music"}
        >
          {/* Subtle gold ripple rings pulsing when music is playing */}
          {isPlaying && <span className="music-pulse-ring" aria-hidden="true" />}
          {isPlaying && <span className="music-pulse-ring ring-2" aria-hidden="true" />}

          {/* Music Disc with Royal Icon */}
          <div className="music-icon-disc">
            {isPlaying ? (
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="music-svg-icon"
                aria-hidden="true"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" fill="currentColor" />
                <circle cx="18" cy="16" r="3" fill="currentColor" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="music-svg-icon text-gold-300/70"
                aria-hidden="true"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" fill="currentColor" />
                <circle cx="18" cy="16" r="3" fill="currentColor" />
                <line x1="3" y1="3" x2="21" y2="21" stroke="#ef4444" strokeWidth="2.5" />
              </svg>
            )}
          </div>
        </button>
      )}
    </div>
  );
}

