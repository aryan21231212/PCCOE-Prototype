import { Link } from "react-router-dom";

export default function Login() {
  const submit = (e) => {
    e.preventDefault();
    alert("Mock login — integrate auth API");
  };

  return (
    <div className="flex items-center justify-center py-12 px-6">
      <form onSubmit={submit} className="w-full max-w-md bg-white/5 p-8 rounded">
        <h2 className="text-xl font-bold mb-4">Sign In</h2>
        <input name="email" placeholder="Email" className="w-full p-2 rounded bg-transparent border border-white/10 mb-3" />
        <input name="password" placeholder="Password" type="password" className="w-full p-2 rounded bg-transparent border border-white/10 mb-4" />
        <button className="w-full bg-green-500 py-2 rounded">Sign In</button>
        <div className="mt-4 text-sm text-gray-300">Don't have an account? <Link to="/register" className="text-green-300">Register</Link></div>
      </form>
    </div>
  );
}
