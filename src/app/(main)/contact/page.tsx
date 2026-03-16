import type { Metadata } from "next";
import Contact from "./Contact"; // or whatever your current component is named

export const metadata: Metadata = {
  title: "Contact Us",
  description:
      "Get in touch with Autisync. We're available across the UK, Portugal, Namibia, and Angola. Start a conversation about your next digital project.",
  alternates: { canonical: "https://www.autisync.com/contact" },
  openGraph: {
    title: "Contact Autisync",
    description:
        "Ready to start your project? Reach out to our team and we'll get back to you within one business day.",
    url: "https://www.autisync.com/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}