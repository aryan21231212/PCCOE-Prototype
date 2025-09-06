import Navbar from "../components/Navbar";

export default function Register() {
  return (
    <>

      <div className="flex items-center justify-center h-screen">
        <form className="bg-white p-8 rounded-lg shadow w-96 space-y-4">
          <h2 className="text-2xl font-bold text-center">Register</h2>
          <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
          <select className="w-full border p-2 rounded">
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </select>
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
        </form>
      </div>
    </>
  );
}
