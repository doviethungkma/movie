import axios from "axios";
import queryString from "query-string";

const baseUrl: string = "http://localhost:8000/api/v1";

const axiosClient = axios.create({
  baseURL: baseUrl,
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
