"use client";

import { useState, useTransition } from "react";
import MenuCard from "@/components/MenuCard";
import MenuCardSkeleton from "@/components/MenuCardSkeleton";
import { menuItems } from "@/lib/data";
import type { MenuItem } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/i18n";

type Category = "all" | MenuItem["category"];
type Tag = "vegan" | "decaf" | "seasonal" | "gluten-free" | "bestseller";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [activeTags, setActiveTags] = useState<Tag[]>([]);
  const [isPending, startTransition] = useTransition();
  const { lang } = useLanguage();
  const tr = translations[lang].menuPage;

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: tr.catAll },
    { value: "coffee", label: tr.catCoffee },
    { value: "signature", label: tr.catSignature },
    { value: "non-coffee", label: tr.catNonCoffee },
    { value: "food", label: tr.catFood },
  ];

  const tags: { value: Tag; label: string; emoji: string }[] = [
    { value: "vegan", label: tr.tagVegan, emoji: "🌱" },
    { value: "decaf", label: tr.tagDecaf, emoji: "☕" },
    { value: "seasonal", label: tr.tagSeasonal, emoji: "🍂" },
    { value: "gluten-free", label: tr.tagGlutenFree, emoji: "🌾" },
    { value: "bestseller", label: tr.tagBestseller, emoji: "⭐" },
  ];


  const toggleTag = (tag: Tag) => {
    startTransition(() => {
      setActiveTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      );
    });
  };

  const changeCategory = (cat: Category) => {
    startTransition(() => {
      setActiveCategory(cat);
    });
  };

  const filtered = menuItems.filter((item) => {
    const categoryMatch =
      activeCategory === "all" || item.category === activeCategory;
    const tagMatch =
      activeTags.length === 0 ||
      activeTags.every((t) => item.tags?.includes(t));
    return categoryMatch && tagMatch;
  });

  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-amber-950 dark:bg-stone-950 text-center px-4">
        <p className="text-amber-400 font-medium tracking-[0.25em] uppercase text-sm mb-3">
          {tr.eyebrow}
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">
          {tr.title}
        </h1>
        <p className="text-stone-400 text-lg max-w-xl mx-auto leading-relaxed">
          {tr.sub}
        </p>
      </div>

      {/* Sticky Filters */}
      <div className="sticky top-16 lg:top-20 z-30 bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2.5">
          {/* Category filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => changeCategory(cat.value)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.value
                    ? "bg-amber-700 text-white shadow-md shadow-amber-700/25"
                    : "bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Tag filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <span className="shrink-0 text-xs text-stone-400 dark:text-stone-500 font-medium pr-1">
              {tr.filterLabel}:
            </span>
            {tags.map((tag) => {
              const active = activeTags.includes(tag.value);
              return (
                <button
                  key={tag.value}
                  onClick={() => toggleTag(tag.value)}
                  className={`shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                    active
                      ? "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 border-stone-900 dark:border-stone-100"
                      : "bg-transparent border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-stone-500 dark:hover:border-stone-500"
                  }`}
                >
                  <span>{tag.emoji}</span>
                  {tag.label}
                </button>
              );
            })}
            {activeTags.length > 0 && (
              <button
                onClick={() => setActiveTags([])}
                className="shrink-0 text-xs text-amber-700 dark:text-amber-500 hover:underline ml-1"
              >
                {tr.clear}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="py-16 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-stone-500 dark:text-stone-400 text-sm mb-8">
            {tr.showing}{" "}
            <span className="font-semibold text-stone-900 dark:text-stone-100">
              {filtered.length}
            </span>{" "}
            {tr.items}
            {activeTags.length > 0 && (
              <span className="ml-1 text-amber-700 dark:text-amber-500">
                · {tr.filteredBy} {activeTags.join(", ")}
              </span>
            )}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isPending
              ? Array.from({ length: 8 }).map((_, i) => (
                  <MenuCardSkeleton key={i} />
                ))
              : filtered.map((item) => <MenuCard key={item.id} item={item} />)}
          </div>

          {!isPending && filtered.length === 0 && (
            <div className="text-center py-24 space-y-3">
              <p className="text-4xl">☕</p>
              <p className="text-stone-500 dark:text-stone-400 font-medium">
                {tr.noMatch}
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setActiveTags([]);
                }}
                className="text-amber-700 dark:text-amber-500 text-sm hover:underline"
              >
                {tr.clearAllFilters}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
