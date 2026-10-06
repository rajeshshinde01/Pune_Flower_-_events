"use client";

const occasions = [
  { value: "House warming", number: "01", title: "House warming", text: "A welcoming home, puja details and a warm beginning." },
  { value: "Birthday or celebration", number: "02", title: "Birthday", text: "A joyful room, a beautiful cake moment and personal touches." },
  { value: "Wedding or rukhavat", number: "03", title: "Wedding", text: "Traditions, flowers and family moments brought together thoughtfully." },
  { value: "Corporate event", number: "04", title: "Office", text: "A polished welcome for an opening, milestone or team celebration." },
  { value: "Gift, hamper or cake", number: "05", title: "Gift or cake", text: "A meaningful gesture, prepared with the person receiving it in mind." },
];

export function OccasionFinder() {
  function choose(occasion: string) {
    const query = new URLSearchParams(window.location.search);
    query.set("occasion", occasion);
    window.history.replaceState({}, "", `${window.location.pathname}?${query.toString()}#enquire`);
    window.dispatchEvent(new Event("occasionchange"));
    document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return <section className="occasion-finder" aria-labelledby="occasion-finder-heading">
    <div className="occasion-finder-heading"><div><p className="eyebrow">Find your starting point</p><h2 id="occasion-finder-heading">What are you<br/><em>celebrating?</em></h2></div><p>Choose the closest occasion. We will take you to the enquiry with that choice already selected.</p></div>
    <div className="occasion-finder-grid">{occasions.map((occasion) => <button type="button" onClick={() => choose(occasion.value)} key={occasion.value}><span>{occasion.number}</span><strong>{occasion.title}</strong><p>{occasion.text}</p><small>Choose this occasion <b>↓</b></small></button>)}</div>
  </section>;
}
