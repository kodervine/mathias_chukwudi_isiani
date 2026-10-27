import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import {
  ADDRESS,
  AFFILIATION,
  ASSOCIATIONS,
  BERKELEY_PROFILE,
  EMAIL,
  LINKEDIN_PROFILE,
  METHODS,
  NAME,
  ORCID_PROFILE,
  PORTRAIT,
  PUBLICATIONS_LINK,
  RESEARCHGATE_PROFILE,
  SCHOLAR_RECORD,
  SECONDARY_AFFILIATION,
  SECONDARY_EMAIL,
  STATEMENT,
  TITLE,
  UNN_PROFILE,
} from '@/services/data/profile';
import { catalogue, selected } from '@/services/data/publications';
import { APPOINTMENTS, presentations } from '@/services/data/presentations';
import Reel from '@/components/Reel';
import SeriesIndex from '@/components/SeriesIndex';

const PROFILE_LINKS = [
  { label: 'UC Berkeley Profile', href: BERKELEY_PROFILE },
  { label: 'UNN Staff Profile', href: UNN_PROFILE },
  { label: 'Google Scholar', href: PUBLICATIONS_LINK },
  { label: 'ORCID', href: ORCID_PROFILE },
  { label: 'LinkedIn', href: LINKEDIN_PROFILE },
  { label: 'ResearchGate', href: RESEARCHGATE_PROFILE },
];

const Home = () => (
  <>
    <section className="bg-ink text-paper">
      <div className="container-page pb-14 pt-10 md:pb-24 md:pt-20">
        <p className="catalog text-paper/60">{AFFILIATION}</p>
        <div className="mt-8 flex items-center justify-between gap-4 md:gap-12">
          <h1 className="text-[clamp(2.1rem,9vw,8rem)] font-normal leading-[0.95] tracking-tight">
            Mathias
            <br />
            Chukwudi
            <br />
            <span className="text-paper/80">Isiani</span>
          </h1>
          <figure className="w-32 shrink-0 rotate-[3deg] border border-paper/25 bg-graphite p-1.5 pb-5 sm:w-44 md:w-72 md:p-2 md:pb-6">
            <img src={PORTRAIT} alt={NAME} className="aspect-[4/5] w-full object-cover object-top" />
            <figcaption className="catalog mt-3 text-[10px] text-paper/60">M. C. Isiani</figcaption>
          </figure>
        </div>

        <div className="mt-14 max-w-xl">
          <p className="text-xl text-paper">{TITLE}</p>
          <p className="mt-4 leading-relaxed text-paper/65">{STATEMENT}</p>
          <p className="catalog mt-6 text-clay">Dissertation in progress</p>
        </div>
      </div>
    </section>

    <section id="research" className="container-page scroll-mt-16 py-24">
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="catalog text-ink/60">Research areas</h2>
        <p className="catalog hidden text-ink/65 md:block">Select an area to open it</p>
      </div>
      <SeriesIndex />
      <p className="mt-10 max-w-2xl text-ink/65">{METHODS}</p>
    </section>

    <section id="education" className="scroll-mt-16 bg-ink py-24 text-paper">
      <div className="container-page mb-12 flex items-baseline justify-between">
        <h2 className="catalog text-paper/60">Education and fellowships</h2>
        <p className="catalog text-paper/60">Drag or use the arrows</p>
      </div>
      <Reel />
    </section>

    <section id="publications" className="container-page scroll-mt-16 py-24">
      <div className="mb-10 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h2 className="catalog text-ink/60">Selected publications</h2>
      </div>
      <ul className="divide-y divide-ink/15 border-y border-ink/15">
        {selected.map((p, i) => (
          <li key={p.id}>
            <Link
              to={`/publications?q=${encodeURIComponent(p.title.slice(0, 40))}`}
              className="group grid gap-2 py-5 md:grid-cols-[7rem_1fr_9rem] md:items-baseline md:gap-6"
            >
              <span className="catalog text-ink/65">{p.year}</span>
              <span>
                <span className="block text-lg font-medium leading-snug group-hover:text-clay">
                  {p.title}
                </span>
                <span className="mt-1 block text-sm italic text-ink/65">{p.venue}</span>
              </span>
              <span className="catalog text-ink/65 md:text-right">
                {i < 2 ? `${p.citations} citations` : p.type === 'Review' ? 'Book review' : ''}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/publications"
        className="catalog mt-8 inline-flex items-center gap-2 text-clay-dark hover:text-clay"
      >
        View all publications <ArrowRight size={14} />
      </Link>
    </section>

    <section className="container-page py-24">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h2 className="catalog mb-10 text-ink/60">Academic experience</h2>
          <ul className="divide-y divide-ink/15 border-y border-ink/15">
            {APPOINTMENTS.map((a) => (
              <li key={a.role} className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <span className="catalog text-ink/65">{a.period}</span>
                <span>
                  <span className="block text-lg font-medium">{a.role}</span>
                  <span className="block text-sm text-ink/60">{a.place}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="catalog mb-10 text-ink/60">Conferences and workshops</h2>
          <ul className="divide-y divide-ink/15 border-y border-ink/15">
            {presentations.slice(0, 5).map((p) => (
              <li key={p.event + p.year + (p.paper ?? '')} className="grid gap-1 py-5 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <span className="catalog text-ink/65">{p.year}</span>
                <span>
                  <span className="block text-base font-medium leading-snug">{p.event}</span>
                  {p.paper && (
                    <span className="mt-1 line-clamp-2 block text-sm italic text-ink/65">{p.paper}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <Link
            to="/presentations"
            className="catalog mt-8 inline-flex items-center gap-2 text-clay-dark hover:text-clay"
          >
            View all conferences <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>

    <section id="contact" className="scroll-mt-16 bg-ink text-paper">
      <div className="container-page grid gap-12 py-20 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="catalog text-paper/60">Scholarly record</p>
          <dl className="mt-6 grid grid-cols-2 gap-x-12 gap-y-6 sm:flex sm:flex-wrap">
            <div>
              <dt className="catalog text-paper/60">Publications</dt>
              <dd className="font-display text-5xl">{catalogue.length}</dd>
            </div>
            {SCHOLAR_RECORD.map((s) => (
              <div key={s.label}>
                <dt className="catalog text-paper/60">{s.label}</dt>
                <dd className="font-display text-5xl">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="catalog mt-4 text-[10px] text-paper/60">Citation figures: Google Scholar</p>

          <p className="catalog mt-12 text-paper/60">Profiles</p>
          <div className="mt-4 grid grid-flow-col grid-cols-2 grid-rows-3 gap-x-6 gap-y-3 text-sm text-clay sm:gap-x-10">
            {PROFILE_LINKS.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
                {l.label} <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>
        <div className="text-sm">
          <p className="catalog text-paper/60">Correspondence</p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-4 block font-display text-2xl hover:text-clay"
          >
            {EMAIL}
          </a>
          <a href={`mailto:${SECONDARY_EMAIL}`} className="mt-1 block text-paper/70 hover:text-clay">
            {SECONDARY_EMAIL}
          </a>
          <p className="mt-4 leading-relaxed text-paper/60">
            {AFFILIATION}
            <br />
            {ADDRESS}
          </p>
          <p className="mt-3 text-paper/60">Lecturer II, {SECONDARY_AFFILIATION}</p>
        </div>
      </div>

      <div className="overflow-hidden border-t border-paper/15 py-4" aria-label="Professional memberships">
        <div className="marquee-track flex w-max gap-12">
          {[...ASSOCIATIONS, ...ASSOCIATIONS].map((a, i) => (
            <span key={i} className="catalog whitespace-nowrap text-paper/60">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Home;
