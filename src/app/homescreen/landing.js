import React from "react";
import Link from "next/link";

export default function Landing() {
    return (
        <>
            {/* Service info */}
            <div className="relative flex items-center content-center justify-center pt-24 pb-32 min-h-screen-75">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://images.pexels.com/photos/3782235/pexels-photo-3782235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                    }}
                >
          <span
              id="blackOverlay"
              className="absolute w-full h-full bg-black opacity-75"
          ></span>
                </div>
                {/* landing */}
                <div className="container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full px-4 ml-auto mr-auto text-center lg:w-8/12">
                            <div className="p-2">
                                <h1 className="text-5xl font-semibold text-white pb-4">
                                    We Systemize Your Success.
                                </h1>
                                <h3 className="font-thin text-gray-200">From branding to backend - we automate your journey.</h3>
                                <p className="mt-4 text-lg text-gray-200">
                                    AutiSync empowers service businesses with Al automation, creative design
                                    and seamless system integration. Everything done for you, from first click to booked call.
                                </p>
                            </div><br/>
                            <button className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[var(--autisync-gold,#b98b2f)] border border-transparent rounded-md shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <Link href={"/ServiceQuestionaire"}>
                                    Get Started with Us
                                </Link>
                            </button>
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

            {/* Services  and 2nd section*/}
            <section className="pb-20 -mt-24 bg-gray-100">
                <div className="container px-4 mx-auto">
                    {/* Services */}
                    <div className="flex flex-wrap">
                        {/* Marketing */}
                        <div className="w-full px-4 pt-6 text-center lg:pt-12 md:w-4/12">
                            <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                                <div className="flex-auto px-4 py-5">
                                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-red-400 rounded-full shadow-lg">
                                        <i className="fas fa-award"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold text-gray-700">
                                        Marketing & SEO
                                    </h6>
                                    <p className="mt-2 mb-4 text-gray-500">
                                        Your virtual visual, including social media management needs
                                        to achieve the goal of increasing customer satisfaction and
                                        brand awareness to target audience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Web Development */}
                        <div className="w-full px-4 text-center md:w-4/12">
                            <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                                <div className="flex-auto px-4 py-5">
                                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-gray-100 rounded-full shadow-lg">
                                        <i className="fas fa-retweet"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold text-gray-700">
                                        Web Development
                                    </h6>
                                    <p className="mt-2 mb-4 text-gray-500">
                                        It is clear that website plays a major role in the success
                                        of business marketing and operations. Start customizing,
                                        developing your website and take advantage of your success
                                        in being more visible to your potential clients.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* IT Consultation/Technical Support */}
                        <div className="w-full px-4 pt-6 text-center lg:pt-12 md:w-4/12">
                            <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                                <div className="flex-auto px-4 py-5">
                                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-red-400 rounded-full shadow-lg">
                                        <i className="fas fa-award"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold text-gray-700">
                                        IT Consultation / Technical Support
                                    </h6>
                                    <p className="mt-2 mb-4 text-gray-500">
                                        ENOV adapted the idea of advisory services that help client
                                        assess different technology strategies and, in doing so,
                                        align their technology strategies with their business or
                                        process strategies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* UI/UX Design */}
                        <div className="w-full px-4 pt-6 text-center md:w-4/12">
                            <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                                <div className="flex-auto px-4 py-5">
                                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-yellow-300 rounded-full shadow-lg">
                                        <i className="fas fa-fingerprint"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold text-gray-700">
                                        UI/UX Design
                                    </h6>
                                    <p className="mt-2 mb-4 text-gray-500">
                                        User Interface and User Experience (UI/UX) design - our
                                        designers build interfaces in software or computerized
                                        devices, focusing on looks or style.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Graphic Design */}
                        <div className="w-full px-4 text-center md:w-4/12">
                            <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                                <div className="flex-auto px-4 py-5">
                                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-gray-100 rounded-full shadow-lg">
                                        <i className="fas fa-retweet"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold text-gray-700">
                                        Graphic Design
                                    </h6>
                                    <p className="mt-2 mb-4 text-gray-500">
                                        Great Graphic Design allows you to make a positive first
                                        impression on those looking on.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Software / App Development */}
                        <div className="w-full px-4 pt-6 text-center md:w-4/12">
                            <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                                <div className="flex-auto px-4 py-5">
                                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-yellow-300 rounded-full shadow-lg">
                                        <i className="fas fa-fingerprint"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold text-gray-700">
                                        Software / App Development
                                    </h6>
                                    <p className="mt-2 mb-4 text-gray-500">
                                        Write a few lines about each one. A paragraph describing a
                                        feature will be enough. Keep you user engaged!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Who are we */}
                    <div className="flex flex-wrap items-center mt-32">
                        {/* who we are section */}
                        <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                            <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-500 bg-gray-100 rounded-full shadow-lg animate-pulse">
                                <i className="text-xl fas fa-user-friends"></i>
                            </div>
                            <h3 className="mb-2 text-3xl font-semibold leading-normal text-gray-700">
                                Who Are We?
                            </h3>
                            <p className="mt-4 mb-4 leading-relaxed text-gray-600">
                                We are a value-adding service provider of professional software
                                and graphic designing services based in Windhoek, Namibia. We
                                develop mobile applications and websites that automate our
                                clients daily functions.
                            </p>
                            <p className="mt-0 mb-4 leading-relaxed text-gray-600">
                                We offer IT technical support services to allow our clients to
                                go about their daily business activities uninterrupted. We
                                design and develop solutions that offer you seamless ease in
                                business operations.
                            </p>
                            <Link
                                href="https://wa.me/+244927114400"
                                target="_blank"
                                className="mt-8 font-bold text-gray-700 hover:text-gray-500"
                            >
                                Get in touch with Sales
                            </Link>
                        </div>
                        {/* who we are section end*/}

                        {/* Seamless services section */}
                        <div className="w-full px-4 pt-10 ml-auto mr-auto md:w-4/12">
                            <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg">
                                <img
                                    alt="..."
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                    className="w-full align-middle rounded-t-lg"
                                />
                                <blockquote className="relative p-8 mb-4">
                                    <svg
                                        preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95"
                                        className="absolute left-0 block w-full h-95-px -top-94-px"
                                    >
                                        <polygon className="text-gray-700 fill-current"></polygon>
                                    </svg>
                                    <h4 className="text-xl font-bold text-gray-600">
                                        Seamless Services
                                    </h4>
                                    <p className="mt-2 font-light text-gray-600 text-md">
                                        Giving the necessary technical support to continue your work
                                        daily and long term activities uninterrupted and
                                        efficiently.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                        {/* Seamless services section end */}
                    </div>
                </div>
            </section>
        </>
    );
}