"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className={`fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full bg-stone-900/80 dark:bg-stone-100/10 backdrop-blur-sm text-white dark:text-stone-100 flex items-center justify-center shadow-lg border border-white/10 transition-all duration-300 hover:bg-amber-700 hover:border-amber-600 hover:-translate-y-1 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
