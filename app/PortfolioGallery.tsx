"use client";

import { useEffect, useState } from "react";

const images = [
  { src: "/real-pink-white-floral-arrangement.png", alt: "Fresh pink and white floral arrangement", title: "Blush Floral Centrepiece", category: "Floral Styling", occasion: "Family celebration", area: "Pune", palette: "Blush · Ivory · Garden green", detail: "Fresh roses · Layered foliage · Bespoke composition", created: "A graceful table focal point with fresh flowers and layered natural greenery.", description: "Fresh pink and white blooms are layered with natural greenery to create a graceful floral focal point.", featured: true },
  { src: "/real-handcrafted-flower-basket.png", alt: "Handcrafted rustic flower basket", title: "Handwoven Flower Basket", category: "Handcrafted", occasion: "Gifting moment", area: "Pune", palette: "Berry · Ivory · Natural wood", detail: "Seasonal flowers · Handwoven basket · Table styling", created: "A personal gift arrangement for an intimate occasion.", description: "A rustic handwoven basket is styled with fresh seasonal flowers for an intimate table or gifting detail." },
  { src: "/handcrafted-hanging-basket-refined.png", alt: "A handcrafted hanging basket of pink and white flowers beside a marigold-decorated entrance", title: "Hanging Flower Basket", category: "Handcrafted", occasion: "Housewarming welcome", area: "Pune", palette: "Pink · Ivory · Marigold", detail: "Handwoven basket · Fresh flowers · Entrance styling", created: "A handwoven flower basket placed as a welcoming detail beside a traditionally decorated entrance.", description: "A handcrafted basket of fresh pink and white flowers creates a personal first impression beside the marigold-decorated entrance." },
  { src: "/handcrafted-lit-flower-basket.jpg", fit: "contain", alt: "A hanging flower basket lit with warm fairy lights", title: "A Lit Flower Basket", category: "Handcrafted", occasion: "Personal celebration", area: "Pune", palette: "Blush · Warm gold · Garden green", detail: "Fresh blooms · Handwoven basket · Warm lights", created: "A handcrafted basket layered into a warm, intimate floral corner with soft lights and natural branches.", description: "Fresh flowers, warm fairy lights and natural texture bring a gentle, personal glow to a small celebration space." },
  { src: "/handcrafted-marigold-basket.jpg", fit: "contain", alt: "Handwoven basket filled with fresh marigolds and white tuberose flowers", title: "Marigold & Tuberose Basket", category: "Handcrafted", occasion: "Ceremonial gifting", area: "Pune", palette: "Marigold · Ivory · Natural cane", detail: "Fresh tuberose · Marigolds · Handwoven basket", created: "A fresh floral basket captured from our real setup video for a ceremonial gifting moment.", description: "A handwoven basket is filled with vibrant marigolds and fragrant white tuberose, creating a fresh, cheerful detail for a welcome or ceremonial gift." },
  { src: "/handcrafted-garland-backdrop.jpg", fit: "contain", alt: "Banana leaf backdrop layered with fresh marigold and jasmine garlands", title: "Marigold & Jasmine Backdrop", category: "Handcrafted", occasion: "Traditional ceremony", area: "Pune", palette: "Marigold · Jasmine · Leaf green", detail: "Banana leaves · Fresh garlands · Hanging floral details", created: "A traditional backdrop built by hand with layered fresh leaves, marigolds and jasmine.", description: "Fresh banana leaves create a rich green canvas for cascading jasmine and marigold garlands—made for a warm, traditional ceremonial setting." },
  { src: "/handcrafted-lamp-welcome.jpg", fit: "contain", alt: "Brass ceremonial lamp beside a hand-laid rose and white petal welcome with fresh flower arrangements", title: "Lamp-Lit Petal Welcome", category: "Handcrafted", occasion: "Pooja setting", area: "Pune", palette: "Rose petals · Ivory · Marigold", detail: "Brass lamp · Petal border · Fresh floral accents", created: "A hand-finished ceremonial welcome using fresh petals, a traditional brass lamp and small floral arrangements.", description: "A traditional brass lamp and hand-laid petals bring a warm, thoughtful finish to a welcoming ceremonial corner." },
  { src: "/real-floral-swag-clean.png", alt: "Pink and white fresh flower swag with cascading greenery", title: "Blush Floral Canopy", category: "Floral Styling", occasion: "Ceremonial welcome", area: "Pune", palette: "Blush · Ivory · Botanical green", detail: "Fresh roses · White blooms · Cascading foliage", created: "An elegant entrance focal point with cascading fresh flowers.", description: "A lush fresh-flower swag combines blush roses, ivory blooms and cascading greenery for an elegant entrance or ceremonial focal point." },
  { src: "/real-grand-opening-room.png", alt: "Grand opening room with marigold garlands", title: "Grand Opening Welcome", category: "Corporate", occasion: "Office opening", area: "Pune", palette: "Marigold · Saffron · Green", detail: "Entrance styling · Ceremonial flowers · Welcome display", created: "A warm opening-day welcome using marigold garlands and flower accents.", description: "Marigold garlands and floral accents transform a professional space into a warm and celebratory welcome." },
  { src: "/corporate-floral-arrival-clear.png", fit: "contain", alt: "A complete pink, ivory and green flower arch at a grand office opening", title: "Floral Office Arrival", category: "Corporate", occasion: "Office opening", area: "Pune", palette: "Blush rose · Ivory · Fresh green", detail: "Full entrance arch · Floor flowers · Welcome styling", created: "A complete floral arrival prepared for a new office opening, from the arch to the hand-finished flower border.", description: "A generous pink-and-ivory flower arch gives the office entrance a polished, celebratory first impression." },
  { src: "/corporate-gift-table-clean.png", fit: "contain", alt: "An office gift table styled with red roses, fresh flowers, a purple wrapped gift and ceremonial details", title: "A Gift-Led Celebration", category: "Corporate", occasion: "Team appreciation", area: "Pune", palette: "Rose · Marigold · Jewel purple", detail: "Fresh rose bouquet · Wrapped gift · Ceremonial flowers", created: "A generously styled gift table brought together fresh roses, flowers, a thoughtful present and cultural details for a workplace celebration.", description: "A richly layered workplace gift table, designed so every flower and thoughtful gesture feels part of the occasion." },
  { src: "/corporate-floral-reception-clean.png", fit: "contain", alt: "An office reception styled with hanging flower baskets, marigold garlands and a warm pendant light", title: "Floral Reception Welcome", category: "Corporate", occasion: "Office celebration", area: "Pune", palette: "Marigold · Pink · Warm wood", detail: "Hanging flower baskets · Petal border · Reception styling", created: "A workplace reception prepared with suspended flower baskets, marigold details and a warm welcome light.", description: "Fresh hanging baskets, petal accents and a warm pendant light make the reception feel ready for a meaningful office celebration." },
  { src: "/corporate-ceremonial-entry.jpg", fit: "contain", alt: "An office glass entrance dressed with fresh marigold and jasmine garlands", title: "Ceremonial Office Entry", category: "Corporate", occasion: "Workplace ceremony", area: "Pune", palette: "Marigold · Jasmine · Warm white", detail: "Fresh garlands · Glass entrance · Traditional welcome", created: "Fresh garlands added a traditional welcome to a clean, modern office entrance.", description: "A simple office entry becomes ceremonial with fresh jasmine and marigold garlands layered across the glass doorway." },
  { src: "/real-decorated-office-corner.png", alt: "Office corner with floral bouquets and garlands", title: "Celebration Corner Styling", category: "Corporate", occasion: "Workplace milestone", area: "Pune", palette: "Vibrant floral · Warm neutrals", detail: "Bouquets · Garlands · Thoughtful finishing details", created: "A refined office corner designed to feel celebratory but professional.", description: "Fresh bouquets, garlands and thoughtful finishing details create a polished office celebration corner." },
  { src: "/real-floral-office-desk.png", alt: "Office desk styled with flowers and gifts", title: "Floral Desk Styling", category: "Corporate", occasion: "Team celebration", area: "Pune", palette: "Jewel tones · Fresh green", detail: "Floral gifting · Desk styling · Petal detailing", created: "A workday milestone made personal with flowers and thoughtful gifts.", description: "Bouquets, petals and carefully placed gifts add colour and occasion to a refined office setting." },
  { src: "/real-floral-display-cleaned.png", alt: "A colourful display of fresh flowers and green plants", title: "Flowers from Our Studio", category: "Floral Styling", occasion: "Seasonal flower styling", area: "Pune", palette: "Rose · Purple · Garden green", detail: "Fresh flowers · Natural foliage · Made by hand", created: "Fresh seasonal flowers gathered into a warm, natural studio display.", description: "A real arrangement from our studio, bringing fresh flowers and familiar greens together in a warm, natural display." },
  { src: "/housewarming-floral-hallway-refined.png", alt: "A home hallway lined with rose petals, floral baskets and small flower arrangements", title: "A Flower-Lined Welcome", category: "Housewarming", occasion: "Housewarming celebration", area: "Pune", palette: "Rose petals · Fresh green · Soft white", detail: "Petal pathway · Hanging baskets · Floral details", created: "A welcoming passage with petals, flower baskets and small arrangements through the home.", description: "A simple home hallway is made memorable with a petal path, fresh flower baskets and thoughtful details from door to gathering space.", featured: true },
  { src: "/housewarming-floral-balcony-detail-refined.png", alt: "Three white flower arrangements in ceramic vases above a white and pink petal carpet", title: "Floral Balcony Detail", category: "Housewarming", occasion: "Housewarming celebration", area: "Pune", palette: "Soft white · Marigold · Rose petals", detail: "Fresh flower vases · Petal carpet · Ceremonial finishing", created: "Three fresh floral arrangements and a petal carpet styled as a quiet, welcoming housewarming detail.", description: "White flowers, marigold rings and hand-laid petals turn a small balcony edge into a calm, ceremonial moment for guests to discover." },
  { src: "/housewarming-welcome-rangoli-original.jpeg", fit: "contain", alt: "Welcome board beside a complete flower-petal rangoli for a housewarming celebration", title: "A Welcome for New Beginnings", category: "Housewarming", occasion: "Housewarming celebration", area: "Pune", palette: "Marigold · Rose · Ivory · Leaf green", detail: "Welcome board · Full petal rangoli · Fresh flower details", created: "A personal welcome display and a complete petal rangoli prepared for a family new-home celebration.", description: "A personalised welcome board, fresh flowers and a hand-laid rangoli come together to greet family and guests at a new-home celebration." },
  { src: "/housewarming-welcome-table.jpeg", fit: "contain", alt: "Fresh flower arrangements and a personalised welcome board styled for a new-home celebration", title: "A Personal Welcome Table", category: "Housewarming", occasion: "New-home welcome", area: "Pune", palette: "Blush · Ivory · Fresh green", detail: "Welcome board · Fresh gerberas · Floral table styling", created: "A personalised welcome table prepared with fresh flowers and a thoughtful greeting for arriving guests.", description: "A floral welcome board, bright gerberas and soft finishing details create a personal first moment for a new-home celebration." },
  { src: "/housewarming-client-reveal.jpeg", fit: "contain", alt: "A couple beside a hand-laid flower-petal rangoli and a marigold-decorated entrance at their housewarming", title: "A Home, Beautifully Welcomed", category: "Housewarming", occasion: "Housewarming celebration", area: "Pune", palette: "Marigold · Rose · Ivory · Leaf green", detail: "Full petal rangoli · Marigold entrance · Welcome styling", created: "A complete housewarming setting, from a hand-laid petal rangoli to the flower-filled entrance behind it.", description: "A real housewarming reveal showing how a warm marigold entrance and a detailed petal rangoli come together for an unforgettable welcome." },
  { src: "/housewarming-floral-doorway-refined.png", alt: "Fresh white and purple flower garlands styled around a home doorway", title: "Fresh Flower Doorway", category: "Housewarming", occasion: "Griha Pravesh", area: "Pune", palette: "Ivory · Berry · Leaf green", detail: "Fresh garlands · Leaf detailing · Entrance styling", created: "A layered fresh-flower doorway for an intimate ceremonial welcome.", description: "Fresh white blooms, berry-toned flowers and folded leaf details create a graceful welcome at the doorway." },
  { src: "/housewarming-marigold-welcome-clear.png", fit: "contain", alt: "A complete marigold and jasmine doorway with a welcome display and flower-petal rangoli", title: "Marigold Entrance Welcome", category: "Housewarming", occasion: "Housewarming celebration", area: "Pune", palette: "Marigold · Ivory · Botanical green", detail: "Full garland doorway · Welcome styling · Petal rangoli", created: "A complete new-home entrance brought together a layered flower doorway, welcome display and hand-laid petal details.", description: "A full, celebratory entrance that carries the welcome from the flower-lined doorway to the rangoli underfoot." },
  { src: "/housewarming-petal-rangoli.jpeg", fit: "contain", alt: "A large flower-petal rangoli at the entrance of a home", title: "Petal Rangoli Welcome", category: "Housewarming", occasion: "Housewarming celebration", area: "Pune", palette: "Marigold · White petals · Rose · Leaf green", detail: "Hand-laid rangoli · Diya setting · Entrance pathway", created: "A large floral rangoli to welcome family and guests into the new home.", description: "Fresh petals are carefully arranged into a bold floral rangoli that gives the home a joyful first impression." },
  { src: "/housewarming-griha-pravesh-clear.png", fit: "contain", alt: "A complete griha pravesh welcome with flower-petal rangoli, welcome board and fresh vase arrangements", title: "Griha Pravesh Welcome", category: "Housewarming", occasion: "Griha Pravesh", area: "Pune", palette: "Marigold · Ivory · Rose petals", detail: "Welcome board · Full petal rangoli · Fresh flower vases", created: "A joyful griha pravesh welcome with a floral board, rich petal rangoli and fresh flower arrangements.", description: "A complete floral welcome that gives guests a warm, considered first impression from the doorway onward." },
  { src: "/housewarming-floral-corner-refined.png", alt: "Fresh white flowers arranged in vases along a balcony for a home celebration", title: "Fresh Floral Corner", category: "Housewarming", occasion: "Housewarming celebration", area: "Pune", palette: "Soft white · Marigold · Rose petals", detail: "Flower vases · Petal border · Small ceremonial accents", created: "A quiet home corner lifted with fresh flowers and petal detailing.", description: "Simple vases of fresh blooms and a hand-laid petal border bring a gentle, celebratory finish to an everyday space." },
  { src: "/birthday-floral-table-clean.png", fit: "contain", alt: "A birthday table with a pastel cake, wrapped gifts, fresh flowers and warm fairy lights", title: "A Flower-Filled Birthday Table", category: "Celebrations", occasion: "Birthday celebration", area: "Pune", palette: "Rose · Marigold · Warm gold", detail: "Fresh flowers · Fairy lights · Cake table styling", created: "A birthday table styled with fresh petals, cheerful flowers, thoughtful gifts and a warm light-filled backdrop.", description: "A polished birthday table where flowers, lights, gifts and a sweet centrepiece come together for a joyful celebration." },
];

const categories = ["All work", "Housewarming", "Celebrations", "Corporate", "Floral Styling", "Handcrafted"];
const showcaseSources = new Set([
  "/corporate-floral-arrival-clear.png",
  "/corporate-floral-reception-clean.png",
  "/birthday-floral-table-clean.png",
  "/housewarming-petal-rangoli.jpeg",
  "/housewarming-welcome-rangoli-original.jpeg",
  "/housewarming-floral-hallway-refined.png",
  "/handcrafted-lit-flower-basket.jpg",
  "/real-floral-swag-clean.png",
]);

export function PortfolioGallery() {
  const [active, setActive] = useState("All work");
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const visible = active === "All work" ? (showAll ? images : images.filter((image) => showcaseSources.has(image.src))) : images.filter((image) => image.category === active);
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
      {categories.map((category) => <button className={active === category ? "active" : ""} type="button" onClick={() => { setActive(category); setShowAll(category !== "All work" || showAll); setSelectedIndex(null); }} key={category}>{category}</button>)}
    </div>
    <div className="gallery-grid">
      {visible.map((image, index) => <button className={`gallery-project ${active === "All work" && (image.featured || index === 0) ? "gallery-wide" : ""}${image.fit === "contain" ? " gallery-project--contain" : ""}`} type="button" onClick={() => setSelectedIndex(index)} aria-label={`View details for ${image.title}`} key={image.src}>
        <img src={image.src} alt={image.alt}/>
        <span className="gallery-project-caption"><span>{image.category}</span><strong>View project details</strong></span>
      </button>)}
    </div>
    {active === "All work" && !showAll && <button className="gallery-show-all" type="button" onClick={() => setShowAll(true)}>View all decoration work <span>↓</span></button>}
    {selected && <div className="project-lightbox" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && close()}>
      <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
        <button className="project-close" type="button" onClick={close} aria-label="Close project details" autoFocus>×</button>
        <div className={`project-image${selected.fit === "contain" ? " project-image--contain" : ""}`}><img src={selected.src} alt={selected.alt}/></div>
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
