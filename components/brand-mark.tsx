import Link from "next/link";

/**
 * Lightweight wordmark logo. Avoids depending on an external image asset so the
 * demo always renders. Gold "reel" glyph + two-line wordmark.
 */
export function BrandMark({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const wordColor = tone === "light" ? "text-white" : "text-ink";
  const subColor = tone === "light" ? "text-white/60" : "text-ink/50";

  return (
    <Link
      href="/"
      aria-label="Sri Sakthi Cinemas — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span className="relative grid size-10 place-items-center rounded-full bg-gold text-ink shadow-[0_0_0_1px_rgba(0,0,0,0.06)] transition-transform duration-500 ease-out group-hover:rotate-90">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <circle cx="12" cy="6.4" r="1.5" fill="currentColor" />
          <circle cx="12" cy="17.6" r="1.5" fill="currentColor" />
          <circle cx="6.4" cy="12" r="1.5" fill="currentColor" />
          <circle cx="17.6" cy="12" r="1.5" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg tracking-wide ${wordColor}`}>
          SRI SAKTHI
        </span>
        <span className={`text-[0.62rem] font-medium uppercase tracking-[0.34em] ${subColor}`}>
          Cinemas
        </span>
      </span>
    </Link>
  );
}
