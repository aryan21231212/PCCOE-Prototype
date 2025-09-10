import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      login(res.data);

      // Redirect user to correct dashboard
      if (res.data.user.role === "seller") {
        nav("/seller");
      } else {
        nav("/buyer");
      }
    } catch (err) {
      alert(err.response?.data.error || "Login failed.");
    }
  };

  return (
    <div className="bg-[#0b1220] min-h-screen flex items-center justify-center px-6 py-12 text-gray-100">
      <form
        onSubmit={submit}
        className="w-full max-w-md bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 rounded-2xl border border-white/10 shadow-lg space-y-5"
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-white mb-4">Sign In</h2>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            type="email"
            className="w-full p-3 rounded bg-transparent border border-white/10 focus:outline-none focus:border-green-400"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Password</label>
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            type="password"
            className="w-full p-3 rounded bg-transparent border border-white/10 focus:outline-none focus:border-green-400"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold transition">
          Sign In
        </button>

        {/* Footer */}
        <div className="text-sm text-gray-400 text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-400 hover:underline">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
