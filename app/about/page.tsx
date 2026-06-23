import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
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
      <section className="relative overflow-hidden bg-ink pb-16 pt-36 sm:pt-44">
        <Image
          src={img.audience}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/85 to-ink/55" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              About us
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              A decade of bringing the big screen closer to home.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              From a single hall in Tiruppur to six landmark multiplexes across
              the Kongu belt — we build cinemas that communities make their own.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal className="relative aspect-4/3 overflow-hidden rounded-3xl ring-1 ring-black/5">
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
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/65">
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
      <section className="bg-ink py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
          {groupStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="text-center">
              <p className="font-display text-4xl text-gold sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-white/60">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Milestones"
            title="How the circuit grew"
            align="center"
          />
          <ol className="mt-12 space-y-2">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 70}>
                <div className="flex gap-6 rounded-2xl bg-white p-6 ring-1 ring-black/5">
                  <span className="font-display text-2xl text-gold-deep">
                    {m.year}
                  </span>
                  <p className="pt-1 text-base text-ink/70">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Want Sri Sakthi in your next project?
            </h2>
            <Link
              href="/partner"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Partner with us
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
