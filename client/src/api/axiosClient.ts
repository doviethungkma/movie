import axios from "axios";
import queryString from "query-string";

const baseUrl: string = "http://localhost:8000/api/v1";

const axiosClient = axios.create({
  baseURL: baseUrl,
  paramsSerializer: (params) => queryString.stringify({ params }),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
});

export default axiosClient;
