import axiosClient from "./axiosClient";

const movieApi = {
  getAll: () => axiosClient.get("/movie"),
  getById: (id: string) => axiosClient.get(`/movie/${id}`),
};

export default movieApi;
