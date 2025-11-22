import React from "react";
import Link from "next/link";

export default function Landing() {
  return (
    <>
      {/* Team Section */}
      <section className="pt-20 pb-6 bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center mb-24 text-center">
            <div className="w-full px-4 lg:w-8/12">
              <h2 className="text-4xl font-semibold text-gray-200">Dedicated Colaborators</h2>
              <p className="m-4 text-base leading-relaxed text-gray-300">
                At AutiSync, customer care takes precedence, and our
                ultimate goal is customer satisfaction. We have a dedicated team
                of collaborators committed to ensuring your success.
              </p>
                <Link href={"/about"} className="inline-flex justify-center px-4 py-2 text-sm font-medium hover:text-gray-50 text-[var(--autisync-gold,#b98b2f)] bg-gray-50 border border-transparent rounded-md shadow-lg hover:bg-[var(--autisync-gold,#b98b2f)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Meet the Team
                </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
