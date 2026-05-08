"use client";

import Link from "next/link";
import { Coffee, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/i18n";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: XIcon, href: "#", label: "X (Twitter)" },
];

export default function Footer() {
  const { lang } = useLanguage();
  const tr = translations[lang].footer;
  const year = new Date().getFullYear();


  return (
    <footer className="bg-stone-900 dark:bg-stone-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 group-hover:bg-amber-600 transition-colors">
                <Coffee className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif text-xl font-bold text-white">
                Aroma<span className="text-amber-500">Co.</span>
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              {tr.brandDesc}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-800 hover:bg-amber-700 text-stone-400 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold tracking-wide mb-5 text-sm uppercase">
              {tr.exploreTitle}
            </h3>
            <ul className="space-y-3">
              {tr.exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold tracking-wide mb-5 text-sm uppercase">
              {tr.hoursTitle}
            </h3>
            <ul className="space-y-3">
              {tr.hours.map((hour, i) => (
                <li key={i} className="flex items-start gap-2 text-stone-400 text-sm">
                  <Clock className="w-4 h-4 mt-0.5 text-amber-600 shrink-0" />
                  {hour}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold tracking-wide mb-5 text-sm uppercase">
              {tr.findUsTitle}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-stone-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-600 shrink-0" />
                Jl. Kemang Raya No. 12, Jakarta Selatan, Indonesia
              </li>
              <li className="flex items-center gap-2 text-stone-400 text-sm">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                +62 21 7890 1234
              </li>
              <li className="flex items-center gap-2 text-stone-400 text-sm">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                hello@aromaco.id
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-xs">
            &copy; {year} AromaCo. {tr.copyrightSuffix}
          </p>
          <p className="text-stone-600 text-xs">
            {tr.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
