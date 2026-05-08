"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/i18n";

export default function Testimonials() {
  const { lang } = useLanguage();
  const tr = translations[lang].testimonials;

  return (
    <section className="py-24 lg:py-32 bg-amber-950 dark:bg-stone-950 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-xl mx-auto mb-16">
          <p className="text-amber-400 font-medium tracking-[0.2em] uppercase text-sm mb-3">
            {tr.sectionLabel}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
            {tr.headline}
          </h2>
        </FadeIn>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white/5 dark:bg-white/3 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-amber-600/60 mb-4" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-stone-300 leading-relaxed mb-6 text-[15px]">
                &ldquo;{t.text[lang]}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-stone-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
