import axiosClient from "./axiosClient";

const movieApi = {
  getAll: () => axiosClient.get("/movie"),
  getById: (id: string) => axiosClient.get(`/movie/${id}`),
  getRandomMovie: (randomSize: number) =>
    axiosClient.get(`/movie/random/${randomSize}`),
};

export default movieApi;
