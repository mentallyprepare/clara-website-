import { Compass, Library, PenLine, ShieldCheck, Workflow, RefreshCw } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: Compass,
    title: "Business understanding",
    detail: "Understand your goals, customers, processes and the conversations that matter to your organization.",
  },
  {
    icon: Library,
    title: "Context & knowledge",
    detail: "Bring together relevant business information, FAQs, policies and customer context.",
  },
  {
    icon: PenLine,
    title: "Optimized instructions",
    detail: "Build and refine the agent's prompt around your business requirements, desired outcomes and conversation scenarios.",
  },
  {
    icon: ShieldCheck,
    title: "Rules & boundaries",
    detail: "Define how the agent should respond, what it can do, which rules it must follow and when it should escalate to a human.",
  },
  {
    icon: Workflow,
    title: "Tools & actions",
    detail: "Connect the agent to the relevant tools and workflows it needs to move conversations forward.",
  },
  {
    icon: RefreshCw,
    title: "Test & refine",
    detail: "Evaluate the agent against real-world scenarios, identify gaps and refine its behavior to better serve your business goals.",
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
            Then we translate that understanding into optimized instructions, relevant knowledge,
            business rules and actions — building an agent around the way your organization
            actually works.
          </p>
        </Reveal>
        <Reveal className="clara-process__statement" delay={120}>
          <p>
            Not just a prompt.
            <strong>A process built around your business.</strong>
          </p>
        </Reveal>
      </div>

      <div className="clara-process__flow">
        <ol className="clara-process__steps" aria-label="How the Clara team builds your agent">
          {steps.map(({ icon: Icon, title, detail }, index) => (
            <li key={title}>
              <Reveal className="clara-process__card" delay={index * 90}>
                <span className="clara-process__icon"><Icon aria-hidden="true" size={20} strokeWidth={1.6} /></span>
                <div>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="clara-process__outcome" delay={600}>
          <h3>Built around your business</h3>
          <p>
            An AI agent designed to handle conversations with the right context, consistent
            guidance and a clear path to action.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
