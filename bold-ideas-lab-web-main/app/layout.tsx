import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import en from "@/messages/en.json";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.boldideaslab.com"),
  title: {
    default: en.meta.siteName,
    template: `%s | ${en.meta.siteName}`
  },
  description: en.meta.description,
  keywords: [
    "Bold Ideas Lab",
    "AI education",
    "project-based learning",
    "youth creativity",
    "international families"
  ],
  applicationName: en.meta.siteName,
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"]
  },
  openGraph: {
    title: en.meta.siteName,
    description: en.meta.description,
    url: "/",
    siteName: en.meta.siteName,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${en.meta.siteName} logo`
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: en.meta.siteName,
    description: en.meta.description,
    images: ["/twitter-image.png"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html data-scroll-behavior="smooth" lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
