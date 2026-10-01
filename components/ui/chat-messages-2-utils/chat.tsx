"use client";

import { useEffect, useRef, useState } from "react";
import ChatMessage, { type Message } from "./chat-message";

export type User = {
  name: string;
};

const STEP_MS = 1100;

export default function Chat({
  messages,
  currentUser,
  label,
}: {
  messages: Message[];
  currentUser: string;
  label: string;
}) {
  const listRef = useRef<HTMLOListElement>(null);
  const [shownCount, setShownCount] = useState(messages.length);

  useEffect(() => {
    const node = listRef.current;
    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!node || reduceMotion || !("IntersectionObserver" in window)) return;

    setShownCount(0);
    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let count = 0;
        timer = setInterval(() => {
          count += 1;
          setShownCount(count);
          if (count >= messages.length) clearInterval(timer);
        }, STEP_MS);
        setShownCount(1);
        count = 1;
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [messages.length]);

  useEffect(() => {
    const node = listRef.current?.parentElement;
    if (node && typeof node.scrollTo === "function") node.scrollTo({ top: node.scrollHeight, behavior: "smooth" });
  }, [shownCount]);

  return (
    <ol
      aria-label={label}
      className="m-0 flex list-none flex-col gap-2 px-3 pb-4 pt-1"
      ref={listRef}
    >
      {messages.map((message, index) => (
        <ChatMessage
          key={message.id}
          message={message}
          isCurrentUser={message.name === currentUser}
          shown={index < shownCount}
        />
      ))}
    </ol>
  );
}
