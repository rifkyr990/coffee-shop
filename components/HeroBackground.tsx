"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroBackground() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // Respect user's reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      // Move image up at 35% of scroll speed for depth illusion
      const offset = window.scrollY * 0.35;
      el.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /*
     * Wrapper is taller than the section (-20% top / -20% bottom = 140% height)
     * so there's always image to show while it translates down.
     */
    <div
      ref={wrapperRef}
      className="absolute -top-[20%] -bottom-[20%] left-0 right-0 will-change-transform"
      aria-hidden="true"
    >
      <Image
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=85"
        alt="Premium coffee artistry"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}
