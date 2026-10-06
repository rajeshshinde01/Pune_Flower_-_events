"use client";

import { useEffect, useState } from "react";

const images = [
  { src: "/real-pink-white-floral-arrangement.png", alt: "Fresh pink and white floral arrangement", title: "Blush Floral Centrepiece", category: "Floral Styling", occasion: "Family celebration", area: "Pune", palette: "Blush · Ivory · Garden green", detail: "Fresh roses · Layered foliage · Bespoke composition", created: "A graceful table focal point with fresh flowers and layered natural greenery.", description: "Fresh pink and white blooms are layered with natural greenery to create a graceful floral focal point.", featured: true },
  { src: "/real-handcrafted-flower-basket.png", alt: "Handcrafted rustic flower basket", title: "Handwoven Flower Basket", category: "Handcrafted", occasion: "Gifting moment", area: "Pune", palette: "Berry · Ivory · Natural wood", detail: "Seasonal flowers · Handwoven basket · Table styling", created: "A personal gift arrangement for an intimate occasion.", description: "A rustic handwoven basket is styled with fresh seasonal flowers for an intimate table or gifting detail." },
  { src: "/real-floral-swag-clean.png", alt: "Pink and white fresh flower swag with cascading greenery", title: "Blush Floral Canopy", category: "Floral Styling", occasion: "Ceremonial welcome", area: "Pune", palette: "Blush · Ivory · Botanical green", detail: "Fresh roses · White blooms · Cascading foliage", created: "An elegant entrance focal point with cascading fresh flowers.", description: "A lush fresh-flower swag combines blush roses, ivory blooms and cascading greenery for an elegant entrance or ceremonial focal point." },
  { src: "/real-grand-opening-room.png", alt: "Grand opening room with marigold garlands", title: "Grand Opening Welcome", category: "Corporate", occasion: "Office opening", area: "Pune", palette: "Marigold · Saffron · Green", detail: "Entrance styling · Ceremonial flowers · Welcome display", created: "A warm opening-day welcome using marigold garlands and flower accents.", description: "Marigold garlands and floral accents transform a professional space into a warm and celebratory welcome." },
  { src: "/real-decorated-office-corner.png", alt: "Office corner with floral bouquets and garlands", title: "Celebration Corner Styling", category: "Corporate", occasion: "Workplace milestone", area: "Pune", palette: "Vibrant floral · Warm neutrals", detail: "Bouquets · Garlands · Thoughtful finishing details", created: "A refined office corner designed to feel celebratory but professional.", description: "Fresh bouquets, garlands and thoughtful finishing details create a polished office celebration corner." },
  { src: "/real-floral-office-desk.png", alt: "Office desk styled with flowers and gifts", title: "Floral Desk Styling", category: "Corporate", occasion: "Team celebration", area: "Pune", palette: "Jewel tones · Fresh green", detail: "Floral gifting · Desk styling · Petal detailing", created: "A workday milestone made personal with flowers and thoughtful gifts.", description: "Bouquets, petals and carefully placed gifts add colour and occasion to a refined office setting." },
  { src: "/real-floral-display-cleaned.png", alt: "A colourful display of fresh flowers and green plants", title: "Flowers from Our Studio", category: "Floral Styling", occasion: "Seasonal flower styling", area: "Pune", palette: "Rose · Purple · Garden green", detail: "Fresh flowers · Natural foliage · Made by hand", created: "Fresh seasonal flowers gathered into a warm, natural studio display.", description: "A real arrangement from our studio, bringing fresh flowers and familiar greens together in a warm, natural display." },
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
          <dl className="project-facts"><div><dt>Occasion</dt><dd>{selected.occasion}</dd></div><div><dt>Location area</dt><dd>{selected.area}</dd></div><div><dt>Floral style</dt><dd>{selected.palette}</dd></div><div><dt>What we created</dt><dd>{selected.created}</dd></div></dl>
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
