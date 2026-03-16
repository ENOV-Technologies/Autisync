import type { Metadata } from "next";
import Questionnaire from "./Questionnaire"; // or whatever your current component is named

export const metadata: Metadata = {
  title: "About Us",
  description:
      "Meet the Autisync team — a creative digital agency helping businesses across the UK, Portugal, Namibia, and Angola modernise their brand, systems, and customer experience.",
  alternates: { canonical: "https://www.autisync.com/about" },
  openGraph: {
    title: "About Autisync — Our Story, Team & Values",
    description:
        "From startups to enterprises — Autisync is your long-term technology partner for digital transformation.",
    url: "https://www.autisync.com/about",
  },
};

export default function QuestionnairePage() {
  return <Questionnaire />;
}