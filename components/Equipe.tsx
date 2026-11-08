import Image from "next/image";
import equipe from "@/public/images/equipe.jpg";

const associes = ["Astrid Jarleton", "Sébastien Debatty", "Théo Levrard"];

export default function Equipe() {
  return (
    <section id="equipe" aria-labelledby="equipe-title" className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 size-40 rounded-full bg-mint sm:size-56"
          />
          <Image
            src={equipe}
            alt="Les trois associés de SynergieVet, souriants, réunis dans un salon."
            sizes="(min-width: 1024px) 640px, 100vw"
            placeholder="blur"
            className="relative h-auto w-full rounded-3xl shadow-xl shadow-deep/10"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-dark sm:text-sm">
            L&apos;équipe
          </p>
          <h2
            id="equipe-title"
            className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl"
          >
            Trois vétérinaires, trois parcours complémentaires.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            SynergieVet est né d&apos;une envie commune : proposer aux vétérinaires
            et AMVs des formations utiles, ancrées dans le terrain, et créer des moments
            de partage entre confrères.
          </p>
          <ul className="mt-8 space-y-3">
            {associes.map((nom) => (
              <li
                key={nom}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 font-display text-lg font-semibold text-navy shadow-sm ring-1 ring-navy/5"
              >
                <span aria-hidden="true" className="size-2.5 rounded-full bg-emerald" />
                {nom}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
