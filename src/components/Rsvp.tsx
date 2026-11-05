import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

export default function Rsvp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [guests, setGuests] = useState("1");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
  };

  const whatsappMessage = encodeURIComponent(
    `Namaste! I would like to RSVP for the Wedding Celebration at Prem Mandir, Vrindavan.\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company || "N/A"}\nCity: ${city || "N/A"}\nGuests: ${guests}\nAttending: ${attending === "yes" ? "Joyfully Attending 🎉" : "Regretfully Declining"}`
  );

  return (
    <section
      id="rsvp"
      aria-label="RSVP"
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-[#fbf7ee] via-[#f7f0df] to-[#fbf7ee]"
    >
      {/* Decorative Traditional Floral Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-[#dfba88]/25 via-transparent to-transparent blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <Reveal>
            <p className="font-display uppercase tracking-[0.3em] text-[11px] sm:text-[12.5px] font-semibold text-[#8b6528]">
              ✦ Braj Vivah Mahotsav · Prem Mandir ✦
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1e3f2b]">
              The Honour of Your Presence
            </h2>
          </Reveal> 
          <Reveal delay={180}>
            <p className="mt-2 mx-auto max-w-md font-serif italic text-sm sm:text-base text-[#684c20]">
              Please grace us with your acceptance as we unite under the divine blessings of Sri Radha Krishna.
            </p>
          </Reveal>
        </div>

        {/* =========================================================================
            ROYAL MARBLE ARCH RSVP CARD (Exact Match to User Reference)
            ========================================================================= */}
        <Reveal delay={240}>
          <div className="relative mx-auto w-full max-w-[440px] sm:max-w-[480px] md:max-w-[500px]">
            {/* 3D Golden Card Frame Container with 576/1024 Aspect Ratio */}
            <div className="relative w-full aspect-[576/1024] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_24px_60px_rgba(80,55,20,0.32),0_0_0_1px_rgba(212,175,55,0.45)] bg-[#f7efe0]">
              
              {/* Background Artwork: Marble Pillars, Cusped Arch, Plinth & Lord Krishna */}
              <img
                src="images/rsvp-card-bg.jpg"
                alt="Kindly RSVP Palace Arch with Lord Krishna"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              />

              {/* Interactive Form Overlay Layer */}
              <div className="absolute inset-0 w-full h-full">
                
                {/* "Kindly RSVP" Heading matching the reference artwork */}
                <div
                  className="absolute inset-x-0 text-center pointer-events-none select-none z-10"
                  style={{ top: "25.7%" }}
                >
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-[40px] font-medium tracking-wide text-[#1e3f2b] drop-shadow-xs">
                    Kindly RSVP
                  </h3>
                </div>

                {/* Golden Lotus Divider */}
                <div
                  className="absolute inset-x-[22%] flex items-center justify-center gap-2.5 pointer-events-none select-none z-10"
                  style={{ top: "31.8%" }}
                >
                  <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-[#c5a059]" />
                  <svg viewBox="0 0 40 24" className="h-4 sm:h-5 w-auto text-[#c5a059]" fill="currentColor">
                    <path d="M20 2c1.8 3.5 4.5 7.5 7.5 9.5-2.5.5-5 0-7.5-2-2.5 2-5 2.5-7.5 2 3-2 5.7-6 7.5-9.5z" />
                    <path d="M12 11.5c-3.5 1.5-7.5 5-9 9 3-.5 6-2 8.5-4.5 1-1.5 1.2-3 0.5-4.5z" opacity="0.9" />
                    <path d="M28 11.5c3.5 1.5 7.5 5 9 9-3-.5-6-2-8.5-4.5-1-1.5-1.2-3-.5-4.5z" opacity="0.9" />
                    <path d="M20 13c3 3 7 5.5 11 6.5-3 1.5-6.5 1.5-10 0-1 1-2 1.5-3 1.5s-2-.5-3-1.5c-3.5 1.5-7 1.5-10 0 4-1 8-3.5 11-6.5z" />
                  </svg>
                  <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#c5a059] to-[#c5a059]" />
                </div>

                {!submitted ? (
                  <form onSubmit={onSubmit} className="w-full h-full relative">
                    
                    {/* 1. Name Input Box (36.3% from top) */}
                    <div
                      className="absolute left-[17.5%] right-[17.5%] h-[5.1%]"
                      style={{ top: "36.3%" }}
                    >
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Name"
                        aria-label="First Name"
                        className="w-full h-full rounded-full border border-[#dfba88] bg-[#fef9ee]/95 px-5 font-serif italic text-xs sm:text-sm md:text-base text-[#1e3f2b] placeholder:font-serif placeholder:italic placeholder:text-[#1e3f2b]/70 shadow-[inset_0_1px_3px_rgba(180,140,80,0.14)] outline-none transition-all duration-300 focus:border-[#b8860b] focus:ring-2 focus:ring-[#dfba88]/60 focus:bg-[#ffffff] hover:border-[#b8860b]/80"
                      />
                    </div>

                    {/* 2. Last Name Input Box (43.0% from top) */}
                    <div
                      className="absolute left-[17.5%] right-[17.5%] h-[5.1%]"
                      style={{ top: "43.0%" }}
                    >
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        aria-label="Last Name"
                        className="w-full h-full rounded-full border border-[#dfba88] bg-[#fef9ee]/95 px-5 font-serif italic text-xs sm:text-sm md:text-base text-[#1e3f2b] placeholder:font-serif placeholder:italic placeholder:text-[#1e3f2b]/70 shadow-[inset_0_1px_3px_rgba(180,140,80,0.14)] outline-none transition-all duration-300 focus:border-[#b8860b] focus:ring-2 focus:ring-[#dfba88]/60 focus:bg-[#ffffff] hover:border-[#b8860b]/80"
                      />
                    </div>

                    {/* 3. Email Input Box (49.9% from top) */}
                    <div
                      className="absolute left-[17.5%] right-[17.5%] h-[5.1%]"
                      style={{ top: "49.9%" }}
                    >
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        aria-label="Email Address"
                        className="w-full h-full rounded-full border border-[#dfba88] bg-[#fef9ee]/95 px-5 font-serif italic text-xs sm:text-sm md:text-base text-[#1e3f2b] placeholder:font-serif placeholder:italic placeholder:text-[#1e3f2b]/70 shadow-[inset_0_1px_3px_rgba(180,140,80,0.14)] outline-none transition-all duration-300 focus:border-[#b8860b] focus:ring-2 focus:ring-[#dfba88]/60 focus:bg-[#ffffff] hover:border-[#b8860b]/80"
                      />
                    </div>

                    {/* 4. Company Input Box (56.6% from top) */}
                    <div
                      className="absolute left-[17.5%] right-[17.5%] h-[5.1%]"
                      style={{ top: "56.6%" }}
                    >
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company"
                        aria-label="Company or Family Name"
                        className="w-full h-full rounded-full border border-[#dfba88] bg-[#fef9ee]/95 px-5 font-serif italic text-xs sm:text-sm md:text-base text-[#1e3f2b] placeholder:font-serif placeholder:italic placeholder:text-[#1e3f2b]/70 shadow-[inset_0_1px_3px_rgba(180,140,80,0.14)] outline-none transition-all duration-300 focus:border-[#b8860b] focus:ring-2 focus:ring-[#dfba88]/60 focus:bg-[#ffffff] hover:border-[#b8860b]/80"
                      />
                    </div>

                    {/* 5. City Input Box (63.3% from top) */}
                    <div
                      className="absolute left-[17.5%] right-[17.5%] h-[5.1%]"
                      style={{ top: "63.3%" }}
                    >
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        aria-label="City of Residence"
                        className="w-full h-full rounded-full border border-[#dfba88] bg-[#fef9ee]/95 px-5 font-serif italic text-xs sm:text-sm md:text-base text-[#1e3f2b] placeholder:font-serif placeholder:italic placeholder:text-[#1e3f2b]/70 shadow-[inset_0_1px_3px_rgba(180,140,80,0.14)] outline-none transition-all duration-300 focus:border-[#b8860b] focus:ring-2 focus:ring-[#dfba88]/60 focus:bg-[#ffffff] hover:border-[#b8860b]/80"
                      />
                    </div>

                    {/* Submit RSVP Button (70.0% from top, placed gracefully beside Lord Krishna) */}
                    <div
                      className="absolute left-[17.5%] w-[48%] h-[5.1%] flex items-center"
                      style={{ top: "70.0%" }}
                    >
                      <button
                        type="submit"
                        className="group w-full h-full rounded-full border border-[#dfba88] bg-gradient-to-r from-[#1e3f2b] via-[#2d5a3f] to-[#1e3f2b] text-[#fef9ee] px-3 font-display uppercase tracking-wider text-[10px] sm:text-xs font-bold shadow-[0_6px_16px_rgba(30,63,43,0.35),inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(30,63,43,0.45)] active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>Confirm RSVP</span>
                        <span className="text-gold-300 transition-transform duration-300 group-hover:translate-x-0.5">✦</span>
                      </button>
                    </div>

                    {/* Subtle Guest Selector Pill (76.5% from top, on left side of Krishna) */}
                    <div
                      className="absolute left-[17.5%] w-[48%] flex items-center justify-between px-1"
                      style={{ top: "76.5%" }}
                    >
                      <div className="flex items-center gap-1.5 rounded-full bg-[#fef9ee]/90 border border-[#dfba88]/70 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-display text-[#5a3b16] shadow-xs">
                        <span className="font-semibold text-[#1e3f2b]">Guests:</span>
                        <select
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="bg-transparent font-serif font-bold text-[#1e3f2b] outline-none cursor-pointer"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5+">5+</option>
                        </select>
                      </div>

                      <button
                        type="button"
                        onClick={() => setAttending((prev) => (prev === "yes" ? "no" : "yes"))}
                        className="flex items-center gap-1 rounded-full bg-[#fef9ee]/90 border border-[#dfba88]/70 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-display text-[#5a3b16] shadow-xs cursor-pointer hover:bg-white transition"
                        title="Click to toggle attendance"
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            attending === "yes" ? "bg-emerald-600" : "bg-rose-600"
                          }`}
                        />
                        <span>{attending === "yes" ? "Attending" : "Declining"}</span>
                      </button>
                    </div>

                  </form>
                ) : (
                  /* =========================================================================
                      CONFIRMATION VIEW (Displayed on Card when Form is Submitted)
                      ========================================================================= */
                  <div
                    className="absolute left-[14%] right-[14%] flex flex-col items-center justify-center text-center p-4 rounded-2xl border border-[#dfba88] bg-[#fef9ee]/95 shadow-[0_12px_30px_rgba(110,75,25,0.25)] backdrop-blur-xs transition-all duration-500 animate-fadeIn"
                    style={{ top: "36.0%", minHeight: "38%" }}
                  >
                    <div className="h-9 w-9 rounded-full bg-[#1e3f2b] text-gold-300 flex items-center justify-center shadow-sm text-sm">
                      🪷
                    </div>

                    <h3 className="mt-2 font-serif text-xl sm:text-2xl font-bold text-[#1e3f2b] leading-tight">
                      Dhanyavaad, {firstName}!
                    </h3>

                    <p className="mt-1.5 font-serif italic text-[11px] sm:text-xs text-[#684c20] leading-relaxed">
                      Your RSVP has been graciously received for the sacred celebrations at Prem Mandir, Vrindavan.
                    </p>

                    <div className="mt-3 w-full rounded-xl border border-[#dfba88]/60 bg-[#fffdfa] p-2 text-left text-[10px] sm:text-[11px] space-y-0.5 text-[#4a3418]">
                      <p><span className="font-semibold text-[#1e3f2b]">Guest:</span> {firstName} {lastName}</p>
                      {city && <p><span className="font-semibold text-[#1e3f2b]">City:</span> {city}</p>}
                      {company && <p><span className="font-semibold text-[#1e3f2b]">Company:</span> {company}</p>}
                      <p><span className="font-semibold text-[#1e3f2b]">Party Size:</span> {guests} {guests === "1" ? "Guest" : "Guests"}</p>
                    </div>

                    <div className="mt-3 flex items-center gap-2 w-full">
                      <a
                        href={`https://wa.me/?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-full border border-emerald-600 bg-emerald-700 hover:bg-emerald-800 text-white py-1.5 text-[9.5px] sm:text-[10.5px] font-display uppercase tracking-wider font-semibold shadow-xs transition cursor-pointer text-center"
                      >
                        WhatsApp ↗
                      </a>
                      <button
                        onClick={resetForm}
                        className="rounded-full border border-[#dfba88] bg-[#fef9ee] hover:bg-[#fffaf0] text-[#5a3b16] py-1.5 px-3 text-[9.5px] sm:text-[10.5px] font-display uppercase tracking-wider font-semibold shadow-xs transition cursor-pointer"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Direct WhatsApp RSVP link below the card */}
            <div className="mt-5 text-center">
              <a
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#dfba88]/80 bg-[#fffdf8]/90 px-5 py-2 font-display text-[11.5px] sm:text-[12.5px] uppercase tracking-wider font-semibold text-[#1e3f2b] shadow-sm hover:bg-[#fffaf0] hover:border-[#b8860b] hover:shadow-md transition-all duration-300"
              >
                <span>Prefer WhatsApp? Tap here to RSVP directly</span>
                <span className="text-[#25D366] text-sm">💬</span>
              </a>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
