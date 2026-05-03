import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import { ArrowRight, Coffee, Wifi, Clock } from "lucide-react";

const perks = [
  {
    icon: Coffee,
    title: "Specialty Grade Only",
    description: "We serve exclusively 80+ SCA scoring beans, no exceptions.",
  },
  {
    icon: Wifi,
    title: "Remote-Work Friendly",
    description: "Fast gigabit Wi-Fi, ample power outlets, quiet zones.",
  },
  {
    icon: Clock,
    title: "Open Every Day",
    description: "Weekdays 7 AM – 10 PM, Weekends 8 AM – 11 PM.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Perks strip */}
      <div className="bg-amber-700 dark:bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
            {perks.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-4 text-white"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-0.5">{title}</h3>
                  <p className="text-amber-200 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AboutSection />
      <MenuSection />
      <Gallery />
      <Testimonials />

      {/* CTA Banner */}
      <section className="py-24 lg:py-32 bg-stone-50 dark:bg-stone-900">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
          <p className="text-amber-700 dark:text-amber-500 font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Visit Us Today
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 leading-tight mb-6">
            Your Perfect Cup Is Waiting
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed mb-10">
            Whether it&apos;s a morning ritual or an afternoon escape, we&apos;re ready
            to make it unforgettable. Book a table or just walk in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo%20AromaCo.%2C%20saya%20ingin%20reservasi%20meja"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-amber-700/25 hover:-translate-y-0.5 group"
            >
              Reserve a Table
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 border-2 border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 px-8 py-4 rounded-full font-semibold tracking-wide hover:border-amber-600 hover:text-amber-700 dark:hover:border-amber-500 dark:hover:text-amber-500 transition-all duration-200"
            >
              Browse the Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


