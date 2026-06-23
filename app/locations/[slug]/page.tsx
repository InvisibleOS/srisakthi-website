import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { BookingWidget } from "@/components/booking-widget";
import { locations, getLocation } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

// Pre-render a page for each of the six properties.
export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: "Location not found" };
  return {
    title: `${location.city} Cinema`,
    description: `Book tickets and explore Sri Sakthi Cinemas ${location.city} — ${location.screens} screens, ${location.sound}, ${location.projection}.`,
  };
}

export default async function LocationPage({ params }: Params) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const facts = [
    { label: "Screens", value: String(location.screens) },
    { label: "Total seats", value: String(location.seats) },
    { label: "Sound", value: location.sound },
    { label: "Projection", value: location.projection },
    { label: "Opened", value: String(location.established) },
    { label: "Catchment", value: location.catchment },
  ];

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="grain relative overflow-hidden bg-ink pb-20 pt-40 sm:pt-48">
        <Image
          src={location.image}
          alt={`${location.city} auditorium`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/80 to-ink/45" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/45">
              <Link href="/locations" className="transition-colors hover:text-gold">
                Locations
              </Link>
              <span aria-hidden>/</span>
              <span className="text-white/75">{location.city}</span>
            </nav>
            <span className="mt-7 flex items-center gap-4 text-gold">
              <span className="ornament" aria-hidden />
              <span className="kicker">{location.district}</span>
            </span>
            <h1 className="mt-4 font-display text-6xl font-medium leading-[0.95] text-ivory sm:text-7xl lg:text-8xl">
              {location.city}
            </h1>
            <p className="mt-5 max-w-xl text-lg font-light text-white/70">
              {location.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {location.formats.map((format) => (
                <span
                  key={format}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-white/75"
                >
                  {format}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Booking (BookMyShow embed) ---------------- */}
      <section className="grain bg-ink py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Book tickets"
            title={`Now showing at ${location.city}`}
            intro="Select your show, date and seats below."
            align="center"
            tone="light"
          />
          <Reveal className="mt-12">
            <BookingWidget cityName={location.city} />
          </Reveal>
        </div>
      </section>

      {/* ---------------- About the property ---------------- */}
      <section className="bg-ivory py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="About the property"
                title={`Inside ${location.city}`}
                intro={`Opened in ${location.established}, this ${location.screens}-screen multiplex serves a catchment of ${location.catchment.toLowerCase()}. It is built to the full Sri Sakthi specification — ${location.projection} projection, ${location.sound} sound and premium seating throughout.`}
              />
              <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-ink/65">
                The venue is designed as an anchor destination: easy access,
                generous parking and a foyer that comfortably handles weekend
                peaks. For developers, it is a turnkey footfall driver that lifts
                surrounding retail and F&B.
              </p>

              <div className="mt-10">
                <h3 className="kicker text-ink/40">Amenities</h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {location.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="rounded-full bg-white px-4 py-2 text-sm font-light text-ink/75 ring-1 ring-black/5"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 rounded-sm border-l-2 border-gold bg-ink p-7 text-white">
                <h3 className="kicker text-gold">Address</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/75">
                  {location.address}
                </p>
              </div>
            </div>

            {/* Fact grid + image */}
            <div className="space-y-7">
              <Reveal className="relative aspect-video overflow-hidden rounded-sm ring-1 ring-black/5">
                <Image
                  src={location.image}
                  alt={`${location.city} interior`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </Reveal>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {facts.map((fact, i) => (
                  <Reveal
                    key={fact.label}
                    delay={i * 70}
                    className="rounded-sm bg-white p-6 ring-1 ring-black/5"
                  >
                    <p className="font-display text-3xl font-semibold text-ink">
                      {fact.value}
                    </p>
                    <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink/45">
                      {fact.label}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Other locations ---------------- */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-3xl text-ink">Other cinemas</h2>
            <Link
              href="/locations"
              className="link-underline text-xs font-medium uppercase tracking-[0.18em] text-ink"
            >
              View all →
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {locations
              .filter((l) => l.slug !== location.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-light text-ink ring-1 ring-black/5 transition-colors hover:bg-ink hover:text-ivory"
                >
                  {l.city}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
