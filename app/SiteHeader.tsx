"use client";

import { useEffect, useState } from "react";

const links = [
  ["Gallery", "/gallery"],
  ["Services", "/#services"],
  ["Reviews", "/#reviews"],
  ["FAQ", "/#faq"],
  ["Contact", "/#contact"],
  ["Plan", "/#enquire"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return <header className={`site-header ${open ? "menu-open" : ""}`}>
    <a className="brand" href="/" aria-label="Pune Flower and Event Studio home" onClick={() => setOpen(false)}><img className="brand-logo" src="/pune-flower-logo-mark.svg" alt=""/><span><strong>Pune</strong><small>Flower &amp; Event Studio</small></span></a>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}><span/><span/><span/></button>
    <nav id="main-navigation" aria-label="Main navigation">{links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <a className="button button-small header-cta" href="https://wa.me/918793368616?text=Hello%2C%20I%20would%20like%20to%20plan%20a%20celebration." target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Plan on WhatsApp</a>
  </header>;
}
