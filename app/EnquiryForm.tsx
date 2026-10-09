"use client";

import { FormEvent, useEffect, useState } from "react";

export function EnquiryForm() {
  const [error, setError] = useState("");
  const [occasion, setOccasion] = useState("");

  useEffect(() => {
    const syncOccasion = () => {
      const selected = new URLSearchParams(window.location.search).get("occasion") || "";
      setOccasion(selected);
    };
    syncOccasion();
    window.addEventListener("occasionchange", syncOccasion);
    return () => window.removeEventListener("occasionchange", syncOccasion);
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const selectedOccasion = String(form.get("occasion") || "").trim();
    const date = String(form.get("date") || "").trim();
    const location = String(form.get("location") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const budget = String(form.get("budget") || "").trim();
    const details = String(form.get("details") || "").trim();
    if (!name || !selectedOccasion || !date || !location || !phone) { setError("Please complete the required details before continuing."); return; }
    setError("");
    const message = `Hello Pune Flower & Event Studio,\n\nI would like to plan a celebration.\n\nName: ${name}\nOccasion: ${selectedOccasion}\nDate: ${date}\nLocation: ${location}\nWhatsApp number: ${phone}\nBudget: ${budget || "To discuss"}\nRequirements: ${details || "To discuss"}`;
    window.open(`https://wa.me/918793368616?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return <form className="enquiry-form" onSubmit={submit} noValidate>
    <div className="field"><label htmlFor="name">Your name *</label><input id="name" name="name" autoComplete="name" placeholder="How should we address you?"/></div>
    <div className="field"><label htmlFor="occasion">Occasion *</label><select id="occasion" name="occasion" value={occasion} onChange={(event) => setOccasion(event.target.value)}><option value="" disabled>Select an occasion</option><option>House warming</option><option>Wedding or rukhavat</option><option>Corporate event</option><option>Birthday or celebration</option><option>Gift, hamper or cake</option><option>Other</option></select></div>
    <div className="field"><label htmlFor="date">Event date *</label><input id="date" name="date" type="date"/></div>
    <div className="field"><label htmlFor="location">Location *</label><input id="location" name="location" placeholder="Area or venue in Pune"/></div>
    <div className="field"><label htmlFor="phone">WhatsApp number *</label><input id="phone" name="phone" autoComplete="tel" inputMode="tel" placeholder="Your number for a quick reply"/></div>
    <div className="field"><label htmlFor="budget">Approximate budget</label><select id="budget" name="budget" defaultValue=""><option value="">Prefer to discuss</option><option>Under ₹10,000</option><option>₹10,000 – ₹25,000</option><option>₹25,000 – ₹50,000</option><option>Above ₹50,000</option></select></div>
    <div className="field field-wide"><label htmlFor="details">What would you love us to create?</label><textarea id="details" name="details" rows={4} placeholder="Share your colours, theme, venue and any special details…"/></div>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button form-submit" type="submit">Continue on WhatsApp <span>↗</span></button>
    <p className="form-note">No payment is taken here. By continuing on WhatsApp, you agree that we may use the details provided to respond to your enquiry. Read our <a href="/privacy-policy">Privacy Policy</a> and <a href="/booking-policy">Booking Terms</a>.</p>
  </form>;
}
