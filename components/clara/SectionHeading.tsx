type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  summary?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  heading,
  summary,
  align = "left",
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{heading}</h2>
      {summary ? <p className="section-summary">{summary}</p> : null}
    </header>
  );
}
