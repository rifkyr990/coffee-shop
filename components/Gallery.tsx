"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryImages } from "@/lib/data";

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = galleryImages[index];

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in-up"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Tutup"
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Sebelumnya"
        className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image */}
      <div
        className="relative w-full max-w-4xl max-h-[85vh] mx-16 rounded-2xl overflow-hidden shadow-2xl"
        style={{ aspectRatio: "16/10" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={img.id}
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover animate-fade-in-up"
          sizes="(max-width: 1024px) 100vw, 896px"
          priority
        />
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent px-6 py-4">
          <p className="text-white text-sm font-medium">{img.alt}</p>
          <p className="text-white/50 text-xs mt-0.5">
            {index + 1} / {galleryImages.length}
          </p>
        </div>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Berikutnya"
        className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {galleryImages.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "bg-white w-4" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() =>
    setActiveIndex((i) => (i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length)),
  []);
  const next = useCallback(() =>
    setActiveIndex((i) => (i === null ? 0 : (i + 1) % galleryImages.length)),
  []);

  return (
    <>
      <section className="py-24 lg:py-32 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-amber-700 dark:text-amber-500 font-medium tracking-[0.2em] uppercase text-sm mb-3">
              The Experience
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 leading-tight">
              A Feast for the Eyes
            </h2>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
            {galleryImages.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setActiveIndex(i)}
                aria-label={`Buka foto: ${img.alt}`}
                className={`relative overflow-hidden rounded-2xl group cursor-zoom-in text-left ${img.span ?? ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/40 transition-colors duration-300" />
                {/* Zoom icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium tracking-wide bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {img.alt}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeIndex !== null && (
        <Lightbox
          index={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
