import type { Metadata, Viewport } from "next";
import { DM_Mono, Geist, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/content/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "RadarCRM — Le REQ, transformé en rendez-vous | Prospection REQ Québec",
    template: "%s | RadarCRM",
  },
  description:
    "RadarCRM synchronise les nouvelles immatriculations REQ du Québec, enrichit les numéros de téléphone et livre une queue d'appels priorisée le lundi matin pour vos conseillers en protection financière.",
  alternates: {
    canonical: "/",
    languages: { "fr-CA": "/" },
  },
  openGraph: {
    title: "RadarCRM — Le REQ, transformé en rendez-vous",
    description:
      "Prospection REQ automatisée pour les conseillers en protection financière au Québec.",
    url: SITE.url,
    siteName: "RadarCRM",
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RadarCRM — Le REQ, transformé en rendez-vous",
    description:
      "Prospection REQ automatisée pour les conseillers en protection financière au Québec.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#121C2D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${syne.variable} ${geistSans.variable} ${dmMono.variable} dark`}
      data-theme="dark"
    >
      <head>
        <JsonLd />
        <meta httpEquiv="Content-Language" content="fr-CA" />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
