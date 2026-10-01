import { MessageSquareText, Route, UserRoundCheck } from "lucide-react";
import { Reveal } from "../Reveal";

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
      <Reveal>
        <header className="problem__header">
          <h2>
            AI can answer a call.{" "}
            <br className="problem__break" />
            That doesn’t mean it can handle your business.
          </h2>
          <p>
            A conversation rarely stays on script. Customers change their minds, ask unexpected questions, need updates, or want to switch channels. Every turn requires context, the right response and sometimes a real action.
          </p>
        </header>
      </Reveal>

      <div className="problem__panel" aria-label="A customer conversation and what it requires">
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

        <Reveal className="problem__call" delay={40}>
          <video
            aria-label="A customer conversation that grows from one request into three"
            autoPlay
            className="problem__video"
            loop
            muted
            playsInline
            preload="auto"
            src="/Comp%201.mp4"
          />
        </Reveal>
      </div>
    </section>
  );
}
