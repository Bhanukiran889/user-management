import { useNavigate } from "react-router-dom";
import API from "../api";
import UserForm from "../components/UserForm";

export default function CreateUser() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    await API.post("/users", data);
    navigate("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add New User</h2>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
}
