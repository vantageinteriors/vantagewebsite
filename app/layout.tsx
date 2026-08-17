import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://vantageinteriors.com"),
  title: "Vantage Interiors | Bespoke Interior Design",
  description: "Warm, refined residential and commercial interiors, bespoke furniture and styling in Kampala, Uganda.",
  openGraph: { title: "Vantage Interiors", description: "Spaces with presence.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Vantage Interiors", description: "Spaces with presence.", images: ["/og.png"] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
