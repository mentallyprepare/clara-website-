"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { Reveal } from "../Reveal";
import { ConversationLens } from "../visuals/ConversationLens";

type Option = { value: string; label: string };
type Question = { key: string; label: string; options: Option[] };

const questions: Question[] = [
  {
    key: "volume",
    label: "How many customer conversations does your team handle each week?",
    options: [
      { value: "low", label: "Fewer than 500" },
      { value: "mid", label: "500 – 5,000" },
      { value: "high", label: "More than 5,000" },
    ],
  },
  {
    key: "tasks",
    label: "Which of these repeats most in your operation?",
    options: [
      { value: "support", label: "Customer service & questions" },
      { value: "leads", label: "Qualifying inbound leads" },
      { value: "renewals", label: "Renewals & reminders" },
      { value: "appointments", label: "Appointments & rescheduling" },
      { value: "kyc", label: "KYC or document intake" },
    ],
  },
  {
    key: "location",
    label: "Where are most of your customers based?",
    options: [
      { value: "in", label: "India" },
      { value: "us", label: "United States" },
      { value: "eu", label: "Europe" },
      { value: "global", label: "Global mix" },
    ],
  },
  {
    key: "channels",
    label: "Which channels matter most today?",
    options: [
      { value: "voice", label: "Voice" },
      { value: "whatsapp", label: "WhatsApp" },
      { value: "web", label: "Website chat" },
      { value: "multi", label: "Voice + WhatsApp + web" },
    ],
  },
  {
    key: "outcome",
    label: "What result would you most like to move?",
    options: [
      { value: "leads", label: "More qualified leads" },
      { value: "renewals", label: "More completed renewals" },
      { value: "repeat", label: "Fewer repeat calls" },
      { value: "bookings", label: "Faster bookings" },
      { value: "quality", label: "Clearer quality scores" },
    ],
  },
];

const workflowByTask: Record<string, string> = {
  support: "your three most-asked customer questions on voice",
  leads: "inbound lead qualification and callback booking",
  renewals: "renewal reminders with payment confirmation",
  appointments: "appointment rescheduling and confirmations",
  kyc: "KYC intake and document collection on voice",
};
const knowledgeByTask: Record<string, string> = {
  support: "your service knowledge base and refund policy",
  leads: "your qualifying criteria and pricing FAQs",
  renewals: "the renewal calendar and pricing rules",
  appointments: "your calendar and scheduling rules",
  kyc: "your KYC checklist and document policy",
};
const actionByTask: Record<string, string> = {
  support: "one approved action in your CRM to log the resolution",
  leads: "a callback booking in your CRM",
  renewals: "a payment update in your billing system",
  appointments: "a booking update in your calendar system",
  kyc: "a case creation and document upload",
};
const exceptionByTask: Record<string, string> = {
  support: "disputes or upset customers",
  leads: "high-value accounts or non-standard requests",
  renewals: "customers who want to cancel",
  appointments: "customers with special access needs",
  kyc: "documents that fail verification",
};
const metricByOutcome: Record<string, string> = {
  leads: "qualified leads per week",
  renewals: "renewal completion rate",
  repeat: "repeat-contact rate for the same query",
  bookings: "average time to first appointment",
  quality: "quality score against your rubric",
};

export function FitFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const total = questions.length;
  const done = step >= total;

  const q = !done ? questions[step] : null;
  const pick = (value: string) => {
    if (!q) return;
    setAnswers((a) => ({ ...a, [q.key]: value }));
    setStep((s) => s + 1);
  };

  const summary = useMemo(() => {
    if (!done) return null;
    const workflow = workflowByTask[answers.tasks] ?? "one focused workflow";
    const knowledge = knowledgeByTask[answers.tasks] ?? "your team's approved knowledge";
    const action = actionByTask[answers.tasks] ?? "one approved action in your systems";
    const exception = exceptionByTask[answers.tasks] ?? "the edge cases your team must own";
    const metric = metricByOutcome[answers.outcome] ?? "the outcome you care about";
    return { workflow, knowledge, action, exception, metric };
  }, [done, answers]);

  return (
    <section id="fit-finder" className="fit-finder relative overflow-hidden px-6 py-16">

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#534b82]">
            Fit finder
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-[#1b1b3c] md:text-5xl">
            Show me the conversations your team is{" "}
            <span className="font-serif italic text-[#534b82]">carrying.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#61676b] md:text-lg">
            Answer five short questions. We&rsquo;ll show one workflow worth
            testing, the information it needs, the action it can take, and the
            moments your team should still own.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ConversationLens />
        </Reveal>

        <div className="fit-card relative mx-auto mt-10 max-w-3xl rounded-3xl border p-6 md:p-10">
          {/* progress */}
          <div className="mb-8 flex items-center justify-center gap-2">
            {questions.map((_, i) => {
              const state =
                i < step ? "done" : i === step && !done ? "current" : "todo";
              return (
                <span
                  key={i}
                  aria-hidden="true"
                  className={
                    "h-1.5 rounded-full transition-all duration-300 " +
                    (state === "current"
                      ? "w-8 bg-[#1b1b3c]"
                      : state === "done"
                        ? "w-4 bg-[#b4b4ec]"
                        : "w-4 bg-[#ececf0]")
                  }
                />
              );
            })}
          </div>

          {!done && q ? (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a7a95]">
                Question {step + 1} of {total}
              </p>
              <h3 className="mx-auto mb-8 max-w-xl text-balance text-xl font-semibold tracking-tight text-[#1b1b3c] md:text-2xl">
                {q.label}
              </h3>
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
                {q.options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => pick(opt.value)}
                    className="group rounded-xl border border-[#e6e4f2] bg-white px-5 py-4 text-left text-sm font-medium text-[#1b1b3c] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#534b82] hover:bg-[#faf9ff] hover:shadow-[0_10px_24px_rgba(83,75,130,0.10)]"
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span>{opt.label}</span>
                      <ArrowRight
                        aria-hidden="true"
                        size={16}
                        className="text-[#c7c3f0] transition-colors group-hover:text-[#534b82]"
                      />
                    </span>
                  </button>
                ))}
              </div>
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className="mx-auto mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#7a7a95] hover:text-[#534b82]"
                >
                  <ArrowLeft size={15} aria-hidden="true" /> Back
                </button>
              ) : null}
            </div>
          ) : (
            summary && (
              <div className="text-left">
                <div className="mb-6 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f0edff] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#534b82]">
                    <Sparkles size={12} aria-hidden="true" /> A sensible place
                    to start
                  </span>
                </div>
                <p className="text-balance text-lg leading-relaxed text-[#1b1b3c] md:text-xl">
                  Based on what you shared, start with{" "}
                  <strong>{summary.workflow}</strong>. Clara would need{" "}
                  <strong>{summary.knowledge}</strong>,{" "}
                  <strong>{summary.action}</strong> and a clear handoff for{" "}
                  <strong>{summary.exception}</strong>. Measure{" "}
                  <strong>{summary.metric}</strong> against the current baseline
                  before expanding.
                </p>
                <p className="mt-6 text-sm italic text-[#7a7a95]">
                  This is a starting point, not a diagnosis. The real first step
                  is a working session with the team.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#invitation"
                    style={{ color: "#fff" }}
                    className="inline-flex items-center gap-2 rounded-full bg-[#1b1b3c] px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[#3e3868]"
                  >
                    Bring this workflow to the team
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setAnswers({});
                      setStep(0);
                    }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#534b82] hover:text-[#3e3868]"
                  >
                    <RotateCcw size={15} aria-hidden="true" /> Try another
                    workflow
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
