import { ArrowRight, BarChart3, Blocks, MessageCircle, Rocket, RotateCcw, Target } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const pathway = [
  { icon: Target, label: "Outcome" },
  { icon: MessageCircle, label: "Conversation" },
  { icon: Blocks, label: "Systems" },
  { icon: Rocket, label: "Launch" },
  { icon: BarChart3, label: "Review" },
  { icon: RotateCcw, label: "Improve" },
] as const;

const loop = ["Listen", "Check", "Change", "Measure again"] as const;

export function Approach() {
  return (
    <section className="story-section approach" id="approach">
      <Reveal><SectionHeading eyebrow="A practical approach" heading="Start with the number you need to move." summary="Begin with one real conversation, connect only what it needs, and expand after the evidence is clear." /></Reveal>
      <div className="approach-path" aria-label="Clara implementation pathway">
        {pathway.map(({ icon: Icon, label }, index) => (
          <Reveal className="approach-step" delay={index * 60} key={label}>
            <span><Icon aria-hidden="true" size={20} /></span><strong>{label}</strong>
            {index < pathway.length - 1 ? <ArrowRight aria-hidden="true" size={17} /> : null}
          </Reveal>
        ))}
      </div>
      <Reveal className="improvement-loop" delay={120}>
        <p>Clara improves in a visible loop</p>
        <ol>{loop.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
      </Reveal>
    </section>
  );
}
