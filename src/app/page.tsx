import React from "react";
import Landing from "./homescreen/landing";
import WhyUs from "./homescreen/whyUs";
import Packages from "./homescreen/packages";
import Team from "./homescreen/team";
import CallToAction from "./homescreen/callToAction";
import Tools from "./homescreen/tools";
import { NextSeo } from "next-seo";

export default function Home() {
    return (
        <>
            {/*<NextSeo*/}
            {/*    title="Home - AUTISYNC"*/}
            {/*    description="We craft visually stunning websites, graphical designs that captivate audiences and leave a lasting impression."*/}
            {/*    canonical="https://www.autisync.com"*/}
            {/*    // keywords="prayuth,taksin"*/}
            {/*    openGraph={{*/}
            {/*        type: "website",*/}
            {/*        locale: "en_US",*/}
            {/*        url: "https://www.autisync.com",*/}
            {/*        title: "Home - AUTISYNC",*/}
            {/*        description:*/}
            {/*            "We craft visually stunning websites, graphical designs that captivate audiences and leave a lasting impression.",*/}
            {/*        images: [*/}
            {/*            {*/}
            {/*                url: "https://www.autisync.com/homescreen.png",*/}
            {/*                width: 800,*/}
            {/*                height: 600,*/}
            {/*                alt: "Homepage screen",*/}
            {/*                type: "image/png",*/}
            {/*            },*/}
            {/*            {*/}
            {/*                url: "https://enov-v2.vercel.app/homescreen.png",*/}
            {/*                width: 900,*/}
            {/*                height: 800,*/}
            {/*                alt: "Homepage screen",*/}
            {/*                type: "image/png",*/}
            {/*            },*/}
            {/*        ],*/}
            {/*        site_name: "AUTISYNC",*/}
            {/*    }}*/}
            {/*/>*/}
            <Landing />
            <WhyUs />
            <Team />
            <Packages/>
            <Tools />
        </>
    );
}