"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Landing from "@/app/about/Landing";

/* ========= 3D Icon Wrapper (same as home) ========= */

function ServiceIcon3D({
  children,
  gradient,
}: {
  children: React.ReactNode;
  gradient: string;
}) {
  return (
    <div className="inline-flex items-center justify-center mb-5">
      <div
        className={`
          flex items-center justify-center w-14 h-14 rounded-full
          bg-gradient-to-br ${gradient}
          shadow-[0_14px_30px_rgba(0,0,0,0.35)]
          border border-white/10
          transition-transform duration-300 ease-out
          group-hover:scale-105 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.45)]
        `}
      >
        <div
          className={`
            flex items-center justify-center w-9 h-9 rounded-full
            bg-white/95
            shadow-[inset_0_2px_4px_rgba(0,0,0,0.25)]
            transition-transform duration-300 ease-out
            group-hover:scale-110
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ========= Inline SVG Icons ========= */

const BookIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 5.5A2.5 2.5 0 0 1 7 3h11v15H7a2.5 2.5 0 0 0-2.5 2.5V5.5Z" />
    <path d="M7 3v15" />
    <path d="M10 7h5" />
    <path d="M10 10h3.5" />
  </svg>
);

const ProjectsIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
  </svg>
);

const SatisfactionIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="8" />
    <path d="M9 10h.01" />
    <path d="M15 10h.01" />
    <path d="M9 15c.7 1 1.8 1.6 3 1.6s2.3-.6 3-1.6" />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <ellipse cx="12" cy="12" rx="4" ry="9" />
    <path d="M3 12h18" />
    <path d="M5 7.5h14" />
    <path d="M5 16.5h14" />
  </svg>
);

const UptimeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l2.5 2" />
    <path d="M4 4l2 2" />
    <path d="M20 4l-2 2" />
  </svg>
);

const InnovationIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M9 10a3 3 0 0 1 6 0c0 1.5-.7 2.3-1.4 3.1-.5.6-.6 1-.6 1.9v.5" />
    <path d="M8 4l1 1" />
    <path d="M16 4l-1 1" />
    <path d="M5 10h1" />
    <path d="M18 10h1" />
    <path d="M6.5 6.5l.7.7" />
    <path d="M17.5 6.5l-.7.7" />
  </svg>
);

const ExcellenceIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3 9.5 8l-5 .7 3.6 3.5-.9 4.9L12 15l4.8 2.1-.9-4.9 3.6-3.5-5-.7z" />
    <path d="M8.5 20.5 7 22" />
    <path d="M15.5 20.5 17 22" />
  </svg>
);

const IntegrityIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 12l3 3 9-9" />
    <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
  </svg>
);

const CustomerIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="9" r="2.5" />
    <circle cx="16" cy="9" r="2.5" />
    <path d="M4.5 17.5A3.5 3.5 0 0 1 8 15h0a3.5 3.5 0 0 1 3.5 2.5" />
    <path d="M12.5 17.5A3.5 3.5 0 0 1 16 15h0a3.5 3.5 0 0 1 19.5 17.5" />
    <path d="M12 11.5v0" />
  </svg>
);

const CollaborationIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="7" cy="9" r="2.5" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M4.5 17.5A3.5 3.5 0 0 1 8 15h0a3.5 3.5 0 0 1 11.5 17.5" />
    <path d="M12.5 17.5A3.5 3.5 0 0 1 16 15h0a3.5 3.5 0 0 1 19.5 17.5" />
    <path d="M10 11h4" />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3 5 6v6c0 4.1 2.6 6.9 7 9 4.4-2.1 7-4.9 7-9V6l-7-3Z" />
    <path d="M9.5 12.5 11 14l3.5-3.5" />
  </svg>
);

/* ========== Count-up that starts on scroll into view ========== */
function CountUp({
  end,
  duration = 1500,
}: {
  end: number;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * end);
      setValue(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return <span ref={spanRef}>{value.toLocaleString()}</span>;
}

/* ========== Stats config: number + suffix + SVG icon ========== */

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Completed",
    icon: <ProjectsIcon className="w-5 h-5 text-gray-900" />,
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    icon: <SatisfactionIcon className="w-5 h-5 text-gray-900" />,
  },
  {
    value: 15,
    suffix: "+",
    label: "Countries Served",
    icon: <GlobeIcon className="w-5 h-5 text-gray-900" />,
  },
  {
    value: 99,
    suffix: "%",
    label: "Uptime Guarantee",
    icon: <UptimeIcon className="w-5 h-5 text-gray-900" />,
  },
];

const coreValues = [
  {
    title: "Innovation",
    text: "We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
    top: true,
    icon: (
      <InnovationIcon className="w-7 h-7 text-[var(--autisync-gold,#b98b2f)]" />
    ),
  },
  {
    title: "Excellence",
    text: "Quality is non-negotiable. Every project receives our full attention to detail and commitment to exceptional results.",
    top: true,
    icon: (
      <ExcellenceIcon className="w-7 h-7 text-[var(--autisync-gold,#b98b2f)]" />
    ),
  },
  {
    title: "Integrity",
    text: "Transparency, honesty, and ethical practices form the foundation of every client relationship we build.",
    top: true,
    icon: (
      <IntegrityIcon className="w-7 h-7 text-[var(--autisync-gold,#b98b2f)]" />
    ),
  },
  {
    title: "Customer-First",
    text: "Your success is our success. We listen, adapt, and deliver solutions tailored to your unique business needs.",
    top: false,
    icon: <CustomerIcon className="w-7 h-7 text-gray-900" />,
  },
  {
    title: "Collaboration",
    text: "We work as an extension of your team, fostering open communication and partnership at every stage.",
    top: false,
    icon: <CollaborationIcon className="w-7 h-7 text-gray-900" />,
  },
  {
    title: "Reliability",
    text: "Count on us for consistent delivery, 99% uptime, and ongoing support that keeps your business running smoothly.",
    top: false,
    icon: <ShieldIcon className="w-7 h-7 text-gray-900" />,
  },
];

export default function AboutPage() {
  return (
    <>
      <Landing />

      {/* Our Story Section */}
      <section className="pb-20 bg-gray-200">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center">
            {/* Text + badge */}
            <div className="w-full px-4 ml-auto mr-auto md:w-5/12 group">
              <ServiceIcon3D gradient="from-gray-200 via-gray-300 to-gray-400">
                <BookIcon className="w-6 h-6 text-[var(--autisync-gold,#B98B2F)]" />
              </ServiceIcon3D>

              <h3 className="mb-2 text-3xl leading-normal text-gray-700">
                Our Story
              </h3>
              <p className="mt-4 mb-4 leading-relaxed text-gray-600">
                AutiSync emerged from a simple vision: to bridge the gap between
                cutting-edge technology and everyday business needs. What
                started as a small team of passionate developers and designers
                has grown into a full-service digital transformation partner.
              </p>
              <p className="mt-0 mb-4 leading-relaxed text-gray-600">
                We&apos;ve helped dozens of businesses across Africa and beyond
                automate their operations, elevate their brand presence, and
                scale their digital infrastructure. From startups to established
                enterprises, we bring the same dedication to every project.
              </p>
            </div>

            {/* Image card */}
            <div className="w-full px-4 pt-10 ml-auto mr-auto md:w-4/12 group">
              <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg transition-all duration-300 ease-out transform group-hover:-translate-y-2 group-hover:shadow-[0_22px_45px_rgba(0,0,0,0.25)]">
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
                    We don&apos;t just build solutions—we craft experiences that
                    drive measurable results and lasting impact.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section – 3D circles like home page */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className="mb-10 text-center max-w-xl mx-auto">
            <p className="text-xs tracking-widest text-amber-700 font-semibold uppercase">
              Our Numbers
            </p>
            <h3 className="mt-1 text-3xl font-semibold text-gray-800">
              Impact in Numbers
            </h3>
            <p className="mt-3 text-sm text-gray-500">
              Numbers that reflect the trust our partners place in us and the
              work we deliver across every project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative flex flex-col items-center w-full min-w-0 break-words bg-white rounded-3xl shadow-lg pt-10 pb-6 px-5 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(15,23,42,0.35)]"
              >
                {/* 3D gold circle using same component as home */}
                <ServiceIcon3D gradient="from-[#b98b2f] via-[#d1a94c] to-[#7a5a1d]">
                  {stat.icon}
                </ServiceIcon3D>

                {/* Number + label */}
                <div className="mt-1 text-4xl font-extrabold text-slate-800">
                  <CountUp end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="mt-2 text-sm text-slate-500">{stat.label}</div>

                {/* Bottom gold accent bar */}
                <div className="mt-6 h-1 w-full rounded-full bg-[var(--autisync-gold,#f2a51f)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <div className="bg-gray-100">
        <div className="px-6 mx-auto py-24 max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 lg:max-w-none lg:grid-cols-2">
              <div className="transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,0,0,0.12)] bg-white rounded-xl p-6">
                <h4 className="font-bold text-gray-700 text-xl mb-2">Vision</h4>
                <p>
                  <span className="font-medium text-[var(--autisync-gold,#b98b2f)]">
                    Design
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-[var(--autisync-gold,#b98b2f)]">
                    Build
                  </span>{" "}
                  African-made technological Hardware and Software that
                  integrate with other systems and become a Tech company that
                  clients can rely on to offer nothing but the best Tech
                  solutions.
                </p>
              </div>
              <div className="transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,0,0,0.12)] bg-white rounded-xl p-6">
                <h4 className="font-bold text-gray-700 text-xl mb-2">
                  Mission
                </h4>
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

      {/* Core Values Section – 3D circles like home (top black, bottom gold) */}
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
            {coreValues.map((item) => (
              <div
                key={item.title}
                className="w-full px-4 md:w-4/12 mb-8 group"
              >
                <div className="text-center p-4 rounded-xl bg-white shadow-md transition-all duration-300 ease-out transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
                  <ServiceIcon3D
                    gradient={
                      item.top
                        ? "from-[#1C1C1C] via-[#2a2a2a] to-[#000000]" // black style
                        : "from-[#b98b2f] via-[#d1a94c] to-[#7a5a1d]" // gold style
                    }
                  >
                    {item.icon}
                  </ServiceIcon3D>

                  <h6 className="text-xl text-gray-700 mb-3">{item.title}</h6>
                  <p className="text-gray-600 px-4">{item.text}</p>
                </div>
              </div>
            ))}
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
          <div className="mx-auto max-w-auto lg:mx-0 text-center transition-all duration-500 ease-out transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-center text-white sm:text-6xl">
              Only in Teamwork do
              <br /> <span className="text-[#B28228]">We lead Change</span>
            </h2>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <Link
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-800 border border-transparent rounded-md shadow-md bg-gray-50 hover:text-white hover:bg-[#B28228] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all"
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
                The talented individuals behind AutiSync&apos;s success
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            {[
              {
                name: "Helio Garcia",
                role: "Chief Marketing Strategist",
                img: "https://media.tenor.com/b67Xti8TUp8AAAAi/kakyoin-stand-anime.gif",
              },
              {
                name: "Augusto Vieira",
                role: "Project & Business Operations Lead",
                img: "https://media.tenor.com/8KYu56w12M4AAAAi/detective-conan-okay.gif",
              },
              {
                name: "Mauro Sousa",
                role: "CTO",
                img: "https://media1.tenor.com/m/y3EYCROMmqYAAAAC/dadnaruto-anime.gif",
              },
              {
                name: "Katiana Poli",
                role: "Marketing Director",
                img: "https://media1.tenor.com/m/GcHGPM7wmaoAAAAC/aaaaaaaaaaaaaa.gif",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12"
              >
                <div className="px-6 text-center transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(0,0,0,0.18)] rounded-xl bg-white/80">
                  <img
                    alt="Team member"
                    src={member.img}
                    className="max-w-full mx-auto rounded-full"
                    style={{ maxWidth: "200px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
            Let&apos;s discuss how AutiSync can help you achieve your digital
            goals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="px-6 py-2 text-white bg-[var(--autisync-gold,#b98b2f)] rounded-md shadow-lg hover:bg-gray-900 transition-all hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,0,0,0.25)]">
                Get in Touch
              </button>
            </Link>
            <Link href="/servicepackage">
              <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-md shadow-lg hover:bg-gray-200 transition-all hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,0,0,0.18)]">
                View Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
