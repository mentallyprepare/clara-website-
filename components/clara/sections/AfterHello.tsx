import { ArrowRight, CalendarClock, MessageSquareText, SearchCheck } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { ActionReceipt } from "../visuals/ActionReceipt";
import { Handoff } from "../visuals/Handoff";

const stages = [
  { icon: MessageSquareText, label: "Request understood", detail: "Move appointment to Friday" },
  { icon: SearchCheck, label: "Available slots checked", detail: "Calendar and service rules" },
] as const;

export function AfterHello() {
  return (
    <section className="story-section after-hello" id="after-hello">
      <Reveal>
        <SectionHeading eyebrow="From intent to outcome" heading="The hard part starts after hello." summary="An answer is useful when the next step happens. Clara keeps the conversation connected to the work behind it—and knows when a person should take over." />
      </Reveal>
      <div className="action-path" aria-label="Example conversation-to-action path">
        {stages.map(({ icon: Icon, label, detail }, index) => (
          <Reveal className="path-stage" delay={index * 80} key={label}>
            <span className="path-stage__icon"><Icon aria-hidden="true" size={21} /></span>
            <div><strong>{label}</strong><small>{detail}</small></div>
            <ArrowRight className="path-stage__arrow" aria-hidden="true" size={18} />
          </Reveal>
        ))}
        <Reveal className="path-stage path-stage--receipt" delay={160}>
          <ActionReceipt detail="Friday · 11:30 AM" />
          <ArrowRight className="path-stage__arrow" aria-hidden="true" size={18} />
        </Reveal>
        <Reveal className="path-stage path-stage--handoff" delay={240}><Handoff /></Reveal>
      </div>
      <p className="section-footnote"><CalendarClock aria-hidden="true" size={16} /> The result stays visible even when motion is switched off.</p>
    </section>
  );
}
