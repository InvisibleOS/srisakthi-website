import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedCounter } from "@/components/animated-counter";
import { partnerValues, partnerSteps, groupStats, img } from "@/lib/data";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Bring a Sri Sakthi Cinemas multiplex to your mall, mixed-use or high-street development. Turnkey design, build and operation.",
};

const brings = [
  "Catchment & footfall feasibility study",
  "Screen-count and sightline modelling to your shell",
  "Full acoustic & projection engineering",
  "Seating, signage and brand fit-out",
  "Licensing & compliance support",
  "Day-to-day operations and joint marketing",
];

export default function PartnerPage() {
  return (
    <>
      {/* Hero band */}
      <section className="grain relative overflow-hidden bg-ink pb-24 pt-40 sm:pt-48">
        <Image
          src={img.skyline}
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
              <span className="kicker">Partner with us</span>
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              Add the region&apos;s most trusted cinema to your{" "}
              <span className="text-gold italic">development.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light text-white/70">
              A multiplex is the anchor that pulls footfall through your entire
              asset. We partner with builders and developers to design, build and
              operate cinemas that perform — and we make the process turnkey.
            </p>
            <a href="#enquire" className="btn btn-gold mt-10">
              Start an enquiry
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Why partner */}
      <section className="bg-ivory py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why a cinema anchor"
            title="The most dependable footfall driver in retail"
            intro="When a multiplex anchors a development, every other tenant benefits — longer dwell times, higher weekend traffic and a destination people travel for."
            align="center"
          />
          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {partnerValues.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 80}
                className="rounded-sm bg-white p-8 ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1.5 hover:ring-gold/40"
              >
                <span className="font-display text-4xl font-semibold text-gold-deep/40">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-ink/60">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we bring */}
      <section className="grain bg-ink py-28 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal className="relative order-2 aspect-4/3 overflow-hidden rounded-sm ring-1 ring-white/10 lg:order-1">
            <Image
              src={img.foyer}
              alt="Modern cinema foyer"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Turnkey delivery"
              title="What we bring to your shell"
              intro="Hand us a structural shell and we deliver a fully operational, branded multiplex."
              tone="light"
            />
            <ul className="mt-10 space-y-4">
              {brings.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 60}>
                  <span className="flex items-start gap-3.5 border-b border-ink-line pb-4 text-base font-light text-white/75">
                    <span className="mt-0.5 text-gold" aria-hidden>
                      ✦
                    </span>
                    {item}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-mist py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The process"
            title="From site to screening in four steps"
            align="center"
          />
          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {partnerSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 90} className="relative">
                <div className="h-full rounded-sm bg-white p-8 ring-1 ring-black/5">
                  <span className="font-display text-5xl font-semibold text-gold-deep/25">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-ink/60">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Enquiry */}
      <section id="enquire" className="grain scroll-mt-24 bg-ink py-28 text-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Let's talk"
              title="Tell us about your development"
              intro="Share a few details and our development team will be in touch to discuss feasibility for your site."
              tone="light"
            />
            <div className="mt-10 space-y-6 text-sm font-light text-white/70">
              <p>
                <span className="kicker mb-2 block text-gold">Development desk</span>
                partnerships@srisakthicinemas.example
              </p>
              <p>
                <span className="kicker mb-2 block text-gold">Phone</span>
                +91 90000 00000
              </p>
              <p>
                <span className="kicker mb-2 block text-gold">Head office</span>
                Sri Sakthi Cinemas, Kumaran Road, Tiruppur, Tamil Nadu 641601
              </p>
            </div>
          </div>

          {/* Demo enquiry form (non-functional placeholder) */}
          <Reveal>
            <form className="rounded-sm bg-white/4 p-7 ring-1 ring-white/10 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" placeholder="Your full name" />
                <Field label="Company" placeholder="Developer / firm" />
                <Field label="Email" type="email" placeholder="you@company.com" />
                <Field label="Phone" placeholder="+91" />
                <Field
                  label="Project location"
                  placeholder="City / area"
                  className="sm:col-span-2"
                />
              </div>
              <label className="mt-6 block">
                <span className="kicker text-white/55">About the project</span>
                <textarea
                  rows={4}
                  placeholder="Project type, approximate area, expected possession…"
                  className="mt-3 w-full rounded-sm border-0 border-b border-white/20 bg-transparent px-1 py-2.5 text-sm font-light text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
                />
              </label>
              <button type="button" className="btn btn-gold mt-8 w-full">
                Submit enquiry
              </button>
              <p className="mt-4 text-center text-xs font-light text-white/40">
                Demo form — submissions are not stored.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  className = "",
}: {
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="kicker text-white/55">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-0 border-b border-white/20 bg-transparent px-1 py-2.5 text-sm font-light text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
      />
    </label>
  );
}
