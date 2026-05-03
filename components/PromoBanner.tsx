"use client";

import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";

const PROMO_KEY = "aroma-promo-dismissed-v1";

const promos = [
  "🎉 Happy Hour 2–5 PM — Semua minuman diskon 20%!",
  "☕ Buy 2 Get 1 Free setiap hari Senin. Berlaku untuk semua espresso.",
  "🍰 Basque Cheesecake baru tersedia — terbatas setiap hari!",
];

export default function PromoBanner() {
  const [visible, setVisible] = useState(false);
  const [promo] = useState(() => promos[Math.floor(Math.random() * promos.length)]);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(PROMO_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(PROMO_KEY, "1");
  };

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-amber-700 dark:bg-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-center">
          <Sparkles className="w-3.5 h-3.5 shrink-0 text-amber-300" />
          <span className="leading-snug">{promo}</span>
          <button
            onClick={dismiss}
            aria-label="Tutup promo"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
