import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import HeroStats from "./HeroStats";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Background Image — parallax handled client-side */}
      <HeroBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-stone-950/65 via-stone-950/40 to-stone-950/75" />
      <div className="absolute inset-0 bg-linear-to-r from-stone-950/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 backdrop-blur-sm mb-6 animate-fade-in-up">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-amber-300 text-xs font-medium tracking-[0.2em] uppercase">
            Est. 2020 · Specialty Coffee
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
          Where Every Cup
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-300">
            Tells a Story
          </span>
        </h1>

        {/* Sub */}
        <p className="text-stone-300/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
          Discover the art of specialty coffee in the heart of the city.
          <br className="hidden sm:block" />
          Crafted with passion, served with love.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-amber-700/30 hover:-translate-y-0.5"
          >
            Explore Our Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white/80 text-white px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-0.5"
          >
            Our Story
          </Link>
        </div>

        {/* Stats */}
        <HeroStats />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-linear-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
