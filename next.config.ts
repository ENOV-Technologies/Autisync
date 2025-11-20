import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
};

export default nextConfig;

// import { withBotId } from 'botid/next/config';
//
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: "https",
//                 hostname: "images.pexels.com",
//             },
//             {
//                 protocol: "https",
//                 hostname: "images.unsplash.com",
//             },
//         ],
//     },
//
// };
//
// export default withBotId(nextConfig);