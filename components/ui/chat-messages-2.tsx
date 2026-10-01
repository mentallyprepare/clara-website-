import Chat from "@/components/ui/chat-messages-2-utils/chat";
import type { Message } from "@/components/ui/chat-messages-2-utils/chat-message";
import IphoneFrame from "@/components/ui/chat-messages-2-utils/iphone-frame";

const messages: Message[] = [
  { id: "m1", name: "Customer", message: "I need to reschedule my appointment." },
  { id: "m2", name: "Clara", message: "Yes, sure." },
  {
    id: "m3",
    name: "Customer",
    message: "Actually, can you also tell me if my insurance covers it?",
  },
  { id: "m4", name: "Clara", message: "Yes, sure." },
  {
    id: "m5",
    name: "Customer",
    message: "And can you send the details on WhatsApp?",
  },
  { id: "m6", name: "Clara", message: "Yes, sure." },
];

export default function ChatMessages({
  className,
  label = "The customer conversation",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div className={className}>
      <IphoneFrame>
        <Chat messages={messages} currentUser="Customer" label={label} />
      </IphoneFrame>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-[#20203d] to-transparent"
      />
    </div>
  );
}
