import React, { useRef } from "react";
import Link from "next/link";
export default function Landing() {
    return (
        <>
            {/* Landing */}
            <div className="relative flex items-center content-center justify-center pt-20 pb-32 h-dvh">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80')",
                    }}
                >
          <span
              id="blackOverlay"
              className="absolute w-full h-full bg-black opacity-75"
          ></span>
                </div>
                <div className=" relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full px-4 ml-auto mr-auto text-center lg:w-9/12">
                            <div className="p-4">
                                <h1 className="mt-24 text-5xl font-semibold text-white ">
                                    About Us
                                </h1>
                                <p className="mt-4 text-lg text-gray-200 pb-10">
                                    Empowering businesses through AI automation, creative design, and seamless system integration.
                                    We're not just a service provider—we're your growth partner.
                                </p>
                                <p className="text-base leading-7 text-gray-300 ">
                                    <Link
                                        href={"../"}
                                        className="font-medium text-white hover:text-gray-300"
                                    >
                                        Home
                                    </Link>{" "}
                                    / Viewed Page
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 top-auto w-full h-16 overflow-hidden pointer-events-none"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-gray-200 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </div>
        </>
    );
}