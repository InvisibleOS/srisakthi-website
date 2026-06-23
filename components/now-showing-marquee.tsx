import { nowShowing } from "@/lib/data";

/**
 * Slow, looping marquee of "now showing" titles. The list is rendered twice so
 * the -50% translate animation loops seamlessly. Pauses on hover.
 */
export function NowShowingMarquee() {
  const items = [...nowShowing, ...nowShowing];

  return (
    <div className="border-y border-ink-line bg-ink py-6">
      <div className="group relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track items-center">
          {items.map((film, i) => (
            <span
              key={`${film.title}-${i}`}
              className="mx-9 inline-flex items-center gap-4"
            >
              <span className="ornament opacity-70" aria-hidden />
              <span className="font-display text-2xl text-ivory">
                {film.title}
              </span>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/40">
                {film.language} · {film.rating}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
