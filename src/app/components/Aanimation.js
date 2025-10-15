"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Aanimation() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: "#1C1C1C", // same as your footer
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                },
                particles: {
                    color: { value: "#B28228" },
                    links: {
                        enable: true,
                        color: "#B28228",
                        distance: 120,
                        opacity: 0.4,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                    },
                    size: { value: 2 },
                    opacity: { value: 0.6 },
                },
                polygon: {
                    enable: true,
                    type: "inline",
                    move: {
                        radius: 10,
                    },
                    url: "/letter-a.svg", // custom SVG path
                    scale: 0.6,
                    position: { x: 50, y: 50 },
                    inlineArrangement: "equidistant",
                },
            }}
        />
    );
}