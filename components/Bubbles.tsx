type BubblesProps = {
  className?: string;
  /** "light" bubbles for pale backgrounds, "dark" for the deep navy band. */
  tone?: "light" | "dark";
};

/** Translucent overlapping circles, echoing the logo and the Instagram carousel. */
export default function Bubbles({ className = "", tone = "light" }: BubblesProps) {
  const first = tone === "light" ? "bg-mint/70" : "bg-white/10";
  const second = tone === "light" ? "bg-navy/10" : "bg-mint-strong/15";
  const third = tone === "light" ? "bg-emerald/10" : "bg-white/5";

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <div className={`absolute left-0 top-10 size-56 rounded-full sm:size-72 ${first}`} />
      <div className={`absolute left-28 top-0 size-48 rounded-full sm:left-40 sm:size-64 ${second}`} />
      <div className={`absolute left-36 top-36 size-40 rounded-full sm:left-52 sm:top-48 sm:size-52 ${third}`} />
    </div>
  );
}
