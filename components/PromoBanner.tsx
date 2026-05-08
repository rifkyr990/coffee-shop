"use client";

import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/i18n";

const PROMO_KEY = "aroma-promo-dismissed-v1";

export default function PromoBanner() {
  const [visible, setVisible] = useState(false);
  const [promoIndex] = useState(() => Math.floor(Math.random() * 3));
  const { lang } = useLanguage();
  const promos = translations[lang].promoBanner;
  const promo = promos[promoIndex];

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
