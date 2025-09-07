import { Link } from "react-router-dom";

export default function Register() {
  const submit = (e) => {
    e.preventDefault();
    alert("Mock register — integrate auth API");
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
            placeholder="Enter your name"
            className="w-full p-3 rounded bg-transparent border border-white/10 focus:outline-none focus:border-green-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Email</label>
          <input
            name="email"
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
