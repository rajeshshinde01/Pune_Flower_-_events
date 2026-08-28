import type { Metadata } from "next";
import { PolicyPage } from "../PolicyPage";

export const metadata: Metadata = { title: "Website Terms | Pune Flower & Event Studio", description: "Terms for using the Pune Flower & Event Studio website." };

export default function Terms() {
  return <PolicyPage eyebrow="Using our website" title="Website Terms" summary="These terms apply when you browse this website or use it to begin an enquiry with Pune Flower & Event Studio." sections={[
    { title: "Website purpose", content: <p>The website introduces our decoration, floral, cake, gifting and handcrafted services. Website content is general information and does not by itself create a confirmed booking, fixed quotation or guarantee of availability.</p> },
    { title: "Enquiries and confirmation", content: <p>Submitting an enquiry or speaking with us does not reserve a date. A booking is confirmed only when we provide written confirmation and any advance amount stated in the accepted quotation has been received.</p> },
    { title: "Portfolio and design references", content: <p>Portfolio photographs show previous work and inspiration. Every venue, flower season and event is different. Final colours, scale, materials and placement are agreed for each booking and may not be identical to a reference photograph.</p> },
    { title: "Availability and substitutions", content: <p>Fresh flowers, colours and materials may vary because of season, market availability or venue conditions. Where a specified item becomes unavailable, we will discuss a suitable alternative intended to preserve the agreed overall style and value.</p> },
    { title: "Intellectual property", content: <p>Unless otherwise stated, the website design, copy, brand elements and portfolio presentation belong to Pune Flower & Event Studio or are used with permission. They may not be republished commercially without consent.</p> },
    { title: "External services", content: <p>The website may open phone, WhatsApp or other third-party services. Their availability, security and privacy practices are controlled by those providers.</p> },
    { title: "Changes and contact", content: <p>We may update website information and these terms when necessary. If any part is unclear, please contact us before relying on it or confirming a booking.</p> },
  ]}/>;
}
