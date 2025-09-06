export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">WasteChain</h1>
      <div className="space-x-4">
        <a href="/seller" className="hover:text-gray-200">Seller</a>
        <a href="/buyer" className="hover:text-gray-200">Buyer</a>
        <a href="/analytics" className="hover:text-gray-200">Analytics</a>
        <a href="/chat" className="hover:text-gray-200">Chat</a>
      </div>
    </nav>
  );
}
