import Bubbles from "./Bubbles";
import Paw from "./Paw";

const pillars = [
  "Des formations en français",
  "Théorie et ateliers pratiques",
  "Rencontres entre confrères",
  "Convivialité",
];

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden">
      <Bubbles className="-right-24 -top-16 h-96 w-96 sm:-right-10 sm:h-[30rem] sm:w-[30rem]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.4fr_1fr] lg:pb-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-dark sm:text-sm">
            Nouveau · Formation continue vétérinaire et AMV
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Se former ensemble
            <br />
            pour mieux soigner.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Des formations pratiques pour les vétérinaires et AMVs de Suisse romande et
            de France voisine.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
            Des thèmes concrets, choisis selon vos besoins, entre théorie et
            ateliers pratiques. Et parce qu&apos;on apprend mieux ensemble, chaque
            formation est aussi l&apos;occasion d&apos;échanger sur ses cas, de
            tisser un réseau entre confrères et de passer un bon moment.
            Nos formations se veulent exigeantes : elles sont animées par des
            intervenants à la pointe, pour vous transmettre des connaissances
            récentes.
          </p>

          <ul
            className="mt-7 grid max-w-xl grid-cols-1 gap-2.5 sm:grid-cols-2"
            aria-label="Ce qui nous anime"
          >
            {pillars.map((pillar) => (
              <li
                key={pillar}
                className="flex items-center gap-3 rounded-xl border border-emerald/25 bg-white/80 px-4 py-2.5 text-sm font-medium text-navy shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald/15 text-emerald-dark"
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                    <path
                      d="M3.5 8.5l3 3 6-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {pillar}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-6 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-emerald-dark"
            >
              Être informé des premières formations
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#equipe"
              className="inline-flex items-center justify-center rounded-full border border-navy/20 px-6 py-3.5 font-semibold text-navy transition-colors hover:border-navy/40 hover:bg-white"
            >
              Découvrir l&apos;équipe
            </a>
          </div>
        </div>

        <div className="hidden justify-center lg:flex">
          <Paw className="w-full max-w-sm drop-shadow-sm" />
        </div>
      </div>
    </section>
  );
}
