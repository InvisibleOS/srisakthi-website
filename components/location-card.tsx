import Image from "next/image";
import Link from "next/link";
import type { Location } from "@/lib/data";

/** Property card used on the home page and the locations index. */
export function LocationCard({ location }: { location: Location }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-ink text-white shadow-sm ring-1 ring-black/5 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={location.image}
          alt={`${location.city} cinema`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
          {location.screens} screens
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          {location.district}
        </p>
        <h3 className="mt-2 font-display text-2xl tracking-tight">
          {location.city}
        </h3>
        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-relaxed text-white/60">
          {location.tagline}
        </p>

        <div className="mt-auto flex items-center gap-5 border-t border-ink-line pt-4 text-sm text-white/70">
          <span>
            <strong className="font-semibold text-white">{location.seats}</strong> seats
          </span>
          <span>
            <strong className="font-semibold text-white">{location.sound}</strong>
          </span>
        </div>

        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all duration-300 group-hover:gap-3">
          Book &amp; explore
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
