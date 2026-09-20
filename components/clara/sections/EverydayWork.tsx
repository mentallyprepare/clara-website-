import Image from "next/image";
import { ArrowUpRight, CalendarCheck2, CircleCheckBig, Route, SearchCheck } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const outcomes = [
  { icon: CalendarCheck2, title: "Appointment moved", detail: "Availability checked and confirmation sent" },
  { icon: SearchCheck, title: "Lead qualified", detail: "The right context captured before follow-up" },
  { icon: CircleCheckBig, title: "Status checked", detail: "An answer pulled from the live system" },
  { icon: Route, title: "Renewal routed", detail: "The owner receives the conversation context" },
] as const;

export function EverydayWork() {
  return (
    <section className="story-section everyday-work" id="everyday-work">
      <Reveal><SectionHeading eyebrow="Everyday work" heading="Small moments become completed work." summary="Let routine work move while your team stays close to the moments that need judgment." /></Reveal>
      <div className="workflow-mosaic">
        <Reveal className="workflow-photo" delay={80}>
          <Image src="/images/clara-workflow.webp" alt="A team collaborating around laptops in a shared workspace" fill sizes="(max-width: 800px) 100vw, 56vw" />
          <span className="scene-label">Example workflow · collaborative operations</span>
          <div className="photo-fragment"><CircleCheckBig aria-hidden="true" size={18} /><span><strong>Context attached</strong><small>Ready for the next person</small></span></div>
        </Reveal>
        <Reveal className="cutout-scene" delay={140}>
          <div className="cutout-scene__copy"><span>Escalation ready</span><strong>The person who steps in starts with the full picture.</strong></div>
          <Image src="/images/clara-person-cutout.webp" alt="Illustrative operations professional holding a phone" width={900} height={1350} sizes="(max-width: 800px) 76vw, 26vw" />
        </Reveal>
        <div className="outcome-list">
          {outcomes.map(({ icon: Icon, title, detail }, index) => (
            <Reveal className="outcome-row" delay={index * 60} key={title}>
              <span className="outcome-row__icon"><Icon aria-hidden="true" size={19} /></span>
              <span><strong>{title}</strong><small>{detail}</small></span>
              <ArrowUpRight aria-hidden="true" size={18} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
