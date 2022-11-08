import axios from "axios";
import queryString from "query-string";

const baseUrl: string = "http://localhost:8000/api/v1";

const axiosClient = axios.create({
  baseURL: baseUrl,
  paramsSerializer: (params) => queryString.stringify({ params }),
});

export default axiosClient;
