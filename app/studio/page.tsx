import { SiteHeader, SiteFooter, WhatsAppFloat, quoteUrl } from "../components/SiteChrome";

const gallery = [
  { image: "/media/wardrobe.png", title: "Dressing Room", category: "Wardrobes & storage", note: "Warm timber, integrated lighting and carefully planned display space." },
  { image: "/media/home-office.png", title: "Home Office", category: "Workspace", note: "A practical, composed workspace fitted seamlessly into the room." },
  { image: "/media/vanity.png", title: "Vanity Suite", category: "Dressing area", note: "Soft colour and focused lighting for a calm daily ritual." },
  { image: "/media/shoe-cabinet.png", title: "Collection Cabinet", category: "Display joinery", note: "Glass, rich wood and warm illumination frame a personal collection." },
  { image: "/media/wardrobe-detail.png", title: "Wardrobe Details", category: "Interior fittings", note: "Every rail, drawer and fitting placed to make storage effortless." },
  { image: "/media/study.jpg", title: "Executive Study", category: "Commercial interiors", note: "A confident workspace layered with stone, wood and ambient light." },
];

export default function Gallery(){return <main><SiteHeader />
  <section className="page-hero gallery-hero"><p className="section-tag light-tag">The gallery</p><h1>Details worth<br /><em>looking closer.</em></h1><p>Explore finished spaces, thoughtful storage and bespoke details created by Vantage Interiors.</p></section>
  <section className="gallery-intro"><p className="section-tag">Selected spaces</p><h2>A growing collection<br />of <em>our work.</em></h2><p>Every entry follows the same considered format, keeping new projects organized as the gallery grows.</p></section>
  <section className="gallery-grid">{gallery.map((item,i)=><article key={item.title} className={i % 3 === 1 ? "gallery-card gallery-card-tall" : "gallery-card"}><div className="gallery-image"><img src={item.image} alt={item.title} /><span>0{i+1}</span></div><div className="gallery-caption"><p>{item.category}</p><h2>{item.title}</h2><span>{item.note}</span></div></article>)}</section>
  <section className="quote-band dark-quote"><p className="section-tag light-tag">Inspired?</p><h2>Let’s shape your<br /><em>next space.</em></h2><a className="button cream-button" href={quoteUrl} target="_blank" rel="noreferrer">Request a quote <span>↗</span></a></section>
  <SiteFooter /><WhatsAppFloat />
</main>}
