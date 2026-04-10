import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import AirplaneScrollbar from "@/components/AirplaneScrollbar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

/* ── Heading font: Plus Jakarta Sans ── */
const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

/* ── Body / UI font: Inter ── */
const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://avioraacademy.com'),
  title: {
    default: 'Aviora Aviation Academy — Pilot Training & Cabin Crew in Hyderabad',
    template: '%s | Aviora Aviation Academy',
  },
  description: 'India\'s premier aviation training institute. DGCA CPL, Cabin Crew, Global Training USA, and Type Rating. 2,400+ graduates. 98% placement rate. Hyderabad.',
  keywords: ['pilot training India', 'DGCA CPL', 'cabin crew training Hyderabad', 'type rating India', 'aviation academy Hyderabad', 'commercial pilot training'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Aviora Aviation Academy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Aviora Aviation Academy' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body>
        <CustomCursor />
        <AirplaneScrollbar />
        <Nav />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
