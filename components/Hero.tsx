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
            Nouveau · Formation continue vétérinaire
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Se former ensemble
            <br />
            pour mieux soigner.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Des formations pratiques pour les vétérinaires de Suisse romande et
            de France voisine.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
            Des thèmes concrets, choisis selon vos besoins, entre théorie et
            ateliers pratiques. Et parce qu&apos;on apprend mieux ensemble, chaque
            formation est aussi l&apos;occasion d&apos;échanger sur ses cas, de
            tisser un réseau entre confrères et de passer un bon moment.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Ce qui nous anime">
            {pillars.map((pillar) => (
              <li
                key={pillar}
                className="rounded-full border border-emerald/30 bg-white/70 px-3.5 py-1.5 text-sm font-medium text-navy"
              >
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
