import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yves Monem – Blockchain Frontend Developer",
  description:
    "Building user-friendly decentralized applications that merge creativity and logic. Web3 Frontend Developer specializing in React, Next.js, TypeScript, and Ethereum dApps.",
  keywords: [
    "Yves Monem",
    "Blockchain Developer",
    "Frontend Developer",
    "Web3",
    "React",
    "Next.js",
    "TypeScript",
    "Ethereum",
    "dApps",
  ],
  authors: [{ name: "Yves Monem" }],
  openGraph: {
    title: "Yves Monem – Blockchain Frontend Developer",
    description:
      "Building user-friendly decentralized applications that merge creativity and logic.",
    type: "website",
    locale: "en_US",
    url: "https://yvesmonem.com",
    siteName: "Yves Monem Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yves Monem – Blockchain Frontend Developer",
    description:
      "Building user-friendly decentralized applications that merge creativity and logic.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
