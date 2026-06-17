import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import AirplaneScrollbar from "@/components/AirplaneScrollbar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

/* ── Typography: Inter for everything ── */

/* ── Body / UI font: Inter ── */
const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://avioraaviation.in'),
  title: {
    default: 'Aviora Aviation Academy — Pilot Training & Cabin Crew in Hyderabad',
    template: '%s | Aviora Aviation Academy',
  },
  description: 'India\'s premier aviation training institute. DGCA CPL, Cabin Crew, Global Training USA, and Type Rating. 100+ Graduates. 98% placement rate. Hyderabad.',
  keywords: ['pilot training India', 'DGCA CPL', 'cabin crew training Hyderabad', 'type rating India', 'aviation academy Hyderabad', 'commercial pilot training'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Aviora Aviation Academy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Aviora Aviation Academy' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  manifest: '/manifest.json',

};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "Aviora Aviation Academy",
                "url": "https://avioraacademy.com",
                "logo": "https://avioraacademy.com/aviora-logo.svg",
                "sameAs": [
                  "https://www.instagram.com/aviora.aviation?igsh=MTRmenRwMmFpNHB3Yw%3D%3D&utm_source=qr",
                  "https://linkedin.com/your-social-placeholder"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-6309342416",
                  "contactType": "admissions"
                }
              })
            }}
          />
          {/* Verification Code Placeholders */}
          <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        </head>
        <IntroOverlay />
        <CustomCursor />
        <AirplaneScrollbar />
        <Nav />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
