import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Seller from "./pages/Seller";
import Buyer from "./pages/Buyer";
import Analytics from "./pages/Analytics";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>
      <footer className="text-center text-sm text-gray-400 py-6">© WasteChain — Transform Waste Into Wealth</footer>
    </div>
  );
}

export default App;
