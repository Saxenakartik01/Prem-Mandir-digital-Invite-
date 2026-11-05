import Reveal from "./Reveal";
import { CornerFlourish, RoyalBottomBorder } from "./Ornaments";

export default function Couple() {
  return (
    <section
      id="couple"
      aria-label="The couple"
      className="bg-parchment paper-grain paper-vignette relative overflow-hidden min-h-[100svh] flex flex-col justify-end"
    >
      {/* Top Corner Flourishes */}
      <CornerFlourish className="absolute -left-2 top-2 w-20 opacity-60 sm:w-28 pointer-events-none" />
      <CornerFlourish flip className="absolute -right-2 top-2 w-20 opacity-60 sm:w-28 pointer-events-none" />

      {/* Bottom Corner Flourishes */}
      <CornerFlourish className="absolute -left-2 bottom-0 w-20 opacity-50 sm:w-28 -scale-y-100 pointer-events-none" />
      <CornerFlourish flip className="absolute -right-2 bottom-0 w-20 opacity-50 sm:w-28 -scale-y-100 pointer-events-none" />

      {/* Bottom Positioned Couple Content */}
      <div className="relative z-10 mx-auto mt-auto w-full max-w-3xl px-4 pt-20 pb-0 text-center sm:px-6 sm:pt-24 sm:pb-0">

        {/* The Couple Heading */}
        <Reveal variant="zoom">
          <h2 className="font-script text-5xl sm:text-6xl text-[#58370e] mb-2 sm:mb-3 select-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
            The Couple
          </h2>
        </Reveal>

        {/* Royal Couple Balcony Portrait */}
        <Reveal
          variant="zoom"
          delay={150}
          className="mx-auto flex justify-center"
        >
          <div className="relative w-full max-w-[310px] sm:max-w-[380px]">
            <img
              src="images/couple-portrait.png"
              alt="Ankit and Aashi in royal wedding attire inside palace jharokha balcony"
              loading="lazy"
              className="w-full h-auto drop-shadow-[0_18px_40px_rgba(110,75,25,0.24)] select-none transition-transform duration-700 hover:scale-[1.015]"
            />
          </div>
        </Reveal>

        {/* Couple Names - Refined Compact Royal Patch */}
        <Reveal delay={280} className="mt-4 sm:mt-5 flex justify-center">
          <div className="relative inline-flex items-center justify-center rounded-full p-[1.5px] sm:p-[2px] bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 shadow-[0_8px_24px_rgba(110,75,25,0.18),0_2px_6px_rgba(201,154,60,0.25)]">
            <div className="flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-gradient-to-b from-[#fffdf8] via-[#fcf7ec] to-[#f8efd8] px-5 py-2 sm:px-7 sm:py-2.5 ring-1 ring-gold-400/50 backdrop-blur-sm">
              <span className="text-gold-600 text-[10px] sm:text-xs select-none opacity-90">
                ✦
              </span>

              <h3 className="font-pinyon text-2xl sm:text-3xl md:text-4xl text-[#3b1d06] font-semibold leading-tight select-none tracking-wide whitespace-nowrap drop-shadow-[0_1px_0_rgba(255,255,255,0.95)]">
                Ankit &amp; Aashi
              </h3>

              <span className="text-gold-600 text-[10px] sm:text-xs select-none opacity-90">
                ✦
              </span>
            </div>
          </div>
        </Reveal>

        {/* Sacred Union Blessing */}
        <Reveal delay={340} className="mt-3 sm:mt-4">
          <p className="font-display text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#845e28] select-none font-medium">
            Two Souls · One Destiny · Bound by Eternal Love
          </p>
        </Reveal>

      </div>

      {/* Royal Jharokha Scallop & Pearl Bottom Border */}
      <Reveal delay={380} className="relative z-10 w-full mt-4 sm:mt-6">
        <RoyalBottomBorder />
      </Reveal>
    </section>
  );
}
