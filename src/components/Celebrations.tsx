import { useState, useRef, useEffect, useCallback } from "react";
import Reveal from "./Reveal";
import { CornerFlourish, DiamondDivider } from "./Ornaments";
import {
  MehndiIcon,
  MayraIcon,
  HaldiIcon,
  ShagunIcon,
  CocktailIcon,
  SangeetIcon,
  TilakIcon,
  EngagementIcon,
  BaraatIcon,
  WeddingIcon,
  VarmalaIcon,
  PherasIcon,
  ReceptionIcon,
  VidaiIcon,
  RokaIcon,
} from "./CelebrationIcons";

export interface WeddingEvent {
  id: string;
  name: string;
  title: string;
  cardImg: string;
  cardAlt: string;
  date: string;
  time: string;
  venue: string;
  note: string;
  attire: string;
  tag: string;
  colorScheme: {
    themeColor: string;
    pillActive: string;
    badgeBg: string;
    textColor: string;
    border: string;
  };
  Icon: React.ComponentType<{ className?: string }>;
}

const EVENTS: WeddingEvent[] = [
  {
    id: "mehndi",
    name: "Mehndi",
    title: "Mehendi Ceremony",
    cardImg: "images/Evevnt-cards/Mehandi-card.png",
    cardAlt: "Mehndi ceremony royal jharokha arch card",
    date: "10 Dec 2025",
    time: "4:00 PM",
    venue: "The Riverside Lawn, Prem Mandir",
    note: "Intricate henna patterns, festive folk songs & sweet laughter.",
    attire: "Festive Greens & Floral Prints",
    tag: "Henna & Melodies",
    colorScheme: {
      themeColor: "#166534",
      pillActive: "from-emerald-700 via-emerald-600 to-emerald-700 text-white ring-emerald-400",
      badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-300",
      textColor: "text-emerald-950",
      border: "border-emerald-400/60",
    },
    Icon: MehndiIcon,
  },
  {
    id: "mayra",
    name: "Mayra",
    title: "Mayra (Bhaat)",
    cardImg: "images/Evevnt-cards/Mayra-card.png",
    cardAlt: "Mayra ceremony royal jharokha arch card",
    date: "11 Dec 2025",
    time: "11:00 AM",
    venue: "The Haveli Courtyard, Prem Mandir",
    note: "Maternal blessings, sweet traditions & auspicious bandhani chunri.",
    attire: "Bandhani & Traditional Poshak",
    tag: "Maternal Blessings",
    colorScheme: {
      themeColor: "#b91c1c",
      pillActive: "from-red-800 via-red-600 to-red-800 text-white ring-red-400",
      badgeBg: "bg-red-50 text-red-900 border-red-300",
      textColor: "text-red-950",
      border: "border-red-400/60",
    },
    Icon: MayraIcon,
  },
  {
    id: "haldi",
    name: "Haldi",
    title: "Haldi Ceremony",
    cardImg: "images/Evevnt-cards/Haldi-card.png",
    cardAlt: "Haldi ceremony royal jharokha arch card",
    date: "11 Dec 2025",
    time: "1:00 PM",
    venue: "The Lotus Lawns, Prem Mandir",
    note: "Colors of joy, happy laughter & sacred turmeric glow.",
    attire: "Shades of Sunshine & Haldi Yellow",
    tag: "Auspicious Ubtan",
    colorScheme: {
      themeColor: "#b45309",
      pillActive: "from-amber-600 via-amber-500 to-amber-600 text-[#3b1d06] ring-amber-300",
      badgeBg: "bg-amber-50 text-amber-900 border-amber-300",
      textColor: "text-amber-950",
      border: "border-amber-400/60",
    },
    Icon: HaldiIcon,
  },
  {
    id: "shagun",
    name: "Shagun",
    title: "Shagun & Godh Bharai",
    cardImg: "images/Evevnt-cards/Shagun-card.png",
    cardAlt: "Shagun ceremony royal jharokha arch card",
    date: "11 Dec 2025",
    time: "4:00 PM",
    venue: "The Royal Pavilion, Prem Mandir",
    note: "Auspicious envelopes, golden shagun & heartfelt elders' blessings.",
    attire: "Rich Brocade & Saffron Silks",
    tag: "Sacred Blessings",
    colorScheme: {
      themeColor: "#c2410c",
      pillActive: "from-orange-700 via-orange-600 to-orange-700 text-white ring-orange-400",
      badgeBg: "bg-orange-50 text-orange-900 border-orange-300",
      textColor: "text-orange-950",
      border: "border-orange-400/60",
    },
    Icon: ShagunIcon,
  },
  {
    id: "cocktail",
    name: "Cocktail",
    title: "Cocktail Soirée",
    cardImg: "images/Evevnt-cards/Cocktail-card.png",
    cardAlt: "Cocktail party royal jharokha arch card",
    date: "11 Dec 2025",
    time: "7:00 PM",
    venue: "The Moonlight Terrace, Prem Mandir",
    note: "Toasts, joyful music, twinkling lights & midnight revelry.",
    attire: "Western Cocktail Chic & Evening Gowns",
    tag: "Night of Toasts",
    colorScheme: {
      themeColor: "#1e3a8a",
      pillActive: "from-blue-900 via-indigo-800 to-blue-900 text-white ring-blue-400",
      badgeBg: "bg-blue-50 text-blue-900 border-blue-300",
      textColor: "text-blue-950",
      border: "border-blue-400/60",
    },
    Icon: CocktailIcon,
  },
  {
    id: "sangeet",
    name: "Sangeet",
    title: "Sangeet Night",
    cardImg: "images/Evevnt-cards/Sangeet-card.png",
    cardAlt: "Sangeet night royal jharokha arch card",
    date: "11 Dec 2025",
    time: "8:30 PM",
    venue: "The Royal Ballroom, Prem Mandir",
    note: "Dance performances, dholak rhythms, musical beats & celebration.",
    attire: "Glamorous Evening Sparkle & Lehengas",
    tag: "Music & Dance",
    colorScheme: {
      themeColor: "#86198f",
      pillActive: "from-fuchsia-900 via-purple-700 to-fuchsia-900 text-white ring-fuchsia-400",
      badgeBg: "bg-fuchsia-50 text-fuchsia-900 border-fuchsia-300",
      textColor: "text-fuchsia-950",
      border: "border-fuchsia-400/60",
    },
    Icon: SangeetIcon,
  },
  {
    id: "tilak",
    name: "Tilak",
    title: "Tilak Ceremony",
    cardImg: "images/Evevnt-cards/Tilak-card.png",
    cardAlt: "Tilak ceremony royal jharokha arch card",
    date: "12 Dec 2025",
    time: "10:00 AM",
    venue: "The Heritage Hall, Prem Mandir",
    note: "Auspicious tilak, sacred brotherhood & ceremonial gifts.",
    attire: "Classic Kurta & Royal Nehru Jacket",
    tag: "Sacred Brotherhood",
    colorScheme: {
      themeColor: "#9f1239",
      pillActive: "from-rose-800 via-rose-700 to-rose-800 text-white ring-rose-400",
      badgeBg: "bg-rose-50 text-rose-900 border-rose-300",
      textColor: "text-rose-950",
      border: "border-rose-400/60",
    },
    Icon: TilakIcon,
  },
  {
    id: "engagement",
    name: "Engagement",
    title: "Ring Ceremony",
    cardImg: "images/Evevnt-cards/Engagement-card.png",
    cardAlt: "Engagement ceremony royal jharokha arch card",
    date: "12 Dec 2025",
    time: "12:00 PM",
    venue: "The Starry Glasshouse, Prem Mandir",
    note: "Exchange of rings & eternal promise of togetherness.",
    attire: "Indo-Western & Pastel Royalty",
    tag: "Promise of Forever",
    colorScheme: {
      themeColor: "#9d174d",
      pillActive: "from-pink-900 via-pink-700 to-pink-900 text-white ring-pink-400",
      badgeBg: "bg-pink-50 text-pink-900 border-pink-300",
      textColor: "text-pink-950",
      border: "border-pink-400/60",
    },
    Icon: EngagementIcon,
  },
  {
    id: "baraat",
    name: "Baraat",
    title: "Grand Royal Baraat",
    cardImg: "images/Evevnt-cards/Baraat-card.png",
    cardAlt: "Baraat procession royal jharokha arch card",
    date: "12 Dec 2025",
    time: "4:00 PM",
    venue: "Prem Mandir Grand Gateway",
    note: "Dancing procession with royal brass band, dhol & celebratory spirits.",
    attire: "Regal Sherwani & Royal Safa",
    tag: "Royal Procession",
    colorScheme: {
      themeColor: "#b91c1c",
      pillActive: "from-red-800 via-red-600 to-red-800 text-white ring-red-400",
      badgeBg: "bg-red-50 text-red-900 border-red-300",
      textColor: "text-red-950",
      border: "border-red-400/60",
    },
    Icon: BaraatIcon,
  },
  {
    id: "wedding",
    name: "Wedding",
    title: "The Holy Wedding (Shaadi)",
    cardImg: "images/Evevnt-cards/Shaadi-card.png",
    cardAlt: "Wedding royal jharokha arch card",
    date: "12 Dec 2025",
    time: "6:00 PM",
    venue: "Prem Mandir Sanctum, Mathura",
    note: "Two souls, sacred Vedic mantras & one eternal bond under divine grace.",
    attire: "Traditional Royal Indian Wedding Silks",
    tag: "Sacred Union",
    colorScheme: {
      themeColor: "#881324",
      pillActive: "from-rose-950 via-rose-800 to-rose-950 text-white ring-rose-400",
      badgeBg: "bg-rose-50 text-rose-900 border-rose-300",
      textColor: "text-rose-950",
      border: "border-rose-400/60",
    },
    Icon: WeddingIcon,
  },
  {
    id: "varmala",
    name: "Varmala",
    title: "Varmala Ceremony",
    cardImg: "images/Evevnt-cards/Varmala-card.png",
    cardAlt: "Varmala ceremony royal jharokha arch card",
    date: "12 Dec 2025",
    time: "7:30 PM",
    venue: "Mandir Courtyard, Prem Mandir",
    note: "Garland exchange amid fragrant flower shower and celestial hymns.",
    attire: "Royal Festive Silks",
    tag: "Floral Union",
    colorScheme: {
      themeColor: "#be185d",
      pillActive: "from-pink-800 via-rose-600 to-pink-800 text-white ring-pink-300",
      badgeBg: "bg-pink-50 text-pink-900 border-pink-300",
      textColor: "text-pink-950",
      border: "border-pink-400/60",
    },
    Icon: VarmalaIcon,
  },
  {
    id: "pheras",
    name: "Pheras",
    title: "Saat Phere (Holy Vows)",
    cardImg: "images/Evevnt-cards/Pheras-card.png",
    cardAlt: "Pheras ceremony royal jharokha arch card",
    date: "12 Dec 2025",
    time: "9:00 PM",
    venue: "The Sacred Mandap, Prem Mandir",
    note: "Seven sacred vows around the holy agni for seven lifetimes of love.",
    attire: "Sacred Wedding Silks & Gathbandhan",
    tag: "Seven Sacred Vows",
    colorScheme: {
      themeColor: "#c2410c",
      pillActive: "from-orange-800 via-amber-600 to-orange-800 text-white ring-orange-300",
      badgeBg: "bg-orange-50 text-orange-900 border-orange-300",
      textColor: "text-orange-950",
      border: "border-orange-400/60",
    },
    Icon: PherasIcon,
  },
  {
    id: "reception",
    name: "Reception",
    title: "Grand Royal Reception",
    cardImg: "images/Evevnt-cards/Reception-card.png",
    cardAlt: "Reception ceremony royal jharokha arch card",
    date: "12 Dec 2025",
    time: "10:30 PM",
    venue: "The Grand Palace Lawns, Prem Mandir",
    note: "Feasting, photography & royal gala celebration of new beginnings.",
    attire: "Black Tie & Elegant Royal Sarees",
    tag: "Grand Celebration",
    colorScheme: {
      themeColor: "#0f172a",
      pillActive: "from-slate-900 via-slate-800 to-slate-900 text-gold-200 ring-gold-400",
      badgeBg: "bg-slate-100 text-slate-900 border-slate-300",
      textColor: "text-slate-950",
      border: "border-slate-400/60",
    },
    Icon: ReceptionIcon,
  },
  {
    id: "vidai",
    name: "Vidai",
    title: "Vidaai Ceremony",
    cardImg: "images/Evevnt-cards/Vidaai-card.png",
    cardAlt: "Vidaai ceremony royal jharokha arch card",
    date: "13 Dec 2025",
    time: "10:00 AM",
    venue: "The Palace Gateway, Prem Mandir",
    note: "Heartfelt tears, endless love & new beginnings in the royal doli.",
    attire: "Graceful Traditional Attire",
    tag: "Sweet Blessings",
    colorScheme: {
      themeColor: "#6b21a8",
      pillActive: "from-purple-900 via-purple-700 to-purple-900 text-white ring-purple-300",
      badgeBg: "bg-purple-50 text-purple-900 border-purple-300",
      textColor: "text-purple-950",
      border: "border-purple-400/60",
    },
    Icon: VidaiIcon,
  },
  {
    id: "roka",
    name: "Roka",
    title: "Roka & Shubh Sankalp",
    cardImg: "images/Evevnt-cards/Roka-card.png",
    cardAlt: "Roka ceremony royal jharokha arch card",
    date: "9 Dec 2025",
    time: "11:00 AM",
    venue: "The Sanctum Hall, Prem Mandir",
    note: "The first sacred promise of togetherness, sweet thali & divine blessings.",
    attire: "Classic Indian Festive Wear",
    tag: "Auspicious Beginnings",
    colorScheme: {
      themeColor: "#d97706",
      pillActive: "from-amber-700 via-amber-600 to-amber-700 text-white ring-amber-300",
      badgeBg: "bg-amber-50 text-amber-900 border-amber-300",
      textColor: "text-amber-950",
      border: "border-amber-400/60",
    },
    Icon: RokaIcon,
  },
];

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-gold-600" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4m8-4v4" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-[#991b1b]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function DressCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-gold-600" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3c0 1.3.8 2.4 2 2.8V9L3.5 15.2a2 2 0 0 0 1.1 3.6H19.4a2 2 0 0 0 1.1-3.6L13 9V7.8c1.2-.4 2-1.5 2-2.8a3 3 0 0 0-3-3Z" />
    </svg>
  );
}

function getGoogleCalendarUrl(event: WeddingEvent) {
  const dateMap: Record<string, string> = {
    "9 Dec 2025": "20251209",
    "10 Dec 2025": "20251210",
    "11 Dec 2025": "20251211",
    "12 Dec 2025": "20251212",
    "13 Dec 2025": "20251213",
  };
  const d = dateMap[event.date] || "20251211";
  const title = encodeURIComponent(`Ankit & Aashi Wedding: ${event.title}`);
  const details = encodeURIComponent(`${event.title} - ${event.note}\nAttire: ${event.attire}`);
  const location = encodeURIComponent(`${event.venue}, Prem Mandir, Vrindavan, Mathura`);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${d}T090000Z%2F${d}T140000Z`;
}

export default function Celebrations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const trackRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const activeEvent = EVENTS[activeIndex] || EVENTS[0];
  const isCurrentFlipped = !!flippedCards[activeEvent.id];

  const toggleFlip = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Scroll carousel to selected card index
  const scrollToCard = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>(".jharokha-scroll-card");
    const target = cards[index];
    if (target) {
      const scrollPos =
        target.offsetLeft - track.offsetLeft - (track.clientWidth - target.offsetWidth) / 2;
      track.scrollTo({ left: scrollPos, behavior: "smooth" });
      setActiveIndex(index);
    }
  }, []);

  // Center active tab in pill row
  useEffect(() => {
    const tabs = tabsRef.current;
    if (!tabs) return;
    const tabButtons = tabs.querySelectorAll<HTMLElement>(".ceremony-tab-btn");
    const target = tabButtons[activeIndex];
    if (target) {
      const scrollPos =
        target.offsetLeft - tabs.offsetLeft - (tabs.clientWidth - target.offsetWidth) / 2;
      tabs.scrollTo({ left: scrollPos, behavior: "smooth" });
    }
  }, [activeIndex]);

  // Track active card on manual swipe / scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const cards = track.querySelectorAll<HTMLElement>(".jharokha-scroll-card");
        const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;

        let closestIdx = 0;
        let minDiff = Infinity;

        cards.forEach((card, idx) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const diff = Math.abs(trackCenter - cardCenter);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = idx;
          }
        });

        setActiveIndex(closestIdx);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handlePrev = () => {
    const prev = activeIndex > 0 ? activeIndex - 1 : EVENTS.length - 1;
    scrollToCard(prev);
  };

  const handleNext = () => {
    const next = activeIndex < EVENTS.length - 1 ? activeIndex + 1 : 0;
    scrollToCard(next);
  };

  const ActiveIcon = activeEvent.Icon;

  return (
    <section
      id="events"
      aria-label="Our celebrations"
      className="bg-parchment paper-grain paper-vignette relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24"
    >
      <div id="celebrations" className="absolute -top-1" />

      {/* =========================================================================
          BACKGROUND DECORATIVE LAYERS (Event card design + Couple page harmony)
          ========================================================================= */}

      {/* Top corner royal flourishes */}
      <CornerFlourish className="pointer-events-none absolute -left-1 top-2 w-16 opacity-60 sm:w-24" />
      <CornerFlourish flip className="pointer-events-none absolute -right-1 top-2 w-16 opacity-60 sm:w-24" />

      {/* Warm Ambient Sanctuary Glow matching active event color */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden transition-colors duration-700"
      >
        <div
          className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-3xl opacity-25 transition-all duration-700"
          style={{ backgroundColor: activeEvent.colorScheme.themeColor }}
        />
        <div className="absolute left-1/2 top-4 -translate-x-1/2 h-[260px] w-[420px] rounded-full bg-radial from-[#fbbf24]/20 via-[#f59e0b]/10 to-transparent blur-2xl opacity-60" />
      </div>

      {/* =========================================================================
          PAGE CONTENT CONTAINER
          ========================================================================= */}
      <div className="relative z-10 mx-auto w-full max-w-2xl px-3 sm:px-5">

        {/* Section Header */}
        <div className="text-center pt-4 sm:pt-6">
          <Reveal variant="zoom">
            <h2 className="font-script text-5xl sm:text-6xl text-gold-sheen select-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
              Our Celebrations
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-2.5 font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-ink-700 font-medium">
              15 Sacred Rituals · Bound by Eternal Love
            </p>
          </Reveal>
          <Reveal delay={200}>
            <DiamondDivider className="mt-3.5" />
          </Reveal>
        </div>

        {/* Ceremony Navigation Pills (Horizontal 15-Event selector) */}
        <Reveal delay={240} className="mt-6 sm:mt-8">
          <div
            ref={tabsRef}
            className="no-scrollbar flex items-center gap-1.5 overflow-x-auto px-2 py-1.5 scroll-smooth"
            role="tablist"
            aria-label="Ceremony categories"
          >
            {EVENTS.map((item, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => scrollToCard(idx)}
                  className={`ceremony-tab-btn shrink-0 rounded-full px-3.5 py-1.5 font-display text-[11px] sm:text-xs tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? `bg-gradient-to-r ${item.colorScheme.pillActive} font-bold shadow-md scale-105 ring-1`
                      : "bg-[#fffdf7]/80 text-ink-700 hover:bg-[#fffdf7] border border-gold-400/40 hover:text-ink-900"
                  }`}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: isSelected ? "#fff" : item.colorScheme.themeColor }}
                  />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* =========================================================================
            JHAROKHA ARCH CARDS CAROUSEL WITH 3D FLIP ANIMATION
            ========================================================================= */}
        <div className="relative mt-5 sm:mt-7">
          {/* Previous / Next Arrow Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous ceremony card"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gold-400/70 bg-[#fffdf5]/90 text-gold-700 shadow-[0_4px_12px_rgba(110,75,25,0.22)] backdrop-blur-sm transition-all duration-300 hover:bg-gold-50 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <span className="font-serif text-lg leading-none sm:text-xl font-bold">‹</span>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next ceremony card"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gold-400/70 bg-[#fffdf5]/90 text-gold-700 shadow-[0_4px_12px_rgba(110,75,25,0.22)] backdrop-blur-sm transition-all duration-300 hover:bg-gold-50 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <span className="font-serif text-lg leading-none sm:text-xl font-bold">›</span>
          </button>

          {/* Scroll Track */}
          <div
            ref={trackRef}
            className="no-scrollbar flex items-center gap-4 sm:gap-6 overflow-x-auto px-10 sm:px-14 py-4 scroll-smooth snap-x snap-mandatory"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {EVENTS.map((event, idx) => {
              const isActive = idx === activeIndex;
              const isFlipped = !!flippedCards[event.id];
              const EventIcon = event.Icon;

              return (
                <div
                  key={event.id}
                  className={`jharokha-scroll-card shrink-0 snap-center transition-all duration-500 ${
                    isActive
                      ? "scale-100 opacity-100 z-20"
                      : "scale-[0.92] opacity-60 hover:opacity-85 z-10"
                  }`}
                  style={{
                    width: "clamp(220px, 64vw, 264px)",
                  }}
                >
                  {/* The Royal Jharokha Arch Event Card Container */}
                  <div className="relative group mx-auto flex flex-col items-center">
                    
                    {/* Top Ceremony Index Badge & Flip Button */}
                    <div className="mb-2 flex items-center justify-between w-full px-1">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/60 bg-[#fffdf5]/90 px-2.5 py-0.5 font-display text-[10px] sm:text-[11px] font-semibold text-[#5a3b16] shadow-sm">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: event.colorScheme.themeColor }}
                        />
                        <span>{String(idx + 1).padStart(2, "0")}</span>
                        <span className="text-gold-400">·</span>
                        <span>{event.name}</span>
                      </span>

                      {isActive && (
                        <button
                          type="button"
                          onClick={(e) => toggleFlip(event.id, e)}
                          className="inline-flex items-center gap-1 rounded-full border border-gold-400/70 bg-[#fffdf5]/95 px-2.5 py-0.5 font-display text-[10px] text-gold-800 hover:bg-gold-50 shadow-sm cursor-pointer transition active:scale-95"
                          title="Flip card"
                        >
                          <span className="text-[11px] leading-none">↺</span>
                          <span>{isFlipped ? "Artwork" : "Details"}</span>
                        </button>
                      )}
                    </div>

                    {/* 3D Perspective Card Box */}
                    <div
                      onClick={(e) => {
                        if (isActive) {
                          toggleFlip(event.id, e);
                        } else {
                          scrollToCard(idx);
                        }
                      }}
                      className="perspective-1000 relative w-full aspect-[641/1024] cursor-pointer select-none"
                    >
                      {/* Flipper (rotates 180deg) */}
                      <div
                        className={`relative w-full h-full preserve-3d transition-transform duration-700 ease-out ${
                          isFlipped ? "rotate-y-180" : ""
                        }`}
                      >
                        {/* ---------------- FRONT FACE (Ceremony Themed Artwork & Frame) ---------------- */}
                        <div className="absolute inset-0 w-full h-full backface-hidden">
                          <img
                            src={event.cardImg}
                            alt={event.cardAlt}
                            loading={idx === 0 ? "eager" : "lazy"}
                            className={`w-full h-full object-contain pointer-events-none select-none transition-transform duration-500 ${
                              isActive
                                ? "drop-shadow-[0_18px_36px_rgba(110,75,25,0.38)] group-hover:scale-[1.015]"
                                : "drop-shadow-[0_8px_18px_rgba(110,75,25,0.18)]"
                            }`}
                          />

                          {/* Floating interactive hint on Front */}
                          {isActive && !isFlipped && (
                            <div className="absolute bottom-5 inset-x-0 flex justify-center pointer-events-none">
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/80 bg-[#fffdf5]/92 px-3 py-1 font-display text-[10px] sm:text-[11px] font-semibold text-[#5a3b16] shadow-[0_4px_12px_rgba(110,75,25,0.22)] backdrop-blur-sm animate-pulse">
                                <span>Tap to view details</span>
                                <span className="text-xs">↺</span>
                              </span>
                            </div>
                          )}
                        </div>

                        {/* ---------------- BACK FACE (Ceremony Details & Custom Icon) ---------------- */}
                        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                          {/* Arch Frame & Parchment Background */}
                          <img
                            src="images/arch-card-back-template.png"
                            alt=""
                            className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_18px_36px_rgba(110,75,25,0.38)]"
                          />

                          {/* Event Details Content Layout inside Arch Opening */}
                          <div className="absolute inset-x-[11%] top-[13%] bottom-[6%] flex flex-col items-center justify-between text-center px-2 py-2 overflow-y-auto no-scrollbar">
                            
                            {/* Card Top: Tag, Bespoke Icon & Title */}
                            <div className="w-full flex flex-col items-center">
                              <span
                                className="inline-block rounded-full px-2.5 py-0.5 font-display text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] border border-[#d8be96] bg-[#fbf7ee] text-[#5a3b16] shadow-xs"
                              >
                                ✦ {event.tag} ✦
                              </span>

                              {/* Bespoke Ceremonial Vector Icon */}
                              <div className="my-1.5 flex justify-center">
                                <EventIcon className="h-11 w-11 sm:h-12 sm:w-12 drop-shadow-sm" />
                              </div>

                              <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight text-[#3b1d06]">
                                {event.title}
                              </h4>
                              <DiamondDivider className="mt-1" />
                            </div>

                            {/* Core Ceremony Details */}
                            <div className="w-full space-y-1 text-left my-auto">
                              {/* Date & Time */}
                              <div className="flex items-center gap-2 rounded-lg border border-[#d8be96]/70 bg-[#fcf9f2]/95 p-1.5 shadow-xs">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/25 text-[#7a4f15]">
                                  <CalendarIcon />
                                </span>
                                <div>
                                  <p className="font-display text-[8px] uppercase tracking-wider text-[#7a5c36] font-semibold">Date &amp; Time</p>
                                  <p className="font-serif text-[11px] font-bold text-[#2a1705] leading-tight">{event.date} · {event.time}</p>
                                </div>
                              </div>

                              {/* Venue */}
                              <div className="flex items-center gap-2 rounded-lg border border-[#d8be96]/70 bg-[#fcf9f2]/95 p-1.5 shadow-xs">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/25 text-[#7a4f15]">
                                  <PinIcon />
                                </span>
                                <div>
                                  <p className="font-display text-[8px] uppercase tracking-wider text-[#7a5c36] font-semibold">Venue</p>
                                  <p className="font-serif text-[11px] font-bold text-[#2a1705] leading-tight">{event.venue}</p>
                                </div>
                              </div>

                              {/* Attire */}
                              <div className="flex items-center gap-2 rounded-lg border border-[#d8be96]/70 bg-[#fcf9f2]/95 p-1.5 shadow-xs">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/25 text-[#7a4f15]">
                                  <DressCodeIcon />
                                </span>
                                <div>
                                  <p className="font-display text-[8px] uppercase tracking-wider text-[#7a5c36] font-semibold">Suggested Attire</p>
                                  <p className="font-serif text-[11px] font-bold text-[#2a1705] leading-tight">{event.attire}</p>
                                </div>
                              </div>

                              {/* Poetic Note */}
                              <p className="font-serif italic text-[10px] leading-snug text-center text-[#5c3e17] px-1 pt-0.5">
                                &ldquo;{event.note}&rdquo;
                              </p>
                            </div>

                            {/* Actions on Card Back */}
                            <div className="w-full space-y-1 pt-0.5">
                              <a
                                href={getGoogleCalendarUrl(event)}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center justify-center gap-1.5 w-full rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 py-1.5 px-3 font-display text-[9.5px] uppercase tracking-wider text-[#3b1d06] font-bold shadow-sm hover:brightness-105 active:scale-95 transition cursor-pointer"
                              >
                                <span>Add to Calendar</span>
                                <span className="text-xs">📅</span>
                              </a>

                              <button
                                type="button"
                                onClick={(e) => toggleFlip(event.id, e)}
                                className="inline-flex items-center justify-center gap-1 w-full text-[9px] font-display text-gold-800 hover:text-gold-950 transition underline underline-offset-2 py-0.5 cursor-pointer"
                              >
                                <span>↺ Flip to Front Artwork</span>
                              </button>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="mt-2 flex items-center justify-center gap-1.5">
            {EVENTS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to event card ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === activeIndex
                    ? "w-6 h-1.5 shadow-sm"
                    : "w-1.5 h-1.5 bg-gold-400/40 hover:bg-gold-400/70"
                }`}
                style={{
                  backgroundColor: idx === activeIndex ? item.colorScheme.themeColor : undefined,
                }}
              />
            ))}
          </div>
        </div>

        {/* =========================================================================
            ACTIVE CEREMONY DETAILS ROYAL PLAQUE
            ========================================================================= */}
        <Reveal delay={280} className="mt-6 sm:mt-8">
          <div className="relative rounded-2xl border border-gold-400/65 bg-gradient-to-b from-[#fffef9]/90 via-[#fdf7e9]/85 to-[#f9eed7]/90 p-4 sm:p-6 shadow-[0_12px_32px_rgba(110,75,25,0.18)] backdrop-blur-sm transition-all duration-500">
            {/* Inner Gold Inset Rim */}
            <div className="pointer-events-none absolute inset-1.5 rounded-xl border border-gold-400/35" />

            <div className="relative z-10 text-center">
              {/* Bespoke Ceremonial Vector Icon for Active Ceremony */}
              <div className="mb-2 flex justify-center">
                <ActiveIcon className="h-14 w-14 sm:h-16 sm:w-16 drop-shadow-md" />
              </div>

              {/* Auspicious Ceremony Tag */}
              <div className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 shadow-sm ${activeEvent.colorScheme.badgeBg}`}>
                <span className="text-xs select-none">✦</span>
                <span className="font-display text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                  {activeEvent.tag}
                </span>
                <span className="text-xs select-none">✦</span>
              </div>

              {/* Ceremony Title */}
              <h3 className="mt-2.5 font-serif text-2xl sm:text-3xl font-bold text-[#3b1d06] tracking-wide">
                {activeEvent.title}
              </h3>

              {/* Date & Time Badge */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-ink-800">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-gold-400/50 bg-[#fffdf8] px-2.5 py-1 font-medium shadow-sm">
                  <CalendarIcon />
                  <span>{activeEvent.date}</span>
                  <span className="text-gold-500 font-bold">|</span>
                  <span className="text-gold-700 font-semibold">{activeEvent.time}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-lg border border-gold-400/50 bg-[#fffdf8] px-2.5 py-1 font-medium shadow-sm">
                  <PinIcon />
                  <span className="font-semibold text-ink-900">{activeEvent.venue}</span>
                </span>
              </div>

              {/* Attire recommendation */}
              {activeEvent.attire && (
                <p className="mt-3 font-display text-[11px] sm:text-xs text-[#704818] tracking-wider">
                  <span className="font-semibold text-gold-700 uppercase tracking-widest mr-1.5">Attire:</span>
                  <span className="italic">{activeEvent.attire}</span>
                </p>
              )}

              {/* Ceremony Auspicious Note */}
              <p className="mt-2 font-serif text-sm sm:text-base italic text-ink-700 max-w-md mx-auto">
                &ldquo;{activeEvent.note}&rdquo;
              </p>

              {/* Flip Card Action Button */}
              <div className="mt-4 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={(e) => toggleFlip(activeEvent.id, e)}
                  className="inline-flex items-center gap-2 rounded-full border border-gold-400/70 bg-[#fffdf5] px-4 py-1.5 font-display text-xs text-[#5a3b16] shadow-sm transition hover:bg-gold-50 active:scale-95 cursor-pointer"
                >
                  <span>{isCurrentFlipped ? "View Card Artwork" : "Flip Card for Details"}</span>
                  <span className="text-sm">↺</span>
                </button>

                <a
                  href={getGoogleCalendarUrl(activeEvent)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-4 py-1.5 font-display text-xs font-semibold text-[#3b1d06] shadow-sm transition hover:brightness-105 active:scale-95 cursor-pointer"
                >
                  <span>Add to Calendar</span>
                  <span className="text-xs">📅</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
