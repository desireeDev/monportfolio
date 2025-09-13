import { Hero } from '../components/Hero';
import { Section } from '../components/Section';

const skills = [
  { name: 'HTML', color: 'from-orange-400 to-orange-300' },
  { name: 'CSS', color: 'from-blue-500 to-blue-400' },
  { name: 'JavaScript', color: 'from-yellow-400 to-yellow-300' },
  { name: 'React', color: 'from-sky-500 to-sky-400' },
  { name: 'TypeScript', color: 'from-blue-600 to-blue-500' },
  { name: 'Node.js', color: 'from-emerald-500 to-emerald-400' },
  { name: 'Express', color: 'from-lime-500 to-lime-400' },
  { name: 'Flutter', color: 'from-cyan-400 to-cyan-300' },
  { name: 'Docker', color: 'from-gray-700 to-gray-600' },
  { name: 'Git', color: 'from-orange-500 to-orange-400' },
  { name: 'CI/CD', color: 'from-purple-500 to-purple-400' },
  { name: 'OWASP', color: 'from-red-500 to-red-400' },
  { name: 'Pentesting basics', color: 'from-rose-400 to-rose-300' },
  { name: 'HTTPS & SSL', color: 'from-indigo-500 to-indigo-400' },
];

const continuousLearning =
  "Toujours en apprentissage, je découvre régulièrement de nouvelles technologies et méthodes pour améliorer mes compétences et mes projets.";

export function HomePage() {
  return (
    <>
      <Hero />
      <Section
        id="skills"
        title="Compétences"
        subtitle="Du front au back, mobile, DevOps et sécurité, je crée avec passion"
      >
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {skills.map((s) => (
            <li
              key={s.name}
              className={`
                bg-gradient-to-r ${s.color} 
                text-black font-bold rounded-xl 
                p-5 flex justify-center items-center
                shadow-lg hover:shadow-neon hover:scale-105 transition-transform duration-300
              `}
            >
              {s.name}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-white/70 italic text-center max-w-2xl mx-auto">
          {continuousLearning}
        </p>
      </Section>
    </>
  );
}
