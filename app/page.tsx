import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { LocationCard } from "@/components/location-card";
import { NowShowingMarquee } from "@/components/now-showing-marquee";
import { BookingWidget } from "@/components/booking-widget";
import { AnimatedCounter } from "@/components/animated-counter";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { locations, groupStats, partnerValues, img } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="grain relative flex min-h-svh items-center overflow-hidden bg-ink">
        {/* Always-on cinematic gradient — keeps the hero rich even if the
            background photos are slow or fail to load (never flat black). */}
        <div className="absolute inset-0 bg-[radial-gradient(125%_120%_at_75%_25%,#3c1e22_0%,#1a0f12_48%,#0b0b0d_82%)]" />

        {/* Full-height background slideshow */}
        <HeroSlideshow
          images={[img.auditorium, img.seatingRows, img.audience, img.marquee]}
        />

        {/* Black on the left for legible text, fading to transparent on the
            right so the slideshow reads clearly. */}
        <div className="absolute inset-0 bg-linear-to-r from-ink from-0% via-ink/60 via-45% to-transparent to-80%" />
        {/* Gentle fade into the section below, bottom edge only. */}
        <div className="absolute inset-0 bg-linear-to-t from-ink to-transparent to-30%" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-36 sm:px-8">
          <div className="max-w-3xl">
            <span className="animate-fade-up flex items-center gap-4 text-gold">
              <span className="ornament" aria-hidden />
              <span className="kicker">Est. 2014 · Tamil Nadu</span>
              <span className="hidden h-px w-16 bg-gold/40 sm:block" aria-hidden />
            </span>
            <h1 className="animate-fade-up delay-1 mt-7 font-display text-6xl font-medium leading-[1.05] text-ivory sm:text-7xl lg:text-8xl">
              Where great stories
              <span className="mt-1 block">
                meet the{" "}
                <span className="text-gold italic">grand screen.</span>
              </span>
            </h1>
            <p className="animate-fade-up delay-2 mt-8 max-w-xl text-lg font-light leading-relaxed text-white/70">
              Six landmark multiplexes bringing premium, large-format cinema to
              the heart of the Kongu region — and to the developments destined to
              anchor it.
            </p>
            <div className="animate-fade-up delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#book" className="btn btn-gold">
                Book Tickets
                <span aria-hidden>→</span>
              </Link>
              <Link href="/partner" className="btn btn-outline">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="animate-fade-in delay-4 absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/45 sm:flex">
          <span className="kicker text-[0.6rem]">Scroll</span>
          <span className="h-12 w-px bg-linear-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* ---------------- Book tickets ---------------- */}
      <section id="book" className="grain scroll-mt-24 bg-ink py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Book tickets"
            title="Your next show starts here"
            intro="Pick a date and showtime below — or choose a city for its full schedule."
            align="center"
            tone="light"
          />
          <Reveal className="mt-9 flex flex-wrap justify-center gap-2.5">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="rounded-full border border-white/15 px-5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-gold hover:text-gold"
              >
                {loc.city}
              </Link>
            ))}
          </Reveal>
          <Reveal className="mt-10">
            <BookingWidget />
          </Reveal>
        </div>
      </section>

      <NowShowingMarquee />

      {/* ---------------- Locations ---------------- */}
      <section className="bg-mist py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our cinemas"
              title="Six houses. One uncompromising standard."
              intro="Each landmark property carries its own booking page, showtimes and signature experience."
            />
            <Reveal delay={120}>
              <Link
                href="/locations"
                className="link-underline text-xs font-medium uppercase tracking-[0.18em] text-ink"
              >
                View all locations →
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc, i) => (
              <Reveal key={loc.slug} delay={i * 80} className="h-full">
                <LocationCard location={loc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Builder value proposition ---------------- */}
      <section className="grain relative overflow-hidden bg-ink py-28 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="For builders & developers"
              title="The anchor tenant that fills your floor plates."
              intro="A cinema is the most dependable footfall driver in retail. We design, build and operate multiplexes that elevate the entire asset."
              tone="light"
            />

            <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {partnerValues.map((value, i) => (
                <Reveal key={value.title} delay={i * 90}>
                  <div>
                    <h3 className="flex items-center gap-3 font-display text-2xl text-ivory">
                      <span className="ornament" aria-hidden />
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-white/60">
                      {value.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <Link href="/partner" className="btn btn-gold mt-12">
                Explore partnership
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-sm ring-1 ring-white/10">
              <Image
                src={img.skyline}
                alt="City skyline at dusk"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-7 -left-4 rounded-sm bg-gold p-7 text-ink sm:-left-8">
              <p className="font-display text-5xl font-semibold leading-none">8.7M</p>
              <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.2em]">
                Guests welcomed / year
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Stats strip ---------------- */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="hairline mb-14" />
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {groupStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="text-center">
                <p className="font-display text-5xl font-semibold text-ink sm:text-6xl">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink/50">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Experience strip ---------------- */}
      <section className="bg-ivory py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The experience"
            title="Engineered for the perfect show"
            intro="Every Sri Sakthi house is built to the same standard — sight, sound and comfort that keep audiences coming back."
            align="center"
          />
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {[
              {
                src: img.auditorium,
                title: "4K Laser projection",
                body: "Razor-sharp, true-to-life imagery on wall-to-wall screens.",
              },
              {
                src: img.seatingRows,
                title: "Plush recliner seating",
                body: "Generous legroom and push-back comfort in every premium row.",
              },
              {
                src: img.foyer,
                title: "Refined foyers & F&B",
                body: "Welcoming lobbies and gourmet concessions that complete the visit.",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 90} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-white ring-1 ring-black/5 transition-all duration-700 hover:-translate-y-1.5 hover:ring-gold/40 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.4)]">
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={card.src}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl text-ink">{card.title}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-ink/60">
                      {card.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Closing CTA ---------------- */}
      <section className="grain relative overflow-hidden bg-ink py-32">
        <Image
          src={img.marquee}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/60" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <span className="flex justify-center text-gold">
              <span className="kicker">Partner with us</span>
            </span>
            <h2 className="mt-6 font-display text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl">
              Planning a mall, mixed-use or
              <span className="text-gold italic"> high-street icon?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg font-light text-white/70">
              Let&apos;s explore what a Sri Sakthi multiplex could add to your
              development.
            </p>
            <Link href="/partner" className="btn btn-gold mt-10">
              Start the conversation
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
