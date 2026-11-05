import Reveal from "./Reveal";
import { DiamondDivider, CornerFlourish } from "./Ornaments";

export default function Venue() {
  return (
    <section
      id="venue"
      aria-label="Venue and travel"
      className="bg-parchment paper-grain paper-vignette relative overflow-hidden py-14 sm:py-20"
    >
      <CornerFlourish className="absolute -left-2 top-2 w-20 opacity-60 sm:w-28 pointer-events-none" />
      <CornerFlourish flip className="absolute -right-2 top-2 w-20 opacity-60 sm:w-28 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-2xl px-5">
        {/* Section Heading */}
        <div className="text-center">
          <Reveal variant="zoom">
            <h2 className="font-script text-5xl sm:text-6xl text-gold-sheen select-none">
              Venue
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-3 flex justify-center">

            </div>
          </Reveal>
          <Reveal delay={200}>
            <DiamondDivider className="mt-4" />
          </Reveal>
          <Reveal delay={260}>
            <p className="mx-auto mt-4 max-w-md font-serif text-base italic leading-relaxed text-ink-700 sm:text-lg">
              In the sacred land of divine eternal love, join us as we unite under the celestial grace of Prem Mandir.
            </p>
          </Reveal>
        </div>

        {/* Prem Mandir Temple Facade Crowning the Map */}
        <Reveal variant="up" delay={160} className="mt-8 -mb-2 sm:-mb-3 relative z-10 flex justify-center">
          <div className="w-full max-w-lg px-2">
            <img
              src="images/prem-mandir-facade.png"
              alt="Prem Mandir Vrindavan Temple Facade"
              className="w-full h-auto object-contain filter drop-shadow-[0_8px_18px_rgba(80,45,10,0.22)]"
              loading="lazy"
            />
          </div>
        </Reveal>
        <br></br>
        {/* Real Interactive Google Map Card */}
        <Reveal variant="zoom" delay={180}>
          <div className="group relative overflow-hidden rounded-2xl border-2 border-gold-400/60 bg-[#fdf6e2] shadow-[0_12px_32px_rgba(100,70,25,0.2)]">
            {/* Real Interactive Map Iframe */}
            <div className="relative h-60 sm:h-96 w-full bg-[#f0e6d2]">
              <iframe
                title="Prem Mandir Vrindavan Google Map"
                src="https://maps.google.com/maps?q=Prem+Mandir,+Vrindavan,+Mathura,+Uttar+Pradesh+281121&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
