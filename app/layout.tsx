import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PromoBanner from "@/components/PromoBanner";
import BackToTop from "@/components/BackToTop";
import MobileBottomNav from "@/components/MobileBottomNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AromaCo. — Premium Coffee & Café",
  description:
    "Discover the art of specialty coffee. Crafted with passion, served with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 antialiased transition-colors duration-300">
        <ThemeProvider>
          <PromoBanner />
          <Navbar />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <BackToTop />
          <MobileBottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}

