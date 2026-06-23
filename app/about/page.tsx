import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedCounter } from "@/components/animated-counter";
import { groupStats, milestones, img } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Sri Sakthi Cinemas — a Tamil Nadu cinema circuit built on great experiences and long-term partnerships.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero band */}
      <section className="grain relative overflow-hidden bg-ink pb-20 pt-40 sm:pt-48">
        <Image
          src={img.audience}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/85 to-ink/50" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="flex items-center gap-4 text-gold">
              <span className="ornament" aria-hidden />
              <span className="kicker">About us</span>
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
              A decade of bringing the big screen{" "}
              <span className="text-gold italic">closer to home.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light text-white/70">
              From a single hall in Tiruppur to six landmark multiplexes across
              the Kongu belt — we build cinemas that communities make their own.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-ivory py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal className="relative aspect-4/3 overflow-hidden rounded-sm ring-1 ring-black/5">
            <Image
              src={img.reels}
              alt="Film reels"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Cinema, done properly — and at scale."
            />
            <div className="mt-6 space-y-4 text-base font-light leading-relaxed text-ink/65">
              <p>
                Sri Sakthi Cinemas began with a simple belief: audiences in
                Tamil Nadu&apos;s growing towns deserve the same world-class
                movie experience as the metros. We started in Tiruppur in 2014
                and never looked back.
              </p>
              <p>
                Today we operate 27 screens across six cities, welcoming close
                to nine million guests a year. Each property is built and run to
                the same exacting standard — and increasingly, in partnership
                with the developers shaping the region&apos;s retail landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grain bg-ink py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {groupStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="text-center">
                <p className="text-gold font-display text-5xl font-semibold sm:text-6xl">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/55">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-mist py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Milestones"
            title="How the circuit grew"
            align="center"
          />
          <ol className="mt-14 space-y-3">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 70}>
                <div className="flex items-baseline gap-7 rounded-sm border-l-2 border-gold/60 bg-white p-7 ring-1 ring-black/5">
                  <span className="font-display text-3xl font-semibold text-gold-deep">
                    {m.year}
                  </span>
                  <p className="text-base font-light text-ink/70">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">
              Want Sri Sakthi in your next project?
            </h2>
            <Link href="/partner" className="btn btn-ink mt-9">
              Partner with us
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
