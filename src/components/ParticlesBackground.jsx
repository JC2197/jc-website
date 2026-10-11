import { Particles, ParticlesProvider } from "@tsParticles/react";
import loadAll from "tsparticles/.all";

const particleOptions = {
    fullscreen: {
        enable: true,
        zIndex: -1
    },
    particles: {
        number: {
            value: 100
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