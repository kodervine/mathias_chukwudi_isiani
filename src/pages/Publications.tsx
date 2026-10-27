import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import {
  catalogue,
  type PublicationType,
} from '@/services/data/publications';

const FILTERS: ('All' | PublicationType)[] = ['All', 'Article', 'Review', 'Other'];

const Publications = () => {
  const [params] = useSearchParams();
  const urlQuery = params.get('q') ?? '';
  const [query, setQuery] = useState(urlQuery);
  const [type, setType] = useState<(typeof FILTERS)[number]>('All');

  useEffect(() => setQuery(urlQuery), [urlQuery]);

  const { entries, count } = useMemo(() => {
    const q = query.trim().toLowerCase();
    const shown = catalogue
      .filter(
        (p) =>
          (type === 'All' || p.type === type) &&
          (!q || `${p.title} ${p.authors} ${p.venue}`.toLowerCase().includes(q)),
      )
      .sort((a, b) => (b.year ?? 0) - (a.year ?? 0) || (b.citations ?? 0) - (a.citations ?? 0));
    const byYear = new Map<string, typeof shown>();
    shown.forEach((p) => {
      const key = p.year ? String(p.year) : 'n.d.';
      byYear.set(key, [...(byYear.get(key) ?? []), p]);
    });
    return { entries: [...byYear.entries()], count: shown.length };
  }, [query, type]);

  return (
    <>
      <section className="bg-ink text-paper">
        <div className="container-page py-14 md:py-20">
          <p className="catalog text-paper/50">Mathias Chukwudi Isiani</p>
          <h1 className="mt-4 text-5xl font-semibold md:text-7xl">Publications</h1>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <label className="relative flex-1">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, author or journal"
              className="w-full rounded border border-ink/20 bg-transparent py-3 pl-11 pr-4 font-mono text-xs outline-none focus:border-clay"
            />
          </label>
          <div className="flex gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setType(f)}
                className={`catalog rounded border px-3 py-2.5 transition-colors ${
                  type === f ? 'border-ink bg-ink text-paper' : 'border-ink/20 hover:border-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>


        <p className="catalog mt-10 text-ink/50">
          {count} {count === 1 ? 'entry' : 'entries'}
        </p>

        <div className="mt-4 space-y-12">
          {entries.map(([year, items]) => (
            <div key={year} className="grid gap-4 md:grid-cols-6">
              <h2 className="font-display text-4xl font-semibold text-clay">{year}</h2>
              <ul className="md:col-span-5">
                {items.map((p) => (
                  <li key={p.id} className="border-t border-ink/15 py-5">
                    <p className="catalog text-ink/40">
                      {p.type}
                      {p.citations ? ` · ${p.citations} citations` : ''}
                    </p>
                    <p className="mt-2 text-lg font-medium leading-snug">{p.title}</p>
                    <p className="mt-1 text-sm text-ink/65">{p.authors}</p>
                    {p.venue && <p className="text-sm italic text-ink/50">{p.venue}</p>}
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

export default Publications;
