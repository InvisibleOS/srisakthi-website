import Link from "next/link";

/**
 * Elegant wordmark logo. Gold film-reel monogram beside a serif wordmark.
 * Avoids depending on an external image asset so the demo always renders.
 */
export function BrandMark({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const wordColor = tone === "light" ? "text-ivory" : "text-ink";
  const subColor = tone === "light" ? "text-white/50" : "text-ink/45";

  return (
    <Link
      href="/"
      aria-label="Sri Sakthi Cinemas — home"
      className={`group inline-flex items-center gap-3.5 ${className}`}
    >
      <span className="relative grid size-11 place-items-center rounded-full border border-gold/40 text-gold transition-transform duration-700 ease-out group-hover:rotate-120">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="6.6" r="1.3" fill="currentColor" />
          <circle cx="12" cy="17.4" r="1.3" fill="currentColor" />
          <circle cx="6.6" cy="12" r="1.3" fill="currentColor" />
          <circle cx="17.4" cy="12" r="1.3" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-semibold tracking-wide ${wordColor}`}>
          Sri Sakthi
        </span>
        <span className={`mt-1 text-[0.6rem] font-medium uppercase tracking-[0.42em] ${subColor}`}>
          Cinemas
        </span>
      </span>
    </Link>
  );
}
