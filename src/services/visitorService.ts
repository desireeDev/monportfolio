// src/services/visitorService.ts
const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5174';

const LOCAL_VISITED_KEY = 'kuroko_hasVisited';
const LOCAL_GLOBAL_COUNT = 'kuroko_globalVisitCount';

async function safeFetch<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const res = await fetch(input, init).catch(() => null);
  if (!res || !res.ok) throw new Error('Network error');
  return (await res.json()) as T;
}

export async function getVisitCountAndMaybeIncrement(): Promise<number> {
  const hasVisited = localStorage.getItem(LOCAL_VISITED_KEY) === '1';

  try {
    if (!hasVisited) {
      const data = await safeFetch<{ count: number }>(`${API_URL}/api/visits/increment`, { method: 'POST' });
      localStorage.setItem(LOCAL_VISITED_KEY, '1');
      return data.count;
    }
    const data = await safeFetch<{ count: number }>(`${API_URL}/api/visits`);
    return data.count;
  } catch {
    // Fallback localStorage local-only counter
    let count = Number(localStorage.getItem(LOCAL_GLOBAL_COUNT) ?? '0');
    if (!hasVisited) {
      count += 1;
      localStorage.setItem(LOCAL_GLOBAL_COUNT, String(count));
      localStorage.setItem(LOCAL_VISITED_KEY, '1');
    }
    return count;
  }
}