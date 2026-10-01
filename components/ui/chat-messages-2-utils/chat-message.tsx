import { cn } from "@/lib/utils";

export type Message = {
  id: string;
  name: string;
  message: string;
};

export type ChatMessageProps = {
  message: Message;
  isCurrentUser: boolean;
};

export default function ChatMessage({ message, isCurrentUser }: ChatMessageProps) {
  return (
    <li
      className={cn(
        "flex items-end gap-2",
        isCurrentUser ? "justify-end" : "justify-start",
      )}
    >
      {isCurrentUser ? null : (
        <span
          aria-hidden="true"
          className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[#e1e1ff] bg-[#f7f7ff] text-[10px] font-semibold text-[#534b82]"
        >
          {message.name.charAt(0)}
        </span>
      )}
      <p
        className={cn(
          "m-0 max-w-[82%] rounded-2xl px-3 py-1.5 text-[13px] leading-snug",
          isCurrentUser
            ? "rounded-br-md bg-[#534b82] text-white"
            : "rounded-bl-md border border-[#e1e1ff] bg-[#f7f7ff] text-[#1b1b3c]",
        )}
      >
        {message.message}
      </p>
    </li>
  );
}
