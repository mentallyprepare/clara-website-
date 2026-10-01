import { cn } from "@/lib/utils";

export type Message = {
  id: string;
  name: string;
  message: string;
};

export type ChatMessageProps = {
  message: Message;
  isCurrentUser: boolean;
  shown: boolean;
};

export default function ChatMessage({ message, isCurrentUser, shown }: ChatMessageProps) {
  return (
    <li
      className={cn(
        "flex transition-all duration-500 ease-out",
        isCurrentUser ? "justify-end" : "justify-start",
        shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
      )}
    >
      <p
        className={cn(
          "m-0 max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-[1.4]",
          isCurrentUser
            ? "rounded-br-md bg-[#534b82] font-medium text-white"
            : "rounded-bl-md border border-[#e1e1ff] bg-[#f7f7ff] font-normal text-[#1b1b3c]",
        )}
      >
        {message.message}
      </p>
    </li>
  );
}
