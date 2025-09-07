import { Link } from "react-router-dom";

export default function Register() {
  const submit = (e) => {
    e.preventDefault();
    alert("Mock register — integrate auth API");
  };

  return (
    <div className="flex items-center justify-center py-12 px-6">
      <form onSubmit={submit} className="w-full max-w-md bg-white/5 p-8 rounded space-y-3">
        <h2 className="text-xl font-bold">Create an account</h2>
        <input name="name" placeholder="Name" className="w-full p-2 rounded bg-transparent border border-white/10" />
        <input name="email" placeholder="Email" className="w-full p-2 rounded bg-transparent border border-white/10" />
        <select name="role" className="w-full p-2 rounded bg-transparent border border-white/10">
          <option value="seller">Seller</option>
          <option value="buyer">Buyer</option>
        </select>
        <button className="w-full bg-green-500 py-2 rounded">Register</button>
        <div className="text-sm text-gray-300">Already have an account? <Link to="/login" className="text-green-300">Sign in</Link></div>
      </form>
    </div>
  );
}
