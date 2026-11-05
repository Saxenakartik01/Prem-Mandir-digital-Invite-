import Reveal from "./Reveal";
import Petals from "./Petals";

export default function Footer() {
  return (
    <footer id="thank-you" aria-label="Thank you" className="relative overflow-hidden min-h-[480px]">
      {/* Sharp Visible Gold Top Border Line (Multi-layered royal metallic gold ribbon) */}
      <div className="absolute inset-x-0 top-0 z-30 flex flex-col pointer-events-none">
        {/* Crisp top outline */}
        <div className="h-[1px] w-full bg-[#523407]" />
        {/* Radiant metallic solid gold bar across full width */}
        <div className="h-[4px] w-full bg-gradient-to-r from-[#9e6f1a] via-[#fdefa2] via-[#e5b842] to-[#9e6f1a] shadow-[0_2px_10px_rgba(0,0,0,0.6),0_0_12px_rgba(235,190,70,0.7)]" />
        {/* Crisp bottom bevel contour */}
        <div className="h-[1px] w-full bg-[#694208]" />
      </div>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="images/thankyou-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
      >
        <source src="images/ThankYou-page.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdeed3]/30 via-transparent to-[#241406]/40 pointer-events-none" />
      {/* thin gold frame */}
      <div aria-hidden className="pointer-events-none absolute inset-2.5 rounded-xl border border-gold-500/45 sm:inset-4" />

      <Petals count={6} />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-start px-8 pt-16 pb-32 text-center min-h-[540px] sm:min-h-[640px]">
        <Reveal variant="zoom">
          <h2 className="font-script text-6xl text-[#5d3c14] drop-shadow-[0_2px_12px_rgba(255,245,220,0.95)] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] sm:text-7xl">
            Thank You
          </h2>
        </Reveal>
      </div>

      <div className="relative border-t border-gold-200/30 bg-[#241406]/55 py-2.5 text-center backdrop-blur-sm">
        <p className="font-display text-[9px] uppercase tracking-[0.28em] text-gold-100/80">
          <a
            href="https://patrikastudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-gold-300 hover:underline underline-offset-4"
          >
            Designed By Patrika studio
          </a>
        </p>
      </div>
    </footer>
  );
}
