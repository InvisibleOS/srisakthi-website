import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { locations, navLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="grain bg-ink text-white/70">
      {/* Grand sign-off band */}
      <div className="border-b border-ink-line">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8">
          <p className="kicker text-gold-deep">Sri Sakthi Cinemas</p>
          <p className="mx-auto mt-6 max-w-3xl font-display text-3xl font-light leading-snug text-ivory sm:text-4xl">
            Where the grandeur of cinema meets the ambition of great places.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="max-w-sm">
          <BrandMark />
          <p className="mt-6 text-sm font-light leading-relaxed text-white/55">
            Premium cinema experiences across the Kongu belt of Tamil Nadu.
            Six landmark properties, one trusted name in entertainment.
          </p>
          <Link
            href="/partner"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-bright"
          >
            Bring Sri Sakthi to your development
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div>
          <h3 className="kicker text-white/35">Explore</h3>
          <ul className="mt-6 space-y-3 text-sm font-light">
            <li>
              <Link href="/" className="transition-colors hover:text-gold">
                Home
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="kicker text-white/35">Our Cinemas</h3>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-light">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="transition-colors hover:text-gold"
                >
                  {loc.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Sri Sakthi Cinemas. All rights reserved.</p>
          <p className="text-white/30">
            Demo site · imagery via Unsplash · figures are illustrative.
          </p>
        </div>
      </div>
    </footer>
  );
}
