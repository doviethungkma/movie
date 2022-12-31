import { AxiosResponse } from "axios";
import { useState } from "react";
import { IMovie } from "../interfaces/movie";
import movieApi from "./../api/movieApi";
import { IEpisode } from "./../interfaces/movie";

const useMovie = () => {
  const [movie, setMovie] = useState<IMovie>();
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [randomMovies, setRandomMovies] = useState<IMovie[]>([]);
  const [movieByCategory, setMovieByCategory] = useState<IMovie[]>([]);
  const [currentEp, setCurrentEp] = useState<IEpisode>();

  const getAllMovie = async () => {
    const response: AxiosResponse = await movieApi.getAll();
    if (response.data.status === "success") setMovies(response.data.movies);
  };

  const getRandomMovie = async (size: number) => {
    const response: AxiosResponse = await movieApi.getRandomMovie(size);
    if (response.data.status === "success")
      setRandomMovies(response.data.movies);
  };

  const getMovieByCategory = async (categoryId: string) => {
    const response: AxiosResponse = await movieApi.getByCategoryId(categoryId);
    if (response.data.status === "success")
      setMovieByCategory(response.data.movies);
  };

  const getMovieById = async (movieId: string) => {
    const response: AxiosResponse = await movieApi.getById(movieId);
    if (response.data.status === "success") setMovie(response.data.movie);
  };

  const getCurrentEp = async (movieId: string, episodeId: string) => {
    const response = await movieApi.getById(movieId);
    const movie = response.data.movie;
    const currentEp = movie?.episodes?.filter(
      (item: any) => item._id === episodeId
    );
    setCurrentEp(currentEp && currentEp[0]);
  };

  return {
    movie,
    movies,
    randomMovies,
    movieByCategory,
    currentEp,
    getAllMovie,
    getRandomMovie,
    getMovieByCategory,
    getMovieById,
    getCurrentEp,
  };
};

export default useMovie;
