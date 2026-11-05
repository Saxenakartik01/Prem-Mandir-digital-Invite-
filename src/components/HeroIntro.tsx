import { useState, useEffect, useRef } from "react";
import Reveal from "./Reveal";
import Petals from "./Petals";
import { cn } from "../utils/cn";

export interface HeroIntroProps {
  onIntroEnd?: () => void;
}

export default function HeroIntro({ onIntroEnd }: HeroIntroProps = {}) {
  // Check if viewport is desktop/laptop (>= 768px)
  const [isDesktop, setIsDesktop] = useState(() => {
    return typeof window !== "undefined" && window.innerWidth >= 768;
  });

  // false = Intro showing, true = Hero showing
  // On desktop and laptop, intro phone video is removed and Hero shows immediately
  const [showHero, setShowHero] = useState(() => {
    return typeof window !== "undefined" && window.innerWidth >= 768;
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (desktop) {
        setShowHero(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Notify parent whenever intro ends
  useEffect(() => {
    if (showHero) {
      onIntroEnd?.();
    }
  }, [showHero, onIntroEnd]);

  // Transition handler: play Intro-page.mp4 when user taps, then reveal Hero smoothly
  const handleClick = () => {
    if (showHero) return;
    if (isPlaying) {
      setShowHero(true);
      return;
    }

    setIsPlaying(true);
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          video.play().catch(() => { });
        });
      }
    }

    // Safety fallback timer: smoothly reveal Hero after video duration (~2.5s)
    setTimeout(() => {
      setShowHero(true);
    }, 2500);
  };

  const handleVideoEnded = () => {
    setShowHero(true);
  };

  // Handle touch and wheel to trigger the video entrance when user tries to scroll down (mobile only)
  useEffect(() => {
    if (isDesktop || showHero || isPlaying) return;

    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 10) {
        handleClick();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      if (touchStartY - touchY > 30) {
        handleClick();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [showHero, isPlaying]);

  // Lock scrolling while Intro is active, unlock when Hero is active
  useEffect(() => {
    const phoneContainer = document.getElementById("phone-screen");

    if (!showHero) {
      document.body.style.overflow = "hidden";
      if (phoneContainer) {
        phoneContainer.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "";
      if (phoneContainer) {
        phoneContainer.style.overflow = "";
      }
    }

    return () => {
      document.body.style.overflow = "";
      if (phoneContainer) {
        phoneContainer.style.overflow = "";
      }
    };
  }, [showHero]);

  return (
    <div id="top" className="relative z-20 min-h-[100svh] overflow-x-clip">
      {/* =========================================================================
          HERO LAYER (Base layer underneath)
          ========================================================================= */}
      <section
        id="hero"
        aria-label="Ankit and Aashi"
        className={cn(
          "relative flex min-h-[100svh] flex-col overflow-x-clip transition-all duration-1000",
          showHero ? "opacity-100 scale-100" : "opacity-90 scale-98"
        )}
      >
        {/* Sky & Aurora Video Layer (top of hero page) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="images/hero-sky.png"
          className="absolute inset-0 h-full w-full object-cover object-top"
        >
          <source src="images/Hero-page-top.mp4" type="video/mp4" />
        </video>

        {/* Castle & Wedding Layer (zoomed slightly by ~2-3px) */}
        <img
          src="images/hero-castle.png"
          alt="Grand temple castle with couple and guests"
          className="pointer-events-none absolute inset-x-0 -bottom-18 sm:-bottom-24 md:-bottom-32 h-[120%] sm:h-[125%] md:h-[130%] w-full object-cover object-bottom z-10 scale-[1.018] origin-bottom [mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)]"
        />

        {/* Subtle celestial readability wash for top text */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-black/50 via-black/25 to-transparent z-10" />

        <Petals count={10} />

        {/* Only Couple Name in the aurora sky */}
        <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-4 pt-16 text-center sm:px-6 sm:pt-22 md:pt-26">
          <Reveal variant="zoom" delay={150}>
            <h1 className="font-allura text-[2.85rem] xs:text-[3.25rem] leading-[1.15] text-gold-sheen-light filter drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_12px_rgba(236,212,154,0.45)] sm:text-6xl md:text-7xl lg:text-8xl tracking-wide select-none whitespace-nowrap">
              Ankit &amp; Aashi
            </h1>
          </Reveal>
        </div>

        {/* bottom subtle scroll cue (icon only, no text) */}
        <div className="relative z-10 mt-auto flex items-end justify-center px-4 pb-4 sm:px-10 sm:pb-6">
          <a
            href="#couple"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("couple")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            aria-label="Scroll to couple section"
            className="group mb-1 flex flex-col items-center cursor-pointer"
          >
            <span className="animate-bob flex h-10 w-10 items-center justify-center rounded-full border border-parchment-100/70 bg-black/20 backdrop-blur-sm transition group-hover:bg-gold-400/30">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-parchment-100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14m0 0 6-6m-6 6-6-6" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* =========================================================================
          INTRO LAYER (Intro-page.mp4: mobile entrance video, removed on desktop & laptop)
          ========================================================================= */}
      {!isDesktop && (
        <section
          aria-label="Sacred Temple Entrance"
          onClick={handleClick}
          className={cn(
            "absolute inset-0 z-30 flex flex-col overflow-hidden transition-opacity duration-1000 ease-in-out cursor-pointer",
            showHero ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
          )}
        >
          {/* Intro Video Background */}
          <div className="absolute inset-0 overflow-hidden bg-black">
            <video
              ref={videoRef}
              playsInline
              preload="auto"
              poster="images/temple-intro.jpg"
              onEnded={handleVideoEnded}
              className="h-full w-full object-cover object-center"
            >
              <source src="images/Intro-page.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Center: "Welcome to The Wedding" (Uniform royal gold display text, no dark background shadow) */}
          <div
            className={cn(
              "relative z-10 my-auto flex flex-col items-center justify-center px-4 pt-16 text-center select-none transition-all duration-700 pointer-events-none",
              isPlaying ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
            )}
          >
            <h1 className="font-display text-xs xs:text-sm uppercase tracking-[0.34em] font-extrabold text-[#8a5b17] drop-shadow-[0_1.5px_2px_rgba(255,255,255,1)] sm:text-base select-none">
              Welcome to The Wedding
            </h1>
          </div>

          {/* Bottom subtle entrance button (fades out when video starts playing) */}
          <div
            className={cn(
              "relative z-10 mt-auto flex items-end justify-center pb-6 sm:pb-9 transition-all duration-500",
              isPlaying ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
            )}
          >
            <button
              onClick={handleClick}
              className="pulse-gold group flex items-center gap-3 rounded-full border-2 border-gold-400 bg-gradient-to-r from-[#fffefc] via-[#fffcf5] to-[#fbf3e0] px-8 py-3.5 font-display text-xs sm:text-sm uppercase tracking-[0.28em] text-[#3d240c] font-bold shadow-[0_8px_24px_rgba(140,95,30,0.2)] backdrop-blur-sm transition-all duration-300 hover:bg-[#ffffff] hover:border-gold-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Tap to Enter</span>
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold-700 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
