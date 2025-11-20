import Link from "next/link";
import Script from "next/script";

const offices = [
  {
    id: 1,
    city: "Europe",
    address: ["(+44) 788 331 7646"],
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
                  <h1 className="text-5xl font-semibold text-white">
                    Get in touch with us.
                  </h1>
                  <p className="mt-4 text-lg text-gray-200">
                    Need finding the right fit for your business? – We are here
                    to help. If you need a solution to a specific challenge, or
                    just want to know more about what we offer, get in touch
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
                {/* Stats and CTA area start */}
                <div className="flex flex-wrap justify-center">
                  <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                    <div className="relative">
                      <img
                        alt="Autisync team"
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
                {/* Stats and CTA area end */}

                {/* Form and contact details start */}
                <div className="py-12 bg-white">
                  <div className="flex justify-center">
                    <div className="w-full max-w-[800px]">
                      {/* FORM (top, centered) */}
                      <div className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="min-h-[780px] rounded-xl overflow-auto">
                          <iframe
                            src="https://brand.autisync.com/widget/form/IKN6hrcTISji3knYiOt9"
                            id="inline-IKN6hrcTISji3knYiOt9"
                            title="Contact Us"
                            data-layout="{'id':'INLINE'}"
                            data-trigger-type="alwaysShow"
                            data-activation-type="alwaysActivated"
                            data-deactivation-type="neverDeactivate"
                            data-form-name="Contact Us"
                            data-height="900"
                            className="w-full h-full border-0 rounded-xl"
                          />
                        </div>
                      </div>

                      <p className="mt-3 text-xs text-gray-500 text-center">
                        Protected by Autisync — your details are safe with us.
                      </p>

                      {/* CONTACT INFO (below form) */}
                      <div className="mt-14">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 text-center">
                          Our contact information
                        </h2>

                        <p className="mb-10 text-lg text-gray-600 text-center max-w-[600px] mx-auto">
                          Customer care is our top priority. Client
                          satisfaction is our gain, and we look forward to
                          hearing from you and working with you.
                        </p>

                        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
                          {offices.map((office) => (
                            <div key={office.id}>
                              <h3 className="text-lg font-medium text-gray-900">
                                {office.city}
                              </h3>
                              <p className="mt-2 text-base text-gray-600">
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
                  </div>
                </div>
                {/* Form and contact details end */}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* GHL form embed script */}
      <Script
        src="https://brand.autisync.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}
