import React from "react";
import type { ReactNode } from "react";

type MessageBlockProps = {
  children: ReactNode;
  className: string;
};

export const MessageBlock = ({ children, className }: MessageBlockProps) => {
  return (
    <div className={`max-w-message rounded-md p-3 ${className}`}>
      {children}
    </div>
  );
};
