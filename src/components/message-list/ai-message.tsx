import React from "react";
import { MessageBlock } from "./message-block";
import { renderMarkdownToHTML } from "~/utils/renderMarkdown";
import { BarChart } from "../chart/chart";

type AiMessageProps = {
  textContent: string;
  charData?: unknown;
};

export const AiMessage = ({ textContent, charData }: AiMessageProps) => {
  return (
    <MessageBlock className="bg-teal-800">
      <div dangerouslySetInnerHTML={renderMarkdownToHTML(textContent)} />
      <BarChart charData={charData} />
    </MessageBlock>
  );
};
