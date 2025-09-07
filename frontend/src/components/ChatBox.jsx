// src/components/ChatBox.jsx
import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";

const API_BASE = "http://localhost:3000";
let socket;

export default function ChatBox({ user = null, conversationWithUserId = null }) {
  // user: { id, name } (optional for demo)
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const containerRef = useRef();

  useEffect(() => {
    // open socket
    socket = io(API_BASE, { transports: ["websocket"] });

    // If user provided, join personal room so we can receive private messages
    if (user?.id) {
      socket.emit("joinRoom", { userId: user.id });
    }

    // Listen for incoming messages from server
    socket.on("receiveMessage", (msg) => {
      setMessages((m) => [...m, msg]);
    });

    // Load history (persisted messages) - load messages between user and conversationWithUserId
    const loadHistory = async () => {
      try {
        const params = {};
        if (user?.id) params.userId = user.id;
        if (conversationWithUserId) params.other = conversationWithUserId;
        const res = await axios.get(`${API_BASE}/api/chat`, { params });
        if (res?.data) setMessages(res.data);
      } catch (err) {
        console.error("Chat history load failed", err);
      }
    };
    loadHistory();

    return () => {
      if (socket) socket.disconnect();
    };
  }, [user?.id, conversationWithUserId]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input?.trim()) return;
    const payload = {
      sender: user?.id || "anonymous",
      receiver: conversationWithUserId || "broadcast", // broadcast if not in a 1:1 conversation
      content: input.trim(),
      timestamp: new Date().toISOString(),
    };

    // emit through socket so others receive it in real-time
    if (socket && socket.connected) {
      socket.emit("privateMessage", payload);
    }

    // optimistic UI add
    setMessages((m) => [...m, { ...payload, _id: "tmp-" + Date.now() }]);
    setInput("");

    // Also persist via REST (server will also save on socket path but POST is reliable if socket connection lost)
    try {
      await axios.post(`${API_BASE}/api/chat`, payload);
      // optionally update message with real id on success — omitted for brevity
    } catch (err) {
      console.error("Persist message failed", err);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-4 rounded-2xl text-gray-100 h-96 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold text-lg">Messages</div>
        <div className="text-sm text-gray-400">{user?.name || "Guest"}</div>
      </div>

      <div ref={containerRef} className="flex-1 overflow-y-auto space-y-3 mb-3">
        {messages.length === 0 && (
          <div className="text-sm text-gray-400 text-center py-6">No messages yet</div>
        )}
        {messages.map((m, idx) => {
          const mine = (user?.id && (m.sender === user.id || m.sender === "anonymous")) || m.sender === "anonymous";
          return (
            <div key={m._id || idx} className={`max-w-3/4 ${mine ? "ml-auto text-right" : "mr-auto text-left"}`}>
              <div className={`inline-block px-4 py-2 rounded-lg ${mine ? "bg-green-500 text-white" : "bg-white/6 text-gray-100"}`}>
                <div className="text-sm">{m.content}</div>
                <div className="text-xs text-gray-200 mt-1">{new Date(m.timestamp).toLocaleString()}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border border-white/10 p-2 rounded focus:outline-none"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
          Send
        </button>
      </div>
    </div>
  );
}
