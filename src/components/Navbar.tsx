import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAME } from '@/services/data/profile';

export const NAV_LINKS = [
  { to: '/#research', label: 'Research' },
  { to: '/publications', label: 'Publications' },
  { to: '/presentations', label: 'Conferences' },
  { to: '/#education', label: 'Education' },
  { to: '/#contact', label: 'Contact' },
];

interface Props {
  onSearch: () => void;
}

const Navbar = ({ onSearch }: Props) => {
  const [open, setOpen] = useState(false);
  const link = 'catalog text-ink/70 hover:text-clay';

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between">
        <Link to="/" className="font-display text-lg font-semibold">
          {NAME}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={link}>
              {l.label}
            </Link>
          ))}
          <button onClick={onSearch} className="catalog rounded border border-ink/20 px-2 py-1 text-ink/60 hover:border-clay hover:text-clay">
            Ctrl K
          </button>
        </nav>
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="container-page flex flex-col gap-4 pb-5 md:hidden">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={link}>
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onSearch();
            }}
            className={`${link} text-left`}
          >
            Search
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
