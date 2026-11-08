import Logo from "./Logo";

async function CurrentYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-ink-soft sm:flex-row sm:px-6">
        <Logo />
        <p className="text-center sm:text-right">
          © <CurrentYear /> SynergieVet · Site en construction ·{" "}
          <a href="mailto:contact@synergievet.ch" className="font-medium text-navy underline-offset-4 hover:underline">
            contact@synergievet.ch
          </a>
        </p>
      </div>
    </footer>
  );
}
