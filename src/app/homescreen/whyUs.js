import React from "react";
import Link from "next/link";

// Simple golden “3D-ish” circle badge with a rocket icon
function RocketBadge({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="rocketGlow" cx="30%" cy="20%" r="70%">
          <stop offset="0%" stopColor="#FFE9A8" />
          <stop offset="45%" stopColor="#D5A640" />
          <stop offset="100%" stopColor="#8A6515" />
        </radialGradient>
      </defs>
      {/* circle */}
      <circle cx="20" cy="20" r="18" fill="url(#rocketGlow)" />
      {/* rocket */}
      <path
        d="M22.7 11.2c-2-.5-4.4.3-5.9 1.8-1.3 1.3-2.3 3.3-2.7 5l-.4 1.9 2.2 2.2 1.9-.4c1.7-.4 3.7-1.4 5-2.7 1.6-1.6 2.3-3.9 1.8-5.9l-2.5 2.5-2-2 2.6-2.4z"
        fill="white"
        fillOpacity="0.95"
      />
      {/* flame */}
      <path
        d="M15.4 23.6l-1.8 1c-.7.4-1.3 1-1.7 1.7l-.7 1.3 1.3-.7c.7-.4 1.3-1 1.7-1.7l1-1.8z"
        fill="#FFB347"
      />
    </svg>
  );
}

// Small bullet icon for each feature line
function BulletIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bulletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <circle cx="8" cy="8" r="6" fill="url(#bulletGrad)" />
    </svg>
  );
}

const reasons = [
  "AI-driven automation & CRM systems",
  "Bespoke branding & design assets",
  "Custom backend & app integrations",
  "Lead generation & review campaigns",
  "Mobile-ready, scalable solutions",
];

const tags = [
  "AUTOMATION",
  "RELIABILITY",
  "PREMIUM DESIGN",
  "99% UPTIME",
  "SPEED",
  "CUSTOMER-FIRST",
];

export default function WhyUs() {
  return (
    <>
      {/* Why Choose Autisync */}
      <section className="relative py-20 bg-gray-100">
        <div
          className="absolute top-0 left-0 right-0 w-full h-20 -mt-20 overflow-hidden pointer-events-none"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 2560 100"
          >
            <polygon
              className="text-gray-100 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>

        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center">
            {/* Image collage */}
            <div className="w-full px-4 mt-20 ml-auto mr-auto md:w-6/12">
              <div className="relative flex flex-wrap justify-center gap-4">
                <img
                  alt="Automate Business"
                  className="w-full rounded-lg shadow-lg md:w-5/12"
                  src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg"
                />
                <img
                  alt="Team Planning"
                  className="w-full rounded-lg shadow-lg md:w-5/12"
                  src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg"
                />
                <img
                  alt="Office Launch"
                  className="w-full rounded-lg shadow-lg md:w-10/12"
                  src="https://images.pexels.com/photos/34521/space-shuttle-lift-off-liftoff-nasa.jpg"
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
              <div className="md:pr-12">
                {/* big round icon */}
                <div className="mb-6">
                  <RocketBadge className="w-16 h-16 drop-shadow-lg" />
                </div>

                <h3 className="text-3xl font-semibold text-gray-800">
                  Why Businesses Choose{" "}
                  <span className="font-bold text-[var(--autisync-gold,#b98b2f)]">
                    AUTISYNC
                  </span>
                </h3>

                {/* bullets with custom icons */}
                <ul className="mt-6 space-y-4">
                  {reasons.map((text, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow">
                        <BulletIcon className="w-4 h-4" />
                      </span>
                      <span className="text-sm text-gray-600">{text}</span>
                    </li>
                  ))}
                </ul>

                {/* tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-gray-100 uppercase bg-gray-800 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* button */}
                  <Link href="/servicepackage"
                        className="inline-flex justify-center px-4 py-2 mt-6 text-sm font-medium text-gray-50 bg-[var(--autisync-gold,#b98b2f)] border border-transparent rounded-md shadow-lg hover:bg-[#1C1C1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Service Packages</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
