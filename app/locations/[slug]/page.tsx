import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { BookWidget } from "@/components/book-widget";
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
      <section className="relative overflow-hidden bg-ink pb-14 pt-36 sm:pt-44">
        <Image
          src={location.image}
          alt={`${location.city} auditorium`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/80 to-ink/50" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-white/50">
              <Link href="/locations" className="transition-colors hover:text-gold">
                Locations
              </Link>
              <span aria-hidden>/</span>
              <span className="text-white/80">{location.city}</span>
            </nav>
            <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {location.district}
            </span>
            <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {location.city}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/70">
              {location.tagline}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {location.formats.map((format) => (
                <span
                  key={format}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80"
                >
                  {format}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Booking (BookMyShow embed) ---------------- */}
      <section className="bg-mist py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Book tickets"
            title={`Now showing at ${location.city}`}
            intro="Select your show, date and seats below."
            align="center"
          />
          <Reveal className="mt-10">
            <BookWidget cityName={location.city} />
          </Reveal>
        </div>
      </section>

      {/* ---------------- About the property ---------------- */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="About the property"
                title={`Inside ${location.city}`}
                intro={`Opened in ${location.established}, this ${location.screens}-screen multiplex serves a catchment of ${location.catchment.toLowerCase()}. It is built to the full Sri Sakthi specification — ${location.projection} projection, ${location.sound} sound and premium seating throughout.`}
              />
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/65">
                The venue is designed as an anchor destination: easy access,
                generous parking and a foyer that comfortably handles weekend
                peaks. For developers, it is a turnkey footfall driver that lifts
                surrounding retail and F&B.
              </p>

              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/45">
                  Amenities
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {location.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink/75 ring-1 ring-black/5"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-ink p-6 text-white">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Address
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {location.address}
                </p>
              </div>
            </div>

            {/* Fact grid + image */}
            <div className="space-y-6">
              <Reveal className="relative aspect-video overflow-hidden rounded-3xl ring-1 ring-black/5">
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
                    className="rounded-2xl bg-cream p-5 ring-1 ring-black/5"
                  >
                    <p className="font-display text-2xl text-ink">{fact.value}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-ink/45">
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
      <section className="bg-mist py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-2xl text-ink">Other cinemas</h2>
            <Link
              href="/locations"
              className="link-underline text-sm font-semibold text-ink"
            >
              View all →
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {locations
              .filter((l) => l.slug !== location.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink ring-1 ring-black/5 transition-colors hover:bg-ink hover:text-white"
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
