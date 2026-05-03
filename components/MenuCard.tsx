import Image from "next/image";
import { Star, ShoppingBag } from "lucide-react";
import type { MenuItem } from "@/lib/data";

type Props = {
  item: MenuItem;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

const badgeColors: Record<string, string> = {
  Bestseller:
    "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400",
  New: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400",
  Popular:
    "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-400",
  "Chef's Pick":
    "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-400",
  Signature:
    "bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-300",
};

export default function MenuCard({ item }: Props) {
  return (
    <article className="group bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-stone-950/50 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badge */}
        {item.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${
              badgeColors[item.badge] ?? badgeColors["Signature"]
            }`}
          >
            {item.badge}
          </span>
        )}
        {/* Popular star */}
        {item.popular && !item.badge && (
          <span className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 text-xs font-semibold">
            <Star className="w-3 h-3 fill-current" />
            Popular
          </span>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-lg font-semibold text-stone-900 dark:text-stone-100 mb-1.5 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
          {item.name}
        </h3>
        <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed flex-1 mb-3">
          {item.description}
        </p>
        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400"
              >
                {tag === "vegan" && "🌱 "}
                {tag === "gluten-free" && "🌾 "}
                {tag === "seasonal" && "🍂 "}
                {tag === "bestseller" && "⭐ "}
                {tag === "decaf" && "☕ "}
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100 dark:border-stone-800">
          <span className="font-bold text-stone-900 dark:text-stone-100 text-base">
            {formatPrice(item.price)}
          </span>
          <button className="flex items-center gap-1.5 text-sm font-medium text-amber-700 dark:text-amber-500 hover:text-amber-600 transition-colors">
            <ShoppingBag className="w-4 h-4" />
            Add to order
          </button>
        </div>
      </div>
    </article>
  );
}
