import Chat from "@/components/ui/chat-messages-2-utils/chat";
import type { Message } from "@/components/ui/chat-messages-2-utils/chat-message";
import IphoneFrame from "@/components/ui/chat-messages-2-utils/iphone-frame";

const messages: Message[] = [
  { id: "m1", name: "Customer", message: "I need to reschedule my appointment." },
  { id: "m2", name: "Clara", message: "Sure. What date works better for you?" },
  {
    id: "m3",
    name: "Customer",
    message: "Next Friday. Also, does my insurance cover the appointment?",
  },
  { id: "m4", name: "Clara", message: "I can help check your coverage details." },
  {
    id: "m5",
    name: "Customer",
    message: "And can you send the updated details on WhatsApp?",
  },
  {
    id: "m6",
    name: "Clara",
    message:
      "Once the appointment is confirmed, I can help send the details on WhatsApp.",
  },
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
    </div>
  );
}
