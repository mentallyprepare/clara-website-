import {
  Globe2,
  MessagesSquare,
  Phone,
} from "lucide-react";
import FeaturesBlock from "@/components/ui/features-2";
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

      <Reveal delay={100}>
        <FeaturesBlock />
      </Reveal>

      <Reveal delay={150}>
        <footer className="operating-channels" aria-label="Supported conversation channels">
          <span><Phone aria-hidden="true" size={15} />Voice</span>
          <span><Globe2 aria-hidden="true" size={15} />Website</span>
          <span><MessagesSquare aria-hidden="true" size={15} />WhatsApp</span>
          <small>One playbook, across every channel.</small>
        </footer>
      </Reveal>
    </section>
  );
}
