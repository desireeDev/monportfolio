import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import type { ISourceOptions } from 'tsparticles-engine';
import heroImage from '../assets/codegirl.png';

export function Hero() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particleOptions: ISourceOptions = {
    background: { color: 'transparent' },
    fpsLimit: 60,
    particles: {
      number: { value: 30, density: { enable: true, area: 800 } },
      color: { value: ['#00D9FF', '#FF2D00', '#FF8C00', '#FFFFFF'] },
      shape: { type: 'circle' },
      opacity: { value: 0.7, random: true },
      size: { value: { min: 2, max: 6 } },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        outModes: 'out',
      },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' } },
      modes: { repulse: { distance: 120, duration: 0.4 } },
    },
    detectRetina: true,
  };

  return (
    <section className="relative overflow-hidden bg-sl-dark min-h-[80vh] flex items-center">
      {/* Particles Solo Leveling */}
      <Particles
        id="hero-particles"
        init={particlesInit}
        options={particleOptions}
        className="absolute inset-0 -z-20"
      />

      {/* Cercles d’aura */}
      <div className="absolute top-1/4 left-[-80px] w-72 h-72 bg-sl-red rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-[-100px] w-96 h-96 bg-sl-orange rounded-full opacity-15 blur-3xl animate-float"></div>

      <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Texte */}
        <div className="space-y-6 z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-5xl md:text-7xl leading-none text-white"
          >
            Je suis{' '}
            <motion.span
              className="block text-sl-orange"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Syntiche Attoh
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-white/70 max-w-prose"
          >
            Amoureuse du code et des défis techniques, je transforme chaque projet en expérience web puissante et fluide. J’apprends constamment de nouvelles technologies pour repousser mes limites.
          </motion.p>
        </div>

        {/* Image centrale avec cercles */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center items-center z-10"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full h-full object-cover rounded-full shadow-glow"
            />
            <div className="absolute inset-0 rounded-full bg-sl-orange/20 blur-3xl animate-bounceBall -z-10"></div>
            <div className="absolute inset-0 rounded-full bg-sl-red/20 blur-2xl animate-float -z-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
