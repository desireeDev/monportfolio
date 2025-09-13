// src/components/VisitorCounter.tsx
import { useEffect, useState } from 'react';
import { getVisitCountAndMaybeIncrement } from '../services/visitorService';

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    getVisitCountAndMaybeIncrement().then(setCount).catch(() => setCount(null));
  }, []);

  return (
    <div className="inline-flex items-center gap-2 text-sm text-white/80">
      <span className="w-2.5 h-2.5 bg-kuroko-red rounded-full animate-pulse" />
      {count === null ? '—' : `${count.toLocaleString('fr-FR')} visites`}
    </div>
  );
}