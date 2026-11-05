import { cn } from "../utils/cn";

/* ---------- Gold corner flourish (vine + curls) ---------- */
export function CornerFlourish({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden
      className={cn("pointer-events-none", flip && "-scale-x-100", className)}
      fill="none"
    >
      <path
        d="M4 4c40 2 52 10 60 34 5 16 2 30-8 38M4 4c2 36 10 50 32 58 14 5 26 3 34-6"
        stroke="url(#gf)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M64 38c10-6 20-4 24 2 4 7-1 14-8 14s-11-6-9-12M36 62c-6 10-4 20 2 24 7 4 14-1 14-8s-6-11-12-9"
        stroke="url(#gf)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="92" cy="47" r="3" fill="#d8b25f" />
      <circle cx="46" cy="93" r="3" fill="#d8b25f" />
      <circle cx="8" cy="8" r="4" fill="#e7c87b" />
      <defs>
        <linearGradient id="gf" x1="0" y1="0" x2="120" y2="120">
          <stop stopColor="#e7c87b" />
          <stop offset="1" stopColor="#a87d2e" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ---------- Diamond divider:  —◆— ---------- */
export function DiamondDivider({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const c = light ? "#e9cf8d" : "#b08a3c";
  return (
    <div className={cn("flex items-center justify-center gap-2", className)} aria-hidden>
      <span className="h-px w-10 sm:w-16" style={{ background: `linear-gradient(to left, ${c}, transparent)` }} />
      <svg viewBox="0 0 16 16" className="h-2.5 w-2.5 shrink-0">
        <rect x="4.7" y="4.7" width="6.6" height="6.6" transform="rotate(45 8 8)" fill={c} />
      </svg>
      <span className="h-px w-10 sm:w-16" style={{ background: `linear-gradient(to right, ${c}, transparent)` }} />
    </div>
  );
}

/* ---------- Hanging temple bell ---------- */
export function Bell({ className, delay = "0s" }: { className?: string; delay?: string }) {
  return (
    <div className={cn("flex flex-col items-center", className)} aria-hidden>
      <span className="block w-px flex-1 bg-gradient-to-b from-transparent via-gold-300 to-gold-400" />
      <svg
        viewBox="0 0 40 52"
        className="w-6 animate-sway drop-shadow-[0_2px_4px_rgba(120,80,20,0.45)] sm:w-7"
        style={{ animationDelay: delay, transformOrigin: "top center" }}
      >
        <circle cx="20" cy="4" r="3" fill="#caa14e" />
        <path
          d="M20 6c-9 0-13 8-13 18 0 6-2 9-5 11h36c-3-2-5-5-5-11 0-10-4-18-13-18Z"
          fill="url(#bellg)"
          stroke="#8a6420"
          strokeWidth="1"
        />
        <rect x="2" y="34" width="36" height="4" rx="2" fill="#b58a35" />
        <circle cx="20" cy="45" r="4.5" fill="#d9b566" stroke="#8a6420" strokeWidth="0.8" />
        <defs>
          <linearGradient id="bellg" x1="7" y1="6" x2="33" y2="36">
            <stop stopColor="#f3dd9d" />
            <stop offset="0.5" stopColor="#d2a74f" />
            <stop offset="1" stopColor="#9a7124" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ---------- Brass diya with flickering flame ---------- */
export function Diya({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 90" aria-hidden className={cn("drop-shadow-[0_4px_10px_rgba(190,110,30,0.4)]", className)}>
      <ellipse cx="60" cy="38" rx="16" ry="22" fill="url(#flameGlow)" className="animate-flicker" />
      <path
        d="M60 18c6 8 9 13 9 19a9 9 0 1 1-18 0c0-6 3-11 9-19Z"
        fill="url(#flame)"
        className="animate-flicker"
      />
      <path d="M20 52c8 12 24 18 40 18s32-6 40-18c-6 20-22 28-40 28S26 72 20 52Z" fill="url(#brass)" />
      <path d="M14 50c12 8 29 12 46 12s34-4 46-12c-4 7-22 14-46 14S18 57 14 50Z" fill="url(#brassTop)" />
      <defs>
        <radialGradient id="flameGlow">
          <stop stopColor="#ffdd8a" stopOpacity="0.75" />
          <stop offset="1" stopColor="#ffb347" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="flame" x1="60" y1="18" x2="60" y2="48">
          <stop stopColor="#fff3c0" />
          <stop offset="0.55" stopColor="#ffb648" />
          <stop offset="1" stopColor="#e8761f" />
        </linearGradient>
        <linearGradient id="brass" x1="20" y1="52" x2="100" y2="80">
          <stop stopColor="#e9c470" />
          <stop offset="0.5" stopColor="#b9872f" />
          <stop offset="1" stopColor="#7c5518" />
        </linearGradient>
        <linearGradient id="brassTop" x1="14" y1="50" x2="106" y2="64">
          <stop stopColor="#f6dd9a" />
          <stop offset="1" stopColor="#caa14e" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ---------- Pink lotus (removed) ---------- */
export function Lotus({ className: _className }: { className?: string } = {}) {
  return null;
}

/* ---------- Om symbol in soft gold ---------- */
export function Om({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("font-serif leading-none text-gold-sheen select-none", className)}
      style={{ fontFamily: "Georgia, serif" }}
    >
      ॐ
    </span>
  );
}

/* ---------- Thin double gold frame for parchment panels ---------- */
export function GoldFrame({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-2 sm:inset-3", className)}>
      <div className="absolute inset-0 rounded-[18px] border border-gold-400/55" />
      <div className="absolute inset-[5px] rounded-[14px] border border-gold-400/30" />
    </div>
  );
}

/* ---------- Royal Jharokha Arch Scallop Bottom Border ---------- */
export function RoyalBottomBorder({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full overflow-hidden select-none pointer-events-none", className)}>
      <div className="relative w-full flex justify-center">
        <img
          src="images/couple-bottom-border.svg"
          alt=""
          className="w-full max-w-2xl h-auto drop-shadow-[0_3px_8px_rgba(110,75,25,0.16)]"
        />
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
    </div>
  );
}

