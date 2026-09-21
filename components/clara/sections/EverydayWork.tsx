import Image from "next/image";
import { ArrowUpRight, Check, Coffee } from "lucide-react";
import { Reveal } from "../Reveal";

const moments = [
  {
    channel: "Order · 9:14 AM",
    request: "“Can I change the delivery address?”",
    result: "Updated before dispatch",
  },
  {
    channel: "Website · 10:02 AM",
    request: "“Does this plan work for 50 people?”",
    result: "Answered from approved pricing",
  },
  {
    channel: "WhatsApp · 10:26 AM",
    request: "“I’d rather speak to someone.”",
    result: "Priya got the whole conversation",
  },
] as const;

export function EverydayWork() {
  return (
    <section className="story-section everyday-work" id="everyday-work">
      <Reveal className="everyday-intro">
        <p className="eyebrow">A very ordinary morning</p>
        <h2>Some work should simply disappear.</h2>
        <p>
          Not every customer question needs a journey. Clara handles the routine
          ones and makes the exceptions easy for a person to pick up.
        </p>
      </Reveal>

      <div className="workday-board">
        <Reveal className="workday-photo" delay={70}>
          <Image
            src="/images/clara-workflow.webp"
            alt="A team working together around a table"
            fill
            sizes="(max-width: 800px) 100vw, 58vw"
          />
          <span className="workday-photo__time">Thursday · 10:26</span>
          <div className="workday-photo__caption">
            <span>Meanwhile, at the team table</span>
            <strong>The queue got shorter.</strong>
          </div>
        </Reveal>

        <Reveal className="workday-receipt" delay={130}>
          <header>
            <span>Morning receipt</span>
            <Coffee aria-hidden="true" size={19} />
          </header>
          <div className="workday-receipt__count">
            <strong>Done.</strong>
            <span>before the second coffee</span>
          </div>
          <ul aria-label="Morning work completed">
            <li><Check aria-hidden="true" size={16} />Address changed</li>
            <li><Check aria-hidden="true" size={16} />Plan question answered</li>
            <li><Check aria-hidden="true" size={16} />One human handoff</li>
          </ul>
          <p>No copying notes. No chasing context. No dashboard theatre.</p>
        </Reveal>
      </div>

      <div className="customer-moments" aria-label="Examples of everyday customer work">
        {moments.map((moment, index) => (
          <Reveal className="customer-moment" delay={index * 55} key={moment.channel}>
              <span>{moment.channel}</span>
              <blockquote>{moment.request}</blockquote>
              <div><Check aria-hidden="true" size={15} /><strong>{moment.result}</strong></div>
              <ArrowUpRight aria-hidden="true" size={18} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
