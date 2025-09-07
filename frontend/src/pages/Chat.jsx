import ChatBox from "../components/ChatBox";

export default function Chat() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      <ChatBox />
    </div>
  );
}
