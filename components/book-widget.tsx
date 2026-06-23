/**
 * Placeholder for the BookMyShow booking embed.
 *
 * Per the brief this is intentionally left as an empty container — drop the
 * BookMyShow <iframe>/script inside `#bms-embed` when the integration is ready.
 */
export function BookWidget({ cityName }: { cityName?: string }) {
  return (
    <div
      id="bms-embed"
      data-bms-city={cityName ?? ""}
      className="shimmer relative flex min-h-[360px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-gold/40 bg-ink-soft p-10 text-center"
    >
      <span className="grid size-14 place-items-center rounded-full bg-gold/15 text-gold">
        <svg viewBox="0 0 24 24" className="size-7" fill="none" aria-hidden>
          <path
            d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V7Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M14 5v14" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 2.5" />
        </svg>
      </span>
      <h3 className="mt-5 font-display text-xl text-white">
        BookMyShow ticketing
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/55">
        {cityName
          ? `Live showtimes & seat selection for ${cityName} load here.`
          : "Pick a cinema and live showtimes & seat selection load right here."}{" "}
        The BookMyShow embed plugs into this container.
      </p>
      <span className="mt-5 rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-white/45">
        Embed placeholder
      </span>
    </div>
  );
}
