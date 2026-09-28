"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Coffee,
  Globe2,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import { Reveal } from "@/components/clara/Reveal";

const moments = [
  {
    icon: ShoppingBag,
    channel: "Order · 9:14 AM",
    title: "Caught in time.",
    request: "Can I change the delivery address?",
    action: "Address updated before dispatch",
    proof: "Order #4821 · delivery record changed",
    outcome: "No missed package. No callback needed.",
  },
  {
    icon: Globe2,
    channel: "Website · 10:02 AM",
    title: "Answered from the playbook.",
    request: "Does this plan work for 50 people?",
    action: "Approved team pricing shared",
    proof: "Pricing playbook · September edition",
    outcome: "A clear answer, without a made-up number.",
  },
  {
    icon: MessageCircle,
    channel: "WhatsApp · 10:26 AM",
    title: "Handed off, gently.",
    request: "I’d rather speak to someone.",
    action: "Conversation passed to Priya",
    proof: "Transcript + customer record attached",
    outcome: "Priya starts with the whole conversation in view.",
  },
] as const;

export const FeatureHero = () => {
  const [selected, setSelected] = useState(0);
  const active = moments[selected];
  const ActiveIcon = active.icon;

  return (
    <section
      id="everyday-work"
      className="story-section everyday-work"
    >
      <div className="everyday-intro">
        <Reveal>
          <p className="eyebrow">A very ordinary morning</p>
          <h2>Three conversations. <em>Already handled.</em></h2>
        </Reveal>
        <Reveal delay={70}>
          <p>Routine work should feel ordinary: the right answer, the right action, and a clean handoff when someone needs a person.</p>
        </Reveal>
      </div>

      <div className="morning-console">
        <div className="morning-console__tabs" role="tablist" aria-label="Three customer conversations">
          {moments.map((moment, index) => {
            const Icon = moment.icon;
            return (
              <button
                aria-controls="morning-conversation"
                aria-selected={selected === index}
                className={selected === index ? "is-active" : ""}
                key={moment.title}
                onClick={() => setSelected(index)}
                onMouseEnter={() => setSelected(index)}
                role="tab"
                type="button"
              >
                <span><Icon aria-hidden="true" size={18} strokeWidth={1.7} /></span>
                <div><small>{moment.channel}</small><strong>{moment.title}</strong></div>
                <ArrowRight aria-hidden="true" size={16} />
              </button>
            );
          })}
        </div>
        <div className="morning-console__stage" id="morning-conversation" role="tabpanel">
          <div className="morning-console__stage-head"><span><ActiveIcon aria-hidden="true" size={16} /> Live thread</span><small>{active.channel}</small></div>
          <p className="morning-console__customer">“{active.request}”</p>
          <div className="morning-console__action">
            <span><Check aria-hidden="true" size={15} /></span>
            <div><small>Handled by Clara</small><strong>{active.action}</strong></div>
          </div>
          <div className="morning-console__trace"><small>Checked against</small><span>{active.proof}</span></div>
          <p className="morning-console__outcome">{active.outcome}</p>
        </div>
        <div className="morning-receipt">
          <div className="morning-receipt__head"><Coffee aria-hidden="true" size={18} /><span>Morning receipt</span></div>
          <strong>3</strong>
          <p>customer requests completed before the second coffee.</p>
          <dl>
            <div><dt>Actions completed</dt><dd>2</dd></div>
            <div><dt>Handed to a person</dt><dd>1</dd></div>
            <div><dt>Context copied by hand</dt><dd>0</dd></div>
          </dl>
          <small>The queue got shorter. The team kept moving.</small>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;

