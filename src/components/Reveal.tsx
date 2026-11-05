import { useEffect, useRef, type ReactNode, type CSSProperties, type ElementType } from "react";
import { cn } from "../utils/cn";

type RevealProps = {
  children?: ReactNode;
  className?: string;
  /** direction of the entrance */
  variant?: "up" | "left" | "right" | "zoom";
  /** transition delay in ms */
  delay?: number;
  as?: keyof HTMLElementTagNameMap;
  style?: CSSProperties;
};

export default function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const phoneContainer = document.getElementById("phone-screen");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      {
        root: phoneContainer || null,
        threshold: 0.08,
        rootMargin: "0px 0px -4% 0px",
      }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as ElementType;
  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      className={cn(
        "reveal",
        variant === "left" && "reveal-left",
        variant === "right" && "reveal-right",
        variant === "zoom" && "reveal-zoom",
        className
      )}
    >
      {children}
    </Comp>
  );
}
