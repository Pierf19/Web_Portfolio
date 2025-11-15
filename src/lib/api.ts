import axios from "axios";

const api = axios.create({
  baseURL: "/",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
