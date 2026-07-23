import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
