import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import {
  ADDRESS,
  AFFILIATION,
  ASSOCIATIONS,
  BERKELEY_PROFILE,
  EMAIL,
  METHODS,
  NAME,
  PORTRAIT,
  PUBLICATIONS_LINK,
  SCHOLAR_RECORD,
  STATEMENT,
  TITLE,
} from '@/services/data/profile';
import { catalogue, topCited } from '@/services/data/publications';
import Reel from '@/components/Reel';
import SeriesIndex from '@/components/SeriesIndex';

const Home = () => (
  <>
    <section className="bg-ink text-paper">
      <div className="container-page pb-16 pt-12 md:pb-24 md:pt-20">
        <p className="catalog text-paper/50">{AFFILIATION}</p>
        <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
          <h1 className="text-[clamp(3rem,9vw,8rem)] font-normal leading-[0.95] tracking-tight">
            Mathias
            <br />
            Chukwudi
            <br />
            <span className="text-paper/80">Isiani</span>
          </h1>
          <figure className="w-56 shrink-0 rotate-[3deg] border border-paper/25 bg-graphite p-2 pb-6 md:w-72">
            <img src={PORTRAIT} alt={NAME} className="aspect-[4/5] w-full object-cover object-top" />
            <figcaption className="catalog mt-3 text-[10px] text-paper/50">M. C. Isiani</figcaption>
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
        <p className="catalog hidden text-ink/40 md:block">Select an area to open it</p>
      </div>
      <SeriesIndex />
      <p className="mt-10 max-w-2xl text-ink/65">{METHODS}</p>
    </section>

    <section id="education" className="scroll-mt-16 bg-ink py-24 text-paper">
      <div className="container-page mb-12 flex items-baseline justify-between">
        <h2 className="catalog text-paper/60">Education and fellowships</h2>
        <p className="catalog text-paper/40">Drag or use the arrows</p>
      </div>
      <Reel />
    </section>

    <section id="publications" className="container-page scroll-mt-16 py-24">
      <div className="mb-10 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h2 className="catalog text-ink/60">Selected publications</h2>
        <p className="catalog text-ink/40">{catalogue.length} publications in total</p>
      </div>
      <ul className="divide-y divide-ink/15 border-y border-ink/15">
        {topCited.map((p) => (
          <li key={p.id}>
            <Link
              to={`/publications?q=${encodeURIComponent(p.title.slice(0, 40))}`}
              className="group grid gap-2 py-5 md:grid-cols-[7rem_1fr_9rem] md:items-baseline md:gap-6"
            >
              <span className="catalog text-ink/40">{p.year}</span>
              <span>
                <span className="block text-lg font-medium leading-snug group-hover:text-clay">
                  {p.title}
                </span>
                <span className="mt-1 block text-sm italic text-ink/55">{p.venue}</span>
              </span>
              <span className="catalog text-ink/50 md:text-right">
                {p.citations} citations
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

    <section id="contact" className="scroll-mt-16 bg-ink text-paper">
      <div className="container-page grid gap-12 py-20 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="catalog text-paper/50">Scholarly record</p>
          <dl className="mt-6 grid grid-cols-2 gap-x-12 gap-y-6 sm:flex sm:flex-wrap">
            <div>
              <dt className="catalog text-paper/50">Publications</dt>
              <dd className="font-display text-5xl">{catalogue.length}</dd>
            </div>
            {SCHOLAR_RECORD.map((s) => (
              <div key={s.label}>
                <dt className="catalog text-paper/50">{s.label}</dt>
                <dd className="font-display text-5xl">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="catalog mt-4 text-[10px] text-paper/35">Citation figures: Google Scholar</p>
        </div>
        <div className="text-sm">
          <p className="catalog text-paper/50">Correspondence</p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-4 block font-display text-2xl hover:text-clay"
          >
            {EMAIL}
          </a>
          <p className="mt-4 leading-relaxed text-paper/60">
            {AFFILIATION}
            <br />
            {ADDRESS}
          </p>
          <div className="mt-5 flex flex-col gap-2 text-clay">
            <a href={BERKELEY_PROFILE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
              Departmental profile <ExternalLink size={12} />
            </a>
            <a href={PUBLICATIONS_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
              Publications record <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-paper/15 py-4" aria-label="Professional memberships">
        <div className="marquee-track flex w-max gap-12">
          {[...ASSOCIATIONS, ...ASSOCIATIONS].map((a, i) => (
            <span key={i} className="catalog whitespace-nowrap text-paper/50">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Home;
