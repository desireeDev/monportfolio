// src/components/Hero.tsx
import { motion } from 'framer-motion';

import heroImage from '../assets/codegirl.png'; // remplace par ton image

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-solo-dark min-h-[80vh] flex items-center">
      {/* Cercles d'aura */}
      <div className="absolute top-1/4 left-[-80px] w-72 h-72 bg-solo-red rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-[-100px] w-96 h-96 bg-solo-orange rounded-full opacity-15 blur-3xl animate-float"></div>

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
              className="block text-solo-orange"
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

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
           {/*  <a className="btn btn-primary" href="#works">Voir mes projets</a>
            <a className="btn btn-outline" href="#contact">Me contacter</a> */}
          </motion.div>

          
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
            <div className="absolute inset-0 rounded-full bg-solo-orange/20 blur-3xl animate-bounceBall -z-10"></div>
            <div className="absolute inset-0 rounded-full bg-solo-red/20 blur-2xl animate-float -z-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
