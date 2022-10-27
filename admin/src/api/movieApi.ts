import axiosClient from "./axiosClient";

const movieApi = {
  getAll: () => axiosClient.get("/movie"),
  create: (params: any) => axiosClient.post("/movie", params),
  update: (id: string, params: any) => axiosClient.put(`/movie/${id}`, params),
};

export default movieApi;
