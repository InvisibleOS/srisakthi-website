import Image from "next/image";
import Link from "next/link";
import type { Location } from "@/lib/data";

/** Property card used on the home page and the locations index. */
export function LocationCard({ location }: { location: Location }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-sm bg-ink text-white ring-1 ring-white/10 transition-all duration-700 ease-out hover:-translate-y-1.5 hover:ring-gold/40 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)]"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={location.image}
          alt={`${location.city} cinema`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur">
          {location.screens} screens
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <p className="kicker text-gold-deep">{location.district}</p>
        <h3 className="mt-3 font-display text-3xl leading-none text-ivory">
          {location.city}
        </h3>
        <p className="mt-3 line-clamp-2 min-h-11 text-sm font-light leading-relaxed text-white/55">
          {location.tagline}
        </p>

        <div className="mt-auto flex items-center gap-6 border-t border-ink-line pt-5 text-sm font-light text-white/65">
          <span>
            <strong className="font-medium text-ivory">{location.seats}</strong> seats
          </span>
          <span className="text-gold-deep">·</span>
          <span className="text-ivory">{location.sound}</span>
        </div>

        <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-gold transition-all duration-500 group-hover:gap-3.5">
          Book &amp; explore
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
