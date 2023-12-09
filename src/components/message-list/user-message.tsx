import React from "react";
import { MessageBlock } from "./message-block";

type UserMessageProps = {
  textContent: string;
};

export const UserMessage = ({ textContent }: UserMessageProps) => {
  return (
    <MessageBlock className="self-end bg-teal-600">{textContent}</MessageBlock>
  );
};
