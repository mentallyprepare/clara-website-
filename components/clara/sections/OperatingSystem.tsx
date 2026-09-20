import { BookOpenCheck, Globe2, MessagesSquare, Phone, ShieldCheck, UsersRound, Wrench } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { Conversation } from "../visuals/Conversation";

const connections = [
  { icon: BookOpenCheck, title: "Approved knowledge", note: "The right answer, not a plausible one" },
  { icon: Wrench, title: "Live tools", note: "Calendars, CRM and business systems" },
  { icon: ShieldCheck, title: "Workflow rules", note: "What Clara can do—and when to stop" },
  { icon: UsersRound, title: "Your team", note: "A clear handoff with context attached" },
] as const;

export function OperatingSystem() {
  return (
    <section className="story-section operating-system" id="operating-system">
      <Reveal><SectionHeading eyebrow="The operating layer" heading="A prompt does not know how your business works." summary="Clara connects each conversation to approved knowledge, live systems, workflow rules and the people who own the exceptions." align="center" /></Reveal>
      <div className="system-map">
        <Reveal className="system-map__center" delay={80}>
          <Conversation customer="Is there a later time today?" clara="I’ll check availability and the rescheduling rules." />
          <div className="channel-strip" aria-label="Supported conversation channels">
            <span><Phone aria-hidden="true" size={16} />Voice</span>
            <span><Globe2 aria-hidden="true" size={16} />Website</span>
            <span><MessagesSquare aria-hidden="true" size={16} />WhatsApp</span>
          </div>
        </Reveal>
        <div className="system-map__connections">
          {connections.map(({ icon: Icon, title, note }, index) => (
            <Reveal className="system-node" delay={120 + index * 70} key={title}>
              <Icon aria-hidden="true" size={20} /><div><strong>{title}</strong><small>{note}</small></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
