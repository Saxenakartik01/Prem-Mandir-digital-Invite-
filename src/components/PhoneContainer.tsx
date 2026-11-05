import type { ReactNode } from "react";

/**
 * PhoneContainer provides a clean, responsive wrapper for the wedding invitation.
 * On both desktop and mobile devices, it renders a natural full-screen layout
 * without simulated phone frames, hardware mockups, or developer sidebars.
 */
export default function PhoneContainer({ children }: { children: ReactNode }) {
  return (
    <div
      id="phone-screen"
      className="w-full min-h-screen bg-parchment-50 text-ink-800 antialiased selection:bg-gold-400 selection:text-white"
    >
      {children}
    </div>
  );
}
