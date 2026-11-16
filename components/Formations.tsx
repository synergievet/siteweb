import Image from "next/image";
import Link from "next/link";
import Bubbles from "./Bubbles";

export default function Formations() {
  return (
    <section
      id="formations"
      aria-labelledby="formations-title"
      className="relative overflow-hidden bg-deep text-white"
    >
      <Bubbles tone="dark" className="-left-24 -top-24 h-96 w-96" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl sm:ml-auto lg:mr-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-mint-strong/15 px-3.5 py-1.5 text-sm font-medium text-mint">
            <span className="size-2 animate-pulse rounded-full bg-mint-strong motion-reduce:animate-none" aria-hidden="true" />
            Inscriptions ouvertes
          </div>
          <h2
            id="formations-title"
            className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
          >
            Notre première formation.
          </h2>

          <Link
            href="/janvier-2027"
            className="group mt-8 block overflow-hidden rounded-3xl bg-white text-ink shadow-lg transition-transform hover:-translate-y-1 motion-reduce:transition-none"
          >
            <div className="relative aspect-[16/7]">
              <Image
                src="/images/montagne-chalets.jpg"
                alt="Chalets enneigés au soleil, sous un ciel bleu de montagne"
                fill
                sizes="(min-width: 1024px) 42rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="px-6 py-6 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-dark sm:text-sm">
                21 et 22 janvier 2027 · Crans-Montana
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold leading-snug sm:text-3xl">
                Cardiologie pratique du chien et du chat : de l&apos;examen clinique à la prise en charge
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Deux demi-journées avec le Dr Anne-Christine Merveille, à
                l&apos;hôtel cinq étoiles Aïda.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-navy group-hover:text-emerald-dark">
                Découvrir la formation
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>

          <p className="mt-10 text-lg leading-relaxed text-white/80">
            D&apos;autres formations suivront. Vous souhaitez être prévenu en
            premier, ou nous suggérer un thème ? Écrivez-nous, nous serons ravis
            de vous lire.
          </p>
          <a
            href="mailto:contact@synergievet.ch?subject=Premi%C3%A8res%20formations%20SynergieVet"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-mint-strong px-6 py-3.5 font-semibold text-deep transition-colors hover:bg-mint"
          >
            Être prévenu
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
