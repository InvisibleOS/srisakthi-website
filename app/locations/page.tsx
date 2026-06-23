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
      <section className="grain relative overflow-hidden bg-ink pb-20 pt-40 sm:pt-48">
        <Image
          src={img.marquee}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/85 to-ink/55" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="flex items-center gap-4 text-gold">
              <span className="ornament" aria-hidden />
              <span className="kicker">Our cinemas</span>
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
              Six cities. One{" "}
              <span className="text-gold-gradient italic">standard</span> of cinema.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light text-white/70">
              Choose a property to load showtimes, pick your seats and explore
              the venue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
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
