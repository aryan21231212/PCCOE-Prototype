import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState(["Welcome to WasteChain chat!"]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col h-96">
      <div className="flex-1 overflow-y-auto border p-2 mb-2">
        {messages.map((msg, idx) => (
          <p key={idx} className="p-1">{msg}</p>
        ))}
      </div>
      <div className="flex gap-2">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded flex-1"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="bg-green-600 text-white px-4 rounded hover:bg-green-700">Send</button>
      </div>
    </div>
  );
}
