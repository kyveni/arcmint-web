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
  title: "ArcMint — AI Token Intelligence",
  description: "Analyze and launch tokens on Robinhood Chain",
  other: {
    "virtual-protocol-site-verification":
      "d06354eba15595846e149ca6ee92d8fc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-black text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
