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
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border">
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.phone}</td>
              <td className="p-2 border space-x-2">
                <Link to={`/users/${user.id}`} className="text-blue-500">View</Link>
                <Link to={`/edit/${user.id}`} className="text-green-500">Edit</Link>
                <button onClick={() => deleteUser(user.id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
