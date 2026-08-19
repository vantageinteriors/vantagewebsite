import type { Metadata } from "next";
import { SiteHeader, SiteFooter, WhatsAppFloat, quoteUrl } from "../components/SiteChrome";
import { getGalleryEntries } from "../lib/gallery";

export const metadata: Metadata = {
  title: "Interior Design Gallery",
  description: "View the latest finished interiors, fitted storage, custom furniture and bespoke details from Vantage Interiors & Construction.",
  alternates: { canonical: "/studio" },
};

export default function Gallery(){const gallery=getGalleryEntries();return <main><SiteHeader />
  <section className="page-hero gallery-hero"><p className="section-tag light-tag">The gallery</p><h1>Details worth<br /><em>looking closer.</em></h1><p>Explore finished spaces, thoughtful storage and bespoke details created by Vantage Interiors.</p></section>
  <section className="gallery-intro"><p className="section-tag">Selected spaces</p><h2>A growing collection<br />of <em>our work.</em></h2><p>Every entry follows the same considered format, keeping new projects organized as the gallery grows.</p></section>
  <section className="gallery-grid">{gallery.map((item,i)=><article key={item.title} className={i % 3 === 1 ? "gallery-card gallery-card-tall" : "gallery-card"}><div className="gallery-image"><img src={item.image} alt={item.title} /><span>0{i+1}</span></div><div className="gallery-caption"><p>{item.category}</p><h2>{item.title}</h2><span>{item.note}</span></div></article>)}</section>
  <section className="quote-band dark-quote"><p className="section-tag light-tag">Inspired?</p><h2>Let’s shape your<br /><em>next space.</em></h2><a className="button cream-button" href={quoteUrl} target="_blank" rel="noreferrer">Request a quote <span>↗</span></a></section>
  <SiteFooter /><WhatsAppFloat />
</main>}
