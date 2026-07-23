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
    title: 'Aviora Aviation Academy — Pilot Training & Cabin Crew in Hyderabad',
    description: 'India\'s premier aviation training institute. DGCA CPL, Cabin Crew, Global Training USA, and Type Rating. 100+ Graduates. 98% placement rate. Hyderabad.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Aviora',
    url: 'https://avioraaviation.in',
    images: [{ url: 'https://avioraaviation.in/og-image.jpg', width: 1200, height: 630, alt: 'Aviora Aviation Academy' }],
  },
  twitter: { 
    card: 'summary_large_image',
    title: 'Aviora Aviation Academy — Pilot Training & Cabin Crew in Hyderabad',
    description: 'India\'s premier aviation training institute. DGCA CPL, Cabin Crew, Global Training USA, and Type Rating. 100+ Graduates. 98% placement rate. Hyderabad.',
    images: ['https://avioraaviation.in/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: './' },
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
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          
          {/* Google Analytics (GA4) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-C1LVLCCEEC"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-C1LVLCCEEC');
              `,
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Aviora",
                "url": "https://avioraaviation.in",
                "logo": "https://avioraaviation.in/logos/Aviora%20Footer%20Logo.png",
                "sameAs": [
                  "https://www.instagram.com/aviora.aviation?igsh=MTRmenRwMmFpNHB3Yw%3D%3D&utm_source=qr",
                  "https://www.youtube.com/@AvioraAviation",
                  "https://www.facebook.com/share/1NNU5QEtTv/?mibextid=wwXIfr"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-6309342416",
                  "contactType": "customer service",
                  "email": "Admissions@avioraacademy.com"
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
