import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

const particleOptions = {
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    manualParticles: {
        position:{
            x: 100,
            y: 100
        },
        "optionss" : {
            "size": {
                "value": 10
            }
        }
    },
    particles: {
        number: {
            value: 100
        },
        size: {
            value: { min: 1, max: 5 },
            animation: {
                enable: true,
                speed: 1,
                startValue: "max",

            }
        },
        paint: {
            color: {
                value: "#ff6a00"
            }
        },
        effect: {
            enable: true,
            type: "shadow",
            options: {
                shadow: {
                    color: "#ff6a00",
                    blur: 10,
                    offset: {
                        x: 0,
                        y: 0
                    }
                }
            }
        },
        move: {
            enable: true,
            speed: 2,
            direction: "top",
            outModes: {
                default: "out",
                bottom: "none"
            },
            // trail: {
            //     enable: true,
            //     length: 10,
            //     fillColor: "#ff6a00"
            // },
            attract: {
                enable: true,
                rotateX: 3000,
                rotateY: 1500
            }
        },
        shape: {
            type: "circle"
        }

        
    }
};

function ParticlesBackground() {
    return (
        <ParticlesProvider init={loadAll}>
            <Particles id="particle-background" options={particleOptions} />
        </ParticlesProvider>
    )
}

export default ParticlesBackground;