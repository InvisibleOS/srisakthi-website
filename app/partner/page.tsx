import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
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
      <section className="relative overflow-hidden bg-ink pb-20 pt-36 sm:pt-44">
        <Image
          src={img.skyline}
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
              Partner with us
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Add the region&apos;s most trusted cinema to your development.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/70">
              A multiplex is the anchor that pulls footfall through your entire
              asset. We partner with builders and developers to design, build and
              operate cinemas that perform — and we make the process turnkey.
            </p>
            <a
              href="#enquire"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gold-bright"
            >
              Start an enquiry
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why a cinema anchor"
            title="The most dependable footfall driver in retail"
            intro="When a multiplex anchors a development, every other tenant benefits — longer dwell times, higher weekend traffic and a destination people travel for."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnerValues.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 80}
                className="rounded-2xl bg-cream p-7 ring-1 ring-black/5"
              >
                <span className="grid size-11 place-items-center rounded-full bg-ink font-display text-lg text-gold">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we bring */}
      <section className="bg-ink py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal className="relative order-2 aspect-4/3 overflow-hidden rounded-3xl ring-1 ring-white/10 lg:order-1">
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
            <ul className="mt-8 space-y-3">
              {brings.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 60}>
                  <span className="flex items-start gap-3 text-base text-white/75">
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-gold text-[0.7rem] font-bold text-ink">
                      ✓
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
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The process"
            title="From site to screening in four steps"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnerSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 90} className="relative">
                <div className="h-full rounded-2xl bg-white p-7 ring-1 ring-black/5">
                  <span className="font-display text-4xl text-gold-deep/30">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
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

      {/* Enquiry */}
      <section id="enquire" className="scroll-mt-24 bg-ink py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Let's talk"
              title="Tell us about your development"
              intro="Share a few details and our development team will be in touch to discuss feasibility for your site."
              tone="light"
            />
            <div className="mt-8 space-y-4 text-sm text-white/70">
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Development desk
                </span>
                partnerships@srisakthicinemas.example
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Phone
                </span>
                +91 90000 00000
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Head office
                </span>
                Sri Sakthi Cinemas, Kumaran Road, Tiruppur, Tamil Nadu 641601
              </p>
            </div>
          </div>

          {/* Demo enquiry form (non-functional placeholder) */}
          <Reveal>
            <form className="rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
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
              <label className="mt-5 block">
                <span className="text-sm font-medium text-white/80">
                  About the project
                </span>
                <textarea
                  rows={4}
                  placeholder="Project type, approximate area, expected possession…"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-ink-soft px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-gold focus:outline-none"
                />
              </label>
              <button
                type="button"
                className="mt-6 w-full rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gold-bright"
              >
                Submit enquiry
              </button>
              <p className="mt-3 text-center text-xs text-white/40">
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
      <span className="text-sm font-medium text-white/80">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/15 bg-ink-soft px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-gold focus:outline-none"
      />
    </label>
  );
}
