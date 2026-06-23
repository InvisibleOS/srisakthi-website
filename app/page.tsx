import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { LocationCard } from "@/components/location-card";
import { NowShowingMarquee } from "@/components/now-showing-marquee";
import { locations, groupStats, partnerValues, img } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative flex min-h-svh items-center overflow-hidden bg-ink">
        <Image
          src={img.heroSeats}
          alt="Auditorium seating bathed in low light"
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-ink/30" />
        <div className="absolute inset-0 bg-linear-to-t from-ink to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-8">
          <div className="max-w-2xl">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Six cities · One experience
            </span>
            <h1 className="animate-fade-up delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Where stories meet
              <span className="block text-gold">the big screen.</span>
            </h1>
            <p className="animate-fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Sri Sakthi Cinemas brings premium, large-format movie-going to the
              heart of Tamil Nadu — and to the developments that anchor it.
            </p>
            <div className="animate-fade-up delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/locations"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gold-bright"
              >
                Book Tickets
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/partner"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="animate-fade-in delay-4 absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex">
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em]">
            Scroll
          </span>
          <span className="h-10 w-px bg-linear-to-b from-gold to-transparent" />
        </div>
      </section>

      <NowShowingMarquee />

      {/* ---------------- Locations ---------------- */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our cinemas"
              title="Pick a city to book your show"
              intro="Six landmark properties across the Kongu region — each with its own booking page and showtimes."
            />
            <Reveal delay={120}>
              <Link
                href="/locations"
                className="link-underline text-sm font-semibold text-ink"
              >
                View all locations →
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc, i) => (
              <Reveal key={loc.slug} delay={i * 80} className="h-full">
                <LocationCard location={loc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Builder value proposition ---------------- */}
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="For builders & developers"
              title="The anchor tenant that fills your floor plates."
              intro="A cinema is the most dependable footfall driver in retail. We partner with developers to design, build and operate multiplexes that lift the entire asset."
              tone="light"
            />

            <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {partnerValues.map((value, i) => (
                <Reveal key={value.title} delay={i * 90}>
                  <div>
                    <h3 className="flex items-center gap-2 font-display text-lg text-gold">
                      <span className="h-px w-5 bg-gold/50" aria-hidden />
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {value.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <Link
                href="/partner"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gold-bright"
              >
                Explore partnership
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl ring-1 ring-white/10">
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
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-gold p-6 text-ink shadow-xl sm:-left-8">
              <p className="font-display text-4xl leading-none">8.7M</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em]">
                Guests welcomed / year
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Stats strip ---------------- */}
      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
          {groupStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="text-center">
              <p className="font-display text-4xl text-ink sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-ink/55">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Experience strip ---------------- */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The experience"
            title="Engineered for the perfect show"
            intro="Every Sri Sakthi house is built to the same standard — sight, sound and comfort that keep audiences coming back."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={card.src}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-ink">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">
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
      <section className="relative overflow-hidden bg-ink py-24">
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
            <h2 className="font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl">
              Planning a mall, mixed-use or high-street project?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              Let&apos;s explore what a Sri Sakthi multiplex could add to your
              development.
            </p>
            <Link
              href="/partner"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gold-bright"
            >
              Start the conversation
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
