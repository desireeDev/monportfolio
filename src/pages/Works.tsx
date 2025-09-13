// src/pages/Works.tsx
import { Section } from '../components/Section';
import { motion } from 'framer-motion';

const projects = [
  { 
    title: 'Application de Recrutement', 
    desc: 'Développement full-stack avec APIs Node.js et interface React.js. Gestion des données utilisateurs et déploiement sur OVH.', 
    tech: 'Node.js • React.js • MongoDB • GitHub',
   // link: 'https://example.com/recrutement',
    type: 'Professionnel'
  },
  { 
    title: 'Application Web Symfony', 
    desc: 'Conception complète d\'une application web moderne avec containerisation Docker et interface React/Vite.', 
    tech: 'Symfony • Docker • React.js • Vite • GitHub',
    //link: 'https://example.com/symfony-app',
    type: 'Personnel'
  },
  { 
    title: 'Site de Pressing', 
    desc: 'Développement d\'un site web complet pour service de pressing avec base de données moderne.', 
    tech: 'Next.js • Prisma • Base de données',
    link: 'https://agathatestv1.netlify.app/',
    type: 'Personnel'
  },
  { 
    title: 'Applications Mobiles Flutter', 
    desc: 'Conception de prototypes et développement frontend d\'applications mobiles avec design UX/UI optimisé.', 
    tech: 'Flutter • Figma • Postman • Behance',
   // link: 'https://example.com/flutter-app',
    type: 'Professionnel'
  },
  { 
    title: 'Dashboard Électricité', 
    desc: 'Tableau de bord interactif connecté à un dispositif d\'électricité avec stockage cloud en temps réel.', 
    tech: 'Angular.js • Firebase • GitHub • Scrum',
    //link: 'https://example.com/dashboard',
    type: 'Professionnel'
  },
  { 
    title: 'Refonte Interface UX/UI', 
    desc: 'Refonte complète de l\'interface utilisateur d\'une application de recrutement avec prototypage avancé.', 
    tech: 'React.js • Figma • GitHub • Trello',
   // link: 'https://example.com/refonte-ui',
    type: 'Professionnel'
  }
];

const particleVariants = {
  float: {
    y: [0, -8, 0],
    opacity: [0.6, 1, 0.6],
    scale: [0.9, 1.1, 0.9],
    transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
  },
};

export function WorksPage() {
  return (
    <Section id="works" title="Projets & Réalisations" subtitle="Expériences professionnelles et projets personnels">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const isPersonal = project.type === 'Personnel';

          const cardContent = (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
              className="relative group rounded-xl p-6 border border-white/10 bg-gradient-to-br from-[#0a0a0a]/90 via-[#101020]/80 to-[#0a0a0a]/90 backdrop-blur-md cursor-pointer hover:scale-105 transform transition-all duration-300 shadow-neon overflow-hidden"
            >
              {/* Particules derrière le texte */}
              <motion.div
                className="absolute inset-0"
                variants={particleVariants}
                animate="float"
              >
                <div className="absolute w-2 h-2 bg-sl-blue rounded-full top-4 left-10 opacity-50 blur-sm" />
                <div className="absolute w-1.5 h-1.5 bg-sl-orange rounded-full top-12 right-6 opacity-40 blur-sm" />
                <div className="absolute w-1.5 h-1.5 bg-white rounded-full bottom-6 left-20 opacity-30 blur-sm" />
                <div className="absolute w-2 h-2 bg-sl-blue rounded-full bottom-10 right-12 opacity-40 blur-sm" />
              </motion.div>

              {/* Type */}
              <span className={`absolute top-4 right-4 px-2 py-1 text-xs rounded-full font-medium ${
                isPersonal ? 'bg-sl-blue/20 text-sl-blue' : 'bg-green-500/20 text-green-400'
              }`}>
                {project.type}
              </span>

              {/* Titre */}
              <h3 className="font-heading text-xl text-white mb-3 group-hover:text-sl-blue transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 mb-4 text-sm leading-relaxed">{project.desc}</p>

              {/* Tech */}
              <div className="text-xs text-sl-blue/80 font-mono">{project.tech}</div>
            </motion.div>
          );

          return isPersonal ? (
            <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer">
              {cardContent}
            </a>
          ) : (
            cardContent
          );
        })}
      </div>

      {/* Stack Technique */}
      <div className="mt-12 p-6 rounded-xl bg-[#0a0a0a]/70 border border-white/10 backdrop-blur-md shadow-inner">
        <h3 className="font-heading text-xl text-sl-blue mb-4">Stack Technique</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="text-white font-medium mb-2">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {['HTML5','CSS3','JavaScript','React.js','Next.js','Angular.js','TypeScript','Flutter'].map(t => (
                <span key={t} className="px-2 py-1 rounded-full bg-sl-blue/20 text-sl-blue text-xs">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Backend</h4>
            <div className="flex flex-wrap gap-2">
              {['Node.js','PHP','Java','Symfony','Express','MongoDB','MySQL','Firebase'].map(t => (
                <span key={t} className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Outils & Méthodologies</h4>
            <div className="flex flex-wrap gap-2">
              {['Git','Docker','CI/CD','Scrum','Trello','Figma','Postman'].map(t => (
                <span key={t} className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
