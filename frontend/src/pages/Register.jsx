import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "seller", // default role
    password: "",
  });
  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(form); // check if role is included

    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: form.email,
        password: form.password,
      });
      login(res.data);
      nav(form.role === "seller" ? "/seller" : "/buyer");
    } catch (err) {
      alert(err.response?.data.error || "Registration failed.");
    }
  };

  return (
    <div className="bg-[#0b1220] min-h-screen flex items-center justify-center px-6 py-12 text-gray-100">
      <form
        onSubmit={submit}
        className="w-full max-w-md bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 rounded-2xl border border-white/10 shadow-lg space-y-5"
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Create an Account
        </h2>

        {/* Name */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 rounded bg-transparent border border-white/10 focus:outline-none focus:border-green-400"
          />
        </div>

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

        {/* Role */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full p-3 rounded bg-transparent border border-white/10 focus:outline-none focus:border-green-400"
          >
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </select>
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
          Register
        </button>

        {/* Footer */}
        <div className="text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 hover:underline">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
