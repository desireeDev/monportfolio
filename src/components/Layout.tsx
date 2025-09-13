
// src/components/Layout.tsx
import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

type Props = { children: ReactNode };

export function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}