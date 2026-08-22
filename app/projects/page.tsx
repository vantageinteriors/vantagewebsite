import type { Metadata } from "next";
import { SiteHeader, SiteFooter, WhatsAppFloat, quoteUrl } from "../components/SiteChrome";
import { BackgroundVideo } from "../components/BackgroundVideo";

export const metadata: Metadata = {
  title: "Interior Design Projects",
  description: "Explore residential and commercial interiors, dressing rooms, home offices, custom wardrobes and cabinetry by Vantage Interiors & Construction.",
  alternates: { canonical: "/projects" },
};
const work = [
  ["/media/wardrobe.png", "Dressing Room", "Custom wardrobes, display shelving and integrated lighting."],
  ["/media/home-office.png", "Home Office", "A warm, practical workspace built into the room."],
  ["/media/vanity.png", "Vanity Suite", "A softly lit dressing space with precision-made storage."],
  ["/media/shoe-cabinet.png", "Display Cabinetry", "Rich wood, glass and light designed around a personal collection."],
  ["/media/wardrobe-detail.png", "Wardrobe Details", "Purposeful fittings that make daily routines effortless."],
  ["/media/study.jpg", "Executive Study", "A composed workspace with depth, warmth and presence."],
];
export default function Projects(){return <main><SiteHeader /><section className="page-hero video-page-hero"><BackgroundVideo src="/media/projects-hero.mp4" poster="/media/wardrobe.png" /><div className="section-video-shade" /><div className="section-video-content"><p className="section-tag light-tag">Our work</p><h1>Spaces made<br /><em>to belong.</em></h1><p>A selection of real interiors and bespoke joinery shaped around the people who use them.</p></div></section><section className="work-gallery">{work.map(([image,title,text],i)=><article key={title}><div><img src={image} alt={title} /></div><span>0{i+1}</span><h2>{title}</h2><p>{text}</p></article>)}</section><section className="quote-band dark-quote video-quote"><BackgroundVideo src="/media/quote-background.mp4" poster="/media/home-office.png" /><div className="section-video-shade" /><div className="quote-video-content"><h2>Let’s create something<br /><em>distinctly yours.</em></h2><a className="button cream-button" href={quoteUrl} target="_blank" rel="noreferrer">Request a quote <span>↗</span></a></div></section><SiteFooter /><WhatsAppFloat /></main>}
