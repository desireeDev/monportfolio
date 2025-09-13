// src/pages/LandingPage.tsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { ISourceOptions, MoveDirection, OutMode } from "tsparticles-engine";

import heroImage from "../assets/codegirl.png"; // Ton image Hero

export function LandingPage() {
  const navigate = useNavigate();

  // Initialiser Particles
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  // Options Particles (éclairs + particules énergétiques)
  const particleOptions: ISourceOptions = {
    background: { color: "#0a0a0a" },
    fpsLimit: 60,
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: ["#00e0ff", "#ff2d00", "#ffffff"] },
      shape: { type: "circle" },
      opacity: {
        value: 0.7,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false },
      },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 2,
        direction: "none" as MoveDirection, // ✅ corrigé
        random: true,
        straight: false,
        outModes: { default: "out" as OutMode }, // ✅ corrigé
      },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    detectRetina: true,
  };

  const handleEnter = () => {
    navigate("/home"); // Redirection vers ta page principale
  };

  return (
    <section className="relative w-full h-screen bg-sl-dark flex flex-col justify-center items-center overflow-hidden">
      {/* Particules */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
        className="absolute inset-0"
      />

      {/* Image Hero en fond */}
      <img
        src={heroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
      />

      {/* Texte principal */}
      <motion.h1
        className="font-heading text-5xl md:text-7xl text-sl-orange drop-shadow-neon z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.6, 1, 0.8, 1],
          scale: [0.95, 1.05, 1],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Hello
      </motion.h1>

      {/* Bouton Entrer */}
      <motion.button
        onClick={handleEnter}
        className="mt-12 px-8 py-4 rounded-xl font-heading text-2xl text-sl-blue border-2 border-sl-blue hover:bg-sl-blue/20 drop-shadow-neon z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Entrer
      </motion.button>
    </section>
  );
}
