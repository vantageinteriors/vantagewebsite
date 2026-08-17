"use client";
import { useState } from "react";

const projects = [
  { image: "/media/wardrobe.png", title: "The Rosewood Suite", type: "Bespoke dressing room" },
  { image: "/media/kitchen.jpg", title: "Ivory Kitchen", type: "Kitchen & joinery" },
  { image: "/media/study.jpg", title: "The Executive Study", type: "Commercial interiors" },
];
const services = [
  ["01", "Interior design", "From concept and spatial planning to a fully resolved interior."],
  ["02", "Bespoke furniture", "Made-to-measure cabinetry and furniture, crafted for the way you live."],
  ["03", "Styling & finishing", "Material, lighting and décor selections that give every room its rhythm."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <header className="nav-wrap">
      <a className="brand" href="#top" aria-label="Vantage Interiors home"><img src="/media/logo.jpg" alt="" /><span><strong>Vantage</strong><small>Interiors</small></span></a>
      <button className="menu" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i /><i /></button>
      <nav className={menuOpen ? "open" : ""} onClick={() => setMenuOpen(false)}><a href="#work">Projects</a><a href="#services">Services</a><a href="#studio">Studio</a><a href="#contact">Contact</a><a className="nav-cta" href="#contact">Start a project <span>↗</span></a></nav>
    </header>
    <section className="hero" id="top">
      <div className="hero-image"><img src="/media/wardrobe.png" alt="Warm bespoke dressing room by Vantage Interiors" /></div><div className="hero-shade" />
      <div className="hero-copy"><p className="eyebrow">Bespoke interiors · Kampala</p><h1>Spaces with<br /><em>presence.</em></h1><div className="hero-bottom"><p>Thoughtful interiors, beautifully made—from the first line drawn to the final detail placed.</p><a className="circle-link" href="#work" aria-label="Explore our work">↓</a></div></div>
      <div className="hero-index"><span>01</span><i /><span>04</span></div>
    </section>
    <section className="intro" id="studio"><p className="section-tag">Our approach</p><h2>We shape rooms around <em>your life,</em> then make every detail feel inevitable.</h2><div className="intro-grid"><p>Vantage Interiors creates refined residential and commercial spaces with a warm, modern point of view. Every project balances beauty, function and enduring craftsmanship.</p><a className="text-link" href="#services">Discover our studio <span>↗</span></a></div></section>
    <section className="featured" id="work"><div className="feature-visual"><img src="/media/vanity.png" alt="Custom vanity and wardrobe in a warm contemporary bedroom" /><span className="float-note">Tailored to you<br /><b>Down to the millimetre.</b></span></div><div className="feature-copy"><p className="section-tag">Featured project · 2026</p><h2>Quiet luxury,<br />made personal.</h2><p>A dressing suite where rich walnut, soft blush and diffused light turn everyday rituals into moments worth lingering over.</p><a className="button light" href="#contact">Discuss your space <span>↗</span></a><div className="materials"><span>Walnut veneer</span><span>Brushed brass</span><span>Ambient lighting</span></div></div></section>
    <section className="portfolio"><div className="section-head"><div><p className="section-tag">Selected work</p><h2>Rooms that speak<br /><em>for themselves.</em></h2></div><p>Selected residential and commercial spaces shaped by material, proportion and light.</p></div><div className="project-grid">{projects.map((project, index) => <article className="project" key={project.title}><div className="project-img"><img src={project.image} alt={project.title} /><a href="#contact" aria-label={`Enquire about ${project.title}`}>↗</a></div><div><span>0{index + 1}</span><h3>{project.title}</h3><p>{project.type}</p></div></article>)}</div></section>
    <section className="services" id="services"><div className="services-title"><p className="section-tag">What we do</p><h2>From empty room<br />to <em>finished story.</em></h2></div><div className="service-list">{services.map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p><b>＋</b></article>)}</div></section>
    <section className="process"><div className="process-media"><video autoPlay muted loop playsInline poster="/media/study.jpg"><source src="/media/process.mp4" type="video/mp4" /></video><span>Design in motion</span></div><div className="process-copy"><p className="section-tag">How it works</p><h2>Considered at<br />every step.</h2><ol><li><span>01</span><div><b>Discover</b><p>We listen, measure and understand how you want the space to feel.</p></div></li><li><span>02</span><div><b>Design</b><p>Concepts become layouts, material palettes and detailed visualisations.</p></div></li><li><span>03</span><div><b>Deliver</b><p>We coordinate the making, installation and final styling.</p></div></li></ol></div></section>
    <section className="contact" id="contact"><p className="section-tag">Begin your project</p><h2>Have a space in mind?<br /><em>Let’s make it remarkable.</em></h2><div className="contact-row"><a className="button dark" href="mailto:hello@vantageinteriors.com">Request a quote <span>↗</span></a><p>Tell us a little about your project and we’ll get back to you with the next steps.</p></div><footer><a className="brand footer-brand" href="#top"><img src="/media/logo.jpg" alt="" /><span><strong>Vantage</strong><small>Interiors</small></span></a><div><a href="mailto:hello@vantageinteriors.com">Email</a><a href="#">Instagram</a><a href="#">TikTok</a></div><p>© 2026 Vantage Interiors<br />Kampala, Uganda</p></footer></section>
    <a className="whatsapp" href="https://wa.me/256700000000?text=Hello%20Vantage%20Interiors%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" aria-label="Chat with Vantage Interiors on WhatsApp"><span>Chat with us</span><b>◔</b></a>
  </main>;
}
