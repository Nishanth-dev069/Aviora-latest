import type { Metadata } from "next";
import { Cormorant_Garamond, Barlow_Condensed, Space_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import AirplaneScrollbar from "@/components/AirplaneScrollbar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap"
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-barlow",
  display: "swap"
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "AVIORA AVIATION ACADEMY",
  description: "A premium Indian aviation training institute. Where Legends Learn to Command the Sky.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${barlow.variable} ${spaceMono.variable}`}>
        <CustomCursor />
        <AirplaneScrollbar />
        <Nav />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
