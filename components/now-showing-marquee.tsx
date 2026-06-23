import { nowShowing } from "@/lib/data";

/**
 * Slow, looping marquee of "now showing" titles. The list is rendered twice so
 * the -50% translate animation loops seamlessly. Pauses on hover.
 */
export function NowShowingMarquee() {
  const items = [...nowShowing, ...nowShowing];

  return (
    <div className="border-y border-ink-line bg-ink py-4">
      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track">
          {items.map((film, i) => (
            <span
              key={`${film.title}-${i}`}
              className="mx-7 inline-flex items-center gap-3 text-sm text-white/70"
            >
              <span className="size-1.5 rounded-full bg-gold" aria-hidden />
              <span className="font-medium text-white">{film.title}</span>
              <span className="text-white/40">
                {film.language} · {film.rating}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
