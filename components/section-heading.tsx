import { Reveal } from "./reveal";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

/** Kicker + elegant serif headline + optional intro, with a built-in reveal. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: Props) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-ivory" : "text-ink";
  const introColor = tone === "light" ? "text-white/65" : "text-ink/60";

  return (
    <Reveal className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`flex items-center gap-3 text-gold-deep ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="ornament" aria-hidden />
          <span className="kicker">{eyebrow}</span>
        </span>
      )}
      <h2
        className={`mt-5 font-display text-4xl leading-[1.08] sm:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg font-light leading-relaxed ${introColor}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
