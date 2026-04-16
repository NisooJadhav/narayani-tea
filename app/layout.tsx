import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Narayani Tea | Premium Tea Powder & Jaggery Premixes",
    template: "%s | Narayani Tea"
  },
  description: site.description,
  keywords: [
    "Narayani Tea",
    "tea powder manufacturer",
    "tea seller",
    "jaggery tea premix",
    "kadak dust tea",
    "Assam tea powder",
    "masala jaggery tea",
    "ginger jaggery tea"
  ],
  authors: [{ name: "Narayani Tea" }],
  creator: "Narayani Tea",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Narayani Tea | Premium Tea Powder & Jaggery Premixes",
    description: site.description,
    images: [{ url: "/images/business-card-02.png", width: 1340, height: 768, alt: "Narayani Tea brand card" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Narayani Tea",
    description: site.description,
    images: ["/images/business-card-02.png"]
  },
  alternates: {
    canonical: site.url
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    slogan: site.tagline,
    description: site.description,
    logo: `${site.url}/images/business-card-02.png`,
    sameAs: [site.url]
  };

  return (
    <html lang="en-IN">
      <body>
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
