import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnchorButton } from "@/app/components/AnchorButton";

// Heroicons v2 (24/outline)
import {
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

// --------- DATA ---------
const solutions = [
  {
    name: "Creative, Design & Multimedia Services",
    description:
      "Logo Design | Stationery Design | Web Design | Print Media Design | Multimedia Design",
    href: "/solutions/graphicDesign",
    icon: ChartBarIcon,
  },
  {
    name: "SEO & Audience Engagement",
    description:
      "Search engine optimization, keyword tracking, analytics, and brand growth strategies.",
    href: "/solutions/seo",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "IT Consultation",
    description:
      "Technical Support | I.T. Consultation | Social Media Management | Research Documentation | System Security Test",
    href: "/solutions/itConsultation",
    icon: ShieldCheckIcon,
  },
  {
    name: "Development Services",
    description:
      "Software Development | Mobile Apps | Enterprise Systems | CMS Solutions | Integrations",
    href: "/solutions/devServices/",
    icon: Squares2X2Icon,
  },
];

const callsToAction = [
  {
    name: "Questionnaire",
    href: "/ServiceQuestionaire/",
  },
  {
    name: "Service Packages",
    href: "/servicepackage/",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [flyoutOpen, setFlyoutOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm opacity-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Left */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <span className="sr-only">Autisync</span>
              <Image
                className="w-auto h-8 mx-auto sm:h-12"
                width={200}
                height={200}
                src="/Autisync.svg"
                alt="Autisync logo"
              />
            </Link>
          </div>

          {/* Center */}
          <div className="relative items-center hidden space-x-8 md:flex">
            {/* SERVICES + FLYOUT */}
            <button
              onMouseEnter={() => setFlyoutOpen(true)}
              onMouseLeave={() => setFlyoutOpen(false)}
              className="relative text-gray-700 transition hover:text-[var(--autisync-gold,#B98B2F)]"
            >
              Services
              <AnimatePresence>
                {flyoutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 w-screen max-w-md mt-4 text-sm leading-6 bg-white shadow-lg ring-1 ring-gray-900/5"
                  >
                    <div className="p-4">
                      {solutions.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.name}
                            className="relative flex p-4 rounded-lg group gap-x-6 hover:bg-gray-50"
                          >
                            {/* ICON BOX */}
                            <div className="flex items-center justify-center flex-none mt-1 rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white shadow-sm">
                              <Icon
                                className="w-6 h-6 text-[var(--autisync-gold,#B98B2F)]"
                                aria-hidden="true"
                              />
                            </div>

                            {/* TEXT */}
                            <div className="text-left">
                              <a
                                href={item.href}
                                className="font-semibold text-gray-900"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <a
              className="text-gray-700 transition hover:text-[var(--autisync-gold,#B98B2F)]"
              href="/about"
            >
              About
            </a>
            <a
              className="text-gray-700 transition hover:text-[var(--autisync-gold,#B98B2F)]"
              href="/portfolio"
            >
              Portfolio
            </a>
            <a
              className="text-gray-700 transition hover:text-[var(--autisync-gold,#B98B2F)]"
              href="/contact"
            >
              Contact
            </a>
          </div>

          {/* Right */}
          <div className="items-center hidden space-x-4 md:flex">
            <AnchorButton href="tel:+244927114400" variant="alt" size="sm">
              Call Us
            </AnchorButton>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-white border-t shadow-lg md:hidden"
          >
            <div className="px-4 py-4 space-y-4">
              <a
                className="block text-gray-700 hover:text-[var(--autisync-gold,#B98B2F)]"
                href="/about"
              >
                About
              </a>
              <a
                className="block text-gray-700 hover:text-[var(--autisync-gold,#B98B2F)]"
                href="/portfolio"
              >
                Portfolio
              </a>
              <a
                className="block text-gray-700 hover:text-[var(--autisync-gold,#B98B2F)]"
                href="/contact"
              >
                Contact
              </a>
              <AnchorButton
                href="tel:+244927114400"
                variant="alt"
                size="sm"
                className="w-full justify-center"
              >
                Call Us
              </AnchorButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
