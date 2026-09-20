import { CalendarCheck2, CalendarClock, MessageSquareText, SearchCheck, UserRoundCheck } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const stages = [
  { icon: MessageSquareText, label: "Request understood", detail: "Move appointment to Friday" },
  { icon: SearchCheck, label: "Available slots checked", detail: "Calendar and service rules" },
  { icon: CalendarCheck2, label: "Booking updated", detail: "Friday · 11:30 AM" },
  { icon: UserRoundCheck, label: "Passed to Priya with context", detail: "Customer asked for an exception" },
] as const;

export function AfterHello() {
  return (
    <section className="story-section after-hello" id="after-hello">
      <Reveal>
        <SectionHeading eyebrow="From intent to outcome" heading="The hard part starts after hello." summary="An answer is useful when the next step happens. Clara keeps the conversation connected to the work behind it—and knows when a person should take over." />
      </Reveal>
      <ol className="action-path" aria-label="Conversation-to-action workflow">
        {stages.map(({ icon: Icon, label, detail }, index) => (
          <li className="path-stage" key={label}>
            <Reveal className="path-stage__inner" delay={index * 80}>
              <span className="path-stage__step">0{index + 1}</span>
              <span className="path-stage__icon"><Icon aria-hidden="true" size={20} /></span>
              <div><strong>{label}</strong><small>{detail}</small></div>
            </Reveal>
          </li>
        ))}
      </ol>
      <p className="section-footnote"><CalendarClock aria-hidden="true" size={16} /> Every action stays traceable from request to handoff.</p>
    </section>
  );
}
