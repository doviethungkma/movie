import axiosClient from "./axiosClient";

const commentApi = {
  getByMovieId: (movieId: string) =>
    axiosClient.get(`/comment/movie/${movieId}`),

  addComment: (params: any) => axiosClient.post("/comment", params),
};

export default commentApi;
