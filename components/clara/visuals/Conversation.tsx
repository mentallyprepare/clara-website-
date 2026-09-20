import { MessageCircleMore } from "lucide-react";

type ConversationProps = {
  customer?: string;
  clara?: string;
  className?: string;
};

export function Conversation({
  customer = "Can we move it to Friday?",
  clara = "Of course. Let me check the available times.",
  className,
}: ConversationProps) {
  return (
    <div className={`conversation ${className ?? ""}`} aria-label="Example conversation">
      <div className="visual-object__title">
        <MessageCircleMore aria-hidden="true" size={17} />
        <span>Live conversation</span>
      </div>
      <div className="conversation__turn conversation__turn--customer">
        <span>Customer</span>
        <p>{customer}</p>
      </div>
      <div className="conversation__turn conversation__turn--clara">
        <span>Clara</span>
        <p>{clara}</p>
      </div>
    </div>
  );
}
