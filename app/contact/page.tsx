"use client";

import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
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


export default function ContactPage() {
  const { lang } = useLanguage();
  const tr = translations[lang].contactPage;

  const contactInfo = [
    { icon: MapPin, title: tr.addressTitle, lines: ["Jl. Kemang Raya No. 12", "Kemang, Jakarta Selatan 12730"] },
    { icon: Phone, title: tr.phoneTitle, lines: ["+62 21 7890 1234", "+62 812 3456 7890 (WhatsApp)"] },
    { icon: Mail, title: tr.emailTitle, lines: ["hello@aromaco.id", "events@aromaco.id"] },
    { icon: Clock, title: tr.hoursTitle, lines: tr.hours },
  ];

  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-16 bg-stone-900 dark:bg-stone-950 text-center px-4">
        <p className="text-amber-400 font-medium tracking-[0.25em] uppercase text-sm mb-3">
          {tr.eyebrow}
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">
          {tr.title}
        </h1>
        <p className="text-stone-400 text-lg max-w-lg mx-auto leading-relaxed">
          {tr.sub}
        </p>
      </div>

      {/* Main content */}
      <section className="py-20 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-16">
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                  {tr.infoTitle}
                </h2>
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed">
                  {tr.infoSub}
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amber-700 dark:text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-sm mb-1">
                        {title}
                      </h3>
                      {lines.map((line) => (
                        <p
                          key={line}
                          className="text-stone-500 dark:text-stone-400 text-sm"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div>
                <p className="text-stone-700 dark:text-stone-300 font-semibold text-sm mb-3">
                  {tr.followUs}
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: InstagramIcon, label: "Instagram", handle: "@aromaco.id" },
                    { icon: XIcon, label: "X (Twitter)", handle: "@aromaco" },
                  ].map(({ icon: Icon, label, handle }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-amber-400 dark:hover:border-amber-700 text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-500 text-sm transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                      {handle}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3 space-y-6">
              {/* WhatsApp Reservation Card */}
              <a
                href="https://wa.me/6281234567890?text=Halo%20AromaCo.%2C%20saya%20ingin%20reservasi%20meja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl p-6 shadow-md shadow-[#25D366]/20 transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <div className="shrink-0 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg leading-tight">{tr.chatCardTitle}</p>
                  <p className="text-white/80 text-sm mt-1">
                    {tr.chatCardSub}
                  </p>
                </div>
                <svg className="w-5 h-5 shrink-0 opacity-70 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              {/* Contact form */}
              <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-sm p-8 border border-stone-100 dark:border-stone-800">
                <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6">
                  {tr.formTitle}
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-72 bg-stone-200 dark:bg-stone-800 relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-stone-500 dark:text-stone-400">
          <MapPin className="w-10 h-10 text-amber-600" />
          <p className="font-medium">{tr.mapAddress}</p>
          <p className="text-sm">{tr.mapPlaceholder}</p>
        </div>
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, #a8a29e 1px, transparent 1px), linear-gradient(to bottom, #a8a29e 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </section>
    </>
  );
}
