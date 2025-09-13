// src/pages/Contact.tsx
import { Section } from '../components/Section';
import { motion } from 'framer-motion';

export function ContactPage() {
  return (
    <Section id="contact" title="Contact">
      <div className="relative bg-sl-dark rounded-2xl p-10 md:p-16 overflow-hidden">
        {/* Cercles lumineux / néon */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-sl-red/20 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sl-orange/15 rounded-full blur-3xl animate-float pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <p className="text-white/70 mb-6 text-lg md:text-xl">
            Le formulaire est actuellement en <span className="text-sl-orange font-bold">développement</span>. 
            En attendant, vous pouvez me contacter via email ou réseaux sociaux.
          </p>

          <form className="grid gap-4 max-w-xl pointer-events-none opacity-50">
            <input
              className="bg-sl-gray/20 border border-sl-blue/30 rounded-md px-4 py-3 text-white placeholder:text-white/50"
              placeholder="Votre nom"
              disabled
            />
            <input
              className="bg-sl-gray/20 border border-sl-blue/30 rounded-md px-4 py-3 text-white placeholder:text-white/50"
              placeholder="Votre email"
              disabled
            />
            <textarea
              className="bg-sl-gray/20 border border-sl-blue/30 rounded-md px-4 py-3 text-white placeholder:text-white/50"
              rows={5}
              placeholder="Votre message"
              disabled
            />
            <button
              className="btn btn-primary w-max opacity-70 cursor-not-allowed"
              type="button"
              disabled
            >
              Envoyer
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
