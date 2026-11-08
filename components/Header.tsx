import Logo from "./Logo";

const links = [
  { href: "#formations", label: "Formations" },
  { href: "#equipe", label: "L'équipe" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-navy/10 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#accueil" aria-label="SynergieVet, retour en haut de page">
          <Logo />
        </a>
        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-1 sm:gap-2">
            {links.map((link) => (
              <li key={link.href} className="hidden sm:block">
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-deep"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
