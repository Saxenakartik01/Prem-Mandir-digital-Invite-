import type { ReactNode } from "react";

/**
 * PhoneContainer provides a mobile phone frame layout.
 * On mobile devices, it seamlessly fills the full viewport.
 * On laptop/desktop devices, it renders a centered luxury smartphone viewport (max 430px)
 * with a royal ambient background and subtle metallic gold borders, preserving
 * the exact mobile look and feel across all screens.
 */
export default function PhoneContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-[#140905] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#24130b] via-[#140905] to-[#0a0402] flex justify-center items-start selection:bg-gold-400 selection:text-white">
      <div
        id="phone-screen"
        className="w-full max-w-[430px] min-h-screen bg-parchment-50 text-ink-800 antialiased relative min-[431px]:shadow-[0_0_80px_rgba(0,0,0,0.85),0_0_24px_rgba(201,154,60,0.22)] min-[431px]:border-x min-[431px]:border-gold-500/25"
      >
        {children}
      </div>
    </div>
  );
}
