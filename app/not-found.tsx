import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-svh place-items-center bg-ink px-5 text-center">
      <div>
        <p className="font-display text-7xl text-gold sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-2xl text-white sm:text-3xl">
          This show isn&apos;t playing here.
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-white/60">
          The page you were looking for has left the building.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gold-bright"
        >
          Back to home
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
