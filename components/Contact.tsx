export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-mint px-6 py-14 text-center sm:px-12 sm:py-20">
        <div aria-hidden="true" className="absolute -right-16 -top-16 size-56 rounded-full bg-white/40" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-10 size-56 rounded-full bg-emerald/15" />

        <div className="relative">
          <h2
            id="contact-title"
            className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl"
          >
            À très vite !
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Une question, une idée de formation, ou simplement l&apos;envie
            d&apos;être tenu au courant ? Écrivez-nous.
          </p>
          <a
            href="mailto:contact@synergievet.ch"
            className="mt-8 inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 font-display text-lg font-semibold text-white shadow-md transition-colors hover:bg-deep sm:px-8 sm:text-xl"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <span className="break-all">contact@synergievet.ch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
