// Ceremonial Vector Illustrations for Indian Wedding Events
// Crafted for the royal Jharokha Arch event cards

export function MehndiIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hennaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f5d6a6" />
          <stop offset="100%" stop-color="#dfa872" />
        </linearGradient>
        <linearGradient id="mehndiInk" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#7a2e12" />
          <stop offset="50%" stop-color="#591c0a" />
          <stop offset="100%" stop-color="#401205" />
        </linearGradient>
      </defs>
      {/* Left Hand */}
      <g transform="translate(14, 10)">
        <path d="M12 40 C10 32, 10 18, 13 14 C15 11, 19 12, 19 18 L19 32 M19 30 C19 22, 20 12, 24 9 C26 7, 30 8, 30 15 L30 30 M30 28 C30 20, 32 10, 36 8 C38 6, 42 7, 42 15 L42 32 M42 32 C43 25, 45 18, 48 16 C50 14, 54 16, 53 23 L51 40 C52 46, 56 50, 58 55 C60 60, 58 64, 52 63 L46 63 C46 72, 44 80, 40 82 L16 82 C14 78, 13 70, 13 60 C8 54, 8 46, 12 40 Z" fill="url(#hennaGrad)" stroke="#b88352" strokeWidth="1.2" />
        {/* Intricate Henna Mandalas on palm */}
        <circle cx="31" cy="48" r="9" stroke="url(#mehndiInk)" strokeWidth="1.2" fill="none" />
        <circle cx="31" cy="48" r="5" stroke="url(#mehndiInk)" strokeWidth="1" fill="#7a2e12" fillOpacity="0.25" />
        <circle cx="31" cy="48" r="2" fill="url(#mehndiInk)" />
        {/* Palm flourishes & dots */}
        <path d="M31 37 Q33 41 31 43 M31 53 Q33 55 31 59 M22 48 Q26 50 28 48 M34 48 Q36 50 40 48" stroke="url(#mehndiInk)" strokeWidth="1" strokeLinecap="round" />
        {/* Fingertip henna caps */}
        <path d="M12 18 C12 14, 19 14, 19 18 Z M20 13 C20 9, 29 9, 29 13 Z M31 12 C31 8, 41 8, 41 12 Z M43 19 C43 16, 52 16, 51 21 Z" fill="url(#mehndiInk)" />
        {/* Wrist cuff patterns */}
        <line x1="16" y1="72" x2="42" y2="72" stroke="url(#mehndiInk)" strokeWidth="1.2" />
        <line x1="15" y1="76" x2="41" y2="76" stroke="url(#mehndiInk)" strokeWidth="1.2" strokeDasharray="1.5 2" />
      </g>
      {/* Right Hand mirrored */}
      <g transform="translate(86, 10) scale(-1, 1)">
        <path d="M12 40 C10 32, 10 18, 13 14 C15 11, 19 12, 19 18 L19 32 M19 30 C19 22, 20 12, 24 9 C26 7, 30 8, 30 15 L30 30 M30 28 C30 20, 32 10, 36 8 C38 6, 42 7, 42 15 L42 32 M42 32 C43 25, 45 18, 48 16 C50 14, 54 16, 53 23 L51 40 C52 46, 56 50, 58 55 C60 60, 58 64, 52 63 L46 63 C46 72, 44 80, 40 82 L16 82 C14 78, 13 70, 13 60 C8 54, 8 46, 12 40 Z" fill="url(#hennaGrad)" stroke="#b88352" strokeWidth="1.2" />
        <circle cx="31" cy="48" r="9" stroke="url(#mehndiInk)" strokeWidth="1.2" fill="none" />
        <circle cx="31" cy="48" r="5" stroke="url(#mehndiInk)" strokeWidth="1" fill="#7a2e12" fillOpacity="0.25" />
        <circle cx="31" cy="48" r="2" fill="url(#mehndiInk)" />
        <path d="M31 37 Q33 41 31 43 M31 53 Q33 55 31 59 M22 48 Q26 50 28 48 M34 48 Q36 50 40 48" stroke="url(#mehndiInk)" strokeWidth="1" strokeLinecap="round" />
        <path d="M12 18 C12 14, 19 14, 19 18 Z M20 13 C20 9, 29 9, 29 13 Z M31 12 C31 8, 41 8, 41 12 Z M43 19 C43 16, 52 16, 51 21 Z" fill="url(#mehndiInk)" />
        <line x1="16" y1="72" x2="42" y2="72" stroke="url(#mehndiInk)" strokeWidth="1.2" />
        <line x1="15" y1="76" x2="41" y2="76" stroke="url(#mehndiInk)" strokeWidth="1.2" strokeDasharray="1.5 2" />
      </g>
    </svg>
  );
}

export function HaldiIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dholakWood" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#69300c" />
          <stop offset="50%" stop-color="#b05b1c" />
          <stop offset="100%" stop-color="#69300c" />
        </linearGradient>
        <linearGradient id="haldiBowl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fcd34d" />
          <stop offset="60%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#d97706" />
        </linearGradient>
      </defs>
      {/* Dholak Body (barrel shape) */}
      <g transform="rotate(-12 50 48)">
        <ellipse cx="22" cy="46" rx="5" ry="16" fill="#e2d4be" stroke="#8a5323" strokeWidth="1.5" />
        <path d="M22 30 Q50 24 78 32 L78 60 Q50 68 22 62 Z" fill="url(#dholakWood)" stroke="#522405" strokeWidth="1.2" />   
        <ellipse cx="78" cy="46" rx="5" ry="14" fill="#eedec7" stroke="#8a5323" strokeWidth="1.5" />
        {/* Dholak cross-lacing ropes */}
        <path d="M22 32 L50 66 L78 34 M22 42 L50 25 L78 44 M22 52 L50 66 L78 54 M22 60 L50 25 L78 58" stroke="#fef3c7" strokeWidth="1" strokeOpacity="0.85" />
        {/* Metal tuning rings */}
        <circle cx="50" cy="46" r="3" fill="#fbbf24" stroke="#92400e" strokeWidth="0.8" />
      </g>
      {/* Haldi Bowl with Turmeric Powder & Marigold garland */}
      <g transform="translate(48, 54)">
        {/* Brass/Bronze Bowl */}
        <ellipse cx="26" cy="24" rx="20" ry="10" fill="#78350f" />
        <path d="M6 24 C6 35, 46 35, 46 24 Z" fill="url(#dholakWood)" stroke="#f59e0b" strokeWidth="1" />
        {/* Golden Turmeric Mound */}
        <ellipse cx="26" cy="22" rx="16" ry="8" fill="url(#haldiBowl)" />
        <circle cx="26" cy="18" r="7" fill="#fbbf24" />
        {/* Marigold flower garnish */}
        <circle cx="16" cy="20" r="3" fill="#f97316" />
        <circle cx="18" cy="18" r="2.5" fill="#eab308" />
        <circle cx="36" cy="20" r="3" fill="#f97316" />
        <circle cx="34" cy="18" r="2.5" fill="#eab308" />
      </g>
    </svg>
  );
}

export function WeddingIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="havanMetal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#d97706" />
          <stop offset="50%" stop-color="#92400e" />
          <stop offset="100%" stop-color="#451a03" />
        </linearGradient>
        <linearGradient id="fireOuter" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#dc2626" />
          <stop offset="40%" stop-color="#ea580c" />
          <stop offset="80%" stop-color="#facc15" />
          <stop offset="100%" stop-color="#fff" />
        </linearGradient>
        <radialGradient id="fireGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fef08a" stop-opacity="0.8" />
          <stop offset="60%" stop-color="#f97316" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#ef4444" stop-opacity="0" />
        </radialGradient>
      </defs>
      {/* Holy Fire Glow */}
      <circle cx="50" cy="40" r="32" fill="url(#fireGlow)" />
      {/* Sacred Agni Flames */}
      <path d="M50 14 C44 26, 32 32, 34 48 C35 56, 42 62, 50 62 C58 62, 65 56, 66 48 C68 32, 56 26, 50 14 Z" fill="url(#fireOuter)" />
      <path d="M50 28 C46 36, 40 42, 42 52 C44 58, 48 60, 50 60 C52 60, 56 58, 58 52 C60 42, 54 36, 50 28 Z" fill="#fef08a" />
      {/* Cross Wooden Samidha Logs */}
      <rect x="24" y="58" width="52" height="7" rx="3.5" transform="rotate(-14 50 62)" fill="#542b0e" stroke="#2b1203" strokeWidth="0.8" />
      <rect x="24" y="58" width="52" height="7" rx="3.5" transform="rotate(14 50 62)" fill="#693612" stroke="#2b1203" strokeWidth="0.8" />
      {/* Vedic Havan Kund (stepped copper altar) */}
      <path d="M22 66 L78 66 L72 82 L28 82 Z" fill="url(#havanMetal)" stroke="#f59e0b" strokeWidth="1.2" />
      {/* Kund Base Steps */}
      <rect x="18" y="82" width="64" height="6" rx="1.5" fill="#b45309" stroke="#78350f" strokeWidth="0.8" />
      <rect x="14" y="88" width="72" height="6" rx="1.5" fill="#78350f" stroke="#451a03" strokeWidth="0.8" />
    </svg>
  );
}

export function SangeetIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sitarWood" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#831843" />
          <stop offset="50%" stop-color="#b45309" />
          <stop offset="100%" stop-color="#500724" />
        </linearGradient>
      </defs>
      {/* Classical Sitar & Musical Notes */}
      <g transform="rotate(-32 50 50)">
        {/* Sitar Gourd Resonator */}
        <circle cx="36" cy="62" r="20" fill="url(#sitarWood)" stroke="#fde047" strokeWidth="1.2" />
        <ellipse cx="36" cy="62" rx="12" ry="12" fill="#500724" stroke="#f59e0b" strokeWidth="1" />
        {/* Intricate soundhole inlay */}
        <circle cx="36" cy="62" r="4" fill="#fbbf24" />
        {/* Sitar Long Neck */}
        <rect x="33" y="12" width="6" height="42" fill="#78350f" stroke="#fde047" strokeWidth="1" />
        {/* Frets */}
        <line x1="31" y1="20" x2="41" y2="20" stroke="#fef08a" strokeWidth="1" />
        <line x1="31" y1="26" x2="41" y2="26" stroke="#fef08a" strokeWidth="1" />
        <line x1="31" y1="32" x2="41" y2="32" stroke="#fef08a" strokeWidth="1" />
        <line x1="31" y1="38" x2="41" y2="38" stroke="#fef08a" strokeWidth="1" />
        <line x1="31" y1="44" x2="41" y2="44" stroke="#fef08a" strokeWidth="1" />
        {/* Tuning pegs */}
        <circle cx="30" cy="16" r="2" fill="#fde047" />
        <circle cx="42" cy="18" r="2" fill="#fde047" />
      </g>
      {/* Golden Ghungroo (dancing bells) */}
      <circle cx="68" cy="72" r="7" fill="#fbbf24" stroke="#92400e" strokeWidth="1" />
      <path d="M64 74 Q68 70 72 74" stroke="#78350f" strokeWidth="1" />
      <circle cx="80" cy="64" r="6" fill="#fbbf24" stroke="#92400e" strokeWidth="1" />
      <path d="M77 66 Q80 63 83 66" stroke="#78350f" strokeWidth="1" />
      {/* Musical Melody Notes */}
      <path d="M68 26 C68 20, 78 22, 78 18 L78 28 C78 30, 74 32, 71 32 C68 32, 66 30, 68 26 Z" fill="#fde047" />
      <circle cx="71" cy="30" r="3.5" fill="#fde047" />
    </svg>
  );
}

export function EngagementIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldBand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="40%" stop-color="#eab308" />
          <stop offset="80%" stop-color="#a16207" />
        </linearGradient>
        <radialGradient id="diamondShine" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" />
          <stop offset="70%" stop-color="#bae6fd" />
          <stop offset="100%" stop-color="#38bdf8" />
        </radialGradient>
      </defs>
      {/* Left Ring (Groom band) */}
      <circle cx="40" cy="56" r="18" stroke="url(#goldBand)" strokeWidth="5.5" fill="none" />
      {/* Right Ring (Bride solitaire) */}
      <circle cx="60" cy="54" r="18" stroke="url(#goldBand)" strokeWidth="5.5" fill="none" />
      {/* Solitaire Diamond Setting */}
      <g transform="translate(60, 34)">
        {/* Diamond Prongs */}
        <polygon points="0,-14 7,-4 4,2 -4,2 -7,-4" fill="url(#diamondShine)" stroke="#e0f2fe" strokeWidth="0.8" />
        {/* Diamond Facets */}
        <polygon points="0,-14 4,-4 0,0 -4,-4" fill="#ffffff" />
        {/* Radiant Sparkle Rays */}
        <line x1="0" y1="-20" x2="0" y2="-25" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7" y1="-18" x2="12" y2="-22" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="-7" y1="-18" x2="-12" y2="-22" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function BaraatIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="horseWhite" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#e2e8f0" />
        </linearGradient>
      </defs>
      {/* Royal Wedding Horse Silhouette (Ghodi with Kalgi & Jhool) */}
      <path d="M26 80 C26 70, 24 55, 30 46 C35 38, 42 30, 48 24 C50 20, 54 18, 56 22 C57 26, 52 32, 54 36 C58 36, 68 34, 76 42 C82 48, 80 58, 80 80 L72 80 C72 68, 70 60, 64 58 C62 66, 60 74, 60 80 L52 80 C52 72, 54 62, 50 56 C46 64, 42 72, 42 80 Z" fill="url(#horseWhite)" stroke="#94a3b8" strokeWidth="1.2" />
      {/* Horse Head & Ears */}
      <path d="M48 24 C45 20, 46 16, 50 16 C53 16, 55 18, 56 22 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
      {/* Royal Kalgi / Feather Plume */}
      <path d="M52 14 C54 8, 58 6, 60 4 C58 8, 56 12, 54 16 Z" fill="#ef4444" stroke="#facc15" strokeWidth="1" />
      {/* Red & Gold Embroidered Bridle & Saddle Jhool */}
      <path d="M48 28 L42 42 L66 46 L74 42" stroke="#dc2626" strokeWidth="2.5" />
      <rect x="42" y="48" width="30" height="18" rx="3" fill="#b91c1c" stroke="#facc15" strokeWidth="1.2" />
      <circle cx="57" cy="57" r="4" fill="#facc15" />
      {/* Golden Anklet Ghungroo bells */}
      <line x1="24" y1="76" x2="32" y2="76" stroke="#f59e0b" strokeWidth="2" />
      <line x1="50" y1="76" x2="62" y2="76" stroke="#f59e0b" strokeWidth="2" />
    </svg>
  );
}

export function MayraIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chunriRed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#be123c" />
          <stop offset="100%" stop-color="#881337" />
        </linearGradient>
      </defs>
      {/* Auspicious Kalash with Mango Leaves & Coconut */}
      <path d="M36 50 C30 52, 26 62, 28 72 C30 80, 70 80, 72 72 C74 62, 70 52, 64 50 Z" fill="#d97706" stroke="#fbbf24" strokeWidth="1.5" />
      <rect x="36" y="46" width="28" height="6" rx="2" fill="#b45309" stroke="#fbbf24" strokeWidth="1" />
      {/* Mango Leaves */}
      <path d="M38 46 C32 36, 36 28, 44 32 Z" fill="#15803d" stroke="#86efac" strokeWidth="0.8" />
      <path d="M62 46 C68 36, 64 28, 56 32 Z" fill="#15803d" stroke="#86efac" strokeWidth="0.8" />
      <path d="M50 46 C50 34, 46 26, 50 24 C54 26, 50 34, 50 46 Z" fill="#16a34a" stroke="#86efac" strokeWidth="0.8" />
      {/* Coconut */}
      <ellipse cx="50" cy="30" rx="9" ry="11" fill="#78350f" stroke="#b45309" strokeWidth="1" />
      {/* Red Bandhani Chunri / Maternal Dupatta draped with Golden Tassels */}
      <path d="M18 64 Q32 54 50 58 Q68 54 82 64 C86 74, 80 84, 76 86 C64 80, 36 80, 24 86 C20 84, 14 74, 18 64 Z" fill="url(#chunriRed)" stroke="#facc15" strokeWidth="1.2" />
      {/* Bandhani Dots */}
      <circle cx="34" cy="66" r="1.5" fill="#fef08a" />
      <circle cx="42" cy="70" r="1.5" fill="#fef08a" />
      <circle cx="50" cy="67" r="1.5" fill="#fef08a" />
      <circle cx="58" cy="70" r="1.5" fill="#fef08a" />
      <circle cx="66" cy="66" r="1.5" fill="#fef08a" />
    </svg>
  );
}

export function ShagunIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Silk Shagun Envelope & Auspicious Gold Coins */}
      <rect x="22" y="32" width="56" height="42" rx="4" fill="#991b1b" stroke="#facc15" strokeWidth="1.5" />
      <path d="M22 34 L50 56 L78 34" stroke="#facc15" strokeWidth="1.5" fill="#7f1d1d" />
      {/* Auspicious Gold 1 Rupee / Shagun Coin Seal */}
      <circle cx="50" cy="56" r="8" fill="#fbbf24" stroke="#78350f" strokeWidth="1" />
      <circle cx="50" cy="56" r="5" fill="#f59e0b" />
      <text x="50" y="58" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#78350f">₹</text>
      {/* Golden Coins & Sweets */}
      <circle cx="32" cy="78" r="6" fill="#f59e0b" stroke="#fef08a" strokeWidth="1" />
      <circle cx="68" cy="78" r="6" fill="#f59e0b" stroke="#fef08a" strokeWidth="1" />
      <circle cx="50" cy="80" r="5" fill="#fcd34d" stroke="#f59e0b" strokeWidth="0.8" />
    </svg>
  );
}

export function CocktailIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Clinking Cocktail Glasses */}
      <g transform="translate(18, 20)">
        {/* Left Glass */}
        <path d="M18 16 L28 34 L28 54 L20 54 L36 54 L28 54 L28 34 L38 16 Z" stroke="#93c5fd" strokeWidth="1.5" fill="#38bdf8" fillOpacity="0.2" />
        {/* Right Glass clinking */}
        <path d="M46 16 L36 34 L36 54 L28 54 L44 54 L36 54 L36 34 L26 16 Z" stroke="#fcd34d" strokeWidth="1.5" fill="#fbbf24" fillOpacity="0.25" />
        {/* Sparkling Bubbles & Cheers Starburst */}
        <circle cx="32" cy="18" r="3" fill="#fef08a" />
        <line x1="32" y1="8" x2="32" y2="12" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="12" x2="27" y2="15" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="40" y1="12" x2="37" y2="15" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function TilakIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sacred Puja Thali with Kumkum & Akshat Rice */}
      <ellipse cx="50" cy="64" rx="34" ry="16" fill="#b45309" stroke="#fde047" strokeWidth="1.5" />
      <ellipse cx="50" cy="64" rx="28" ry="12" fill="#78350f" stroke="#fbbf24" strokeWidth="1" />
      {/* Red Kumkum Bowl */}
      <circle cx="40" cy="62" r="7" fill="#dc2626" stroke="#facc15" strokeWidth="1" />
      {/* Golden Tilak Mark on Forehead */}
      <g transform="translate(50, 24)">
        <path d="M0 0 C-4 8, -4 18, 0 24 C4 18, 4 8, 0 0 Z" fill="#b91c1c" />
        <circle cx="0" cy="12" r="2.5" fill="#fbbf24" />
        <circle cx="0" cy="19" r="1.5" fill="#fef08a" />
      </g>
      {/* Diya Lamp on Thali */}
      <ellipse cx="60" cy="62" rx="6" ry="4" fill="#ea580c" />
      <path d="M60 52 C58 56, 56 58, 60 62 C64 58, 62 56, 60 52 Z" fill="#facc15" />
    </svg>
  );
}

export function VarmalaIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Intertwined Rose and Jasmine Wedding Garlands */}
      <g transform="translate(18, 16)">
        {/* Garland 1 */}
        <path d="M14 12 C8 32, 10 54, 32 58 C46 58, 52 46, 50 36 C48 24, 38 12, 26 12" stroke="#e11d48" strokeWidth="6" strokeLinecap="round" fill="none" />
        {/* Garland 2 */}
        <path d="M50 12 C56 32, 54 54, 32 58 C18 58, 12 46, 14 36 C16 24, 26 12, 38 12" stroke="#f43f5e" strokeWidth="5" strokeLinecap="round" fill="none" />
        {/* Golden Pearls / Beads between flowers */}
        <circle cx="32" cy="58" r="4.5" fill="#fbbf24" stroke="#78350f" strokeWidth="0.8" />
        <circle cx="20" cy="52" r="3.5" fill="#fef08a" />
        <circle cx="44" cy="52" r="3.5" fill="#fef08a" />
        <circle cx="12" cy="38" r="3.5" fill="#ffffff" />
        <circle cx="52" cy="38" r="3.5" fill="#ffffff" />
        {/* Golden Ribbon Tassels at bottom */}
        <path d="M30 62 L26 76 M34 62 L38 76" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function PherasIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sacred Knot (Gathbandhan) uniting Bride & Groom over Holy Fire */}
      {/* Holy Fire in background */}
      <circle cx="50" cy="62" r="18" fill="#f97316" fillOpacity="0.2" />
      <path d="M50 44 C46 52, 42 56, 44 64 C46 70, 54 70, 56 64 C58 56, 54 52, 50 44 Z" fill="#ef4444" />
      <path d="M50 52 C48 56, 46 58, 47 62 C48 66, 52 66, 53 62 C54 58, 52 56, 50 52 Z" fill="#fde047" />
      {/* Red Chunri (Bride) and Cream Stole (Groom) tied in sacred knot */}
      <path d="M20 32 C28 42, 38 46, 46 44 L44 48 C36 50, 26 46, 18 36 Z" fill="#e11d48" />
      <path d="M80 32 C72 42, 62 46, 54 44 L56 48 C64 50, 74 46, 82 36 Z" fill="#fef3c7" stroke="#d97706" strokeWidth="0.8" />
      {/* Central Sacred Knot */}
      <ellipse cx="50" cy="46" rx="8" ry="6" fill="#dc2626" stroke="#facc15" strokeWidth="1.2" />
      <circle cx="50" cy="46" r="3" fill="#facc15" />
      {/* Seven Petals representing 7 Vows (Saat Phere) */}
      <circle cx="50" cy="78" r="2.5" fill="#fde047" />
      <circle cx="42" cy="76" r="2.5" fill="#fde047" />
      <circle cx="58" cy="76" r="2.5" fill="#fde047" />
      <circle cx="36" cy="71" r="2.5" fill="#fde047" />
      <circle cx="64" cy="71" r="2.5" fill="#fde047" />
      <circle cx="32" cy="64" r="2.5" fill="#fde047" />
      <circle cx="68" cy="64" r="2.5" fill="#fde047" />
    </svg>
  );
}

export function ReceptionIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grand Palace Chandelier & Celebration Champagne Pyramid */}
      {/* Chandelier Ceiling Mount & Chains */}
      <line x1="50" y1="12" x2="50" y2="24" stroke="#fde047" strokeWidth="1.5" />
      <ellipse cx="50" cy="24" rx="16" ry="5" fill="#78350f" stroke="#fbbf24" strokeWidth="1" />
      {/* Crystals */}
      <path d="M34 24 L50 42 L66 24 Z" stroke="#fde047" strokeWidth="1" fill="#38bdf8" fillOpacity="0.15" />
      <circle cx="50" cy="44" r="3.5" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" />
      <circle cx="42" cy="34" r="2.5" fill="#fef08a" />
      <circle cx="58" cy="34" r="2.5" fill="#fef08a" />
      {/* Royal Stage Pedestal / Champagne Pyramid */}
      <rect x="30" y="74" width="40" height="8" rx="2" fill="#d97706" stroke="#fde047" strokeWidth="1" />
      <polygon points="40,74 50,56 60,74" fill="#fbbf24" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1" />
    </svg>
  );
}

export function VidaiIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="doliRoof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b91c1c" />
          <stop offset="100%" stop-color="#7f1d1d" />
        </linearGradient>
      </defs>
      {/* Royal Traditional Doli (Palanquin) */}
      {/* Carrying Pole */}
      <line x1="12" y1="46" x2="88" y2="46" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
      {/* Doli Dome Canopy */}
      <path d="M28 46 C28 32, 42 22, 50 20 C58 22, 72 32, 72 46 Z" fill="url(#doliRoof)" stroke="#facc15" strokeWidth="1.2" />
      <circle cx="50" cy="18" r="3" fill="#fbbf24" />
      {/* Doli Cabin & Silk Curtains */}
      <rect x="30" y="46" width="40" height="26" rx="3" fill="#991b1b" stroke="#facc15" strokeWidth="1.2" />
      <path d="M30 46 L50 64 L70 46" stroke="#fde047" strokeWidth="1" fill="#78350f" fillOpacity="0.4" />
      {/* Golden Base & Handles */}
      <line x1="28" y1="72" x2="72" y2="72" stroke="#f59e0b" strokeWidth="2" />
      <circle cx="36" cy="75" r="2.5" fill="#fde047" />
      <circle cx="64" cy="75" r="2.5" fill="#fde047" />
    </svg>
  );
}

export function RokaIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Auspicious Shubh Labh Kalash with Swastik */}
      {/* Copper Kalash Body */}
      <path d="M34 50 C28 52, 24 62, 26 72 C28 80, 72 80, 74 72 C76 62, 72 52, 66 50 Z" fill="#c2410c" stroke="#fde047" strokeWidth="1.5" />
      <rect x="34" y="45" width="32" height="6" rx="2" fill="#9a3412" stroke="#fde047" strokeWidth="1" />
      {/* Swastika on Kalash */}
      <path d="M46 58 H54 M50 54 V66 M46 54 H50 M50 66 H54 M46 62 V66 M54 54 V58" stroke="#fef08a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Mango Leaves */}
      <path d="M36 45 C30 35, 34 26, 42 30 Z" fill="#15803d" stroke="#86efac" strokeWidth="0.8" />
      <path d="M64 45 C70 35, 66 26, 58 30 Z" fill="#15803d" stroke="#86efac" strokeWidth="0.8" />
      <path d="M50 45 C50 32, 46 24, 50 22 C54 24, 50 32, 50 45 Z" fill="#16a34a" stroke="#86efac" strokeWidth="0.8" />
      {/* Coconut with Red Mauli Thread */}
      <ellipse cx="50" cy="28" rx="9" ry="11" fill="#78350f" stroke="#b45309" strokeWidth="1" />
      <line x1="42" y1="28" x2="58" y2="28" stroke="#dc2626" strokeWidth="2" />
    </svg>
  );
}
