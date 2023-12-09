import React from "react";
import { MessageBlock } from "./message-block";
import { renderMarkdownToHTML } from "~/utils/renderMarkdown";
import { BarChart } from "../chart/chart";

type AiMessageProps = {
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

export const AiMessage = ({ textContent, charData }: AiMessageProps) => {
  return (
    <MessageBlock className="flex flex-col gap-4 bg-teal-800">
      <div
        className="flex flex-col gap-4"
        dangerouslySetInnerHTML={renderMarkdownToHTML(textContent)}
      />
      {charData && <BarChart charData={charData} />}
    </MessageBlock>
  );
};
