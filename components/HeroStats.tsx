"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  target: number;
  decimals?: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { target: 50, suffix: "+", label: "Coffee Origins" },
  { target: 15, suffix: "K+", label: "Happy Guests" },
  { target: 4.9, decimals: 1, suffix: "★", label: "Average Rating" },
];

function useCountUp(target: number, decimals = 0, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1800; // ms
    const steps = 60;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      // Ease-out: progress slows toward the end
      const progress = 1 - Math.pow(1 - current / steps, 3);
      setCount(parseFloat((progress * target).toFixed(decimals)));
      if (current >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [active, target, decimals]);

  return count;
}

function Counter({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.target, stat.decimals ?? 0, active);
  return (
    <div className="text-center">
      <div className="text-white font-bold text-xl sm:text-2xl font-serif tabular-nums">
        {stat.decimals ? count.toFixed(stat.decimals) : Math.floor(count)}
        {stat.suffix}
      </div>
      <div className="text-stone-400 text-xs tracking-wide mt-0.5">
        {stat.label}
      </div>
    </div>
  );
}

export default function HeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center gap-8 mt-16 animate-fade-in-up animate-delay-400"
    >
      {stats.map((stat) => (
        <Counter key={stat.label} stat={stat} active={active} />
      ))}
    </div>
  );
}
