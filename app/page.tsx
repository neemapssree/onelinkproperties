import type { Metadata } from "next";
import Home from "./components/HomePage";

export const metadata: Metadata = {
  title: "OneLink Properties | Aurelia Residences",
  description:
    "Discover Aurelia Residences at Dubai Creek Harbour. Explore premium residences, amenities, pricing and investment opportunities.",
  keywords: [
    "Aurelia Residences",
    "Dubai Creek Harbour",
    "Dubai real estate",
    "OneLink Properties",
  ],
  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    title: "OneLink Properties | Aurelia Residences",
    description:
      "Discover Aurelia Residences at Dubai Creek Harbour. Explore premium residences, amenities, pricing and investment opportunities.",
    type: "website",
    images: [
      {
        url: "/images/onelink-properties-project.webp",
        width: 1200,
        height: 630,
        alt: "OneLink Properties",
      },
    ],
  },
};

export default function MainPage() {

  return (
    <>
      <Home />
    </>
    
  );
}
