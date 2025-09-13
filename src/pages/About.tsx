// src/pages/About.tsx
import { Section } from '../components/Section';
import { motion } from 'framer-motion';

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
    "Salut ! Je suis <span class='text-sl-blue font-bold'>Syntiche Attoh</span>, et je code parce que j’adore ça. Rien de mieux que de transformer des idées en applis puissantes et fluides.",
    "J’aime que mon code soit <span class='text-sl-red font-semibold'>clair</span>, <span class='text-sl-blue font-semibold'>efficace</span> et agréable à utiliser. Clean Code, tests et UX sont mes meilleurs alliés.",
    "En résumé : je code avec le sourire et toujours prêt à apprendre de nouvelles technologies pour repousser mes limites !",
  ];

  return (
    <Section title="À propos" subtitle="Un peu sur moi">
      <div className="relative overflow-hidden bg-sl-dark rounded-xl p-10 md:p-16 flex justify-center">
        
        {/* Cercle gauche */}
        <div className="absolute left-0 top-1/4 w-60 h-60 bg-sl-red/25 rounded-full blur-3xl animate-bounce -translate-x-1/2" />
        
        {/* Cercle droit */}
        <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-sl-blue/20 rounded-full blur-3xl animate-bounce translate-x-1/2" />

        {/* Éclats derrière le texte */}
        <div className="absolute inset-0 -z-10">
          <div className="w-48 h-48 bg-sl-blue/10 rounded-full blur-2xl absolute top-10 left-1/3 animate-bounce" />
          <div className="w-36 h-36 bg-sl-red/15 rounded-full absolute bottom-12 right-1/4 blur-2xl animate-bounce" />
        </div>

        {/* Texte */}
        <div className="relative space-y-8 prose prose-invert max-w-3xl text-sl-white">
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
