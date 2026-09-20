import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Reveal } from "../Reveal";
import { ActionReceipt } from "../visuals/ActionReceipt";
import { Conversation } from "../visuals/Conversation";

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__intro">
        <Reveal>
          <p className="eyebrow">Clara by Claritel</p>
          <h1>You have conversations to handle. I&apos;ll take care of them.</h1>
          <p className="hero__summary">
            Clara is Claritel&apos;s agentic AI for calls, your website and
            WhatsApp. She understands what someone needs, takes the approved
            next step, and brings in your team when judgment matters.
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

      <Reveal className="hero__stage" delay={100}>
        <div className="hero__image-wrap">
          <Image
            alt="A professional speaking on her phone in a colorful workspace"
            className="hero__image"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
            src="/images/clara-hero.webp"
          />
        </div>
        <Conversation className="hero__conversation" />
        <ActionReceipt className="hero__receipt" />
        <p className="hero__image-note">Example workflow · illustrative scene</p>
      </Reveal>
    </section>
  );
}
