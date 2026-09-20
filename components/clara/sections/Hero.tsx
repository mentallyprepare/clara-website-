"use client";

import {
  ArrowRight,
  CalendarCheck2,
  Check,
  Clock3,
  MessageSquareText,
  Play,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "../Reveal";

const scenarios = [
  {
    id: "booking",
    label: "Reschedule a booking",
    channel: "Voice",
    customer: "Can we move my appointment to Friday morning?",
    clara: "Yes — I found an available time that follows your booking rules.",
    outcome: "Booking updated",
    detail: "Friday · 11:30 AM",
    system: "Calendar",
    icon: CalendarCheck2,
  },
  {
    id: "lead",
    label: "Qualify a lead",
    channel: "Website",
    customer: "We need support across three locations before November.",
    clara: "I have the locations, timeline and decision-maker details.",
    outcome: "Lead qualified",
    detail: "Ready for sales · Full context attached",
    system: "CRM",
    icon: UserRoundCheck,
  },
  {
    id: "exception",
    label: "Route an exception",
    channel: "WhatsApp",
    customer: "The standard return window ended yesterday. Can you help?",
    clara: "This needs judgment, so I’m bringing in the right person with context.",
    outcome: "Passed to Priya",
    detail: "Transcript and customer history attached",
    system: "Human handoff",
    icon: ShieldCheck,
  },
] as const;

export function Hero() {
  const [activeId, setActiveId] = useState<(typeof scenarios)[number]["id"]>(
    "booking",
  );
  const active = scenarios.find((scenario) => scenario.id === activeId)!;
  const OutcomeIcon = active.icon;

  return (
    <section className="hero" id="hero">
      <div className="hero__intro">
        <Reveal>
          <p className="eyebrow hero__eyebrow">
            <Sparkles aria-hidden="true" size={14} /> Agentic AI for customer
            conversations
          </p>
          <h1>Conversations should move work forward.</h1>
          <p className="hero__summary">
            Clara listens across calls, your website and WhatsApp, then safely
            completes the next approved step. Your team stays in control when
            judgment matters.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#invitation">
              Talk to Clara <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a className="button button--quiet" href="#after-hello">
              <Play aria-hidden="true" size={17} /> Hear a sample conversation
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal className="hero-story" delay={100}>
        <div className="hero-story__photo">
          <Image
            alt="A customer service professional speaking with a customer"
            fill
            priority
            sizes="(max-width: 980px) 100vw, 48vw"
            src="/images/clara-hero.webp"
          />
          <div className="hero-story__photo-label">
            <span className="hero-story__live" aria-hidden="true" />
            Live customer conversation
          </div>
        </div>

        <div className="hero-story__evidence">
          <div
            aria-label="Choose a conversation"
            className="hero-scenarios"
            role="group"
          >
            {scenarios.map((scenario, index) => (
              <button
                aria-pressed={scenario.id === activeId}
                className="hero-scenario"
                key={scenario.id}
                onClick={() => setActiveId(scenario.id)}
                type="button"
              >
                <span className="hero-scenario__number">0{index + 1}</span>
                <span>{scenario.label}</span>
              </button>
            ))}
          </div>

          <div className="hero-transcript">
            <div className="hero-transcript__head">
              <span>
                <MessageSquareText aria-hidden="true" size={16} /> {active.channel}
              </span>
              <small><Clock3 aria-hidden="true" size={12} /> 01:42</small>
            </div>
            <div className="hero-turn">
              <span>Customer</span>
              <p>{active.customer}</p>
            </div>
            <div className="hero-turn hero-turn--clara">
              <span>Clara</span>
              <p>{active.clara}</p>
            </div>
          </div>

          <div className="hero-outcome" aria-live="polite">
            <span className="hero-outcome__icon">
              <OutcomeIcon aria-hidden="true" size={20} />
            </span>
            <span>
              <small>{active.system}</small>
              <strong>{active.outcome}</strong>
              <span>{active.detail}</span>
            </span>
            <span className="hero-outcome__done">
              <Check aria-hidden="true" size={13} /> Complete
            </span>
          </div>

          <p className="hero-story__note">
            <ShieldCheck aria-hidden="true" size={14} /> Approved rules checked · a visible record is saved
          </p>
        </div>
      </Reveal>
    </section>
  );
}
