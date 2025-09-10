import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-[#0b1220] text-gray-100 px-6 py-4 flex items-center justify-between">
      {/* Logo / Brand */}
      <Link to="/" className="text-2xl font-bold text-green-400">
        WasteChain
      </Link>

     

      {/* Links */}
      <div className="flex items-center gap-6">
      <Link to="/" className="hover:text-gray-200">About</Link>
        <Link to="/features" className="hover:text-green-400">
          Features
        </Link>

        <Link to="/how" className="hover:text-gray-200">How it Works</Link>

        {user ? (
          <>
            {/* Role-based dashboard link */}
            {user.role === "seller" && (
              <Link to="/seller" className="hover:text-green-400">
                Dashboard
              </Link>
            )}
            {user.role === "buyer" && (
              <Link to="/buyer" className="hover:text-green-400">
                Marketplace
              </Link>
            )}

            <Link to="/analytics" className="hover:text-green-400">
              Analytics
            </Link>
            <Link to="/chat" className="hover:text-green-400">
              Chat
            </Link>

            {/* Logout button */}
            <button
              onClick={logout}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-green-400">
              Login
            </Link>
            <Link to="/register" className="hover:text-green-400">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
