"use client";

import Image from "next/image";
import Link from "next/link";
import { Leaf, Award, Heart, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/i18n";

const pillarIcons = [Leaf, Award, Heart];

export default function AboutSection() {
  const { lang } = useLanguage();
  const tr = translations[lang].aboutSection;
  const pillars = tr.pillars.map((p, i) => ({ ...p, icon: pillarIcons[i] }));

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <FadeIn direction="left" className="relative order-2 lg:order-1">
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=85"
                alt="Cozy café interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 bg-amber-700 text-white px-6 py-4 rounded-2xl shadow-xl">
              <div className="font-serif text-3xl font-bold">{tr.badgeYears}</div>
              <div className="text-amber-200 text-sm">{tr.badgeLabel}</div>
            </div>
            {/* Accent blob */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-100 dark:bg-amber-950/40 rounded-full -z-10" />
          </FadeIn>

          {/* Text side */}
          <FadeIn direction="right" className="order-1 lg:order-2">
            <p className="text-amber-700 dark:text-amber-500 font-medium tracking-[0.2em] uppercase text-sm mb-3">
              {tr.sectionLabel}
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 leading-tight mb-6">
              {tr.headline1}
              <br />
              {tr.headline2}
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed mb-6">
              {tr.body1}
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-10">
              {tr.body2}
            </p>

            {/* Pillars */}
            <div className="space-y-5 mb-10">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/50">
                    <Icon className="w-5 h-5 text-amber-700 dark:text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-0.5">
                      {title}
                    </h4>
                    <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-amber-700 dark:text-amber-500 font-semibold hover:gap-3 transition-all duration-200 group"
            >
              {tr.link}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
