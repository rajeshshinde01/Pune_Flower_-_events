import type { Metadata } from "next";
import { PolicyPage } from "../PolicyPage";

export const metadata: Metadata = { title: "Booking & Cancellation Policy | Pune Flower & Event Studio", description: "How event bookings, changes, cancellations and venue arrangements are handled." };

export default function BookingPolicy() {
  return <PolicyPage eyebrow="Planning with confidence" title="Booking & Cancellation Policy" summary="The quotation shared for your event contains the final commercial terms. This page explains the general booking process." sections={[
    { title: "Quotation and date confirmation", content: <p>We prepare a quotation after understanding the date, venue, occasion, scale and design requirements. A date is reserved only after written confirmation and receipt of the advance amount specified in that quotation. Quotations are valid for the period stated on them.</p> },
    { title: "Payments", content: <p>The advance, remaining balance, payment method and due dates are specified in the accepted quotation. Please keep payment confirmation. Work involving fresh flowers or custom-made materials may begin after confirmation.</p> },
    { title: "Design changes", content: <p>Requested changes are subject to time, material availability and revised pricing. Significant changes close to the event may not be possible. The final change deadline, where applicable, will be confirmed with the booking.</p> },
    { title: "Cancellation or rescheduling", content: <p>Please notify us as early as possible. Refund, credit or rescheduling eligibility depends on the timing, work already completed and non-recoverable costs such as fresh flowers, custom materials, transport or third-party commitments. The quotation or written booking confirmation will state the terms applicable to your event.</p> },
    { title: "Venue access and permissions", content: <p>The customer is responsible for accurate venue details, required permissions, access times, power availability and restrictions communicated by the venue. Delays, additional labour or changes caused by venue conditions may require a revised plan or additional charge agreed with the customer.</p> },
    { title: "Setup, collection and hired items", content: <p>Setup and removal windows are coordinated in advance. Hired or reusable items remain studio property and should be returned in the agreed condition. Responsibility for loss or damage, where applicable, will be described in the quotation.</p> },
    { title: "Events beyond reasonable control", content: <p>Severe weather, government restrictions, venue closure, transport disruption or other circumstances outside reasonable control may require changes or rescheduling. We will communicate promptly and work toward a fair practical solution based on commitments and costs already incurred.</p> },
  ]}/>;
}
