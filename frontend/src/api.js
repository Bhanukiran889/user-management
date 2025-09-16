import axios from "axios";

const api = axios.create({
  baseURL: "https://user-management-n6e7.onrender.com/api", // backend base URL
});

export default api;
