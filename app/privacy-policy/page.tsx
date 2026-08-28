import type { Metadata } from "next";
import { PolicyPage } from "../PolicyPage";

export const metadata: Metadata = { title: "Privacy Policy | Pune Flower & Event Studio", description: "How Pune Flower & Event Studio handles enquiry and customer information." };

export default function PrivacyPolicy() {
  return <PolicyPage eyebrow="Your privacy" title="Privacy Policy" summary="This policy explains what information we receive when you contact us, why we use it, and the choices available to you." sections={[
    { title: "Information we receive", content: <><p>When you use our enquiry form or contact us by WhatsApp or phone, you may provide your name, event date, occasion, venue or area, budget preferences, design choices and other details needed to understand your celebration.</p><p>Our website does not take payment or request card information.</p></> },
    { title: "How we use information", content: <><p>We use enquiry information to respond to you, check availability, prepare a suitable concept or quotation, coordinate an accepted booking and provide customer support.</p><p>We do not sell or rent your personal information.</p></> },
    { title: "WhatsApp and service providers", content: <p>Continuing through WhatsApp sends your message to WhatsApp, where its own terms and privacy practices apply. Information may also be processed by providers that support website hosting or communications, only to the extent needed to provide those services.</p> },
    { title: "Retention and protection", content: <p>We keep enquiry and booking information only for as long as reasonably needed to respond, provide an agreed service, maintain necessary business records or meet applicable legal requirements. We take reasonable steps to protect information, but no internet or messaging service can guarantee absolute security.</p> },
    { title: "Your choices", content: <p>You may choose not to provide optional details. You may ask us to correct or delete information you previously shared, or withdraw consent for future enquiry communication, by calling +91 87933 68616. Some records may need to be retained where required for an existing booking or by law.</p> },
    { title: "Updates", content: <p>We may update this policy when our services or legal obligations change. The effective date shown above identifies the current version.</p> },
  ]}/>;
}
