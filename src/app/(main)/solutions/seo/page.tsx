import type { Metadata } from "next";
import SEO from "./seopage"; // or whatever your current component is named

export const metadata: Metadata = {
  title: "SEO & Digital Marketing",
  description:
      "Autisync's SEO and digital marketing services — social media management, email campaigns, content strategy, and analytics to grow your online presence.",
  alternates: { canonical: "https://www.autisync.com/solutions/seo" },
  openGraph: {
    title: "SEO & Digital Marketing — Autisync",
    description:
        "Drive traffic, build authority, and convert visitors with Autisync's data-driven marketing solutions.",
    url: "https://www.autisync.com/solutions/seo",
  },
};

export default function SEOPage() {
  return <SEO />;
}