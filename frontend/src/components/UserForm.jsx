import { useState } from "react";

export default function UserForm({ onSubmit, initialData = {} }) {
  const [form, setForm] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    company: initialData.company || "",
    street: initialData.street || "",
    city: initialData.city || "",
    zipcode: initialData.zipcode || "",
    lat: initialData.lat || "",
    lng: initialData.lng || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      {Object.keys(form).map((field) => (
        <div key={field}>
          <input
            type="text"
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field}
            required={["name", "email", "phone"].includes(field)}
            className="border border-gray-700 bg-gray-900 text-gray-100 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      ))}
      <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded font-semibold transition-colors w-full mt-4">
        {initialData.id ? "Update User" : "Create User"}
      </button>
    </form>
  );
}
