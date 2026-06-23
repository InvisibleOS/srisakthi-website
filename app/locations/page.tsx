import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { LocationCard } from "@/components/location-card";
import { locations, img } from "@/lib/data";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find your nearest Sri Sakthi Cinemas multiplex across six cities in Tamil Nadu and book your show.",
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero band */}
      <section className="relative overflow-hidden bg-ink pb-16 pt-36 sm:pt-40">
        <Image
          src={img.marquee}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/85 to-ink/60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our cinemas
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl">
              Six cities. One standard of cinema.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/70">
              Choose a property to load showtimes, pick your seats and explore
              the venue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc, i) => (
              <Reveal key={loc.slug} delay={i * 80} className="h-full">
                <LocationCard location={loc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
