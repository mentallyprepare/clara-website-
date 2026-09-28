import { ArrowRight, BarChart3, Blocks, MessageCircle, Rocket, RotateCcw, Target } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const pathway = [
  { icon: Target, label: "Name the result", detail: "One number worth moving" },
  { icon: MessageCircle, label: "Choose the moment", detail: "One repeated conversation" },
  { icon: Blocks, label: "Connect the work", detail: "Only the tools it needs" },
  { icon: Rocket, label: "Put it live", detail: "A contained first release" },
  { icon: BarChart3, label: "Read the evidence", detail: "Every turn and action" },
  { icon: RotateCcw, label: "Make it better", detail: "Change what the record shows" },
] as const;

export function Approach() {
  return (
    <section className="story-section approach" id="approach">
      <Reveal><SectionHeading eyebrow="How we begin" heading="Start with one number." summary="Choose one conversation and one result. Connect only the systems needed to prove that Clara can move it." /></Reveal>
      <div className="approach-path" aria-label="Clara implementation pathway" role="list">
        {pathway.map(({ icon: Icon, label, detail }, index) => (
          <Reveal className="approach-step" delay={index * 60} key={label} role="listitem">
            <small>0{index + 1}</small>
            <span><Icon aria-hidden="true" size={19} /></span><div><strong>{label}</strong><p>{detail}</p></div>
            {index < pathway.length - 1 ? <ArrowRight aria-hidden="true" size={17} /> : null}
          </Reveal>
        ))}
      </div>
      <Reveal className="approach-note" delay={120}>
        <span>Small first scope</span>
        <p>No theatre, no transformation programme. One working flow, measured against today.</p>
      </Reveal>
    </section>
  );
}
