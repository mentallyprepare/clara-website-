import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  Check,
  ContactRound,
  DatabaseZap,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function AfterHello() {
  return (
    <section className="story-section after-hello" id="after-hello">
      <div className="after-hello__chapter" aria-hidden="true">
        <span>01</span>
        <strong>Work begins here</strong>
        <i />
        <small>Intent → action</small>
      </div>
      <Reveal>
        <SectionHeading
          eyebrow="From intent to outcome"
          heading="The hard part starts after hello."
          summary="A conversation matters when the next step actually happens. Clara checks the rules, updates the system, and brings in a person when judgment is needed."
        />
      </Reveal>

      <div className="workbench" aria-label="Conversation-to-action workflow" role="list">
        <Reveal className="workbench__brief" delay={40} role="listitem">
          <div className="workbench__eyeline">
            <span><MessageSquareText aria-hidden="true" size={15} /> Website enquiry</span>
            <span>10:18 AM</span>
          </div>
          <p className="workbench__speaker">Maya Chen · Northstar Clinics</p>
          <blockquote>
            We’re opening in Bristol, Leeds and Glasgow before November. Can
            your team support all three?
          </blockquote>
          <div className="workbench__signals">
            <span><MapPin aria-hidden="true" size={13} /> 3 locations</span>
            <span><CalendarClock aria-hidden="true" size={13} /> Before November</span>
            <span><ContactRound aria-hidden="true" size={13} /> Decision-maker</span>
          </div>
        </Reveal>

        <Reveal className="workbench__plan" delay={100} role="listitem">
          <div className="workbench__plan-head">
            <div>
              <span>Clara’s operating plan</span>
              <strong>From interest to a sales-ready lead</strong>
            </div>
            <span className="workbench__rules"><ShieldCheck aria-hidden="true" size={14} /> Rules active</span>
          </div>
          <div className="workbench__tasks">
            <div>
              <span><Building2 aria-hidden="true" size={17} /></span>
              <div><strong>Fit checked</strong><small>All three cities are in the service area</small></div>
              <Check aria-hidden="true" size={15} />
            </div>
            <div>
              <span><DatabaseZap aria-hidden="true" size={17} /></span>
              <div><strong>CRM enriched</strong><small>Locations, timeline and contact role added</small></div>
              <Check aria-hidden="true" size={15} />
            </div>
            <div>
              <span><BriefcaseBusiness aria-hidden="true" size={17} /></span>
              <div><strong>Sales owner selected</strong><small>Rohan · Multi-site accounts</small></div>
              <Check aria-hidden="true" size={15} />
            </div>
          </div>
        </Reveal>

        <Reveal className="workbench__receipt" delay={170} role="listitem">
          <span className="workbench__receipt-icon"><BadgeCheck aria-hidden="true" size={21} /></span>
          <div>
            <small>Work returned</small>
            <strong>Sales-ready lead</strong>
            <span>Full context attached · Priority: High</span>
          </div>
          <ArrowUpRight aria-hidden="true" size={18} />
        </Reveal>

        <Reveal className="workbench__boundary" delay={220} role="listitem">
          <span><UserRoundCheck aria-hidden="true" size={18} /></span>
          <div>
            <small>Human boundary</small>
            <strong>Pricing exceptions go to Rohan—with the research already done.</strong>
          </div>
        </Reveal>
      </div>

      <p className="section-footnote">
        <CalendarClock aria-hidden="true" size={16} /> Every action stays traceable from request to handoff.
      </p>
    </section>
  );
}
