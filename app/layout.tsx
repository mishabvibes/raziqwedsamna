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

import { Playfair_Display, Great_Vibes, Lato } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"], variable: "--font-lato" });

export const metadata: Metadata = {
  title: "Wedding Invitation - Raziq & Amna",
  description: "Wedding invitation for Raziq & Amna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${greatVibes.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
