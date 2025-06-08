import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalori & Resep - Resep Sehat & Kalkulator Kalori",
  description: "Platform terpercaya untuk hidup sehat dengan ribuan resep bergizi dan kalkulator kalori akurat. Mulai hidup sehat hari ini dengan Kalori & Resep!",
  viewport: "width=device-width, initial-scale=1",
  keywords: "resep sehat, kalori, diet, nutrisi, makanan sehat, kalkulator kalori",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
