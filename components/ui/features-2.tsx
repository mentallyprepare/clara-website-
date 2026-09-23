import { BookOpenCheck, Database, ShieldCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

type IconProps = { className?: string; size?: number | string };

type Principle = {
  number: string;
  eyebrow: string;
  Icon: (p: IconProps) => JSX.Element;
  title: string;
  body: string;
  note: string;
};

const principles: Principle[] = [
  {
    number: "01",
    eyebrow: "Playbook",
    Icon: (p) => <BookOpenCheck {...p} />,
    title: "Every reply comes from your playbook.",
    body: "Service knowledge, wording and policy — the words your team would use. Every answer is traceable to a source; nothing is invented.",
    note: "Sourced, not generated.",
  },
  {
    number: "02",
    eyebrow: "Context",
    Icon: (p) => <Database {...p} />,
    title: "She reads the record before she speaks.",
    body: "CRM history, account state, prior conversations — pulled in before the first sentence. So the reply already knows who's asking.",
    note: "Personal, without asking again.",
  },
  {
    number: "03",
    eyebrow: "Guardrails",
    Icon: (p) => <ShieldCheck {...p} />,
    title: "Clear rules. A named human when needed.",
    body: "Every tool Clara may use, and every trigger for handoff, is written down. When she hands off, the person receives the whole context.",
    note: "No black box. No silent escalations.",
  },
];

export default function FeaturesBlock() {
  return (
    <div className="clara-features">
      <div className="clara-features__lede">
        <p className="clara-features__eyebrow">How Clara fits</p>
        <h2 className="clara-features__title">
          Clara works from your playbook.
        </h2>
        <p className="clara-features__sub">
          Before Clara answers, she checks what your team has approved, what
          the customer record says, and what the next action is allowed to be.
        </p>
      </div>

      <Separator className="clara-features__rule" />

      <ol className="clara-features__list">
        {principles.map((item, i) => (
          <li key={item.number}>
            <article className="clara-principle">
              <div className="clara-principle__meta">
                <span className="clara-principle__num">{item.number}</span>
                <span className="clara-principle__eyebrow">
                  <span className="clara-principle__ico">
                    <item.Icon className="size-3.5" />
                  </span>
                  {item.eyebrow}
                </span>
              </div>
              <h3 className="clara-principle__title">{item.title}</h3>
              <p className="clara-principle__body">{item.body}</p>
              <p className="clara-principle__note">{item.note}</p>
            </article>
            {i < principles.length - 1 && (
              <Separator className="clara-principle__sep" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
