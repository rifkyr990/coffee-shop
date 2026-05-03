import Link from "next/link";
import { Coffee, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-stone-50 dark:bg-stone-950">
      {/* Coffee cup icon */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full bg-amber-100 dark:bg-amber-950/50 flex items-center justify-center">
          <Coffee className="w-12 h-12 text-amber-700 dark:text-amber-500" />
        </div>
        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-lg font-bold text-stone-400">
          ?
        </div>
      </div>

      {/* 404 */}
      <p className="font-serif text-8xl sm:text-9xl font-bold text-stone-200 dark:text-stone-800 leading-none mb-4 select-none">
        404
      </p>

      <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-3 -mt-4">
        Oops, table not found.
      </h1>
      <p className="text-stone-500 dark:text-stone-400 text-lg max-w-sm mb-10 leading-relaxed">
        Looks like this page wandered off for a coffee break and didn&apos;t come back.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-7 py-3.5 rounded-full font-semibold tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-amber-700/25 hover:-translate-y-0.5"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-500 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Browse the Menu
        </Link>
      </div>

      {/* Subtle branding */}
      <p className="mt-16 text-stone-400 dark:text-stone-600 text-sm">
        AromaCo. · Premium Coffee & Café
      </p>
    </div>
  );
}
