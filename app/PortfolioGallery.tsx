"use client";

import { useEffect, useState } from "react";

const images = [
  { src: "/real-pink-white-floral-arrangement.png", alt: "Fresh pink and white floral arrangement", title: "Blush Floral Centrepiece", category: "Floral Styling", palette: "Blush · Ivory · Garden green", detail: "Fresh roses · Layered foliage · Bespoke composition", description: "Fresh pink and white blooms are layered with natural greenery to create a graceful floral focal point.", featured: true },
  { src: "/real-handcrafted-flower-basket.png", alt: "Handcrafted rustic flower basket", title: "Handwoven Flower Basket", category: "Handcrafted", palette: "Berry · Ivory · Natural wood", detail: "Seasonal flowers · Handwoven basket · Table styling", description: "A rustic handwoven basket is styled with fresh seasonal flowers for an intimate table or gifting detail." },
  { src: "/real-floral-wall-decoration.png", alt: "Floral wall baskets with decorative lights", title: "Botanical Wall Detail", category: "Handcrafted", palette: "Botanical green · Warm light", detail: "Trailing greens · Fresh blooms · Handcrafted baskets", description: "Handcrafted wall baskets, trailing greens and warm lights bring a natural, welcoming character to the setting." },
  { src: "/real-grand-opening-room.png", alt: "Grand opening room with marigold garlands", title: "Grand Opening Welcome", category: "Corporate", palette: "Marigold · Saffron · Green", detail: "Entrance styling · Ceremonial flowers · Welcome display", description: "Marigold garlands and floral accents transform a professional space into a warm and celebratory welcome." },
  { src: "/real-decorated-office-corner.png", alt: "Office corner with floral bouquets and garlands", title: "Celebration Corner Styling", category: "Corporate", palette: "Vibrant floral · Warm neutrals", detail: "Bouquets · Garlands · Thoughtful finishing details", description: "Fresh bouquets, garlands and thoughtful finishing details create a polished office celebration corner." },
  { src: "/real-floral-office-desk.png", alt: "Office desk styled with flowers and gifts", title: "Floral Desk Styling", category: "Corporate", palette: "Jewel tones · Fresh green", detail: "Floral gifting · Desk styling · Petal detailing", description: "Bouquets, petals and carefully placed gifts add colour and occasion to a refined office setting." },
];

const categories = ["All work", "Corporate", "Floral Styling", "Handcrafted"];

export function PortfolioGallery() {
  const [active, setActive] = useState("All work");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const visible = active === "All work" ? images : images.filter((image) => image.category === active);
  const selected = selectedIndex === null ? null : visible[selectedIndex];

  const close = () => setSelectedIndex(null);
  const previous = () => setSelectedIndex((current) => current === null ? null : (current - 1 + visible.length) % visible.length);
  const next = () => setSelectedIndex((current) => current === null ? null : (current + 1) % visible.length);

  useEffect(() => {
    if (!selected) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, visible.length]);

  return <>
    <div className="gallery-filters" role="group" aria-label="Filter portfolio">
      {categories.map((category) => <button className={active === category ? "active" : ""} type="button" onClick={() => { setActive(category); setSelectedIndex(null); }} key={category}>{category}</button>)}
    </div>
    <div className="gallery-grid">
      {visible.map((image, index) => <button className={`gallery-project ${active === "All work" && (image.featured || index === 0) ? "gallery-wide" : ""}`} type="button" onClick={() => setSelectedIndex(index)} aria-label={`View details for ${image.title}`} key={image.src}>
        <img src={image.src} alt={image.alt}/>
        <span className="gallery-project-caption"><span>{image.category}</span><strong>View project details</strong></span>
      </button>)}
    </div>
    {selected && <div className="project-lightbox" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && close()}>
      <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
        <button className="project-close" type="button" onClick={close} aria-label="Close project details" autoFocus>×</button>
        <div className="project-image"><img src={selected.src} alt={selected.alt}/></div>
        <div className="project-copy">
          <p className="eyebrow">Real work · {selected.category}</p>
          <h3 id="project-dialog-title">{selected.title}</h3>
          <p>{selected.description}</p>
          <dl className="project-facts"><div><dt>Palette</dt><dd>{selected.palette}</dd></div><div><dt>Details</dt><dd>{selected.detail}</dd></div></dl>
          <div className="project-navigation" aria-label="Browse portfolio projects">
            <button type="button" onClick={previous} aria-label="Previous project">← Previous</button>
            <span>{(selectedIndex ?? 0) + 1} / {visible.length}</span>
            <button type="button" onClick={next} aria-label="Next project">Next →</button>
          </div>
          <a className="button" href={`https://wa.me/918793368616?text=${encodeURIComponent(`Hello Pune Flower & Event Studio, I would like to enquire about a setup similar to ${selected.title}.`)}`} target="_blank" rel="noreferrer">Enquire about a similar setup <span>↗</span></a>
          <small>Every arrangement is personalised for your occasion, venue and preferences.</small>
        </div>
      </section>
    </div>}
  </>;
}
