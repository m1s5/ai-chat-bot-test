import React, { useEffect, useRef, useState } from "react";
import { UserMessage } from "./user-message";
import { AiMessage } from "./ai-message";

export type Message = {
  type: "user" | "bot";
  data: {
    textContent: string;
    charData?: unknown;
  };
};

type MessageListProps = {
  messages: Message[];
};

export const MessageList = ({ messages }: MessageListProps) => {
  const [showScrollDownButton, setShowScrollDownButton] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div
        ref={ref}
        className="no-scrollbar flex w-full flex-col gap-2 overflow-y-scroll rounded-md bg-slate-800 p-5"
        onScroll={() => {
          setShowScrollDownButton(
            ref.current.scrollHeight -
            ref.current.scrollTop -
            ref.current.clientHeight >
            100,
          );
        }}
      >
        {messages.map((m) => {
          if (m.type === "user") {
            return <UserMessage {...m.data} />;
          }
          if (m.type === "bot") {
            return <AiMessage {...m.data} />;
          }
        })}
      </div>
      {showScrollDownButton && (
        <button
          onClick={() => {
            if (ref.current) {
              ref.current.scrollTop = ref.current?.scrollHeight;
            }
          }}
          className="absolute bottom-10 right-10 h-10 w-10 rounded-full bg-teal-500 text-center leading-7"
        >
          ⌄
        </button>
      )}
    </>
  );
};
