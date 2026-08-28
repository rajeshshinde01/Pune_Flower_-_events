"use client";

import { FormEvent, useState } from "react";

export function EnquiryForm() {
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const occasion = String(form.get("occasion") || "").trim();
    const date = String(form.get("date") || "").trim();
    const location = String(form.get("location") || "").trim();
    const budget = String(form.get("budget") || "").trim();
    const style = String(form.get("style") || "").trim();
    const palette = String(form.get("palette") || "").trim();
    const details = String(form.get("details") || "").trim();
    if (!name || !occasion || !date || !location) { setError("Please complete the required details before continuing."); return; }
    setError("");
    const message = `Hello Pune Flower & Event Studio,\n\nI would like to plan a celebration.\n\nName: ${name}\nOccasion: ${occasion}\nDate: ${date}\nLocation: ${location}\nStyle: ${style || "Open to suggestions"}\nColour direction: ${palette || "Open to suggestions"}\nBudget: ${budget || "To discuss"}\nRequirements: ${details || "To discuss"}`;
    window.open(`https://wa.me/918793368616?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return <form className="enquiry-form" onSubmit={submit} noValidate>
    <div className="field"><label htmlFor="name">Your name *</label><input id="name" name="name" autoComplete="name" placeholder="How should we address you?"/></div>
    <div className="field"><label htmlFor="occasion">Occasion *</label><select id="occasion" name="occasion" defaultValue=""><option value="" disabled>Select an occasion</option><option>House warming</option><option>Wedding or rukhavat</option><option>Corporate event</option><option>Birthday or celebration</option><option>Gift, hamper or cake</option><option>Other</option></select></div>
    <div className="field"><label htmlFor="date">Event date *</label><input id="date" name="date" type="date"/></div>
    <div className="field"><label htmlFor="location">Location *</label><input id="location" name="location" placeholder="Area or venue in Pune"/></div>
    <fieldset className="choice-field field-wide"><legend>Which feeling suits your celebration?</legend><div className="choice-grid"><label><input type="radio" name="style" value="Elegant and minimal"/><span>Elegant &amp; minimal</span></label><label><input type="radio" name="style" value="Lush and floral"/><span>Lush &amp; floral</span></label><label><input type="radio" name="style" value="Traditional and warm"/><span>Traditional &amp; warm</span></label><label><input type="radio" name="style" value="Modern and expressive"/><span>Modern &amp; expressive</span></label></div></fieldset>
    <fieldset className="choice-field field-wide"><legend>Choose a colour direction</legend><div className="palette-grid"><label><input type="radio" name="palette" value="Blush garden"/><span><i className="palette-blush"/>Blush garden</span></label><label><input type="radio" name="palette" value="Marigold glow"/><span><i className="palette-marigold"/>Marigold glow</span></label><label><input type="radio" name="palette" value="Ivory and green"/><span><i className="palette-ivory"/>Ivory &amp; green</span></label><label><input type="radio" name="palette" value="Custom palette"/><span><i className="palette-custom"/>Make it yours</span></label></div></fieldset>
    <div className="field"><label htmlFor="budget">Approximate budget</label><select id="budget" name="budget" defaultValue=""><option value="">Prefer to discuss</option><option>Under ₹10,000</option><option>₹10,000 – ₹25,000</option><option>₹25,000 – ₹50,000</option><option>Above ₹50,000</option></select></div>
    <div className="field field-wide"><label htmlFor="details">What would you love us to create?</label><textarea id="details" name="details" rows={4} placeholder="Share your colours, theme, venue and any special details…"/></div>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button form-submit" type="submit">Continue on WhatsApp <span>↗</span></button>
    <p className="form-note">No payment is taken here. We will confirm availability and details personally.</p>
  </form>;
}
