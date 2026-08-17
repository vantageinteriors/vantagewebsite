"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaInstagram, FaPhone, FaTiktok } from "react-icons/fa6";

export const quoteUrl = "https://wa.me/256748781751?text=Hello%20Vantage%20Interiors%2C%20I%20would%20like%20to%20request%20a%20quote.";
export const callUrl = "tel:+256748781751";
export const emailUrl = "mailto:vantageinteriors256@gmail.com";

export function WhatsAppIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3A12.88 12.88 0 0 0 5.1 22.68L3.2 29l6.48-1.8A12.96 12.96 0 1 0 16.04 3Zm0 23.62c-2 0-3.95-.55-5.64-1.58l-.4-.24-3.84 1.07 1.03-3.74-.26-.4a10.55 10.55 0 1 1 9.11 4.89Zm5.8-7.89c-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-1.88-.94-3.12-1.68-4.37-3.82-.33-.57.33-.53.94-1.77.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.07 1.29 3.28c.16.21 2.23 3.41 5.41 4.78.75.33 1.34.52 1.8.67.76.24 1.45.21 2 .13.61-.09 1.87-.76 2.13-1.5.27-.74.27-1.37.19-1.5-.08-.14-.29-.22-.61-.38Z" /></svg>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link className="logo" href="/" aria-label="Vantage Interiors home"><img src="/media/logo-transparent.png" alt="Vantage Interiors" /></Link>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><i /><i /></button>
    <nav className={open ? "nav-open" : ""} onClick={() => setOpen(false)}>
      <Link href="/projects">Projects</Link><Link href="/services">Services</Link><Link href="/studio">Gallery</Link><Link href="/contact">Contact</Link>
      <a className="outline-cta" href={quoteUrl} target="_blank" rel="noreferrer">Request a quote <span>↗</span></a>
    </nav>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <Link className="footer-logo" href="/"><img src="/media/logo-transparent.png" alt="Vantage Interiors" /></Link>
    <div className="footer-links"><Link href="/projects">Projects</Link><Link href="/services">Services</Link><Link href="/studio">Gallery</Link><Link href="/contact">Contact</Link></div>
    <div className="footer-social"><a href={callUrl}><FaPhone /> <span>+256 748 781751</span></a><a href={emailUrl}><FaEnvelope /> <span>Email</span></a><a href="https://www.instagram.com/vantage_nteriors.ug?igsh=OTFudWgzeGg5eXFp" target="_blank" rel="noreferrer"><FaInstagram /> <span>Instagram</span></a><a href="https://www.tiktok.com/@vantage_interiors?_r=1&_t=ZS-98y2HwHua0r" target="_blank" rel="noreferrer"><FaTiktok /> <span>TikTok</span></a></div>
    <p>© 2026 Vantage Interiors</p>
  </footer>;
}

export function WhatsAppFloat() {
  return <a className="whatsapp-float" href={quoteUrl} target="_blank" rel="noreferrer" aria-label="Request a quote on WhatsApp"><span>WhatsApp</span><b><WhatsAppIcon /></b></a>;
}
