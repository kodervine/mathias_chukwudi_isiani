import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { milestones } from '@/services/data/fellowships';

const Reel = () => {
  const ref = useRef<HTMLOListElement>(null);
  const drag = useRef({ active: false, x: 0, left: 0 });

  const onDown = (e: React.PointerEvent) => {
    if (!ref.current || e.button !== 0) return;
    drag.current = { active: true, x: e.clientX, left: ref.current.scrollLeft };
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current.active || !ref.current) return;
    ref.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const onUp = () => {
    drag.current.active = false;
  };

  const step = (dir: 1 | -1) =>
    ref.current?.scrollBy({ left: dir * 300, behavior: 'smooth' });

  const arrow =
    'flex h-10 w-10 items-center justify-center rounded-full border border-paper/30 text-paper hover:border-clay hover:text-clay';

  return (
    <>
      <ol
        ref={ref}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        onPointerCancel={onUp}
        className="no-scrollbar flex cursor-grab select-none gap-0 overflow-x-auto px-5 pb-6 active:cursor-grabbing md:px-[max(2rem,calc((100vw-72rem)/2+2rem))]"
      >
        {milestones.map((m, i) => (
          <li key={m.label} className="relative w-72 shrink-0 border-t border-paper/25 pr-8 pt-6">
            <span
              className={`absolute -top-[5px] left-0 h-[9px] w-[9px] ${
                i === milestones.length - 1 ? 'bg-clay' : 'bg-paper'
              }`}
            />
            <p className="catalog text-paper/50">{String(i + 1).padStart(2, '0')}</p>
            <p className="mt-2 font-display text-xl leading-snug text-paper">{m.label}</p>
            <p className="mt-2 text-sm text-paper/65">{m.place}</p>
            <p className="mt-1 text-sm text-clay">{m.note}</p>
          </li>
        ))}
        <li className="w-8 shrink-0" aria-hidden />
      </ol>
      <div className="container-page mt-6 flex gap-3">
        <button className={arrow} onClick={() => step(-1)} aria-label="Scroll back">
          <ArrowLeft size={16} />
        </button>
        <button className={arrow} onClick={() => step(1)} aria-label="Scroll forward">
          <ArrowRight size={16} />
        </button>
      </div>
    </>
  );
};

export default Reel;
