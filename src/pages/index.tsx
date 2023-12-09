import { useState } from "react";
import { MessageList } from "~/components/message-list/message-list";
import { QueryInput } from "~/components/query-input/query-input";
import { messages as mockMessages } from "~/test-data/messages";

export default function Home() {
  const [messages, setMessages] = useState(mockMessages);

  return (
    <>
      <div className="relative flex min-h-0 w-full flex-shrink">
        <div className="no-scrollbar flex w-full flex-col gap-2 overflow-y-scroll rounded-md bg-slate-800 p-5">
          <MessageList messages={messages} />
        </div>
      </div>
      <QueryInput clearAfterSend={true} onSend={(v) => console.log(v.trim())} />
    </>
  );
}
