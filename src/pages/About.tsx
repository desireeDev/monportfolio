import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import type { ISourceOptions } from 'tsparticles-engine';

const paragraphVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95, rotate: -1 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { delay: i * 0.3, duration: 0.7, ease: 'easeOut' },
  }),
};

export function AboutPage() {
  const paragraphs = [
    "Salut ! Je suis <span class='text-sl-blue font-bold'>Syntiche Attoh</span>, et je code parce que j’adore ça.",
    "Prête à apprendre de nouvelles technologies pour repousser mes limites !",
  ];

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particleOptions: ISourceOptions = {
    background: { color: 'transparent' },
    fpsLimit: 60,
    particles: {
      number: { value: 50, density: { enable: true, area: 800 } },
      color: { value: ['#00D9FF', '#FF2D00', '#FFFFFF'] },
      shape: { type: 'circle' },
      opacity: {
        value: 0.6,
        random: true,
        animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false },
      },
      size: { value: { min: 1, max: 4 } },
      move: {
        enable: true,
        speed: 1.5,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
      },
    },
    detectRetina: true,
  };

  return (
    <Section title="À propos" subtitle="Un peu sur moi">
      <div className="relative overflow-hidden bg-sl-dark rounded-xl p-10 md:p-16 flex justify-center">
        {/* Particles Solo Leveling */}
        <Particles
          id="about-particles"
          init={particlesInit}
          options={particleOptions}
          className="absolute inset-0 -z-20"
        />

        {/* Cercles lumineux */}
        <motion.div
          className="absolute left-0 top-1/4 w-60 h-60 bg-sl-red/25 rounded-full blur-3xl"
          animate={{ x: ['-50%', '-45%', '-50%'], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <motion.div
          className="absolute right-0 bottom-1/4 w-72 h-72 bg-sl-blue/20 rounded-full blur-3xl"
          animate={{ x: ['50%', '45%', '50%'], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        {/* Éclats derrière le texte */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <div className="w-48 h-48 bg-sl-blue/10 rounded-full blur-2xl absolute top-10 left-1/3 animate-bounce" />
          <div className="w-36 h-36 bg-sl-red/15 rounded-full absolute bottom-12 right-1/4 blur-2xl animate-bounce" />
        </motion.div>

        {/* Texte */}
        <div className="relative space-y-8 prose prose-invert max-w-3xl text-sl-white z-10">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={paragraphVariants}
              className="text-lg md:text-xl"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
