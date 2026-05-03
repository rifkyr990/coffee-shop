"use client";

import { useInView } from "@/hooks/useInView";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300 | 400;
  direction?: "up" | "left" | "right";
};

const delayClass: Record<number, string> = {
  0: "",
  100: "animate-delay-100",
  200: "animate-delay-200",
  300: "animate-delay-300",
  400: "animate-delay-400",
};

const hiddenClass = {
  up: "opacity-0 translate-y-8",
  left: "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : hiddenClass[direction]
      } ${delayClass[delay]} ${className}`}
    >
      {children}
    </div>
  );
}

