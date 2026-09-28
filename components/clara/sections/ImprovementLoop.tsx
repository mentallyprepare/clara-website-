import { Ear, ScanSearch, PenLine, Gauge, Check, ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";

const steps = [
  {
    verb: "Listen.", icon: Ear, who: "Clara",
    body: "Clara handles the interaction — voice, website or WhatsApp — and records what happened.",
    className: "loop-card--listen",
    detail: <div className="loop-artifact loop-artifact--conversation" aria-label="Example conversation"><span className="loop-artifact__time">09:42 · WhatsApp</span><p><strong>Customer</strong> Can I move Friday’s appointment?</p><p><strong>Clara</strong> Yes. I can check the available times now.</p><span className="loop-artifact__status"><span /> Listening across every channel</span></div>,
  },
  {
    verb: "Check.", icon: ScanSearch, who: "ClaraLens",
    body: "ClaraLens scores the conversation against your rubric and marks what passed, failed or did not apply.",
    className: "loop-card--check",
    detail: <div className="loop-artifact loop-artifact--score" aria-label="ClaraLens review example"><div><span>Conversation review</span><strong>92</strong></div><ul><li><Check size={15} /> Intent understood <b>Passed</b></li><li><Check size={15} /> Policy followed <b>Passed</b></li><li><Check size={15} /> Outcome recorded <b>Passed</b></li></ul><a href="#claralens">Open the evidence <ArrowUpRight size={14} /></a></div>,
  },
  {
    verb: "Change.", icon: PenLine, who: "Your team",
    body: "Transcripts, tool activity and dispositions show why a conversation missed, so the fix lands in the workflow — not in a guess at the prompt.",
    className: "loop-card--change",
    detail: <div className="loop-artifact loop-artifact--change" aria-label="Workflow change example"><span>Rule change · v12</span><p>When a customer asks for a pricing exception, collect the reason before the handoff.</p><div><s>Send to general queue</s><strong>Route to Priya with context</strong></div></div>,
  },
  {
    verb: "Measure again.", icon: Gauge, who: "The result",
    body: "The next batch is compared to the agreed baseline. Every adjustment ties back to a conversation, a rule or an outcome.",
    className: "loop-card--measure",
    detail: <div className="loop-artifact loop-artifact--measure" aria-label="Improvement result example"><div><span>Before</span><strong>78%</strong></div><div className="loop-artifact__line"><i /><i /></div><div><span>After rule v12</span><strong>92%</strong></div><p>+14 points · reviewed across 240 conversations</p></div>,
  },
];

export function ImprovementLoop() {
  return (
    <section id="improvement-loop" className="improvement-loop-section">
      <div className="improvement-loop-inner">
        <Reveal><div className="improvement-loop-heading"><p className="eyebrow">The improvement loop</p><h2>Nothing improves in the dark.</h2><p>Scroll through the working loop. Each change connects to a conversation, a rule or a result.</p></div></Reveal>
        <ol className="loop-stack" aria-label="How Clara improves conversations">
          {steps.map((step, index) => (
            <li className={`loop-card ${step.className}`} key={step.verb} style={{ top: `calc(5.25rem + ${index * 0.85}rem)` }}>
              <div className="loop-card__copy"><div className="loop-card__meta"><span><step.icon size={19} strokeWidth={1.8} /></span><small>0{index + 1} / 04</small></div><p>{step.who}</p><h3>{step.verb}</h3><p>{step.body}</p></div>
              {step.detail}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
