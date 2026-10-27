import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { SERIES, catalogue } from '@/services/data/publications';

const SeriesIndex = () => {
  const [openId, setOpenId] = useState<string | null>(SERIES[0].id);

  return (
    <ul className="divide-y divide-ink/15 border-y border-ink/15">
      {SERIES.map((s) => {
        const isOpen = openId === s.id;
        const related = catalogue.filter((p) =>
          s.match.some((m) => p.title.toLowerCase().includes(m)),
        );
        return (
          <li key={s.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : s.id)}
              aria-expanded={isOpen}
              className="flex w-full items-baseline gap-5 py-6 text-left"
            >
              <span className="catalog w-10 shrink-0 text-ink/50">{s.id}</span>
              <span className="flex-1 font-display text-2xl md:text-4xl">{s.title}</span>
              <Plus
                size={20}
                className={`shrink-0 self-center transition-transform ${isOpen ? 'rotate-45 text-clay' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="grid gap-6 pb-8 pl-15 md:grid-cols-2 md:pl-[3.75rem]">
                <p className="max-w-md leading-relaxed text-ink/70">{s.text}</p>
                <ul className="space-y-3">
                  {related.map((p) => (
                    <li key={p.id} className="text-sm">
                      <span className="catalog mr-3 text-ink/40">{p.year ?? 'n.d.'}</span>
                      <Link
                        to={`/publications?q=${encodeURIComponent(p.title.slice(0, 40))}`}
                        className="underline decoration-ink/20 underline-offset-4 hover:text-clay hover:decoration-clay"
                      >
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default SeriesIndex;
