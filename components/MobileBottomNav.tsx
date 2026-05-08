"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Info, Phone } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/i18n";

const navHrefs = ["/", "/menu", "/about", "/contact"] as const;
const navIcons = [Home, BookOpen, Info, Phone];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const tr = translations[lang].nav;

  const navItems = [
    { href: "/", label: tr.home, icon: Home },
    { href: "/menu", label: tr.menu, icon: BookOpen },
    { href: "/about", label: tr.about, icon: Info },
    { href: "/contact", label: tr.contact, icon: Phone },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-stone-950/95 backdrop-blur-md border-t border-stone-200 dark:border-stone-800 safe-bottom">
      <div className="grid grid-cols-4 h-16">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive
                  ? "text-amber-700 dark:text-amber-500"
                  : "text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-500"
              }`}
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-600" />
                )}
              </div>
              <span className="text-[10px] font-medium leading-none">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
