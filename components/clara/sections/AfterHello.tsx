import { MessageSquareText, Route, UserRoundCheck } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const requirements = [
  {
    icon: MessageSquareText,
    title: "Understand the context",
    body: "Know what the customer is asking and what has already been discussed.",
  },
  {
    icon: Route,
    title: "Know what to do next",
    body: "Follow the right rules, access relevant information and take the appropriate action.",
  },
  {
    icon: UserRoundCheck,
    title: "Know when to involve a human",
    body: "Recognize when a request needs human support instead of forcing an automated response.",
  },
] as const;

export function AfterHello() {
  return (
    <section className="story-section after-hello problem" id="after-hello">
      <div className="after-hello__chapter" aria-hidden="true">
        <span>01</span>
        <strong>The problem</strong>
        <i />
      </div>
      <Reveal>
        <SectionHeading
          eyebrow="From answering to actually handling"
          heading="AI can answer a call. That doesn’t mean it can handle your business."
          summary="A conversation rarely stays on script. Customers change their minds, ask unexpected questions, need updates, or want to switch channels. Every turn requires context, the right response and sometimes a real action."
        />
      </Reveal>

      <div className="problem__panel" aria-label="A customer conversation and what it requires">
        <Reveal className="problem__call" delay={40}>
          <div className="problem__meta">
            <span>Incoming call · Customer support</span>
            <span>10:18 AM</span>
          </div>

          <ol className="problem__turns" aria-label="The customer conversation">
            <li className="problem__turn problem__turn--lead">
              <q>
                I need to <em>reschedule my appointment.</em>
              </q>
            </li>
            <li className="problem__turn">
              <q>
                Actually, can you also tell me <em>if my insurance covers it?</em>
              </q>
            </li>
            <li className="problem__turn">
              <q>
                And can you <em>send the details on WhatsApp?</em>
              </q>
            </li>
          </ol>

          <p className="problem__conclusion">One conversation. Three different needs.</p>
        </Reveal>

        <Reveal className="problem__needs" delay={100}>
          <h3>What this conversation requires</h3>
          <ul>
            {requirements.map(({ icon: Icon, title, body }) => (
              <li key={title}>
                <span className="problem__icon">
                  <Icon aria-hidden="true" size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <p className="section-footnote problem__footnote">
        Every conversation can take a different turn. Your AI needs to be ready for it.
      </p>
    </section>
  );
}
