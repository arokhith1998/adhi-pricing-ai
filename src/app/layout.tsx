import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adhithya Rokhith Bhaskar - Pricing Strategy & AI Leader",
  description:
    "Pricing Strategy & AI Leader — price architecture, elasticity, margin recovery, and AI product building. Anthropic certified.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        {children}
        {/* tw-safelist */}
        <span className="hidden bg-cyan-500/10 border-cyan-500/40 border-cyan-500/30 text-cyan-300 text-cyan-200 bg-cyan-400" aria-hidden />
        <Analytics />
      </body>
    </html>
  );
}
