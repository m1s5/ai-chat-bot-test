import React, { useEffect, useRef } from "react";

type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: (value: string) => void;
};
export const TextArea = ({ value, onChange, onSend }: TextAreaProps) => {
  const textArea = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (value === "\n") {
      onChange("");
    }
    if (textArea.current && value === "") {
      textArea.current.innerHTML = "";
    }
  }, [value]);
  return (
    <div
      ref={textArea}
      role="textbox"
      contentEditable="plaintext-only"
      aria-multiline
      tabIndex={0}
      placeholder="Enter your query..."
      className="no-scrollbar max-h-32 flex-grow resize-none overflow-y-scroll rounded-md bg-slate-800 p-2 before:text-slate-400 empty:before:content-[attr(placeholder)] hover:bg-slate-500 focus:bg-slate-700 focus:outline-none"
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          onSend(value);
          return;
        }
      }}
      onInput={(e) => {
        onChange(e.currentTarget.innerText);
      }}
    ></div>
  );
};
