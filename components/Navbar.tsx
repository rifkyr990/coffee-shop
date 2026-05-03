"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coffee, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 dark:border-stone-800/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 group-hover:bg-amber-600 transition-colors">
              <Coffee className="w-4 h-4 text-white" />
            </div>
            <span
              className={`font-serif text-xl font-bold transition-colors ${
                scrolled || theme === "dark"
                  ? "text-stone-900 dark:text-stone-100"
                  : "text-white"
              }`}
            >
              Aroma<span className="text-amber-500">Co.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors group ${
                    isActive
                      ? "text-amber-700 dark:text-amber-500"
                      : scrolled || theme === "dark"
                      ? "text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-500"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-amber-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className={`p-2 rounded-full transition-colors ${
                scrolled || theme === "dark"
                  ? "hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
                  : "hover:bg-white/10 text-white"
              }`}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* CTA Button (desktop) */}
            <a
              href="https://wa.me/6281234567890?text=Halo%20AromaCo.%2C%20saya%20ingin%20reservasi%20meja"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 ml-2 px-5 py-2 rounded-full bg-amber-700 hover:bg-amber-600 text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-amber-700/25 hover:-translate-y-px"
            >
              Reserve a Table
            </a>

            {/* Mobile hamburger — hidden now that we have bottom nav */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800`}
      >
        <div className="px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                  isActive
                    ? "bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-500"
                    : "text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900 hover:text-amber-700 dark:hover:text-amber-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 px-4">
            <a
              href="https://wa.me/6281234567890?text=Halo%20AromaCo.%2C%20saya%20ingin%20reservasi%20meja"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 rounded-full bg-amber-700 hover:bg-amber-600 text-white font-semibold tracking-wide transition-colors"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
