import axiosClient from "./axiosClient";

const movieApi = {
  getAll: () => axiosClient.get("/movie"),
  getById: (id: string) => axiosClient.get(`/movie/${id}`),
  create: (params: any) => axiosClient.post("/movie", params),
  update: (id: string, params: any) => axiosClient.put(`/movie/${id}`, params),
};

export default movieApi;
