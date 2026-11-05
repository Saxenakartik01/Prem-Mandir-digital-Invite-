import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import Petals from "./Petals";
import { CornerFlourish, DiamondDivider } from "./Ornaments";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      // Target date: Dec 12 at 11:00 AM
      let target = new Date("2025-12-12T11:00:00");
      if (target.getTime() <= now.getTime()) {
        target = new Date(now.getFullYear(), 11, 12, 11, 0, 0);
        if (target.getTime() <= now.getTime()) {
          target = new Date(now.getFullYear() + 1, 11, 12, 11, 0, 0);
        }
      }

      const diff = Math.max(0, target.getTime() - now.getTime());

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const UNITS = [
    { label: "Days", value: pad(timeLeft.days), icon: "☀️" },
    { label: "Hours", value: pad(timeLeft.hours), icon: "⏳" },
    { label: "Mins", value: pad(timeLeft.minutes), icon: "🪷" },
    { label: "Secs", value: pad(timeLeft.seconds), icon: "✨" },
  ];

  return (
    <section
      id="countdown"
      aria-label="Wedding Countdown"
      className="relative overflow-hidden py-16 sm:py-24 bg-parchment"
    >
      {/* =========================================================================
          THEME BACKGROUND: Prem Mandir Temple Entrance & Warm Radiant Glow
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="images/temple-intro.jpg"
          alt="Prem Mandir Temple Entrance"
          className="h-full w-full object-cover object-center scale-105 filter brightness-[0.96] blur-[0.6px]"
        />
        {/* Luminous warm golden parchment veil for perfect contrast and sacred ambiance */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf7ee]/90 via-[#f8f0dc]/82 to-[#f5e8c8]/92 backdrop-blur-[1px]" />
      </div>

      {/* Royal Corner Flourishes */}
      <CornerFlourish className="pointer-events-none absolute -left-2 top-2 z-10 w-20 opacity-60 sm:w-28" />
      <CornerFlourish flip className="pointer-events-none absolute -right-2 top-2 z-10 w-20 opacity-60 sm:w-28" />
      <CornerFlourish className="pointer-events-none absolute -left-2 bottom-2 z-10 w-20 opacity-40 sm:w-28 -scale-y-100" />
      <CornerFlourish flip className="pointer-events-none absolute -right-2 bottom-2 z-10 w-20 opacity-40 sm:w-28 -scale-y-100" />

      {/* Floating Rose Petals Shower */}
      <Petals count={8} />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-xl px-4 sm:px-6 text-center">

        {/* =========================================================================
            ROYAL COUNTDOWN JHAROKHA ARCH PAVILION CARD
            ========================================================================= */}
        <div className="relative mx-auto rounded-3xl sm:rounded-[36px] border-2 border-gold-400/85 bg-gradient-to-b from-[#fffefc]/95 via-[#fffbf2]/92 to-[#fbf4e2]/95 p-5 sm:p-8 shadow-[0_20px_50px_rgba(90,55,15,0.22),0_0_0_1px_rgba(255,255,255,0.9)_inset] backdrop-blur-md">

          {/* Inner decorative gold filigree border */}
          <div className="pointer-events-none absolute inset-2 sm:inset-3 rounded-[22px] sm:rounded-[28px] border border-gold-400/40" />

          {/* Top Om & Ceremonial Eyebrow */}
          <Reveal variant="zoom">
            <div className="flex flex-col items-center">
              <span className="font-serif text-lg text-gold-700 tracking-widest drop-shadow-sm select-none">
                ॥ श्री गणेशाय नमः ॥
              </span><br></br>
              <span className="mt-2 inline-block rounded-full border border-gold-400/70 bg-[#fffdf5]/95 px-3.5 py-1 font-display text-[9.5px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#5a3b16] shadow-2xs">
                ✦ Shubh Vivah · Shubh Muhurat ✦
              </span>
            </div>
          </Reveal>

          {/* New Royal Heading */}
          {/* <Reveal delay={120}>
            <h2 className="mt-3 font-script text-5xl sm:text-6xl md:text-7xl text-[#4a2c0c] drop-shadow-[0_2px_4px_rgba(255,248,230,0.9)]">
              Moments to Forever
            </h2>
          </Reveal> */}

          {/* Auspicious Date & Venue */}
          <Reveal delay={200}>
            <p className="mt-2 font-serif text-sm sm:text-base font-semibold tracking-wider text-[#7a2222]">
              12 December 2025
            </p>
          </Reveal>

          <Reveal delay={260}>
            <DiamondDivider className="mt-3.5" />
          </Reveal>

          {/* The 4 Royal Arch Time Medallion Cards */}
          <div className="mt-7 sm:mt-8 grid grid-cols-4 gap-2 sm:gap-3.5">
            {UNITS.map((u, i) => {
              const isSeconds = u.label === "Secs";

              return (
                <Reveal key={u.label} delay={300 + i * 80} variant="zoom">
                  <div
                    className="group relative flex flex-col items-center justify-between rounded-2xl sm:rounded-[22px] border-2 border-gold-400/90 bg-gradient-to-b from-[#ffffff] via-[#fffbf0] to-[#f5e3b5] p-2.5 sm:p-4 shadow-[0_10px_22px_rgba(110,75,25,0.18),0_0_0_1px_rgba(255,255,255,0.85)_inset] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(110,75,25,0.28)]"
                  >
                    {/* Inner gold hairline frame */}
                    <div className="pointer-events-none absolute inset-[3px] rounded-xl sm:rounded-[18px] border border-gold-400/40" />

                    {/* Top Symbolic Accents */}
                    <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gold-700 opacity-85">
                      <span>{u.icon}</span>
                    </div>

                    {/* Big Bold Royal Numerals */}
                    <div className="relative my-1 flex items-center justify-center">
                      <span className="font-serif font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-[#361a05] tracking-tight drop-shadow-[0_1.5px_0_rgba(255,255,255,0.95)]">
                        {u.value}
                      </span>
                      {/* Live pulse dot on seconds card */}
                      {isSeconds && (
                        <span className="absolute -top-1 -right-2 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8c2f2f]" />
                        </span>
                      )}
                    </div>

                    {/* Unit Label Pill */}
                    <span className="rounded-full border border-gold-400/60 bg-gradient-to-r from-[#fffcf2] via-[#fff8ea] to-[#fffcf2] px-2 py-0.5 font-display text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#5a360d] shadow-2xs">
                      {u.label}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Real Brass Diya with Luminous Flame Aura */}
          <Reveal delay={650}>
            <div className="mt-7 sm:mt-9 flex flex-col items-center">
              <div className="relative flex items-center justify-center">
                {/* Warm luminous flame aura glow behind real diya */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-3 h-28 w-28 rounded-full bg-radial from-amber-400/65 via-gold-500/25 to-transparent blur-xl animate-pulse"
                />
                <img
                  src="images/real-diya.png"
                  alt="Auspicious brass diya with glowing flame"
                  loading="lazy"
                  className="relative z-10 w-28 xs:w-32 sm:w-40 h-auto drop-shadow-[0_14px_28px_rgba(140,80,20,0.38)] transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Sacred Wedding Blessing */}
              <p className="mt-4 max-w-md font-serif text-sm sm:text-base italic leading-relaxed text-[#5a3a14]">
                &ldquo;Two souls, one sacred promise under the divine grace of Sri Radha Krishna.&rdquo;
              </p>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
