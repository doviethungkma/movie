import axios from "axios";
import queryString from "query-string";

const baseUrl: string = "http://localhost:8000/api/v1";

const axiosClient = axios.create({
  baseURL: baseUrl,
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    if (!err.response) {
      return alert(err);
    }
    throw err.response;
  }
);

export default axiosClient;
