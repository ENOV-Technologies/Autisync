import emailjs from "@emailjs/browser";
import Link from "next/link";
// import React, { useRef, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import { NextSeo } from "next-seo";

const offices = [
    {
        id: 1,
        city: "Europe",
        address: ["(+44) 081 306 2763"],
    },
    {
        id: 2,
        city: "Namibia & Angola",
        address: ["(+244) 927 114 400", "(+264) 927 114 403"],
    },
    {
        id: 3,
        city: "General contact",
        address: ["info@autisync.com"],

    },
];

export default function Contact() {
    return (
        <>
            <main>
                {/* Landing */}
                <div className="relative flex items-center content-center justify-center pt-36 pb-76 min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                        }}
                    >
            <span
                id="blackOverlay"
                className="absolute w-full h-full bg-black opacity-75"
            ></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
                                <div className="p-4">
                                    <h1 className="text-5xl font-semibold text-white ">
                                        Get in touch with us.
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-200">
                                        Need finding the right fit for your business? – We are here
                                        to help. If you need a solution to a specific challenge, or
                                        just want to know more about what we offer. Get in touch
                                        with the right people at Autisync.
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
                                className="text-gray-100 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                <section className="relative py-16 bg-gray-100">
                    <div className="container px-4 mx-auto">
                        <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl -mt-44">
                            <div className="px-6">
                                {/* Stats and CTA area start*/}
                                <div className="flex flex-wrap justify-center">
                                    <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                src="/img/team-2-800x800.jpg"
                                                className="absolute h-auto -m-16 -ml-20 align-middle border-none rounded-full shadow-xl lg:-ml-16 max-w-150-px"
                                            />
                                        </div>
                                    </div>
                                    {/* Service Button */}
                                    <div className="w-full px-4 lg:w-4/12 lg:order-3 lg:text-right lg:self-center">
                                        <div className="px-3 py-0 mt-32 sm:mt-0">
                                            <button
                                                className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-[#1C1C1C] rounded shadow outline-none hover:bg-[var(--autisync-gold,#B98B2F)] hover:shadow-md focus:outline-none sm:mr-2"
                                                type="button"
                                            >
                                                <Link href="/servicepackage/">Service Package</Link>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Stats area */}
                                    <div className="w-full px-4 lg:w-4/12 lg:order-1">
                                        <div className="flex justify-center py-0 pt-8 lg:pt-4">
                                            <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide text-gray-600 uppercase">
                          179
                        </span>
                                                <span className="text-sm text-gray-400">Queries</span>
                                            </div>
                                            <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide text-gray-600 uppercase">
                          4
                        </span>
                                                <span className="text-sm text-gray-400">
                          Support Line
                        </span>
                                            </div>
                                            <div className="p-3 text-center lg:mr-4">
                        <span className="block text-xl font-bold tracking-wide text-gray-600 uppercase">
                          95%
                        </span>
                                                <span className="text-sm text-gray-400">
                          Customer Satisfaction
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Stats and CTA area end*/}

                                {/* Form and contact details start */}
                                <div className="py-4 mt-0 text-center border-t border-gray-200">
                                    <div className="flex flex-wrap justify-center">
                                        <section className="relative py-5">
                                            <div className="container px-0 mx-auto">
                                                <div className="flex flex-wrap items-center">
                                                    {/* Contact Form Start*/}
                                                    <div className="w-full px-4 py-3 ml-auto mr-auto bg-gray-100 rounded-lg shadow-2xl md:w-4/12">
                                                        <form
                                                            // ref={form}
                                                            // onSubmit={sendEmail}
                                                            className="grid grid-cols-1 mt-9 gap-y-4 sm:grid-cols-2 sm:gap-x-3"
                                                        >
                                                            {/* Name field */}
                                                            <div>
                                                                <label
                                                                    htmlFor="first-name"
                                                                    className="block mb-2 text-sm font-medium text-left text-gray-700"
                                                                >
                                                                    Name
                                                                    <span className="text-[var(--autisync-gold,#B98B2F)]"> *</span>
                                                                </label>
                                                                <div className="mt-1">
                                                                    <input
                                                                        type="text"
                                                                        name="first-name"
                                                                        id="first-name"
                                                                        autoComplete="given-name"
                                                                        placeholder="Name"
                                                                        className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-300 transition-all duration-150 ease-linear bg-white border-0 rounded shadow focus:outline-none focus:ring"
                                                                    />
                                                                </div>
                                                            </div>
                                                            {/* Email field */}
                                                            <div>
                                                                <label
                                                                    htmlFor="last-name"
                                                                    className="block mb-2 text-sm font-medium text-left text-gray-700"
                                                                >
                                                                    Email <span className="text-[var(--autisync-gold,#B98B2F)]">*</span>
                                                                </label>
                                                                <div className="mt-1">
                                                                    <input
                                                                        required
                                                                        id="email"
                                                                        name="email"
                                                                        type="email"
                                                                        autoComplete="email"
                                                                        placeholder="Email"
                                                                        className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-300 transition-all duration-150 ease-linear bg-white border-0 rounded shadow focus:outline-none focus:ring"
                                                                    />
                                                                </div>
                                                            </div>
                                                            {/* Company field */}
                                                            <div className="">
                                                                <label
                                                                    htmlFor="company"
                                                                    className="block mb-2 text-sm font-medium text-left text-gray-700"
                                                                >
                                                                    Company
                                                                </label>
                                                                <div className="mt-1">
                                                                    <input
                                                                        type="text"
                                                                        name="company"
                                                                        id="company"
                                                                        autoComplete="organization"
                                                                        placeholder="Company Name"
                                                                        className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-300 transition-all duration-150 ease-linear bg-white border-0 rounded shadow focus:outline-none focus:ring"
                                                                    />
                                                                </div>
                                                            </div>
                                                            {/* Phone field */}
                                                            <div className="">
                                                                <div className="flex justify-between">
                                                                    <label
                                                                        htmlFor="phone"
                                                                        className="block mb-2 text-sm font-medium text-left text-gray-700"
                                                                    >
                                                                        Phone
                                                                    </label>
                                                                    <span
                                                                        id="phone-description"
                                                                        className="text-sm text-gray-500"
                                                                    >
                                    Optional
                                  </span>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    name="phone"
                                                                    id="phone"
                                                                    autoComplete="tel"
                                                                    aria-describedby="phone-description"
                                                                    placeholder="Contact Number"
                                                                    className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-300 transition-all duration-150 ease-linear bg-white border-0 rounded shadow focus:outline-none focus:ring"
                                                                />
                                                            </div>
                                                            {/* Message field */}
                                                            <div className="sm:col-span-2">
                                                                <div className="flex justify-between">
                                                                    <label
                                                                        htmlFor="how-can-we-help"
                                                                        className="block mb-2 text-sm font-medium text-left text-gray-700"
                                                                    >
                                                                        How can we help you?{" "}
                                                                        <span className="text-[var(--autisync-gold,#B98B2F)]">*</span>
                                                                    </label>
                                                                    <span
                                                                        id="message-description"
                                                                        className="text-sm text-gray-500"
                                                                    >
                                    Max. 500 characters
                                  </span>
                                                                </div>
                                                                <div className="mt-1">
                                  <textarea
                                      required
                                      id="message"
                                      name="message"
                                      aria-describedby="message-description"
                                      placeholder="Enter message here..."
                                      rows={4}
                                      className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-300 transition-all duration-150 ease-linear bg-white border-0 rounded shadow focus:outline-none focus:ring"
                                      defaultValue={""}
                                  />
                                                                </div>
                                                            </div>
                                                            {/* referral field */}
                                                            <div className="sm:col-span-2">
                                                                <label
                                                                    htmlFor="how-did-you-hear-about-us"
                                                                    className="block mb-2 text-sm font-medium text-left text-gray-700"
                                                                >
                                                                    How did you hear about us?{" "}
                                                                    <span className="text-[var(--autisync-gold,#B98B2F)]">*</span>
                                                                </label>
                                                                <div className="mt-1">
                                                                    <input
                                                                        type="text"
                                                                        name="how-did-you-hear-about-us"
                                                                        id="how-did-you-hear-about-us"
                                                                        placeholder="Friend/social media/ads/Flyer and etc.."
                                                                        className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-300 transition-all duration-150 ease-linear bg-white border-0 rounded shadow focus:outline-none focus:ring"
                                                                    />
                                                                </div>
                                                            </div>

                                                        </form>
                                                        <br />
                                                        <div
                                                            className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
                                                            role="alert"
                                                            hidden
                                                            id="Success"
                                                        >
                              <span className="font-medium">
                                Enquiry Sent Successfully
                              </span>
                                                        </div>
                                                    </div>
                                                    {/* Contact Form End*/}

                                                    {/* Contact Numbers End*/}
                                                    <div className="w-full px-4 ml-auto mr-auto md:w-7/12">
                                                        <div className="px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
                                                            <h2
                                                                id="offices-heading"
                                                                className="text-3xl font-bold tracking-tight text-left text-warm-gray-900"
                                                            >
                                                                Our contact information
                                                            </h2>
                                                            <p className="max-w-3xl mt-6 text-lg text-left text-warm-gray-500">
                                                                Customer care is our top priority. Client satisfaction is our gain, and we look
                                                                forward to hearing from you and working with
                                                                you.
                                                            </p>
                                                            <div className="grid grid-cols-1 gap-10 mt-10 text-left sm:grid-cols-2 lg:grid-cols-3">
                                                                {offices.map((office) => (
                                                                    <div key={office.id}>
                                                                        <h3 className="text-lg font-medium text-warm-gray-900">
                                                                            {office.city}
                                                                        </h3>
                                                                        <p className="mt-2 text-base text-warm-gray-500">
                                                                            {office.address.map((line) => (
                                                                                <span key={line} className="block">
                                          {line}
                                        </span>
                                                                            ))}
                                                                        </p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Contact Numbers End*/}
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                                {/* Form and contact details end */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}