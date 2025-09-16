import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-gray-100 p-4 flex justify-between shadow-lg rounded-b-lg">
      <h1 className="font-bold text-2xl tracking-wide text-cyan-400">User Dashboard</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-cyan-400 transition-colors">Dashboard</Link>
        <Link to="/create" className="hover:text-cyan-400 transition-colors">Add User</Link>
      </div>
    </nav>
  );
}
