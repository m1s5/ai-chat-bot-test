import React, { useState } from "react";
import { TextArea } from "../text-area/text-area";

type QueryInputProps = {
  onSend: (value: string) => void;
  clearAfterSend: boolean;
};

export const QueryInput = ({ onSend, clearAfterSend }: QueryInputProps) => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const onSendWrapped = (value: string) => {
    onSend(value);
    clearAfterSend && setTextAreaValue("");
  };
  return (
    <div className="relative flex w-full flex-grow items-end gap-2">
      <TextArea
        value={textAreaValue}
        onSend={onSendWrapped}
        onChange={setTextAreaValue}
      />
      <button
        onClick={() => onSendWrapped(textAreaValue)}
        className="w-1/5 max-w-[120px] rounded-md bg-teal-800 p-2"
      >
        Send
      </button>
    </div>
  );
};
