import ChatMessage, { type Message } from "./chat-message";

export type User = {
  name: string;
};

export default function Chat({
  messages,
  currentUser,
  label,
}: {
  messages: Message[];
  currentUser: string;
  label: string;
}) {
  return (
    <ol
      aria-label={label}
      className="m-0 flex list-none flex-col gap-2 px-3 pb-6 pt-1"
    >
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
          isCurrentUser={message.name === currentUser}
        />
      ))}
    </ol>
  );
}
