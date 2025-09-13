// src/components/Footer.tsx
export function Footer() {
  return (
    <footer className="border-t border-sl-blue/20 bg-sl-dark/90 backdrop-blur py-8">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Syntiche Attoh — Do with Love
        </p>

        {/* Réseaux */}
        <div className="flex gap-6 text-white/80">
          <a
            className="hover:text-sl-orange hover:drop-shadow-neon transition-all duration-300"
            href="https://github.com/desireeDev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-sl-orange hover:drop-shadow-neon transition-all duration-300"
            href="https://www.linkedin.com/in/synticheattoh"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-sl-orange hover:drop-shadow-neon transition-all duration-300"
            href="mailto:syntiche-desiree.attoh@edu.esiee-it.fr"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
