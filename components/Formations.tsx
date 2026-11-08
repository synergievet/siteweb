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
            En construction
          </div>
          <h2
            id="formations-title"
            className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
          >
            Nos premières formations arrivent bientôt.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Nous préparons un premier programme de formations, pensées au plus
            près de votre pratique quotidienne. Le reste du site est lui aussi en
            construction : le calendrier, les thèmes et les inscriptions
            arriveront ici très prochainement.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Vous souhaitez être prévenu en premier, ou nous suggérer un thème ?
            Écrivez-nous, nous serons ravis de vous lire.
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
