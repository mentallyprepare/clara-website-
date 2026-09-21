import {
  ArrowDownRight,
  BookOpenCheck,
  Database,
  Globe2,
  MessagesSquare,
  Phone,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { Reveal } from "../Reveal";

const clientLogos = [
  {
    name: "Panasonic",
    src: "https://viko.panasonic.com/Uploads/Cms/logo_siyah.png",
    className: "client-logo--panasonic",
  },
  {
    name: "Rupeek",
    src: "https://assets.rupeek.com/website/images/atl-refresh/logo-new.svg",
    className: "client-logo--rupeek",
  },
  {
    name: "Zolve",
    src: "https://www.zolveimages.zolve.com/website/images/zolve_logo.svg",
    className: "client-logo--zolve",
  },
  {
    name: "Quick Heal",
    src: "https://www.quickheal.co.in/static/version1789060853/frontend/quickheal/in/en_US/images/logo.svg",
    className: "client-logo--quickheal",
  },
  {
    name: "Atlantic",
    src: "https://atlanticcourier.net/static/imgs/atlantic-logo.svg",
    className: "client-logo--atlantic",
  },
] as const;

const operatingLayers = [
  {
    icon: BookOpenCheck,
    number: "01",
    title: "Approved answer",
    note: "Service knowledge, policy and the words your team would use.",
  },
  {
    icon: Database,
    number: "02",
    title: "Customer context",
    note: "CRM history, account state and the details already known.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Permission to act",
    note: "The tools Clara may use—and the point where she must stop.",
  },
  {
    icon: UserRoundCheck,
    number: "04",
    title: "A named fallback",
    note: "The right person receives the conversation with its context intact.",
  },
] as const;

function FlowstackLogo() {
  return (
    <span className="flowstack-logo" aria-label="Flowstack">
      <svg aria-hidden="true" fill="none" viewBox="0 0 34 22">
        <path d="M0 11h6" />
        <rect height="12.5" width="20.5" x="6.75" y="4.75" />
        <rect className="flowstack-logo__fill" height="5" width="5" x="10.25" y="8.5" />
        <rect height="5" width="5" x="18.75" y="8.5" />
        <path d="M27.25 11H34M31.5 8.5 34 11l-2.5 2.5" />
      </svg>
      <strong>Flowstack</strong>
    </span>
  );
}

export function OperatingSystem() {
  return (
    <section className="story-section operating-system" id="operating-system">
      <Reveal>
        <div className="client-proof">
          <div className="client-proof__intro">
            <span>Already at work</span>
            <p>Supporting customer operations across finance, technology and service.</p>
          </div>
          <div className="client-logo-cloud" role="list" aria-label="Teams working with Claritel">
            {clientLogos.map((logo) => (
              <div className={`client-logo ${logo.className}`} role="listitem" key={logo.name}>
                {/* Brand assets are supplied as lightweight official SVG/PNG wordmarks. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={logo.name} decoding="async" loading="lazy" src={logo.src} />
              </div>
            ))}
            <div className="client-logo client-logo--flowstack" role="listitem">
              <FlowstackLogo />
            </div>
          </div>
        </div>
      </Reveal>

      <div className="operating-editorial">
        <Reveal className="operating-editorial__copy">
          <p className="eyebrow">How Clara fits</p>
          <h2>Clara works from your playbook.</h2>
          <p className="operating-editorial__summary">
            Before Clara answers, she checks what your team has approved, what the
            customer record says and what the next action is allowed to be.
          </p>
          <div className="operating-editorial__principle">
            <ArrowDownRight aria-hidden="true" size={22} />
            <p>No black box. Every answer has a source. Every action has a rule.</p>
          </div>
        </Reveal>

        <Reveal className="operating-brief" delay={100}>
          <header className="operating-brief__header">
            <div>
              <span>The operating brief</span>
              <strong>What Clara can see and do</strong>
            </div>
            <span className="operating-brief__live"><i />Live rules</span>
          </header>

          <div className="operating-brief__rows" role="list" aria-label="Clara operating rules">
            {operatingLayers.map(({ icon: Icon, number, title, note }) => (
              <div className="operating-brief__row" role="listitem" key={number}>
                <span className="operating-brief__number">{number}</span>
                <span className="operating-brief__icon"><Icon aria-hidden="true" size={19} /></span>
                <div>
                  <strong>{title}</strong>
                  <p>{note}</p>
                </div>
              </div>
            ))}
          </div>

          <footer className="operating-brief__channels" aria-label="Supported conversation channels">
            <span><Phone aria-hidden="true" size={15} />Voice</span>
            <span><Globe2 aria-hidden="true" size={15} />Website</span>
            <span><MessagesSquare aria-hidden="true" size={15} />WhatsApp</span>
            <small>One playbook, across every channel.</small>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
