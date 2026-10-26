import type { Metadata, Viewport } from "next";
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
  title: "Muhammad Hafiz — AI Agent & Full-Stack Developer",
  description:
    "Portfolio of Muhammad Hafiz. AI Agent & Full-Stack Developer crafting intelligent, high-performance web platforms, autonomous LLM agents, and scalable cloud solutions.",
  keywords: [
    "Full-Stack Engineer",
    "AI Systems Architect",
    "Next.js Developer",
    "React 19",
    "TypeScript",
    "Autonomous Agents",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Hafiz" }],
  creator: "Muhammad Hafiz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://julianvance.dev",
    title: "Muhammad Hafiz — AI Agent & Full-Stack Developer",
    description:
      "Crafting intelligent, high-performance digital experiences, autonomous AI agents, and enterprise cloud systems.",
    siteName: "Muhammad Hafiz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hafiz — AI Agent & Full-Stack Developer",
    description:
      "Crafting intelligent, high-performance digital experiences, autonomous AI agents, and enterprise cloud systems.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF7A1A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col selection:bg-[#FF7A1A] selection:text-[#17130F]`}
      >
        {children}
      </body>
    </html>
  );
}
