import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grain grid min-h-svh place-items-center bg-ink px-5 text-center">
      <div>
        <p className="text-gold font-display text-8xl font-semibold sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
          This show isn&apos;t playing here.
        </h1>
        <p className="mx-auto mt-4 max-w-sm font-light text-white/55">
          The page you were looking for has left the building.
        </p>
        <Link href="/" className="btn btn-gold mt-9">
          Back to home
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
