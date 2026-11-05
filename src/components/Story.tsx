import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { CornerFlourish, DiamondDivider } from "./Ornaments";
import { cn } from "../utils/cn";

function Polaroid({
  src,
  alt,
  rotate,
  className,
  pos,
}: {
  src: string;
  alt: string;
  rotate: string;
  className?: string;
  pos?: string;
}) {
  return (
    <figure
      className={cn(
        "group w-40 bg-[#fffdf4] p-2 pb-5 shadow-[0_10px_26px_rgba(90,60,20,0.3)] ring-1 ring-[#d8c49a] transition-transform duration-500 hover:z-10 hover:scale-[1.06] hover:rotate-0 sm:w-52",
        rotate,
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="aspect-[5/4] w-full object-cover sepia-[0.12]"
        style={pos ? { objectPosition: pos } : undefined}
      />
    </figure>
  );
}

const MILESTONES = [
  {
    img: "images/couple-mountains.jpg",
    alt: "Two travellers admiring the Himalayan valley",
    rotate: "-rotate-3",
    pos: "center 40%",
    title: "Two Different Dreams",
    text: "Different places, same sky.",
  },
  {
    img: "images/couple-mountains.jpg",
    alt: "The couple gazing at distant snow peaks",
    rotate: "rotate-2",
    pos: "center 75%",
    title: "Two Hearts",
    text: "Different journeys, same direction.",
  },
  {
    img: "images/hands-mehendi.jpg",
    alt: "Hands joined, decorated with mehendi",
    rotate: "-rotate-2",
    pos: "center 30%",
    title: "One Sangam",
    text: "And then… Vrindavan.",
  },
];

export default function Story() {
  const riverRef = useRef<HTMLDivElement>(null);
  const [riverOn, setRiverOn] = useState(false);

  useEffect(() => {
    const el = riverRef.current;
    if (!el) return;
    const phoneContainer = document.getElementById("phone-screen");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRiverOn(true);
          io.disconnect();
        }
      },
      { root: phoneContainer || null, threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="story" aria-label="Our story" className="bg-parchment paper-grain paper-vignette relative overflow-hidden">
      {/* floral corner dressing */}
      <CornerFlourish className="absolute left-0 top-0 w-24 opacity-70 sm:w-32" />
      <CornerFlourish flip className="absolute right-0 top-0 w-24 opacity-70 sm:w-32" />

      <div className="relative mx-auto max-w-2xl px-5 pb-0 pt-16 sm:pt-24">
        {/* heading */}
        <div className="text-center">
          <Reveal variant="zoom">
            <h2 className="font-script text-5xl text-gold-sheen sm:text-6xl">Our Story</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 font-display text-sm uppercase tracking-[0.4em] text-ink-700 sm:text-base">
              Two paths, one journey
            </p>
          </Reveal>
          <Reveal delay={200}>
            <DiamondDivider className="mt-4" />
          </Reveal>
          <Reveal delay={260}>
            <p className="mx-auto mt-6 max-w-sm font-serif text-lg italic leading-relaxed text-ink-700 sm:text-xl">
              Like the Bhagirathi and Alaknanda, our paths flowed separately, until destiny brought us together
              at&nbsp;Prem Mandir, Vrindavan.
            </p>
          </Reveal>
        </div>

        {/* winding river timeline */}
        <div ref={riverRef} className={cn("relative mt-14 pb-14", riverOn && "river-visible")}>
          {/* watercolour river */}
          <svg
            aria-hidden
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <path
              d="M62 0 C 30 90, 18 140, 38 215 S 86 330, 62 415 S 14 540, 34 630 S 84 760, 58 850 S 30 950, 44 1000"
              fill="none"
              stroke="#8fc7c9"
              strokeOpacity="0.55"
              strokeWidth="11"
              strokeLinecap="round"
              className="river-path"
            />
            <path
              d="M62 0 C 30 90, 18 140, 38 215 S 86 330, 62 415 S 14 540, 34 630 S 84 760, 58 850 S 30 950, 44 1000"
              fill="none"
              stroke="#e9f6f4"
              strokeOpacity="0.9"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="river-path"
            />
          </svg>

          <ol className="relative space-y-14 sm:space-y-16">
            {MILESTONES.map((m, i) => (
              <li key={m.title} className="grid grid-cols-[auto_1fr] items-center gap-5 sm:gap-8">
                <Reveal variant="left" className={cn(i === 1 && "sm:translate-x-10")}>
                  <Polaroid src={m.img} alt={m.alt} rotate={m.rotate} pos={m.pos} />
                </Reveal>
                <Reveal variant="right" delay={140}>
                  <div className="relative pl-6">
                    {/* gold node */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-2 h-3 w-3 rounded-full bg-gold-400 shadow-[0_0_0_4px_rgba(201,154,60,0.25),0_0_10px_rgba(201,154,60,0.7)]"
                    />
                    <h3 className="font-serif text-xl font-bold leading-snug text-ink-900 sm:text-2xl">{m.title}</h3>
                    <p className="mt-1 font-serif text-base italic text-ink-700 sm:text-lg">{m.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}

            {/* closing photo */}
            <li className="flex justify-center pt-2">
              <Reveal variant="zoom">
                <Polaroid
                  src="images/hands-mehendi.jpg"
                  alt="A close up of henna-decorated hands held together"
                  rotate="rotate-3"
                  pos="center 60%"
                  className="w-36 sm:w-44"
                />
              </Reveal>
            </li>
          </ol>
        </div>
      </div>

      {/* faded valley illustration at the foot */}
      <div aria-hidden className="relative h-40 sm:h-52">
        <img
          src="images/golden-sangam.jpg"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-[20%_55%] opacity-55"
          style={{ maskImage: "linear-gradient(to bottom, transparent, black 55%)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 55%)" }}
        />
      </div>
    </section>
  );
}
