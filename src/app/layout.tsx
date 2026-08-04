import type { Metadata } from "next";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/500-italic.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";

const siteUrl = "https://www.nutrifernandayaryd.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fernanda Yaryd | Nutrição, Climatério e Menopausa",
    template: "%s | Nutri Fernanda Yaryd",
  },
  description:
    "Nutrição personalizada para emagrecimento saudável, climatério, menopausa, saúde hormonal e reeducação alimentar. Atendimento humanizado presencial em São Paulo e online.",
  keywords: [
    "nutricionista São Paulo",
    "nutricionista climatério",
    "nutricionista menopausa",
    "emagrecimento saudável",
    "saúde hormonal",
    "reeducação alimentar",
    "resistência à insulina",
  ],
  authors: [{ name: "Fernanda Yaryd" }],
  openGraph: {
    title: "Nutri Fernanda Yaryd | Nutrição para Saúde da Mulher",
    description:
      "Atendimento humanizado com foco em emagrecimento saudável, saúde da mulher, climatério, menopausa e reeducação alimentar.",
    url: siteUrl,
    siteName: "Nutri Fernanda Yaryd",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/fernanda-portrait-arch.jpg",
        width: 1587,
        height: 2000,
        alt: "Fernanda Yaryd, nutricionista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutri Fernanda Yaryd | Nutrição para Saúde da Mulher",
    description:
      "Atendimento humanizado com foco em emagrecimento saudável, climatério, menopausa e reeducação alimentar.",
    images: ["/images/fernanda-portrait-arch.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nutri Fernanda Yaryd",
  image: `${siteUrl}/images/fernanda-portrait-arch.jpg`,
  description:
    "Consultoria em nutrição personalizada com foco em emagrecimento saudável, saúde da mulher, climatério, menopausa e reeducação alimentar.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Cassandoca, 125 - Lj 1",
    addressLocality: "Mooca, São Paulo",
    addressRegion: "SP",
    postalCode: "03169-010",
    addressCountry: "BR",
  },
  telephone: "+5511974848888",
  email: "nutri.fernandayaryd@gmail.com",
  sameAs: ["https://www.instagram.com/nutrifeyaryd"],
  priceRange: "$$",
  areaServed: "São Paulo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased bg-cream text-ink font-body">{children}</body>
    </html>
  );
}
