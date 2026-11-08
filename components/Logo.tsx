import Paw from "./Paw";

type LogoProps = {
  className?: string;
  /** "dark" for light backgrounds, "light" for dark backgrounds. */
  tone?: "dark" | "light";
};

export default function Logo({ className = "", tone = "dark" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Paw className="h-9 w-auto shrink-0" />
      <span className="font-display text-2xl font-semibold tracking-tight">
        <span className={tone === "dark" ? "text-navy" : "text-white"}>Synergie</span>
        <span className={tone === "dark" ? "text-emerald" : "text-mint-strong"}>Vet</span>
      </span>
    </span>
  );
}
