import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.vantageinteriorsandconstruction.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vantage Interiors & Construction | Interior Design Uganda",
    template: "%s | Vantage Interiors & Construction",
  },
  description: "Vantage Interiors & Construction creates refined residential and commercial interiors, custom furniture, kitchens, wardrobes and bespoke joinery in Uganda.",
  applicationName: "Vantage Interiors & Construction",
  authors: [{ name: "Vantage Interiors & Construction" }],
  creator: "Vantage Interiors & Construction",
  publisher: "Vantage Interiors & Construction",
  keywords: [
    "Vantage Interiors",
    "Vantage Interiors and Construction",
    "interior design Uganda",
    "interior designers Uganda",
    "interior design company",
    "home interior design",
    "commercial interior design",
    "bespoke furniture Uganda",
    "custom wardrobes Uganda",
    "custom kitchens Uganda",
    "bespoke joinery Uganda",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: siteUrl,
    siteName: "Vantage Interiors & Construction",
    title: "Vantage Interiors & Construction | Interior Design Uganda",
    description: "Refined residential and commercial interiors, custom furniture and bespoke joinery in Uganda.",
    images: [{ url: "/og.png", alt: "Vantage Interiors & Construction" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vantage Interiors & Construction | Interior Design Uganda",
    description: "Refined residential and commercial interiors, custom furniture and bespoke joinery in Uganda.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "HomeAndConstructionBusiness"],
  "@id": `${siteUrl}/#business`,
  name: "Vantage Interiors & Construction",
  alternateName: "Vantage Interiors",
  url: siteUrl,
  logo: `${siteUrl}/media/logo-transparent.png`,
  image: `${siteUrl}/og.png`,
  email: "vantageinteriors256@gmail.com",
  telephone: "+256748781751",
  description: "Interior design, custom furniture, kitchens, wardrobes, styling and bespoke joinery for residential and commercial spaces.",
  areaServed: { "@type": "Country", name: "Uganda" },
  sameAs: [
    "https://www.instagram.com/vantage_nteriors.ug/",
    "https://www.tiktok.com/@vantage_interiors",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-UG"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c") }} /></body></html>;
}
