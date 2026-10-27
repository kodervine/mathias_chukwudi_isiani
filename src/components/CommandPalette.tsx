import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { catalogue } from '@/services/data/publications';
import { presentations } from '@/services/data/presentations';

interface Props {
  open: boolean;
  onClose: () => void;
}

interface Item {
  label: string;
  hint: string;
  to: string;
}

const SECTIONS: Item[] = [
  { label: 'Research', hint: 'section', to: '/#research' },
  { label: 'Education and fellowships', hint: 'section', to: '/#education' },
  { label: 'Selected publications', hint: 'section', to: '/#publications' },
  { label: 'Contact', hint: 'section', to: '/#contact' },
  { label: 'All publications', hint: 'page', to: '/publications' },
  { label: 'Conferences and workshops', hint: 'page', to: '/presentations' },
];

const CommandPalette = ({ open, onClose }: Props) => {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SECTIONS;
    const matches = catalogue
      .filter((p) => `${p.title} ${p.authors} ${p.venue}`.toLowerCase().includes(q))
      .slice(0, 6)
      .map<Item>((p) => ({
        label: p.title,
        hint: String(p.year ?? 'n.d.'),
        to: `/publications?q=${encodeURIComponent(p.title.slice(0, 40))}`,
      }));
    const talks = presentations
      .filter((p) => `${p.year} ${p.event} ${p.place ?? ''} ${p.paper ?? ''}`.toLowerCase().includes(q))
      .slice(0, 4)
      .map<Item>((p) => ({
        label: p.paper ?? p.event,
        hint: `conference ${p.year}`,
        to: `/presentations?q=${encodeURIComponent((p.paper ?? p.event).slice(0, 40))}`,
      }));
    return [...SECTIONS.filter((s) => s.label.toLowerCase().includes(q)), ...matches, ...talks];
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      window.setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  if (!open) return null;

  const go = (item?: Item) => {
    if (!item) return;
    onClose();
    navigate(item.to);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') go(items[active]);
  };

  return (
    <div
      className="fixed inset-0 z-40 flex items-start justify-center bg-ink/70 px-4 pt-[15vh]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-md border border-paper/15 bg-ink text-paper shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Search the archive"
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Search sections, publications and conferences"
          className="w-full border-b border-paper/15 bg-transparent px-5 py-4 font-mono text-sm outline-none placeholder:text-paper/40"
        />
        <ul className="max-h-80 overflow-y-auto py-2">
          {items.map((item, i) => (
            <li key={item.to + item.label}>
              <button
                onMouseEnter={() => setActive(i)}
                onClick={() => go(item)}
                className={`flex w-full items-baseline justify-between gap-4 px-5 py-2.5 text-left text-sm ${
                  i === active ? 'bg-graphite' : ''
                }`}
              >
                <span className="line-clamp-1">{item.label}</span>
                <span className="shrink-0 font-mono text-[11px] text-paper/50">{item.hint}</span>
              </button>
            </li>
          ))}
          {!items.length && <li className="px-5 py-3 text-sm text-paper/50">No matching records.</li>}
        </ul>
      </div>
    </div>
  );
};

export default CommandPalette;
