import type { Metadata } from "next";
import GraphicPage from "./graphicPage"; // or whatever your current component is named

export const metadata: Metadata = {
    title: "Graphic Design",
    description:
        "Brand identities, logos, print collateral, social media kits, and more. Autisync's graphic design team crafts visuals that make lasting impressions.",
    alternates: { canonical: "https://www.autisync.com/solutions/graphicDesign" },
    openGraph: {
        title: "Graphic Design Services — Autisync",
        description:
            "From logo design to full brand identity packages. Visuals that communicate your value at a glance.",
        url: "https://www.autisync.com/solutions/graphicDesign",
    },
};

export default function Graphic() {
    return <GraphicPage />;
}