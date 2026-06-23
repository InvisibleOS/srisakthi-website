"use client";

import { useState } from "react";
import { movies, showDates } from "@/lib/data";

/**
 * Mock movie-ticket booking module (date → film → showtime → confirm), styled
 * after a typical cinema site. Illustrative only — no real ticketing.
 */
export function BookingWidget({ cityName }: { cityName?: string }) {
  const [dateIdx, setDateIdx] = useState(0);
  const [selection, setSelection] = useState<{
    movieId: string;
    time: string;
  } | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const pickDate = (i: number) => {
    setDateIdx(i);
    setSelection(null);
    setConfirmed(false);
  };
  const pickTime = (movieId: string, time: string) => {
    setSelection({ movieId, time });
    setConfirmed(false);
  };

  const selectedMovie = selection
    ? movies.find((m) => m.id === selection.movieId)
    : null;
  const date = showDates[dateIdx];

  return (
    <div className="overflow-hidden rounded-sm border border-gold/25 bg-ink-soft text-white ring-1 ring-white/5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-line px-6 py-5">
        <span className="kicker text-gold">
          Now showing{cityName ? ` · ${cityName}` : ""}
        </span>
        <span className="text-[0.65rem] font-light uppercase tracking-[0.16em] text-white/40">
          June 2026 · Demo schedule
        </span>
      </div>

      {/* Date strip */}
      <div className="flex gap-2.5 overflow-x-auto px-6 py-5">
        {showDates.map((d, i) => {
          const active = i === dateIdx;
          return (
            <button
              key={d.day}
              type="button"
              onClick={() => pickDate(i)}
              aria-pressed={active}
              className={`flex shrink-0 flex-col items-center rounded-sm border px-4 py-2.5 transition-colors ${
                active
                  ? "border-gold bg-gold text-ink"
                  : "border-white/15 text-white/70 hover:border-gold/50"
              }`}
            >
              <span className="text-[0.58rem] font-medium uppercase tracking-[0.14em]">
                {d.weekday}
              </span>
              <span className="font-display text-xl leading-none">{d.day}</span>
            </button>
          );
        })}
      </div>

      {/* Movies */}
      <div className="divide-y divide-ink-line border-y border-ink-line">
        {movies.map((m) => (
          <div key={m.id} className="flex gap-5 px-6 py-6">
            {/* Poster */}
            <div
              className="relative hidden h-36 w-24 shrink-0 overflow-hidden rounded-sm ring-1 ring-white/10 sm:block"
              style={{
                backgroundImage: `linear-gradient(155deg, ${m.poster.from}, ${m.poster.to})`,
              }}
            >
              <span className="absolute left-2 top-2 rounded-sm bg-black/40 px-1.5 py-0.5 text-[0.58rem] font-medium text-white/90">
                {m.rating}
              </span>
              <span className="absolute inset-0 grid place-items-center text-white/25">
                <svg viewBox="0 0 24 24" className="size-7" aria-hidden>
                  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <circle cx="12" cy="7" r="1.1" fill="currentColor" />
                  <circle cx="12" cy="17" r="1.1" fill="currentColor" />
                  <circle cx="7" cy="12" r="1.1" fill="currentColor" />
                  <circle cx="17" cy="12" r="1.1" fill="currentColor" />
                </svg>
              </span>
              <span className="absolute inset-x-0 bottom-0 p-2 text-center text-[0.55rem] font-medium uppercase tracking-[0.18em] text-white/70">
                {m.genre}
              </span>
            </div>

            {/* Details + showtimes */}
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-2xl text-ivory">{m.title}</h3>
              <p className="mt-1 text-sm font-light text-white/55">
                {m.genre} · {m.runtime} · {m.language}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {m.formats.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-white/15 px-2.5 py-0.5 text-[0.58rem] font-medium uppercase tracking-[0.12em] text-white/55"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {m.showtimes.map((t) => {
                  const sel =
                    selection?.movieId === m.id && selection.time === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => pickTime(m.id, t)}
                      aria-pressed={sel}
                      className={`rounded-sm border px-3.5 py-2 text-xs font-medium tracking-wide transition-all ${
                        sel
                          ? "border-gold bg-gold text-ink"
                          : "border-white/20 text-white/80 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary / confirm */}
      <div className="bg-ink px-6 py-5">
        {selectedMovie && selection ? (
          confirmed ? (
            <p className="text-center text-sm text-gold">
              ✓ Seats reserved for {selectedMovie.title} ({selection.time}) — demo
              only, no payment taken.
            </p>
          ) : (
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm font-light text-white/70">
                <span className="font-medium text-ivory">
                  {selectedMovie.title}
                </span>{" "}
                · {selection.time} · {date.weekday}, {date.day} Jun
                {cityName ? ` · ${cityName}` : ""}
              </p>
              <button
                type="button"
                onClick={() => setConfirmed(true)}
                className="btn btn-gold !px-6 !py-2.5"
              >
                Confirm seats
              </button>
            </div>
          )
        ) : (
          <p className="text-center text-sm font-light text-white/45">
            Select a showtime to continue.
          </p>
        )}
      </div>
    </div>
  );
}
