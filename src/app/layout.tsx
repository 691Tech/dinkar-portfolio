import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Outfit, Manrope, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dinkar Kumar — AI Engineer & Full Stack Developer",
  description: "Personal portfolio of Dinkar Kumar, Computer Science student specializing in AI at Parul University (2025–2029). Building thoughtful digital experiences through code, full-stack web applications, real-time socket systems, and algorithmic intelligence.",
  keywords: [
    "Dinkar Kumar",
    "AI Engineer",
    "Full Stack Developer",
    "Parul University",
    "Vadodara",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.io",
    "Java DSA",
    "Portfolio"
  ],
  authors: [{ name: "Dinkar Kumar", url: "https://github.com/691Tech" }],
  creator: "Dinkar Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/691Tech",
    title: "Dinkar Kumar — AI Engineer & Full Stack Developer",
    description: "Building thoughtful digital experiences through code. Full-stack developer & AI student at Parul University.",
    siteName: "Dinkar Kumar Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinkar Kumar — AI Engineer & Full Stack Developer",
    description: "Building thoughtful digital experiences through code. React, Node.js, Express, MongoDB, Socket.io, Java DSA.",
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
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
    <html
      lang="en"
      className={`${outfit.variable} ${manrope.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1613] antialiased selection:bg-[#E06A26] selection:text-white">
        {children}
        <Script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
