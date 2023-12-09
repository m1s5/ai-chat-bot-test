import React, { useEffect, useRef, useState } from "react";
import { UserMessage } from "./user-message";
import { AiMessage } from "./ai-message";

export type Message = {
  type: "user" | "bot";
  data: {
    textContent: string;
    charData?: {
      type: string;
      title: string;
      xAxis: {
        categories: string[];
        title: string;
      };
      yAxis: {
        title: string;
      };
      series: {
        name: string;
        data: number[];
      }[];
    };
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
        className="flex w-full flex-col gap-2 overflow-y-scroll rounded-md bg-slate-800 p-5 no-scrollbar"
        onScroll={() => {
          if (ref.current) {
            setShowScrollDownButton(
              ref.current.scrollHeight -
              ref.current.scrollTop -
              ref.current.clientHeight >
              100,
            );
          }
        }}
      >
        {messages.map((m) => {
          console.log({ m });
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
          className="absolute bottom-10 right-10 h-10 w-10 rounded-full bg-teal-500 text-center leading-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            className="mx-auto"
            height="20px"
            width="20px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 330 330"
          >
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            />
          </svg>
        </button>
      )}
    </>
  );
};
