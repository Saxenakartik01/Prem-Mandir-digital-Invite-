import { useState } from "react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const PHOTOS = [
  {
    src: "images/couple-mountains.jpg",
    alt: "The couple overlooking the river valley",
    base: "rotate-[-7deg]",
    place: "justify-self-start",
    pos: "center 45%",
  },
  {
    src: "images/wedding-couple.jpg",
    alt: "The sacred confluence from above",
    base: "rotate-[6deg]",
    place: "justify-self-end -mt-6",
    pos: "center 30%",
  },
  {
    src: "images/golden-sangam.jpg",
    alt: "Golden hour over Prem Mandir, Vrindavan",
    base: "rotate-[-4deg]",
    place: "justify-self-start -mt-4",
    pos: "18% center",
  },
  {
    src: "images/wedding-couple.jpg",
    alt: "Ankit and Aashi together",
    base: "rotate-[5deg]",
    place: "justify-self-end -mt-10",
    pos: "center 20%",
  },
  {
    src: "images/sangeet.jpg",
    alt: "Celebrations by the river",
    base: "rotate-[-5deg]",
    place: "justify-self-center -mt-2",
    pos: "center 40%",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(3);
  const step = (d: number) => setActive((a) => (a + d + PHOTOS.length) % PHOTOS.length);

  return (
    <section id="gallery" aria-label="Gallery" className="relative overflow-hidden bg-teal-deep">
      {/* velvet texture */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% 0%, rgba(53,110,98,0.55), transparent 60%), radial-gradient(ellipse 80% 60% at 85% 100%, rgba(16,60,52,0.9), transparent 65%), radial-gradient(ellipse 80% 60% at 10% 90%, rgba(10,45,40,0.9), transparent 60%)",
        }}
      />
      <div className="paper-grain absolute inset-0 opacity-60" />

      {/* thin gold frame */}
      <div aria-hidden className="pointer-events-none absolute inset-3 rounded-2xl border border-gold-300/40 sm:inset-5" />
      <div aria-hidden className="pointer-events-none absolute inset-[18px] rounded-xl border border-gold-300/20 sm:inset-7" />

      <span aria-hidden className="petal" style={{ left: "80%", width: 10, height: 12, animationDuration: "13s" }} />
      <span aria-hidden className="petal" style={{ left: "12%", width: 8, height: 10, animationDuration: "16s", animationDelay: "-6s" }} />

      <div className="relative mx-auto max-w-2xl px-6 py-16 text-center sm:py-24">
        <Reveal variant="zoom">
          <div aria-hidden className="mx-auto mb-3 flex items-center justify-center gap-2 text-gold-200/90">
            <span className="h-px w-8 bg-gradient-to-l from-gold-200/80 to-transparent" />
            <svg viewBox="0 0 16 16" className="h-3 w-3"><rect x="4.7" y="4.7" width="6.6" height="6.6" transform="rotate(45 8 8)" fill="currentColor" /></svg>
            <span className="h-px w-8 bg-gradient-to-r from-gold-200/80 to-transparent" />
          </div>
          <h2 className="font-script text-6xl text-gold-sheen-light sm:text-7xl">Gallery</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-3 font-serif text-xl italic text-parchment-100/90 sm:text-2xl">
            Moments, Memories, Forever
          </p>
        </Reveal>

        {/* scattered polaroids */}
        <Reveal delay={120}>
          <div className="mx-auto mt-10 grid max-w-md grid-cols-2 gap-x-2 gap-y-6 sm:mt-14 sm:max-w-lg">
            {PHOTOS.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.src + i}
                  onClick={() => setActive(i)}
                  aria-label={`View photo: ${p.alt}`}
                  className={cn(
                    "group relative w-[88%] max-w-[240px] bg-[#fffdf2] p-2 pb-6 text-left shadow-[0_14px_30px_rgba(0,0,0,0.45)] ring-1 ring-black/10 transition-all duration-500 sm:w-[92%]",
                    p.base,
                    p.place,
                    i === 4 && "col-span-2 w-[62%] sm:w-[58%]",
                    isActive
                      ? "z-20 scale-[1.08] rotate-0 shadow-[0_22px_44px_rgba(0,0,0,0.55)] ring-gold-300/60"
                      : "hover:z-10 hover:scale-[1.04]"
                  )}
                >
                  {/* tape */}
                  <span
                    aria-hidden
                    className="absolute -top-2.5 left-1/2 h-5 w-14 -translate-x-1/2 rotate-[-3deg] bg-[#e8ddb8]/80 shadow-sm"
                  />
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                    style={{ objectPosition: p.pos }}
                  />
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* swipe control */}
        <Reveal delay={200}>
          <div className="mt-12 flex items-center justify-center gap-5 text-parchment-100/90">
            <button
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-200/50 transition hover:bg-gold-300/20 hover:text-gold-100"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 5-7 7 7 7" />
              </svg>
            </button>
            <span className="font-display text-xs uppercase tracking-[0.35em]">Swipe</span>
            <button
              onClick={() => step(1)}
              aria-label="Next photo"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-200/50 transition hover:bg-gold-300/20 hover:text-gold-100"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
