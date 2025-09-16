import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users").then(res => setUsers(res.data));
  }, []);

  const deleteUser = async (id) => {
    await API.delete(`/users/${id}`);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400">All Users</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-3 border border-gray-700 text-left">Name</th>
              <th className="p-3 border border-gray-700 text-left">Email</th>
              <th className="p-3 border border-gray-700 text-left">Phone</th>
              <th className="p-3 border border-gray-700 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.phone}</td>
                <td className="p-3 space-x-2">
                  <Link to={`/users/${user.id}`} className="text-cyan-400 hover:underline">View</Link>
                  <Link to={`/edit/${user.id}`} className="text-green-400 hover:underline">Edit</Link>
                  <button onClick={() => deleteUser(user.id)} className="text-red-400 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
