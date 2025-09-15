import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";
import UserForm from "../components/UserForm";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get(`/users/${id}`).then(res => setUser(res.data));
  }, [id]);

  const handleSubmit = async (data) => {
    await API.put(`/users/${id}`, data);
    navigate("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Edit User</h2>
      {user && <UserForm onSubmit={handleSubmit} initialData={user} />}
    </div>
  );
}
