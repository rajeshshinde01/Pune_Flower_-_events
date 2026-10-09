import { PortfolioGallery } from "../PortfolioGallery";
import { SiteHeader } from "../SiteHeader";

export default function GalleryPage() {
  return <main>
    <SiteHeader/>
    <section className="gallery-page-hero">
      <p className="eyebrow">Pune Flower &amp; Event Studio</p>
      <h1>Explore our<br/><em>real work.</em></h1>
      <p>Browse complete floral setups, welcoming entrances, ceremonial details, cakes, gifts and celebrations—each designed for a real occasion.</p>
      <a className="button" href="https://wa.me/918793368616?text=Hello%2C%20I%20would%20like%20to%20plan%20a%20celebration." target="_blank" rel="noreferrer">Plan on WhatsApp <span>↗</span></a>
    </section>
    <section className="gallery-page-work" aria-labelledby="gallery-work-heading">
      <div className="gallery-page-heading"><div><p className="eyebrow">All collections</p><h2 id="gallery-work-heading">Find a style that<br/><em>feels like you.</em></h2></div><p>Select a collection to explore, then open any photograph to see the full design and enquire about a similar setup.</p></div>
      <PortfolioGallery initialShowAll/>
    </section>
    <section className="gallery-page-cta"><p className="eyebrow">Your occasion, your way</p><h2>Have something<br/><em>different in mind?</em></h2><p>Share your occasion, space and inspiration. We will help you shape a setup that feels personal to you.</p><a className="button button-light" href="https://wa.me/918793368616?text=Hello%2C%20I%20would%20like%20to%20plan%20a%20celebration." target="_blank" rel="noreferrer">Plan on WhatsApp <span>↗</span></a></section>
    <footer><a className="brand brand-footer" href="/" aria-label="Return to homepage"><img className="brand-logo" src="/pune-flower-logo-mark.svg" alt=""/><span><strong>Pune</strong><small>Flower &amp; Event Studio</small></span></a><p>We decorate moments you cherish forever.</p><div><a href="/gallery">Gallery</a><a href="/#services">Services</a><a href="/#enquire">Plan your celebration</a></div><small>© 2026 Pune Flower &amp; Event Studio. All rights reserved.</small></footer>
    <a className="mobile-whatsapp" href="https://wa.me/918793368616?text=Hello%2C%20I%20would%20like%20to%20plan%20a%20celebration." target="_blank" rel="noreferrer" aria-label="Plan your celebration on WhatsApp">Plan on WhatsApp <span>↗</span></a>
  </main>;
}
