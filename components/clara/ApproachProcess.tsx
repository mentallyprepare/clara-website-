import { Compass, Target, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const tags = ["Business goals", "Customer needs", "Workflows", "Policies"] as const;

const steps = [
  {
    key: "business",
    icon: Compass,
    label: "Start with your business",
    title: "Every business works differently.",
    detail: "Understand your business goals, customer needs, workflows and policies before designing the AI agent.",
    tags,
  },
  {
    key: "team",
    icon: Users,
    label: "The Clara team",
    title: "We build around how you work.",
    detail: "Our team translates your business requirements into optimized prompts, relevant knowledge, actions and clear escalation rules.",
  },
  {
    key: "outcome",
    icon: Target,
    label: "The outcome",
    title: "An agent built for your business.",
    detail: "Conversations shaped around your goals, with the right context and next steps.",
  },
] as const;

export function ApproachProcess() {
  return (
    <div className="clara-process" aria-labelledby="clara-process-title">
      <div className="clara-process__message">
        <Reveal>
          <p className="clara-process__label">The Clara approach</p>
          <h2 id="clara-process-title">Your business isn&apos;t generic. Your AI shouldn&apos;t be either.</h2>
          <p className="clara-process__lede">
            Before we build your AI agent, we take the time to understand your business, your
            customers, your processes and what every conversation needs to achieve.
          </p>
          <p className="clara-process__lede">
            Then we build and refine an agent around those needs — with the right instructions,
            knowledge, actions and boundaries.
          </p>
        </Reveal>
      </div>

      <ol className="clara-process__steps" aria-label="From your business to your agent">
        {steps.map((step, index) => {
          const { icon: Icon } = step;
          return (
            <li className={`clara-process__item clara-process__item--${step.key}`} key={step.key}>
              <Reveal className="clara-process__card" delay={index * 120}>
                <span className="clara-process__icon"><Icon aria-hidden="true" size={20} strokeWidth={1.6} /></span>
                <div>
                  <small>{step.label}</small>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                  {"tags" in step ? (
                    <ul className="clara-process__tags">
                      {step.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
