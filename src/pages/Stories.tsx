// src/pages/Stories.tsx
import { Section } from '../components/Section';
import { motion } from 'framer-motion';

const stories = [
  {
    title: 'Design system Tailwind',
    desc: 'Mise en place d’un système de composants réutilisables pour harmoniser mes projets.',
    type: 'Astuce',
  },
  {
    title: 'Node + Vite sur un même repo',
    desc: 'Organisation d’un projet full-stack performant avec backend Node.js et frontend Vite/React dans un seul dépôt.',
    type: 'Projet',
  },
  {
    title: 'Problème Docker',
    desc: 'Lors du déploiement, un conteneur refusait de se lancer à cause d’un conflit de ports. Résolu en configurant correctement le mapping et les variables d’environnement.',
    type: 'Problème',
  },
  {
    title: 'Apprentissage TypeScript',
    desc: 'Conversion progressive de projets JS en TS pour améliorer la sécurité et la lisibilité du code.',
    type: 'Apprentissage',
  },
];

export function StoriesPage() {
  return (
    <Section title="Stories" subtitle="Notes techniques et REX courts">
      <ul className="grid md:grid-cols-2 gap-6">
        {stories.map((story, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
            className="relative rounded-xl p-6 border border-sl-blue/30 bg-sl-dark/50 backdrop-blur-lg shadow-neon cursor-pointer hover:scale-105 transform transition-all overflow-hidden"
          >
            {/* Cercle lumineux derrière la story */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-sl-orange/20 rounded-full blur-3xl animate-float-slow pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-sl-red/15 rounded-full blur-3xl animate-float pointer-events-none" />

            {/* Badge type */}
            <span className="text-xs font-bold text-sl-blue bg-sl-blue/20 px-2 py-1 rounded-full mb-2 inline-block relative z-10">
              {story.type}
            </span>

            {/* Titre et description */}
            <h4 className="font-heading text-white text-lg relative z-10">{story.title}</h4>
            <p className="text-white/70 mt-1 relative z-10 text-sm">{story.desc}</p>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
