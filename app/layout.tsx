import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pune Flower & Event Studio | Elegant Event Décor",
  description: "Personalised flower styling, event décor, wedding rukhavat, cakes, gifts and handcrafted details in Pune.",
  icons: { icon: "/pune-flower-logo-mark.svg", shortcut: "/pune-flower-logo-mark.svg" },
  openGraph: {
    title: "Pune Flower & Event Studio",
    description: "We decorate moments you cherish forever.",
    images: ["/real-floral-entrance-people-removed.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
