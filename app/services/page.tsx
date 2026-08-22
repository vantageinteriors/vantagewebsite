import type { Metadata } from "next";
import { SiteHeader, SiteFooter, WhatsAppFloat, quoteUrl } from "../components/SiteChrome";
import { BackgroundVideo } from "../components/BackgroundVideo";

export const metadata: Metadata = {
  title: "Interior Design Services in Uganda",
  description: "Interior design, bespoke joinery, custom kitchens, wardrobes, furniture, styling and project coordination by Vantage Interiors & Construction.",
  alternates: { canonical: "/services" },
};
const services=[
  ["01","Interior design","A complete design direction for homes and commercial spaces—from planning and materials to the final atmosphere."],
  ["02","Bespoke joinery","Wardrobes, kitchens, vanities, media units and fitted furniture measured and made for your exact space."],
  ["03","Furniture & styling","Thoughtful furniture, lighting, colour and décor selections that bring the full room together."],
  ["04","Project coordination","Clear guidance from concept through installation, with every decision held to one coherent vision."],
];
export default function Services(){return <main><SiteHeader /><section className="page-hero service-hero video-page-hero"><BackgroundVideo src="/media/services-hero.mp4" poster="/media/study.jpg" /><div className="section-video-shade" /><div className="section-video-content"><p className="section-tag light-tag">Our services</p><h1>From first idea<br /><em>to final detail.</em></h1><p>A considered, practical design service shaped around your needs, your space and your taste.</p></div></section><section className="service-page-list">{services.map(([n,title,text])=><article key={n}><span>{n}</span><h2>{title}</h2><p>{text}</p><a href={quoteUrl} target="_blank" rel="noreferrer">Enquire ↗</a></article>)}</section><section className="process-strip"><p className="section-tag">Our process</p><div><article><span>01</span><h3>Discover</h3><p>We listen, measure and understand what the space needs to do.</p></article><article><span>02</span><h3>Design</h3><p>We define layouts, finishes, joinery and the complete visual direction.</p></article><article><span>03</span><h3>Deliver</h3><p>We coordinate production, installation and the finishing touches.</p></article></div></section><SiteFooter /><WhatsAppFloat /></main>}
