import React from "react";
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
  return messages.map((m) => {
    if (m.type === "user") {
      return <UserMessage {...m.data} />;
    }
    if (m.type === "bot") {
      return <AiMessage {...m.data} />;
    }
  });
};
