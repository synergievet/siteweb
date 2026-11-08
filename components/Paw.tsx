type PawProps = {
  className?: string;
  /** Accessible label; when omitted the paw is treated as decorative. */
  title?: string;
};

/**
 * SynergieVet paw: four pads above three overlapping translucent circles.
 * Colours match the brand board (navy #295C77, emerald #1A9A83 at 60 %).
 */
export default function Paw({ className, title }: PawProps) {
  return (
    <svg
      viewBox="0 0 250 225"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <ellipse cx="75" cy="22" rx="12" ry="18" transform="rotate(-12 75 22)" fill="#295C77" />
      <ellipse cx="177" cy="22" rx="12" ry="18" transform="rotate(12 177 22)" fill="#1A9A83" />
      <ellipse cx="20" cy="92" rx="12" ry="18" transform="rotate(-30 20 92)" fill="#295C77" />
      <ellipse cx="230" cy="92" rx="12" ry="18" transform="rotate(30 230 92)" fill="#295C77" />
      <circle cx="126" cy="98" r="55" fill="#295C77" fillOpacity="0.6" />
      <circle cx="87" cy="166" r="56" fill="#1A9A83" fillOpacity="0.6" />
      <circle cx="165" cy="166" r="56" fill="#295C77" fillOpacity="0.6" />
    </svg>
  );
}
