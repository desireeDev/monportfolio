
// src/components/Section.tsx
import type { ReactNode } from 'react';

type Props = { id?: string; title: string; subtitle?: string; children: ReactNode };

export function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <header className="mb-8">
        <h2 className="font-heading text-4xl md:text-5xl tracking-wider text-white">{title}</h2>
        {subtitle && <p className="text-white/70 mt-2">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}