import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { menuItems } from "@/lib/data";
import MenuCard from "./MenuCard";
import FadeIn from "./FadeIn";

const FEATURED_IDS = [1, 2, 5, 7, 8, 11];

export default function MenuSection() {
  const featured = menuItems.filter((item) => FEATURED_IDS.includes(item.id));

  return (
    <section className="py-24 lg:py-32 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-amber-700 dark:text-amber-500 font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Yang Kami Sajikan
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 leading-tight mb-4">
            Diracik untuk Setiap Selera
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed">
            Dari espresso single-origin hingga brunch sepanjang hari, menu kami
            dirancang untuk memanjakan di setiap kunjungan.
          </p>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 border-2 border-amber-700 text-amber-700 dark:border-amber-500 dark:text-amber-500 px-8 py-3.5 rounded-full font-semibold tracking-wide hover:bg-amber-700 hover:text-white dark:hover:bg-amber-600 dark:hover:border-amber-600 transition-all duration-200 group"
          >
            Lihat Menu Lengkap
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
