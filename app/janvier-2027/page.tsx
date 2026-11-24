import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const title =
  "Cardiologie : ne plus hésiter face à un cas cardiaque — 21 et 22 janvier 2027 à Crans-Montana — SynergieVet";
const description =
  "Deux demi-journées de formation en cardiologie avec le Dr Anne-Christine Merveille, les 21 et 22 janvier 2027 à l'hôtel cinq étoiles Aïda de Crans-Montana.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.synergievet.ch/janvier-2027",
    siteName: "SynergieVet",
    locale: "fr_CH",
    type: "website",
  },
};

// Formulaire d'inscription Google Forms.
const inscriptionHref =
  "https://docs.google.com/forms/d/e/1FAIpQLSdAu4RHt6eAl72rBuXIlt5yUQPM8Xj5CMHk3oS1aYFm1J765w/viewform";

const infos = [
  { label: "Dates", value: "Jeudi 21 et vendredi 22 janvier 2027" },
  { label: "Lieu", value: "Hôtel Aïda*****, Crans-Montana (VS)" },
  { label: "Pour qui", value: "Vétérinaires" },
];

const journees = [
  {
    jour: "Jeudi 21 janvier",
    moments: [
      { quand: "Matin", quoi: "Formation" },
      { quand: "Midi", quoi: "Dîner ensemble à l'hôtel, privatisé pour l'occasion" },
      {
        quand: "Après-midi",
        quoi: "Libre : spa, ski ou snowboard sur les pistes (navette privée depuis l'hôtel avec la formule All-in), balade dans la neige face aux sommets",
      },
      { quand: "Soir", quoi: "Souper tous ensemble à l'hôtel" },
    ],
  },
  {
    jour: "Vendredi 22 janvier",
    moments: [
      { quand: "Matin", quoi: "Dernière matinée de formation" },
      { quand: "Midi", quoi: "Dîner ensemble" },
      {
        quand: "Ensuite",
        quoi: "Libre à vous de prolonger le séjour le temps d'un week-end",
      },
    ],
  },
];

const formules = [
  {
    nom: "Formation seulement",
    prix: "340.–",
    unite: "par demi-journée",
    detail: "Une ou deux matinées, au choix, sans séjour à l'hôtel",
    inclus: [] as string[],
    miseEnAvant: false,
  },
  {
    nom: "All-in",
    prix: "1'250.–",
    unite: "pour toute inscription jusqu'au 4 décembre",
    detail: "1'400.– ensuite · valeur réelle : 1'800.–",
    inclus: [
      "Les deux demi-journées de formation",
      "La nuit à l'hôtel avec le petit-déjeuner",
      "Les prestations de l'hôtel, dont l'accès au spa",
      "Les dîners (repas de midi) du jeudi et du vendredi",
      "Le souper du jeudi soir",
      "Un forfait boissons de 100.–",
      "La navette privée de l'hôtel jusqu'aux pistes",
    ],
    miseEnAvant: true,
  },
];

function Check() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald/15 text-emerald-dark"
    >
      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
        <path
          d="M3.5 8.5l3 3 6-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

const photos = [
  { src: "/images/pistes-ski.jpg", alt: "Skieurs sur une piste enneigée au coucher du soleil" },
  { src: "/images/sommets-coucher-soleil.jpg", alt: "Sommets enneigés des Alpes éclairés par le soleil couchant" },
  { src: "/images/crans-montana-nuit.jpg", alt: "Crans-Montana illuminée le soir, au pied des montagnes enneigées" },
];

export default function FormationJanvier2027() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* En-tête */}
        <section
          id="accueil"
          aria-labelledby="formation-title"
          className="relative overflow-hidden bg-deep pb-20 text-white sm:pb-28"
        >
          <Image
            src="/images/montagne-chalets.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-deep/95 via-deep/75 to-deep/20"
          />

          <div className="relative mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-24">
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-mint-strong/15 px-3.5 py-1.5 text-sm font-medium text-mint">
                <span className="size-2 rounded-full bg-mint-strong" aria-hidden="true" />
                Inscriptions ouvertes
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white">
                <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4 text-mint-strong" fill="none">
                  <path
                    d="M3.5 8.5l3 3 6-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Formation reconnue SVS
              </div>
            </div>
            <h1
              id="formation-title"
              className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
            >
              Cardiologie : ne plus hésiter face à un cas cardiaque
            </h1>
            <p className="mt-4 max-w-3xl font-display text-2xl font-semibold text-mint-strong sm:text-3xl">
              De l&apos;examen clinique à la prise en charge
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Deux demi-journées de formation au cœur des Alpes valaisannes, à
              l&apos;hôtel cinq étoiles Aïda de Crans-Montana.
            </p>

            <dl className="mt-9 grid max-w-3xl gap-3 sm:grid-cols-3">
              {infos.map((info) => (
                <div key={info.label} className="rounded-2xl bg-deep/60 px-5 py-4 backdrop-blur-sm">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
                    {info.label}
                  </dt>
                  <dd className="mt-1 font-medium">{info.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href={inscriptionHref}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-mint-strong px-6 py-3.5 font-semibold text-deep transition-colors hover:bg-mint"
            >
              Je m&apos;inscris
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        {/* Contenu de la formation */}
        <section
          aria-labelledby="contenu-title"
          className="bg-white px-4 py-20 sm:px-6 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-dark sm:text-sm">
                La formation
              </p>
              <h2
                id="contenu-title"
                className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
              >
                Le patient cardiaque, de l&apos;auscultation à la décision.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Un souffle à l&apos;auscultation, un chien qui tousse, un chat
                qui respire mal… Est-ce le cœur ? Est-ce urgent ? Et surtout,
                que faire maintenant ?
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Cette formation vous donne les clés pour répondre avec
                assurance. À partir de cas cliniques concrets, nous reprenons
                pas à pas le raisonnement en cardiologie : tirer le meilleur de
                l&apos;anamnèse, de l&apos;examen clinique et de
                l&apos;auscultation, reconnaître les signes qui doivent alerter,
                puis poser les bonnes décisions thérapeutiques.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Un temps fort sera consacré à la{" "}
                <strong className="font-semibold text-ink">
                  décompensation cardiaque congestive
                </strong>{" "}
                : savoir la reconnaître rapidement et la prendre en charge
                efficacement.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Pas besoin d&apos;un plateau technique de spécialiste : nous
                verrons comment tirer parti des examens que vous avez déjà sous
                la main, la radiographie thoracique et le POCUS thoracique.
              </p>
              <p className="mt-6 rounded-2xl bg-mint px-5 py-4 font-medium text-ink">
                Vous repartirez avec des repères pratiques pour identifier les
                situations à risque, orienter votre diagnostic et adapter la
                prise en charge de vos patients cardiaques, dès le lendemain au
                cabinet.
              </p>
            </div>
            <div className="lg:pt-10">
              <h3 className="font-display text-xl font-bold text-navy">
                Les pathologies au programme
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "L'endocardiose mitrale",
                  "Les dysfonctions systoliques",
                  "La cardiomyopathie hypertrophique féline",
                  "Les épanchements péricardiques",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 rounded-2xl border border-emerald/20 bg-paper px-5 py-4 font-medium text-navy"
                  >
                    <Check />
                    {point}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 font-display text-xl font-bold text-navy">
                Les examens à votre portée
              </h3>
              <ul className="mt-5 space-y-3">
                {["La radiographie thoracique", "Le POCUS thoracique"].map(
                  (point) => (
                    <li
                      key={point}
                      className="flex gap-3 rounded-2xl border border-emerald/20 bg-paper px-5 py-4 font-medium text-navy"
                    >
                      <Check />
                      {point}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* Présentation */}
        <section aria-labelledby="presentation-title" className="px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-dark sm:text-sm">
                Le séjour
              </p>
              <h2
                id="presentation-title"
                className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
              >
                Se former le matin, profiter de la montagne l&apos;après-midi.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Nous vous invitons à deux demi-journées de formation en cardiologie
                les jeudi 21 et vendredi 22 janvier 2027, au cœur des Alpes
                valaisannes, à l&apos;hôtel cinq étoiles Aïda de Crans-Montana.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Les matinées seront consacrées à la formation. À midi, nous
                partagerons le dîner à l&apos;hôtel, privatisé pour
                l&apos;occasion.
                L&apos;après-midi vous appartient : moment de détente au spa, ski
                ou snowboard sur les pistes, ou balade dans la neige face aux
                sommets. Avec la formule All-in, une navette privée vous
                conduira de l&apos;hôtel jusqu&apos;aux pistes. Le soir, nous nous retrouverons autour
                d&apos;un souper à l&apos;hôtel.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Le vendredi, après une dernière matinée de formation et un
                dîner ensemble à midi, vous serez libres de prolonger le séjour et de
                profiter de ce cadre d&apos;exception le temps d&apos;un week-end.
              </p>
              <div className="mt-8 rounded-2xl border border-emerald/25 bg-white px-6 py-5">
                <h3 className="font-display text-lg font-bold text-navy">
                  Vous souhaitez venir uniquement pour la formation ?
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft">
                  C&apos;est tout à fait possible ! Avec la formule « Formation
                  seulement », vous pouvez assister à une seule matinée, celle
                  du jeudi ou celle du vendredi, ou aux deux, sans séjourner à
                  l&apos;hôtel.
                </p>
              </div>
            </div>

            <aside
              aria-labelledby="intervenant-title"
              className="self-start rounded-3xl bg-mint px-6 py-8 sm:px-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-dark">
                L&apos;intervenante
              </p>
              <h3
                id="intervenant-title"
                className="mt-3 font-display text-2xl font-bold text-ink"
              >
                Dr Anne-Christine Merveille
              </h3>
              <p className="mt-1 font-medium text-navy">
                DMV, PhD, Dip. ECVIM-CA (Cardiology)
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Cardiologue à l&apos;Université de Liège depuis 2014, elle est
                diplômée du Collège européen de médecine interne vétérinaire en
                cardiologie. Formée entre Liège, Lyon et le Royal Veterinary
                College de Londres, elle forme aujourd&apos;hui les internes et
                les résidents en cardiologie.
              </p>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Passionnée de clinique, elle aime le contact avec les patients
                et leurs propriétaires, et partager son expérience avec les
                praticiens. Ses travaux portent notamment sur l&apos;évaluation
                cardiovasculaire en urgence (CV-POCUS) et l&apos;hypertension
                pulmonaire chez le chien.
              </p>
            </aside>
          </div>
        </section>

        {/* Photos */}
        <section
          aria-label="Le cadre : Crans-Montana en hiver"
          className="px-4 pb-20 sm:px-6 sm:pb-28"
        >
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
            {photos.map((photo) => (
              <figure
                key={photo.src}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[3/4]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </section>

        {/* Programme */}
        <section
          aria-labelledby="programme-title"
          className="bg-white px-4 py-20 sm:px-6 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-dark sm:text-sm">
              Le programme
            </p>
            <h2
              id="programme-title"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              Deux demi-journées de formation, et du temps pour profiter.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {journees.map((journee) => (
                <div
                  key={journee.jour}
                  className="rounded-3xl border border-navy/10 bg-paper px-6 py-8 sm:px-8"
                >
                  <h3 className="font-display text-2xl font-bold text-navy">
                    {journee.jour}
                  </h3>
                  <ol className="mt-6 space-y-4">
                    {journee.moments.map((moment) => (
                      <li key={moment.quand} className="flex gap-4">
                        <span className="w-24 shrink-0 text-sm font-semibold uppercase tracking-wide text-emerald-dark">
                          {moment.quand}
                        </span>
                        <span className="text-ink-soft">{moment.quoi}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section aria-labelledby="tarifs-title" className="px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-dark sm:text-sm">
              Les tarifs
            </p>
            <h2
              id="tarifs-title"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              Deux formules au choix.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {formules.map((formule) => (
                <div
                  key={formule.nom}
                  className={
                    formule.miseEnAvant
                      ? "rounded-3xl bg-deep px-6 py-8 text-white shadow-lg sm:px-8"
                      : "rounded-3xl border border-navy/10 bg-white px-6 py-8 sm:px-8"
                  }
                >
                  <h3
                    className={`font-display text-2xl font-bold ${formule.miseEnAvant ? "text-mint" : "text-navy"}`}
                  >
                    {formule.nom}
                  </h3>
                  <p className="mt-4 font-display text-5xl font-bold tracking-tight">
                    CHF {formule.prix}
                  </p>
                  <p className={`mt-2 ${formule.miseEnAvant ? "text-white/80" : "text-ink-soft"}`}>
                    {formule.unite}
                  </p>
                  {formule.detail && (
                    <p
                      className={`mt-1 text-sm font-medium ${formule.miseEnAvant ? "text-mint" : "text-emerald-dark"}`}
                    >
                      {formule.detail}
                    </p>
                  )}
                  {formule.inclus.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {formule.inclus.map((item) => (
                        <li
                          key={item}
                          className={`flex gap-3 ${formule.miseEnAvant ? "text-white/90" : "text-ink-soft"}`}
                        >
                          <Check />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-4 rounded-3xl bg-mint px-6 py-6 sm:flex-row sm:items-center sm:px-8">
              <p className="shrink-0 font-display text-4xl font-bold tracking-tight text-navy">
                Jusqu&apos;à CHF 200.–
              </p>
              <p className="leading-relaxed text-ink">
                <span className="font-semibold">de produits Miloa offerts</span>{" "}
                : CHF 100.– par demi-journée de formation suivie, soit CHF
                200.– pour les deux matinées.
              </p>
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              En option, sur demande : location de skis et forfait de ski (non
              inclus).
            </p>
          </div>
        </section>

        {/* Inscription */}
        <section id="inscription" aria-labelledby="inscription-title" className="px-4 pb-20 sm:px-6 sm:pb-28">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-mint px-6 py-14 text-center sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute -right-16 -top-16 size-56 rounded-full bg-white/40" />
            <div aria-hidden="true" className="absolute -bottom-20 -left-10 size-56 rounded-full bg-emerald/15" />
            <div className="relative">
              <h2
                id="inscription-title"
                className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl"
              >
                Envie d&apos;être des nôtres ?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                Inscrivez-vous dès maintenant pour profiter du tarif All-in à
                1&apos;250.– jusqu&apos;au 4 décembre.
              </p>
              <a
                href={inscriptionHref}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 font-display text-lg font-semibold text-white shadow-md transition-colors hover:bg-deep sm:text-xl"
              >
                Je m&apos;inscris
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
