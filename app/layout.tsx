import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const description =
  "SynergieVet propose des formations continues pratiques pour les vétérinaires et AMVs de Suisse romande et de France voisine. Se former ensemble pour mieux soigner.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.synergievet.ch"),
  title: "SynergieVet — Formation continue vétérinaire et AMV",
  description,
  openGraph: {
    title: "SynergieVet — Formation continue vétérinaire et AMV",
    description,
    url: "https://www.synergievet.ch",
    siteName: "SynergieVet",
    locale: "fr_CH",
    type: "website",
    images: [
      {
        url: "/images/equipe.jpg",
        width: 1600,
        height: 952,
        alt: "Les trois associés de SynergieVet",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${urbanist.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
