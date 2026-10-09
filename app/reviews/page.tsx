import { SiteHeader } from "../SiteHeader";

const reviews = [
  { quote: "Thank you, Pune Event Decoration, for the incredible transformation! I am honestly overwhelmed by how beautiful the office looks. The choice of colours, the layout, and the warm aesthetic make it one of the best decorations I have ever seen. It has given our entire team a huge boost in morale!", name: "Rajesh Shinde", occasion: "Office decoration client" },
  { quote: "A huge thank you to Megha from Pune Event Decoration for this stunning transformation! Your service was seamless, and the final look is absolutely breathtaking. You did not just decorate; you completely elevated our whole environment!", name: "Aparna Ingale", occasion: "Event decoration client" },
  { quote: "The perfect decor for our new beginnings! Megha did an absolutely magical job for our housewarming ceremony. I am completely obsessed with how warm and welcoming the house felt. Thank you for making our special day unforgettable!", name: "Yogesh & Kranti", occasion: "Housewarming ceremony clients" },
];

export default function ReviewsPage() {
  return <main>
    <SiteHeader/>
    <section className="reviews-page-hero"><p className="eyebrow">Kind words from real clients</p><h1>Made their day.<br/><em>That made ours.</em></h1><p>Every review comes from a real celebration, opening or moment we have been trusted to style.</p></section>
    <section className="reviews-page-grid" aria-label="Client reviews">{reviews.map((review) => <article key={review.name}><span className="review-mark" aria-hidden="true">“</span><span className="review-rating" aria-label="5 out of 5 stars, Google review">★★★★★ <small>Google review · 5/5</small></span><blockquote>{review.quote}</blockquote><p>{review.name}<small>{review.occasion}</small></p></article>)}</section>
    <section className="reviews-page-cta"><p className="eyebrow">Plan with us</p><h2>Your celebration<br/><em>starts with a message.</em></h2><p>Tell us the occasion, date and location. We will help you create something personal and beautiful.</p><a className="button button-light" href="https://wa.me/918793368616?text=Hello%2C%20I%20would%20like%20to%20plan%20a%20celebration." target="_blank" rel="noreferrer">Plan on WhatsApp <span>↗</span></a></section>
    <footer><a className="brand brand-footer" href="/" aria-label="Return to homepage"><img className="brand-logo" src="/pune-flower-logo-mark.svg" alt=""/><span><strong>Pune</strong><small>Flower &amp; Event Studio</small></span></a><p>We decorate moments you cherish forever.</p><div><a href="/gallery">Gallery</a><a href="/#services">Services</a><a href="/#enquire">Plan your celebration</a></div><small>© 2026 Pune Flower &amp; Event Studio. All rights reserved.</small></footer>
    <a className="mobile-whatsapp" href="https://wa.me/918793368616?text=Hello%2C%20I%20would%20like%20to%20plan%20a%20celebration." target="_blank" rel="noreferrer" aria-label="Plan your celebration on WhatsApp">Plan on WhatsApp <span>↗</span></a>
  </main>;
}
