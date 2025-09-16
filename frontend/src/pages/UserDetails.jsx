import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get(`/users/${id}`).then(res => setUser(res.data));
  }, [id]);

  if (!user) return <p className="p-6 text-gray-400">Loading...</p>;

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400">{user.name}</h2>
      <div className="mb-2 text-gray-300"><span className="font-semibold text-gray-200">Email:</span> {user.email}</div>
      <div className="mb-2 text-gray-300"><span className="font-semibold text-gray-200">Phone:</span> {user.phone}</div>
      <div className="mb-2 text-gray-300"><span className="font-semibold text-gray-200">Company:</span> {user.company}</div>
      <div className="mb-2 text-gray-300"><span className="font-semibold text-gray-200">Address:</span> {user.street}, {user.city}, {user.zipcode}</div>
      <div className="mb-2 text-gray-300"><span className="font-semibold text-gray-200">Geo:</span> {user.lat}, {user.lng}</div>
    </div>
  );
}
