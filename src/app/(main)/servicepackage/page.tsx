import type { Metadata } from "next";
import ServicePackages from "./ServicePackages"; // or whatever your current component is named

export const metadata: Metadata = {
  title: "Service Packages",
  description:
      "Explore Autisync's service packages — Small Business, Startup, and Enterprise. Includes web design, SEO, hosting, automation, CRM, and ongoing support.",
  alternates: { canonical: "https://www.autisync.com/servicepackage" },
  openGraph: {
    title: "Autisync Service Packages — Startup to Enterprise",
    description:
        "Affordable digital packages combining stunning design, automation, and strategy. Every package scales with your growth.",
    url: "https://www.autisync.com/servicepackage",
  },
};

export default function ServicePackage() {
  return <ServicePackages />;

}