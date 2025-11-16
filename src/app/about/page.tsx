'use client'
import React from "react";
import Link from "next/link";
import Landing from "@/app/about/Landing";

export default function AboutPage() {
    return (
        <>
            <Landing/>

            {/* Our Story Section */}
            <section className="pb-20 bg-gray-200">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-white bg-[var(--autisync-gold,#b98b2f)] rounded-full shadow-lg">
                                <i className="text-xl fas fa-book-open"></i>
                            </div>
                            <h3 className="mb-2 text-3xl leading-normal text-gray-700 ">
                                Our Story
                            </h3>
                            <p className="mt-4 mb-4 leading-relaxed text-gray-600">
                                AutiSync emerged from a simple vision:
                                to bridge the gap between cutting-edge technology and everyday business needs.
                                What started as a small team of passionate developers and designers has grown
                                into a full-service digital transformation partner.
                            </p>
                            <p className="mt-0 mb-4 leading-relaxed text-gray-600">
                                We've helped dozens of businesses across Africa and beyond automate their
                                operations, elevate their brand presence, and scale their digital infrastructure.
                                From startups to established enterprises, we bring the same dedication to every project.
                            </p>
                        </div>

                        <div className="w-full px-4 pt-10 ml-auto mr-auto md:w-4/12">
                            <div
                                className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg">
                                <img
                                    alt="Team collaboration"
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                                    className="w-full align-middle rounded-t-lg"
                                />
                                <blockquote className="relative p-8 mb-4">
                                    <h4 className="text-xl font-bold text-gray-600">
                                        Innovation Meets Execution
                                    </h4>
                                    <p className="mt-2 font-light text-gray-600 text-md">
                                        We don't just build solutions—we craft experiences that drive
                                        measurable results and lasting impact.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-[#1C1C1C]">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap text-center">
                        <div className="w-full px-4 md:w-3/12">
                            <div className="relative flex flex-col min-w-0 mb-8">
                                <div className="flex-auto px-4 py-5">
                                    {/*<div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-center text-white bg-[var(--autisync-gold,#b98b2f)] rounded-full shadow-lg">*/}
                                    {/*    <i className="text-2xl fas fa-briefcase"></i>*/}
                                    {/*</div>*/}
                                    <h6 className="text-4xl font-semibold text-white">150+</h6>
                                    <p className="mt-2 text-gray-400">Projects Completed</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 md:w-3/12">
                            <div className="relative flex flex-col min-w-0 mb-8">
                                <div className="flex-auto px-4 py-5">
                                    {/*<div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-center text-white bg-red-400 rounded-full shadow-lg">*/}
                                    {/*    <i className="text-2xl fas fa-smile"></i>*/}
                                    {/*</div>*/}
                                    <h6 className="text-4xl font-semibold text-white">98%</h6>
                                    <p className="mt-2 text-gray-400">Client Satisfaction</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 md:w-3/12">
                            <div className="relative flex flex-col min-w-0 mb-8">
                                <div className="flex-auto px-4 py-5">
                                    {/*<div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-center text-white bg-blue-500 rounded-full shadow-lg">*/}
                                    {/*    <i className="text-2xl fas fa-globe"></i>*/}
                                    {/*</div>*/}
                                    <h6 className="text-4xl font-semibold text-white">15+</h6>
                                    <p className="mt-2 text-gray-400">Countries Served</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 md:w-3/12">
                            <div className="relative flex flex-col min-w-0 mb-8">
                                <div className="flex-auto px-4 py-5">
                                    {/*<div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-center text-white bg-green-500 rounded-full shadow-lg">*/}
                                    {/*    <i className="text-2xl fas fa-clock"></i>*/}
                                    {/*</div>*/}
                                    <h6 className="text-4xl font-semibold text-white">99%</h6>
                                    <p className="mt-2 text-gray-400">Uptime Guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <div className={"bg-gray-100"}>
                <div className="px-6 mx-auto py-24 max-w-7xl lg:px-8">
                    <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
                        <div
                            className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 lg:max-w-none lg:grid-cols-2">
                            <div>
                                <h4 className="font-bold text-gray-700 text-xl">Vision</h4>
                                <p>
                                    <span
                                        className="font-medium text-[var(--autisync-gold,#b98b2f)]">Design</span> and{" "}
                                    <span className="font-medium text-[var(--autisync-gold,#b98b2f)]">Build</span>{" "}
                                    African-made technological Hardware and Software that
                                    integrate with other systems and become a Tech company that
                                    clients can rely on to offer nothing but the best Tech
                                    solutions.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-700 text-xl">Mission</h4>
                                <p>
                  <span className="font-medium text-[var(--autisync-gold,#b98b2f)]">
                    Deliver greatness
                  </span>{" "}
                                    and nothing less. Build the best product for clients. Innovate
                                    consumer relations with the company and its customers/clients.
                                    Pro-actively supply solutions to improve business processes
                                    and the community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Core Values Section */}
            <section className="py-20 bg-gray-100">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap text-center justify-center mb-12">
                        <div className="w-full px-4 lg:w-8/12">
                            <h2 className="text-4xl font-semibold text-gray-800">
                                Our Core Values
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                The principles that guide everything we do
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        {/* Innovation */}
                        <div className="w-full px-4 md:w-4/12 mb-8">
                            <div className="text-center">
                                <div
                                    className="inline-flex items-center justify-center w-20 h-20 p-3 mb-5 text-center text-white bg-red-400 rounded-full shadow-lg">
                                    <i className="text-3xl fas fa-lightbulb"></i>
                                </div>
                                <h6 className="text-xl text-gray-700 mb-3">
                                    Innovation
                                </h6>
                                <p className="text-gray-600 px-4">
                                    We stay ahead of the curve, constantly exploring new
                                    technologies and methodologies to deliver cutting-edge solutions.
                                </p>
                            </div>
                        </div>

                        {/* Excellence */}
                        <div className="w-full px-4 md:w-4/12 mb-8">
                            <div className="text-center">
                                <div
                                    className="inline-flex items-center justify-center w-20 h-20 p-3 mb-5 text-center text-white bg-[var(--autisync-gold,#b98b2f)] rounded-full shadow-lg">
                                    <i className="text-3xl fas fa-award"></i>
                                </div>
                                <h6 className="text-xl text-gray-700 mb-3">
                                    Excellence
                                </h6>
                                <p className="text-gray-600 px-4">
                                    Quality is non-negotiable. Every project receives our full
                                    attention to detail and commitment to exceptional results.
                                </p>
                            </div>
                        </div>

                        {/* Integrity */}
                        <div className="w-full px-4 md:w-4/12 mb-8">
                            <div className="text-center">
                                <div
                                    className="inline-flex items-center justify-center w-20 h-20 p-3 mb-5 text-center text-white bg-gray-700 rounded-full shadow-lg">
                                    <i className="text-3xl fas fa-handshake"></i>
                                </div>
                                <h6 className="text-xl text-gray-700 mb-3">
                                    Integrity
                                </h6>
                                <p className="text-gray-600 px-4">
                                    Transparency, honesty, and ethical practices form the
                                    foundation of every client relationship we build.
                                </p>
                            </div>
                        </div>

                        {/* Customer-First */}
                        <div className="w-full px-4 md:w-4/12 mb-8">
                            <div className="text-center">
                                <div
                                    className="inline-flex items-center justify-center w-20 h-20 p-3 mb-5 text-center text-white bg-blue-500 rounded-full shadow-lg">
                                    <i className="text-3xl fas fa-users"></i>
                                </div>
                                <h6 className="text-xl text-gray-700 mb-3">
                                    Customer-First
                                </h6>
                                <p className="text-gray-600 px-4">
                                    Your success is our success. We listen, adapt, and deliver
                                    solutions tailored to your unique business needs.
                                </p>
                            </div>
                        </div>

                        {/* Collaboration */}
                        <div className="w-full px-4 md:w-4/12 mb-8">
                            <div className="text-center">
                                <div
                                    className="inline-flex items-center justify-center w-20 h-20 p-3 mb-5 text-center text-white bg-green-500 rounded-full shadow-lg">
                                    <i className="text-3xl fas fa-people-arrows"></i>
                                </div>
                                <h6 className="text-xl text-gray-700 mb-3">
                                    Collaboration
                                </h6>
                                <p className="text-gray-600 px-4">
                                    We work as an extension of your team, fostering open
                                    communication and partnership at every stage.
                                </p>
                            </div>
                        </div>

                        {/* Reliability */}
                        <div className="w-full px-4 md:w-4/12 mb-8">
                            <div className="text-center">
                                <div
                                    className="inline-flex items-center justify-center w-20 h-20 p-3 mb-5 text-center text-white bg-purple-500 rounded-full shadow-lg">
                                    <i className="text-3xl fas fa-shield-alt"></i>
                                </div>
                                <h6 className="text-xl text-gray-700 mb-3">
                                    Reliability
                                </h6>
                                <p className="text-gray-600 px-4">
                                    Count on us for consistent delivery, 99% uptime, and
                                    ongoing support that keeps your business running smoothly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image section */}
            <div className="relative overflow-hidden bg-[#1C1C1C] isolate sm:py-32">
                <img
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt=""
                    className="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ee0606] to-[#000000] opacity-20"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ee0606] to-[#000000] opacity-20"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="mx-auto max-w-auto lg:mx-0">
                        <h2 className="text-2xl font-bold text-center text-white sm:text-6xl">
                            Only in Teamwork do
                            <br/> <span className="text-[#B28228]">We lead Change</span>
                        </h2>
                        {/* <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p> */}
                        <div className="flex items-center justify-center mt-10 gap-x-6">
                            <Link
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-800 border border-transparent rounded-md shadow-md bg-gray-50 hover:text-white hover:bg-[#B28228] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                href={"/profile/perfil_por.pdf"}
                            >
                                Set-up a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap justify-center mb-12 text-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <h2 className="text-4xl font-semibold text-gray-800">
                                Meet Our Team
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                The talented individuals behind AutiSync's success
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center">
                        {/* Team Member 1 */}
                        <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12">
                            <div className="px-6">
                                <img
                                    alt="Team member"
                                    src="https://media.tenor.com/b67Xti8TUp8AAAAi/kakyoin-stand-anime.gif"
                                    className="max-w-full mx-auto rounded-full"
                                    style={{maxWidth: "200px"}}
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-semibold text-gray-900">
                                        Helio Garcia
                                    </h5>
                                    <p className="mt-1 text-sm text-gray-500 uppercase">
                                        Chief Marketing Strategist
                                    </p>
                                    {/*<div className="flex justify-center mt-6 space-x-2">*/}
                                    {/*    <button className="w-8 h-8 text-blue-600 bg-gray-900 rounded-full shadow-lg outline-none focus:outline-none">*/}
                                    {/*        <i className="fab fa-linkedin"></i>*/}
                                    {/*    </button>*/}
                                    {/*    <button className="w-8 h-8 text-gray-800 bg-white rounded-full shadow-lg outline-none focus:outline-none">*/}
                                    {/*        <i className="fab fa-github"></i>*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12">
                            <div className="px-6">
                                <img
                                    alt="Team member"
                                    src="https://media.tenor.com/8KYu56w12M4AAAAi/detective-conan-okay.gif"
                                    className="max-w-full mx-auto rounded-full"
                                    style={{maxWidth: "200px"}}
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-semibold text-gray-900">
                                        Augusto Vieira
                                    </h5>
                                    <p className="mt-1 text-sm text-gray-500 uppercase">
                                        Project & Business Operations Lead
                                    </p>
                                    {/*<div className="flex justify-center mt-6 space-x-2">*/}
                                    {/*    <button className="w-8 h-8 text-blue-600 bg-white rounded-full shadow-lg outline-none focus:outline-none">*/}
                                    {/*        <i className="fab fa-linkedin"></i>*/}
                                    {/*    </button>*/}
                                    {/*    <button className="w-8 h-8 text-pink-500 bg-white rounded-full shadow-lg outline-none focus:outline-none">*/}
                                    {/*        <i className="fab fa-dribbble"></i>*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12">
                            <div className="px-6">
                                <img
                                    alt="Team member"
                                    src="https://media1.tenor.com/m/y3EYCROMmqYAAAAC/dadnaruto-anime.gif"
                                    className="max-w-full mx-auto rounded-full"
                                    style={{maxWidth: "200px"}}
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-semibold text-gray-700">
                                        Mauro Sousa
                                    </h5>
                                    <p className="mt-1 text-sm text-gray-500 uppercase">
                                        CTO
                                    </p>
                                    {/*<div className="flex justify-center mt-6 space-x-2">*/}
                                    {/*    <button className="w-8 h-8 text-blue-600 bg-white rounded-full shadow-lg outline-none focus:outline-none">*/}
                                    {/*        <i className="fab fa-linkedin"></i>*/}
                                    {/*    </button>*/}
                                    {/*    <button className="w-8 h-8 text-gray-800 bg-white rounded-full shadow-lg outline-none focus:outline-none">*/}
                                    {/*        <i className="fab fa-github"></i>*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>

                        {/* Team Member 4 */}
                        <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12">
                            <div className="px-6">
                                <img
                                    // https://media1.tenor.com/m/yzBV3-2bMyUAAAAC/dancing-happy-dance.gif
                                    alt="Team member"
                                    src="https://media1.tenor.com/m/GcHGPM7wmaoAAAAC/aaaaaaaaaaaaaa.gif"
                                    className="max-w-full mx-auto rounded-full"
                                    style={{maxWidth: "200px"}}
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-semibold text-gray-700">
                                        Katiana Poli
                                    </h5>
                                    <p className="mt-1 text-sm text-gray-500 uppercase">
                                        Marketing Director
                                    </p>
                                    {/*<div className="flex justify-center mt-6 space-x-2">*/}
                                    {/*    <button className="w-8 h-8 text-blue-600 bg-white rounded-full shadow-lg outline-none focus:outline-none">*/}
                                    {/*        <i className="fab fa-linkedin"></i>*/}
                                    {/*    </button>*/}
                                    {/*    <button className="w-8 h-8 text-blue-400 bg-white rounded-full shadow-lg outline-none focus:outline-none">*/}
                                    {/*        <i className="fab fa-twitter"></i>*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 pb-40 bg-white">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Let's discuss how AutiSync can help you achieve your digital goals
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact">
                            <button
                                className="px-6 py-2 text-white bg-[var(--autisync-gold,#b98b2f)] rounded-md shadow-lg hover:bg-gray-900 transition">
                                Get in Touch
                            </button>
                        </Link>
                        <Link href="/servicepackage">
                            <button
                                className="px-6 py-2 text-gray-700 bg-gray-100 rounded-md shadow-lg hover:bg-gray-200 transition">
                                View Our Services
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
