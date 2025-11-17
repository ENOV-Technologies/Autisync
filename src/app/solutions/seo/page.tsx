import Image from "next/image";
import Clients from "../clients";
import Link from "next/link";
import { NextSeo } from "next-seo";

const features = [
    {
        name: 'Benchmark Your Current SEO Performance -',
        description: 'To set goals, track results, and identify effective strategies, which helps us enables to know what works and what needs improvement.',
    },
    {
        name: 'Tools Utility -',
        description: 'Various tools are used for effective SEO implementation. These include Google Analytics and Search Console for data analysis, keyword research tools and more.',
    },
    {
        name: 'Social Media -',
        description: 'We integrate social media and SEO strategies to amplify online visibility, brand awareness, and user engagement, for improved search engine rankings and increased organic traffic.',
    },
]

export default function SEO() {
    return (
        <>
            {/* Landing */}
            <div className="relative overflow-hidden bg-gray-100 isolate mt-12">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-[var(--autisync-gold,#B98B2F)] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                        fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
                    />
                </svg>
                <div className="px-6 pt-10 pb-24 mx-auto max-w-7xl sm:pb-32 lg:flex lg:px-8 lg:py-20">
                    <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                                      <h1 className="mt-10 text-lg font-light text-[var(--autisync-gold,#B98B2F)]">
                Reach Your Audience
              </h1>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl">
                            Audience Engagement
                        </h2>
                        <p className="mt-6 text-base leading-8 text-gray-600">
                            Our Strategic Audience Engagement services captivate and actively involve
                            your target audience, ensuring a meaningful and interactive
                            experience.
                        </p>
                        <br/>
                        <button
                            className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-[#1C1C1C] rounded shadow outline-none hover:bg-[var(--autisync-gold,#B98B2F)] hover:shadow-md focus:outline-none sm:mr-2"
                            type="button"
                        >
                            <Link href="/servicepackage/">Checkout Our Packages</Link>
                        </button>
                    </div>
                    <div className="flex max-w-2xl mx-auto mt-16 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
                            <div className="p-2 -m-2 bg-gray-800 rounded-xl ring-1 ring-inset ring-gray-800 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <Image
                                    src="https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
                                    alt="App screenshot"
                                    width={1200}
                                    height={1200}
                                    className="w-[40rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main body */}
            <div className="py-12 bg-gray-100 sm:py-16">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="max-w-2xl mx-auto sm:text-center">
                        <h2 className="text-base font-semibold leading-7 text-[var(--autisync-gold,#B98B2F)]">Everything you need</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">A One Stop Shop</p>
                    </div>
                </div>
                <div className="relative pt-16 overflow-hidden">
                    <div className="px-6 mx-auto max-w-7xl lg:px-8">
                        <Image
                            src="/seos.png"
                            alt="App screenshot"
                            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                            width={2432}
                            height={1442}
                        />
                        <div className="relative" aria-hidden="true">
                            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-100 pt-[7%]" />
                        </div>
                    </div>
                </div>
                <div className="px-6 mx-auto mt-16 max-w-7xl sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="grid max-w-2xl grid-cols-1 mx-auto text-base leading-7 text-gray-300 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="inline font-semibold text-[#1C1C1C]">
                                    {/* <feature.icon className="absolute w-5 h-5 text-indigo-500 left-1 top-1" aria-hidden="true" /> */}
                                    {feature.name}
                                </dt>{' '}
                                <dd className="inline text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* Call to Action */}
            <div className="relative overflow-hidden bg-[#1C1C1C] isolate">
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                            <span className="text-[var(--autisync-gold,#B98B2F)]">Expand Your Reach</span>
                            <br />
                            Start using Strategic Audience Engagement Services.
                        </h2>

                        <div className="flex items-center justify-center mt-10 gap-x-6">
                            <Link
                                href="https://wa.me/+244927114400"
                                target="_blank"
                                className="rounded-md group bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:shadow-lg"
                            >
                                Call Us <span className="group-hover:text-[var(--autisync-gold,#B98B2F)]">(WhatsApp)</span>
                            </Link>
                            <Link
                                href="mailto:info@enovtechnologies.com"
                                className="text-sm font-semibold leading-6 text-gray-50 hover:text-[var(--autisync-gold,#B98B2F)]"
                            >
                                Book a Consultation <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}