// src/components/Navbar.tsx
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const nav = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/works', label: 'Projets' },
  { to: '/stories', label: 'Stories' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-sl-dark/80 border-b border-sl-blue/20 shadow-neon">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-sl-blue text-3xl font-heading tracking-wider">My</span>
          <span className="text-sl-orange text-xl font-heading">PORTFOLIO</span>
        </NavLink>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'text-sl-orange drop-shadow-neon'
                    : 'text-white/80 hover:text-sl-blue hover:drop-shadow-neon'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        {/*   <a
            href="/cv/CV.pdf"
            className="btn btn-outline hover:shadow-neon"
            target="_blank"
          >
            Télécharger CV
          </a> */}
        </nav>

        {/* Menu mobile */}
        <button
          className="md:hidden btn btn-outline px-3 py-2 hover:shadow-neon"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden flex flex-col gap-3 py-3 bg-sl-dark/90 border-t border-sl-blue/20 backdrop-blur"
        >
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className="text-white/90 hover:text-sl-orange hover:drop-shadow-neon transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </NavLink>
          ))}
        {/*   <a
            href="/cv/MonCV.pdf"
            className="btn btn-outline w-max hover:shadow-neon"
            target="_blank"
          >
            Télécharger CV
          </a> */}
        </motion.nav>
      )}
    </header>
  );
}
