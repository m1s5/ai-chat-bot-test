import { useState } from "react";
import { MessageList } from "~/components/message-list/message-list";
import { QueryInput } from "~/components/query-input/query-input";
import { messages as mockMessages } from "~/test-data/messages";

export default function Home() {
  const [messages, setMessages] = useState(mockMessages);

  return (
    <>
      <div className="relative flex min-h-0 w-full flex-shrink">
        <MessageList messages={messages} />
      </div>
      <QueryInput
        clearAfterSend={true}
        onSend={(v) => {
          if (!v) return;
          setMessages((ms) =>
            ms.concat({ type: "user", data: { textContent: v.trim() } }),
          );
          setTimeout(
            () =>
              setMessages((ms) => {
                if (mockMessages[1]) return ms.concat(mockMessages[1]);
                return ms;
              }),
            2000,
          );
        }}
      />
    </>
  );
}
