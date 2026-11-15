import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/#formations", label: "Formations" },
  { href: "/#equipe", label: "L'équipe" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-navy/10 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="SynergieVet, retour à l'accueil">
          <Logo />
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-1 sm:gap-2">
            {links.map((link) => (
              <li key={link.href} className="hidden sm:block">
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-navy"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-deep"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
