import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { presentations } from '@/services/data/presentations';

const Presentations = () => {
  const [params] = useSearchParams();
  const urlQuery = params.get('q') ?? '';
  const [query, setQuery] = useState(urlQuery);

  useEffect(() => setQuery(urlQuery), [urlQuery]);

  const { groups, count } = useMemo(() => {
    const q = query.trim().toLowerCase();
    const shown = presentations.filter(
      (p) => !q || `${p.year} ${p.event} ${p.place ?? ''} ${p.paper ?? ''}`.toLowerCase().includes(q),
    );
    const years = [...new Set(shown.map((p) => p.year))];
    return { groups: years.map((y) => [y, shown.filter((p) => p.year === y)] as const), count: shown.length };
  }, [query]);

  return (
    <>
      <section className="bg-ink text-paper">
        <div className="container-page py-14 md:py-20">
          <p className="catalog text-paper/50">Mathias Chukwudi Isiani</p>
          <h1 className="mt-4 text-5xl font-semibold md:text-7xl">Conferences and workshops</h1>
        </div>
      </section>

      <section className="container-page py-12">
        <label className="relative block">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by event, paper, place or year"
            className="w-full rounded border border-ink/20 bg-transparent py-3 pl-11 pr-4 font-mono text-xs outline-none focus:border-clay"
          />
        </label>

        <div className="mt-12 space-y-12">
          {groups.map(([year, items]) => (
            <div key={year} className="grid gap-4 md:grid-cols-6">
              <h2 className="font-display text-4xl font-semibold text-clay">{year}</h2>
              <ul className="md:col-span-5">
                {items.map((p) => (
                  <li key={p.event + (p.paper ?? '')} className="border-t border-ink/15 py-5">
                    <p className="text-lg font-medium leading-snug">{p.event}</p>
                    {p.place && <p className="catalog mt-1 text-ink/45">{p.place}</p>}
                    {p.paper && <p className="mt-2 text-sm italic text-ink/65">Paper: {p.paper}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {!count && <p className="text-ink/60">No records match this search.</p>}
        </div>
      </section>
    </>
  );
};

export default Presentations;
