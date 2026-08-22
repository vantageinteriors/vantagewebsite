import Link from "next/link";
import { SiteHeader, SiteFooter, WhatsAppFloat, quoteUrl } from "./components/SiteChrome";
import { BackgroundVideo } from "./components/BackgroundVideo";

const projects = [
  { image: "/media/wardrobe.png", title: "Dressing Room", type: "Wardrobes & storage" },
  { image: "/media/home-office.png", title: "Home Office", type: "Integrated workspace" },
  { image: "/media/shoe-cabinet.png", title: "Display Cabinetry", type: "Bespoke joinery" },
];

export default function Home() {
  return <main><SiteHeader />
    <section className="hero">
      <div className="hero-image"><BackgroundVideo src="/media/process.mp4" poster="/media/wardrobe.png" /></div><div className="hero-shade" />
      <div className="hero-copy"><h1>Spaces with<br /><em>presence.</em></h1><p className="hero-intro">Thoughtful interiors, beautifully made—from the first line drawn to the final detail placed.</p><div className="hero-actions"><a className="button hero-outline-button" href={quoteUrl} target="_blank" rel="noreferrer">Request a quote <span>↗</span></a><Link className="hero-link" href="/projects">View our work <span>↓</span></Link></div></div>
    </section>

    <section className="video-feature image-feature"><img src="/media/wardrobe.png" alt="Custom dressing room by Vantage Interiors" /><div className="video-overlay"><p>Designed for living</p><h2>See the detail.<br /><em>Feel the difference.</em></h2><Link href="/projects">Explore projects ↗</Link></div></section>

    <section className="video-feature warm-video-feature"><BackgroundVideo src="/media/services-hero.mp4" poster="/media/study.jpg" /><div className="video-overlay"><p>Craft in motion</p><h2>Form, function<br /><em>and feeling.</em></h2><Link href="/services">Explore our services ↗</Link></div></section>

    <section className="intro"><p className="section-tag">Our approach</p><h2>We shape rooms around <em>your life,</em> then make every detail feel inevitable.</h2><div className="intro-grid"><p>Vantage Interiors creates refined residential and commercial spaces with a warm, modern point of view. Every project balances beauty, function and enduring craftsmanship.</p><Link className="text-link" href="/studio">Discover our studio <span>↗</span></Link></div></section>

    <section className="featured"><div className="feature-visual"><img src="/media/vanity.png" alt="Custom vanity and dressing room" /><span className="float-note">Tailored to you<br /><b>Down to every detail.</b></span></div><div className="feature-copy"><p className="section-tag light-tag">Featured space</p><h2>Quiet luxury,<br />made personal.</h2><p>Rich wood, soft colour and layered light turn an everyday room into a space that feels unmistakably yours.</p><a className="button line-button" href={quoteUrl} target="_blank" rel="noreferrer">Discuss your space <span>↗</span></a><div className="materials"><span>Custom joinery</span><span>Layered lighting</span><span>Fine finishes</span></div></div></section>

    <section className="portfolio"><div className="section-head"><div><p className="section-tag">Selected work</p><h2>Built beautifully.<br /><em>Used every day.</em></h2></div><p>Real spaces brought to life through thoughtful planning, precise workmanship and a strong eye for detail.</p></div><div className="project-grid">{projects.map((project, i) => <article className="project" key={project.title}><Link className="project-img" href="/projects"><img src={project.image} alt={project.title} /><span>↗</span></Link><div><small>0{i + 1}</small><h3>{project.title}</h3><p>{project.type}</p></div></article>)}</div></section>

    <section className="home-services"><div><p className="section-tag light-tag">What we do</p><h2>One vision.<br /><em>Every detail.</em></h2></div><div className="service-links"><Link href="/services">Interior design <span>↗</span></Link><Link href="/services">Bespoke furniture <span>↗</span></Link><Link href="/services">Wardrobes & kitchens <span>↗</span></Link><Link href="/services">Styling & finishing <span>↗</span></Link></div></section>

    <section className="quote-band"><p className="section-tag">Begin your project</p><h2>Ready to transform<br /><em>your space?</em></h2><a className="button brown-button" href={quoteUrl} target="_blank" rel="noreferrer">Request a quote on WhatsApp <span>↗</span></a></section>
    <SiteFooter /><WhatsAppFloat />
  </main>;
}
