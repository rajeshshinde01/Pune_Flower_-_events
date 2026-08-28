import type { ReactNode } from "react";

type Section = { title: string; content: ReactNode };

export function PolicyPage({ eyebrow, title, summary, sections }: { eyebrow: string; title: string; summary: string; sections: Section[] }) {
  return <main className="policy-shell">
    <header className="policy-header">
      <a className="brand" href="/" aria-label="Return to Pune Flower and Event Studio home"><img className="brand-logo" src="/pune-flower-logo-mark.svg" alt=""/><span><strong>Pune</strong><small>Flower &amp; Event Studio</small></span></a>
      <a className="text-link" href="/">← Back to website</a>
    </header>
    <article className="policy-page">
      <div className="policy-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{summary}</p><small>Effective 28 August 2026</small></div>
      <div className="policy-content">
        {sections.map((section, index) => <section key={section.title}><span>0{index + 1}</span><div><h2>{section.title}</h2>{section.content}</div></section>)}
      </div>
      <aside className="policy-help"><p className="eyebrow">Questions about these terms?</p><h2>We are happy to clarify.</h2><p>For privacy, booking or policy questions, call us before confirming your event.</p><a className="button" href="tel:+918793368616">Call +91 87933 68616 <span>↗</span></a></aside>
    </article>
    <footer className="policy-footer"><a href="/privacy-policy">Privacy Policy</a><a href="/terms">Website Terms</a><a href="/booking-policy">Booking Policy</a><small>© 2026 Pune Flower &amp; Event Studio.</small></footer>
  </main>;
}
