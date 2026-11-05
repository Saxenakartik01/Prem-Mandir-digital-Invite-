import { useMemo } from "react";

/** Gently falling rose petals, decorative only. */
export default function Petals({ count = 9 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 97) % 100}%`,
        size: 8 + ((i * 53) % 10),
        duration: 11 + ((i * 37) % 9),
        delay: -((i * 41) % 14),
        drift: ((i % 2 === 0 ? 1 : -1) * (30 + ((i * 29) % 60))).toFixed(0),
      })),
    [count]
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 1.15,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
