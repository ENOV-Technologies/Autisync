import React from "react";
import Link from "next/link";

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
            ></polygon>
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
                <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-white bg-[var(--autisync-gold,#b98b2f)] rounded-full shadow-lg animate-pulse">
                  <i className="text-xl fas fa-rocket"></i>
                </div>
                <h3 className="text-3xl font-semibold text-gray-800">
                  Why Businesses Choose <span className="text-[var(--autisync-gold,#b98b2f)] font-bold">AUTISYNC</span>
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    { icon: "fa-brain", text: "AI-driven automation & CRM systems" },
                    { icon: "fa-palette", text: "Bespoke branding & design assets" },
                    { icon: "fa-code", text: "Custom backend & app integrations" },
                    { icon: "fa-bullhorn", text: "Lead generation & review campaigns" },
                    { icon: "fa-mobile-alt", text: "Mobile-ready, scalable solutions" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-gray-500 uppercase bg-gray-200 rounded-full">
                        <i className={`fas ${item.icon}`}></i>
                      </span>
                      <span className="text-gray-600">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {["Automation", "Reliability", "Premium Design", "99% Uptime", "Speed", "Customer-First"].map(
                    (tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2 py-1 text-xs font-semibold text-gray-300 uppercase bg-gray-700 rounded-full shadow"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                  <button className="inline-flex justify-center px-4 py-2 mt-4 text-sm font-medium hover:text-gray-50 text-gray-50 bg-[var(--autisync-gold,#b98b2f)] border border-transparent rounded-md shadow-lg hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      <Link href={"/servicepackage"}>
                          Service Packages
                      </Link>
                  </button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
