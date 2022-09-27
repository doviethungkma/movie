import axiosClient from "./axiosClient";

const movieApi = {
  getById: (id: string) => axiosClient.get(`/movie/${id}`),
};

export default movieApi;
