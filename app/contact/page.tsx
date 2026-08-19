import type { Metadata } from "next";
import { SiteHeader, SiteFooter, WhatsAppFloat, WhatsAppIcon, quoteUrl, callUrl, emailUrl } from "../components/SiteChrome";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact an Interior Designer",
  description: "Contact Vantage Interiors & Construction for interior design, custom furniture, kitchens, wardrobes and bespoke joinery in Uganda.",
  alternates: { canonical: "/contact" },
};
export default function Contact(){return <main><SiteHeader /><section className="contact-page"><p className="section-tag light-tag">Start a conversation</p><h1>Tell us about<br /><em>your space.</em></h1><p>Share what you are planning, what you need and any inspiration you already have. We’ll take it from there.</p><div className="contact-options"><a href={quoteUrl} target="_blank" rel="noreferrer"><b><WhatsAppIcon /></b><span><small>Fastest response</small>Request a quote on WhatsApp</span><i>↗</i></a><a href={callUrl}><b><FaPhone /></b><span><small>Call us</small>+256 748 781751</span><i>↗</i></a><a href={emailUrl}><b><FaEnvelope /></b><span><small>Email us</small>vantageinteriors256@gmail.com</span><i>↗</i></a></div></section><SiteFooter /><WhatsAppFloat /></main>}
