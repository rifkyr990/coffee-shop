import Image from "next/image";
import Link from "next/link";
import { Leaf, Award, Heart, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const pillars = [
  {
    icon: Leaf,
    title: "Ethically Sourced",
    description:
      "We work directly with small-batch farmers across Ethiopia, Colombia, and Sumatra.",
  },
  {
    icon: Award,
    title: "Expert Roasting",
    description:
      "Our head roaster has 12 years of experience perfecting single-origin profiles.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Every drink is crafted with intention, from grind size to pour temperature.",
  },
];

export default function AboutSection() {
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
              <div className="font-serif text-3xl font-bold">5+</div>
              <div className="text-amber-200 text-sm">Years of Excellence</div>
            </div>
            {/* Accent blob */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-100 dark:bg-amber-950/40 rounded-full -z-10" />
          </FadeIn>

          {/* Text side */}
          <FadeIn direction="right" className="order-1 lg:order-2">
            <p className="text-amber-700 dark:text-amber-500 font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 leading-tight mb-6">
              More Than Coffee,
              <br />
              It&apos;s a Culture
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed mb-6">
              AromaCo. was born from a simple dream: to create a space where
              exceptional coffee meets genuine hospitality. We believe every cup
              is a ritual — a moment of pause in a fast world.
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-10">
              Since 2020, we&apos;ve been sourcing the finest single-origin beans,
              roasting in small batches, and training our baristas to treat every
              pour as a craft. Come as a customer. Leave as family.
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
              Learn our full story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
