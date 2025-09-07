import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-[#0f1724] text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-md flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <div>
            <div className="font-bold text-lg">WasteChain</div>
            <div className="text-xs text-green-300 -mt-1">Transform Waste Into Wealth</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-gray-200">About</Link>
          <Link to="/features" className="hover:text-gray-200">Features</Link>
          <Link to="/how" className="hover:text-gray-200">How it Works</Link>
          <Link to="/login" className="bg-white text-green-600 px-4 py-1 rounded-full font-medium hover:opacity-90">Sign In</Link>
        </nav>

        <div className="md:hidden">
          <Link to="/login" className="bg-white text-green-600 px-3 py-1 rounded-md text-sm">Sign In</Link>
        </div>
      </div>
    </header>
  );
}
