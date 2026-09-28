"use client";

import { useState } from "react";
import { BookOpenCheck, Clock4, MessageSquareText, UserRoundCheck, Wrench } from "lucide-react";

const edits = [
  {
    icon: MessageSquareText,
    label: "Opening",
    before: "Hello. Thank you for calling. How may I assist you today?",
    after: "Hi — what can I help with?",
    note: "22 words → 9 words",
    result: "Fewer callers dropped in the first turn.",
  },
  {
    icon: Clock4,
    label: "Timing",
    before: "Confirm the new date immediately.",
    after: "Pause, repeat the corrected date, then confirm.",
    note: "+1 confirmation beat",
    result: "Fewer bookings needed a second correction.",
  },
  {
    icon: BookOpenCheck,
    label: "Knowledge",
    before: "Refund policy · May",
    after: "Refund policy · September · Approved",
    note: "Source replaced",
    result: "Every answer now points to the current policy.",
  },
  {
    icon: Wrench,
    label: "Action",
    before: "Show the next available appointment.",
    after: "Check service area, then show an appointment.",
    note: "1 rule added",
    result: "Unavailable appointments stopped reaching checkout.",
  },
  {
    icon: UserRoundCheck,
    label: "Handoff",
    before: "Send billing exceptions to the queue.",
    after: "Send transcript + account record to billing.",
    note: "2 fields attached",
    result: "The team starts with context instead of asking again.",
  },
] as const;

export function ChangeWorkbench() {
  const [selected, setSelected] = useState(0);
  const active = edits[selected];

  return (
    <div className="change-workbench">
      <header>
        <div><span>Change ledger</span><small>This sprint · Sep 22–26</small></div>
        <strong><i /> Result improved</strong>
      </header>
      <div className="change-workbench__body">
        <div className="change-workbench__tabs" role="tablist" aria-label="Changes made this sprint">
          {edits.map((edit, index) => {
            const Icon = edit.icon;
            return (
              <button
                aria-controls="change-workbench-panel"
                aria-selected={selected === index}
                className={selected === index ? "is-active" : ""}
                key={edit.label}
                onClick={() => setSelected(index)}
                role="tab"
                type="button"
              >
                <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
                <span>{edit.label}</span>
                <small>{String(index + 1).padStart(2, "0")}</small>
              </button>
            );
          })}
        </div>
        <div className="change-workbench__panel" id="change-workbench-panel" role="tabpanel">
          <p className="change-workbench__kicker">Exact change · {active.label}</p>
          <div className="change-workbench__diff">
            <div><span>Before</span><p>{active.before}</p></div>
            <div><span>Now</span><p>{active.after}</p></div>
          </div>
          <div className="change-workbench__result">
            <strong>{active.note}</strong>
            <p>{active.result}</p>
          </div>
          <footer><span>Edited by Maya K.</span><span>Approved Sep 26</span></footer>
        </div>
      </div>
    </div>
  );
}

