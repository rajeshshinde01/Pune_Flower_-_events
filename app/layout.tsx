import type { Metadata } from "next";
import { FloatingContact } from "./FloatingContact";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pune-flower-event-studio-rajesh.rajesh-shinde01.chatgpt.site"),
  title: "Pune Flower & Event Studio | Elegant Event Décor",
  description: "Personalised flower styling, event décor, wedding rukhavat, cakes, gifts and handcrafted details in Pune.",
  icons: { icon: "/pune-flower-logo-mark.svg", shortcut: "/pune-flower-logo-mark.svg" },
  openGraph: {
    title: "Pune Flower & Event Studio",
    description: "We decorate moments you cherish forever.",
    images: [{ url: "/og.png", width: 1536, height: 864, alt: "Pune Flower & Event Studio — We decorate moments you cherish forever." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pune Flower & Event Studio",
    description: "We decorate moments you cherish forever.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<FloatingContact/></body></html>;
}
