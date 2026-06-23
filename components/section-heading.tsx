import { Reveal } from "./reveal";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

/** Eyebrow + headline + optional intro paragraph, with a built-in reveal. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: Props) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-white" : "text-ink";
  const introColor = tone === "light" ? "text-white/70" : "text-ink/65";

  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-6 bg-gold-deep/60" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed ${introColor}`}>{intro}</p>
      )}
    </Reveal>
  );
}
