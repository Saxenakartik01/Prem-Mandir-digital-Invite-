import Reveal from "./Reveal";
import Petals from "./Petals";

export default function Hero() {
  return (
    <section id="hero" aria-label="Ankit and Aashi" className="relative z-20 flex min-h-[100svh] flex-col overflow-x-clip">
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
  );
}
