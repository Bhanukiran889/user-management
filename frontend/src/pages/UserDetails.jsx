import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get(`/users/${id}`).then(res => setUser(res.data));
  }, [id]);

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company}</p>
      <p><strong>Address:</strong> {user.street}, {user.city}, {user.zipcode}</p>
      <p><strong>Geo:</strong> {user.lat}, {user.lng}</p>
    </div>
  );
}
