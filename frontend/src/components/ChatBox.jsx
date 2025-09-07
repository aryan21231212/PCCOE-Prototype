import { useState, useRef, useEffect } from "react";

export default function ChatBox({ initial = ["Welcome to WasteChain chat!"] }) {
  const [messages, setMessages] = useState(initial);
  const [input, setInput] = useState("");
  const ref = useRef();

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [messages]);

  const send = () => {
    if (!input) return;
    setMessages(m => [...m, `You: ${input}`]);
    setInput("");
  };

  return (
    <div className="bg-white/5 p-4 rounded-lg flex flex-col h-96">
      <div ref={ref} className="flex-1 overflow-y-auto mb-3 space-y-2">
        {messages.map((m,i) => <div key={i} className="text-sm text-gray-200 p-2 bg-white/2 rounded">{m}</div>)}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={(e)=>setInput(e.target.value)} className="flex-1 p-2 rounded bg-transparent border border-white/10" placeholder="Type a message..." />
        <button onClick={send} className="bg-green-500 px-4 py-2 rounded">Send</button>
      </div>
    </div>
  );
}
