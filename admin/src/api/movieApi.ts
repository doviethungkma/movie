import axiosClient from "./axiosClient";

const movieApi = {
  getAll: () => axiosClient.get("/movie"),
  create: (params: any) => axiosClient.post("/movie", params),
};

export default movieApi;
