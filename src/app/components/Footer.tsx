import Link from "next/link";
import Image from "next/image";
import CallToAction from "@/app/components/CallToAction";

const navigation = {
    social: [
        {
            name: "Facebook",
            href: "https://www.facebook.com/autisync",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/autisync__/",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "Linkedin",
            href: "https://www.linkedin.com/autisync",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 21 15" {...props}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                </svg>
            ),
        },
        {
            name: "Behance",
            href: "https://www.behance.net/ENOV-Technologies",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 16 14" {...props}>
                    {" "}
                    <path
                        clipRule="evenodd"
                        d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z"
                        fillRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
};

export default function Footer() {
    return (
        <footer className="relative pt-8 pb-6 bg-[#1C1C1C] text-gray-200">
            <CallToAction />
            <div
                className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20 overflow-hidden pointer-events-none"
                style={{ transform: "translateZ(0)" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden text-[#1C1C1C] fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                >
                    <polygon points="2560 0 2560 100 0 100" />
                </svg>
            </div>

            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap text-center lg:text-left">
                    <div className="w-full px-4 lg:w-6/12">
                        {/*<Image src={"/AutisyncWhite.svg"} alt={"White Autisync logo"}*/}
                        {/*       height={700} width={700}*/}
                        {/*className={"h-20 w-auto"}/>*/}
                        <h4 className="text-3xl font-semibold text-white capitalize">
                            <span className={"text-[#B28228]"}>Scale </span>your digital <br/>presence and <span className={"text-[#B28228]"}>operations.</span>
                        </h4>
                        <p className="mt-0 mb-2 base text-gray-400">
                            We provide an integrated approach, leveraging AI and automation
                            across marketing, custom software, and design to reduce costs,
                            ensure brand consistency, and drive measurable growth.
                        </p>
                        <div className="flex justify-center mt-6 space-x-6 lg:justify-start">
                            {/* {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#B28228]"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))} */}
                        </div>
                    </div>

                    <div className="w-full px-4 mt-10 lg:mt-0 lg:w-6/12">
                        <div className="flex flex-wrap mb-6 items-top">
                            <div className="w-full px-4 ml-auto lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold uppercase">
                  Useful Links
                </span>
                                <ul className="list-none">
                                    <li>
                                        <Link
                                            href="/about"
                                            className="block pb-2 text-sm hover:text-[#B28228]"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/portfolio"
                                            className="block pb-2 text-sm hover:text-[#B28228]"
                                        >
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/solutions"
                                            className="block pb-2 text-sm hover:text-[#B28228]"
                                        >
                                            Solutions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/servicepackage"
                                            className="block pb-2 text-sm hover:text-[#B28228]"
                                        >
                                            Service Packages
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full px-4 lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold uppercase">
                  Resources
                </span>
                                <ul className="list-none">
                                    <li>
                                        <Link
                                            href="/profile/perfil_por.pdf"
                                            target="_blank"
                                            className="block pb-2 text-sm hover:text-[#B28228]"
                                        >
                                            View Portuguese Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/ServiceQuestionaire"
                                            className="block pb-2 text-sm hover:text-[#B28228]"
                                        >
                                            Service Questionnaire
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://www.freeprivacypolicy.com/live/6e47a48f-6547-4446-a605-55a18be2cca8"
                                            target="_blank"
                                            className="block pb-2 text-sm hover:text-[#B28228]"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            className="block pb-2 text-sm hover:text-[#B28228]"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-600" />
                <div className="flex flex-wrap items-center justify-center md:justify-between">
                    <div className="w-full px-4 mx-auto text-center md:w-4/12">
                        <div className="flex justify-center space-x-6">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    className="text-gray-400 hover:text-[#B28228]"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="w-6 h-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                        <p className="py-1 text-sm text-gray-400">
                            © {new Date().getFullYear()} Autisync. All rights reserved.
                            <br />
                            <span className="font-light">NIF: 5001246658</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
