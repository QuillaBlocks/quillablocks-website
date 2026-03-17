import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuillaBlocks — Comunidad Web3 en Barranquilla, Colombia",
  description:
    "QuillaBlocks es la comunidad Web3 de Barranquilla, Colombia. Únete para aprender sobre blockchain, criptomonedas, DeFi, NFTs y construir el futuro descentralizado juntos.",
  keywords: [
    "Web3",
    "blockchain",
    "Barranquilla",
    "Colombia",
    "comunidad Web3",
    "criptomonedas",
    "DeFi",
    "NFTs",
    "descentralización",
    "QuillaBlocks",
    "crypto Colombia",
    "Web3 Caribe",
    "blockchain Barranquilla",
  ],
  authors: [{ name: "QuillaBlocks" }],
  creator: "QuillaBlocks",
  metadataBase: new URL("https://quillablocks.org"),
  alternates: {
    canonical: "/",
    languages: {
      "es-CO": "/",
    },
  },
  openGraph: {
    title: "QuillaBlocks — Comunidad Web3 en Barranquilla, Colombia",
    description:
      "La comunidad Web3 de Barranquilla. Aprende, conecta y construye el futuro descentralizado con nosotros.",
    url: "https://quillablocks.org",
    siteName: "QuillaBlocks",
    images: [
      {
        url: "/quillablocks-horizontal-logo.png",
        width: 1200,
        height: 630,
        alt: "QuillaBlocks — Comunidad Web3 Barranquilla",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuillaBlocks — Comunidad Web3 en Barranquilla",
    description:
      "La comunidad Web3 de Barranquilla, Colombia. Blockchain, DeFi, NFTs y más.",
    images: ["/quillablocks-horizontal-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/quillablocks-logo.png",
    apple: "/quillablocks-logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "QuillaBlocks",
  url: "https://quillablocks.org",
  logo: "https://quillablocks.org/quillablocks-logo.png",
  description:
    "Comunidad Web3 en Barranquilla, Colombia. Blockchain, DeFi, NFTs y tecnologías descentralizadas.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barranquilla",
    addressRegion: "Atlántico",
    addressCountry: "CO",
  },
  sameAs: [
    "https://github.com/QuillaBlocks",
    "https://instagram.com/quillablocks",
    "https://x.com/QuillaBlocks",
    "https://linkedin.com/company/quillablocks",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
