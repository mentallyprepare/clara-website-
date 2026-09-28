import { Check, Phone, Globe2, MessagesSquare } from "lucide-react";
import { Reveal } from "../Reveal";

type Msg = {
  from: "customer" | "clara";
  text: string;
  time: string;
  mark?: string;
  meta?: string;
};

const thread: Msg[] = [
  { from: "customer", text: "I'd like to reschedule my appointment.", time: "10:02" },
  { from: "clara", text: "Done — moved to Friday, 11:30. Confirmation sent.", time: "10:02", meta: "Booked" },
  { from: "customer", text: "Actually, can you tell me about my insurance too?", time: "10:03", mark: "New request" },
  { from: "clara", text: "Yes — answered straight from your approved policy.", time: "10:03", meta: "From policy" },
  { from: "customer", text: "Can you send that to me on WhatsApp?", time: "10:04", mark: "New channel" },
  { from: "clara", text: "Sent. We'll keep the same thread going on WhatsApp.", time: "10:04", meta: "Channel switched" },
  { from: "customer", text: "I'd rather speak to someone now.", time: "10:06", mark: "Human handoff" },
  { from: "clara", text: "Connecting you to Neha — she already has the full conversation.", time: "10:06", meta: "Handed off" },
];

export function ConversationFlow() {
  return (
    <Reveal className="chat-mock" role="img">
      <div className="chat-mock__bar">
        <span className="chat-mock__id">
          <span className="chat-mock__logo" aria-hidden="true" />
          <span>
            <strong>Clara</strong>
            <small><i className="chat-mock__live" aria-hidden="true" /> Live · one conversation</small>
          </span>
        </span>
        <span className="chat-mock__channels" aria-hidden="true">
          <Phone size={13} />
          <Globe2 size={13} />
          <MessagesSquare size={13} />
        </span>
      </div>

      <div className="chat-mock__thread">
        {thread.map((m, i) => (
          <div key={i} className="chat-mock__row">
            {m.mark ? (
              <span className="chat-mock__mark">{m.mark}</span>
            ) : null}
            <div className={`chat-mock__msg chat-mock__msg--${m.from}`}>
              <p>{m.text}</p>
              <span className="chat-mock__foot">
                {m.from === "clara" ? (
                  <>
                    <Check size={12} strokeWidth={3} /> {m.meta}
                  </>
                ) : (
                  m.time
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-mock__resolve">
        Every twist handled — one thread, one record, one clean outcome.
      </div>
    </Reveal>
  );
}
