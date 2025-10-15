import Link from "next/link";
import emailjs from "@emailjs/browser";
import React, { useRef, useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";


export default function CallToAction() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://brand.autisync.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);
    return (
        <>
            {/* Call to Action */}
            <section className="relative block pt-6">
                <div
                    className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20 overflow-hidden pointer-events-none"
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

                    </svg>
                </div>

                <div className="container px-4 mx-auto lg:pt-24 lg:pb-24">
                    <div className="flex flex-wrap justify-center text-center">
                        <div className="w-full px-4 lg:w-6/12">
                            <h2 className="text-4xl font-semibold text-white">
                                Why Build Something with Us?
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center mt-12">
                        <div className="w-full px-4 text-center lg:w-3/12">
                            <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-800 bg-white rounded-full shadow-lg animate-pulse">
                                <i className="text-xl fas fa-medal"></i>
                            </div>
                            <h6 className="mt-5 text-xl font-semibold text-white">
                                Cost Effective
                            </h6>
                            <p className="mt-2 mb-4 text-gray-400">
                                Service & support that allow you to get the best from your
                                I.T./software investment
                            </p>
                        </div>
                        <div className="w-full px-4 text-center lg:w-3/12">
                            <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-800 bg-red-400 rounded-full shadow-lg animate-pulse">
                                <i className="text-xl fas fa-poll"></i>
                            </div>
                            <h5 className="mt-5 text-xl font-semibold text-white">
                                Customer-Centric
                            </h5>
                            <p className="mt-2 mb-4 text-gray-400">
                                Positioning a customer-first, quality-first approach as the
                                foundation of our business
                            </p>
                        </div>
                        <div className="w-full px-4 text-center lg:w-3/12 group">
                            <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-800 bg-yellow-300 rounded-full shadow-lg animate-pulse">
                                <i className="text-xl fas fa-lightbulb"></i>
                            </div>
                            <h5 className="mt-5 text-xl font-semibold text-white">
                                Growth-Capability
                            </h5>
                            <p className="mt-2 mb-4 text-gray-400">
                                Our strategey is to attain and build, business partner
                                relationships to aid business growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            {/*<section className="relative block py-6 bg-[#1C1C1C] lg:pt-0">*/}
            {/*    <div className="container px-4 mx-auto">*/}
            {/*        <div className="flex flex-wrap justify-center -mt-48 lg:-mt-64">*/}
            {/*            <div className="w-full px-4 lg:w-6/12">*/}
            {/*                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg">*/}
            {/*                    <div className="flex-auto p-5 lg:p-10">*/}
            {/*                        <h4 className="text-2xl font-semibold text-gray-800">Want to work with us?</h4>*/}
            {/*                        <p className="mt-1 mb-4 text-gray-600">*/}
            {/*                            Complete this form and we’ll be in touch within 24 hours. Or{" "}*/}
            {/*                            <a*/}
            {/*                                href="https://wa.me/244927114400"*/}
            {/*                                className="text-[var(--autisync-gold,#b98b2f)] font-semibold hover:text-yellow-700"*/}
            {/*                            >*/}
            {/*                                message us on WhatsApp*/}
            {/*                            </a>*/}
            {/*                            .*/}
            {/*                        </p>*/}

            {/*                        /!* Responsive Autisync Form *!/*/}
            {/*                        <div className="relative w-full overflow-hidden rounded-md" style={{ paddingTop: "150%" }}>*/}
            {/*                            <iframe*/}
            {/*                                src="https://brand.autisync.com/widget/form/IKN6hrcTISji3knYiOt9"*/}
            {/*                                className="absolute top-0 left-0 w-full h-full rounded-md"*/}
            {/*                                style={{*/}
            {/*                                    border: "none",*/}
            {/*                                    background: "#f9fafb",*/}
            {/*                                }}*/}
            {/*                                id="inline-IKN6hrcTISji3knYiOt9"*/}
            {/*                                data-layout='{"id":"INLINE"}'*/}
            {/*                                data-trigger-type="alwaysShow"*/}
            {/*                                data-activation-type="alwaysActivated"*/}
            {/*                                data-deactivation-type="neverDeactivate"*/}
            {/*                                data-form-name="Contact Us"*/}
            {/*                                title="Contact Us"*/}
            {/*                            />*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>
    );
}