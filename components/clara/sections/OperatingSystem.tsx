import { Globe2, MessagesSquare, Phone } from "lucide-react";
import { ConversationFlow } from "../visuals/ConversationFlow";
import { Reveal } from "../Reveal";
import { PixelLogoGrid } from "@/components/ui/pixel-logo-grid";

export function OperatingSystem() {
  return (
    <section className="story-section operating-system" id="operating-system">
      <Reveal>
        <PixelLogoGrid />
      </Reveal>

      <Reveal delay={100}>
        <div className="operating-playbook">
          <div className="operating-playbook__lede">
            <p className="eyebrow">How Clara fits</p>
            <h2>One playbook. Every channel.</h2>
            <p>
              Voice, website and WhatsApp follow the same rules. Clara keeps the
              context together and hands off cleanly when a person should step in.
            </p>
            <ul className="operating-playbook__principles">
              <li><strong>Same rules</strong><span>Your approved answers follow the customer.</span></li>
              <li><strong>Same history</strong><span>No one has to ask the customer to start again.</span></li>
              <li><strong>Clear handoff</strong><span>A person receives the conversation and the work already done.</span></li>
            </ul>
          </div>
          <ConversationFlow />
        </div>
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

