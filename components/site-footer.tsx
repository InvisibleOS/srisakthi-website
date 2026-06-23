import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { locations, navLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <BrandMark />
          <p className="mt-5 text-sm leading-relaxed text-white/55">
            Premium cinema experiences across the Kongu belt of Tamil Nadu.
            Six landmark properties, one trusted name in entertainment.
          </p>
          <Link
            href="/partner"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-bright"
          >
            Bring Sri Sakthi to your development
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
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
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
            Our Cinemas
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
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
          <p>© {2026} Sri Sakthi Cinemas. All rights reserved.</p>
          <p className="text-white/30">
            Demo site · imagery via Unsplash · figures are illustrative.
          </p>
        </div>
      </div>
    </footer>
  );
}
