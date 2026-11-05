import Petals from "./Petals";

export default function Intro() {
  return (
    <section
      id="top"
      aria-label="Prem Mandir Entrance"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Intro Video Backdrop */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <video
          playsInline
          autoPlay
          loop
          muted
          poster="images/temple-intro.jpg"
          className="h-full w-full object-cover object-center"
        >
          <source src="images/Intro-page.mp4" type="video/mp4" />
        </video>
      </div>

      <Petals count={8} />

      {/* Center: "Welcome to The Wedding" (Uniform royal gold display text, no dark background shadow) */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center px-4 pt-16 text-center select-none">
        <h1 className="font-display text-xs xs:text-sm uppercase tracking-[0.34em] font-extrabold text-[#8a5b17] drop-shadow-[0_1.5px_2px_rgba(255,255,255,1)] sm:text-base select-none">
          Welcome to The Wedding
        </h1>
      </div>

      {/* Bottom scroll cue */}
      <div className="relative z-10 mt-auto flex items-end justify-center pb-5 sm:pb-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="pulse-gold group flex items-center gap-3 rounded-full border border-gold-400/80 bg-[#fdf8ee]/85 px-7 py-3 font-display text-xs uppercase tracking-[0.28em] text-[#5a3b16] font-semibold shadow-[0_8px_28px_rgba(140,95,30,0.25)] backdrop-blur-md transition-all duration-300 hover:bg-[#fffbf4] hover:border-gold-500 hover:scale-105 cursor-pointer sm:text-sm"
        >
          <span>Tap to Enter</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold-600 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
