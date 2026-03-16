import type { Metadata } from "next";
import Development from "./development"; // or whatever your current component is named

export const metadata: Metadata = {
    title: "Web & App Development",
    description:
        "Custom website and application development by Autisync. From marketing sites to full-stack web apps — built with Next.js, React, and modern technologies.",
    alternates: { canonical: "https://www.autisync.com/solutions/devServices" },
    openGraph: {
        title: "Web & App Development — Autisync",
        description:
            "Bespoke websites and web applications built for performance, scalability, and conversion.",
        url: "https://www.autisync.com/solutions/devServices",
    },
};

export default function DevelopmentPage() {
    return <Development />;
}