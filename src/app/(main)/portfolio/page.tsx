import type { Metadata } from "next";
import Portfolio from "@/app/(main)/portfolio/Portfolio"; // or whatever your current component is named

export const metadata: Metadata = {
    title: "Portfolio",
    description:
        "Explore Autisync's portfolio of websites, web apps, graphic design, IT infrastructure, and marketing campaigns delivered for clients across multiple industries.",
    alternates: { canonical: "https://www.autisync.com/portfolio" },
    openGraph: {
        title: "Autisync Portfolio — Work We're Proud Of",
        description:
            "Corporate sites, e-commerce platforms, brand identities, and more. Crafted with precision by the Autisync team.",
        url: "https://www.autisync.com/portfolio",
    },
};

export default function AboutPage() {
    return <Portfolio/>;
}