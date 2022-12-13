import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Comment from "../components/common/Comment";
import EpisodeCard from "../components/common/MovieCard";
import MovieDescription from "../components/common/MovieDescription";
import MovieDetail from "../components/common/MovieDetail";
import MoviePopupSlider from "../components/common/MoviePopupSlider";
import { IMovie } from "../interfaces/movie";
import {
  setMovie as setStateMovie,
  showMovieModal,
} from "../redux/features/movieSlice";
import movieApi from "./../api/movieApi";

import { IEpisode } from "./../interfaces/movie";

const Movie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieId, episodeId } = useParams();
  const [movie, setMovie] = useState<IMovie>();
  const [movies, setMovies] = useState<IMovie[]>();
  const [currentEpisode, setCurrentEpisode] = useState<IEpisode>();

  const getRandomMovie = async () => {
    const response: AxiosResponse = await movieApi.getRandomMovie(10);
    setMovies(response.data.movies);
  };

  const getMovie = async () => {
    const response: AxiosResponse = await movieApi.getById(movieId as string);
    setMovie(response.data.movie);
    console.log(response.data.movie);
    const currentEp = response.data.movie.episodes.filter(
      (item: any) => item._id === episodeId
    );
    setCurrentEpisode(currentEp[0]);
  };

  useEffect(() => {
    getMovie();
    getRandomMovie();
  }, []);

  return (
    <div>
      <div className="w-full max-h-screen aspect-video">
        <iframe
          title="title"
          width="100%"
          height="100%"
          src={`${currentEpisode?.url}?image=${currentEpisode?.thumb}`}
          scrolling="0"
          allowFullScreen
          className="aspect-video object-cover"
        />
      </div>
      <div className="mt-[54px] px-6 md:px-[58px]">
        <img src={movie?.nameImage} alt="" className="max-w-[300px]" />
        <div className="w-full flex flex-col md:flex-row justify-between">
          <div className="mt-12 w-full md:w-[70%]">
            <MovieDescription movie={movie as IMovie} />
          </div>
          <div className="w-full md:w-[20%] mt-8">
            <MovieDetail movie={movie as IMovie} />
          </div>
        </div>
      </div>
      {movie?.episodes && movie.episodes.length > 1 && (
        <div className="px-6 md:px-[58px] mt-8">
          <MoviePopupSlider title="Danh sách tập">
            {movie?.episodes?.map((item, index) => (
              <SwiperSlide>
                <EpisodeCard
                  episode={item}
                  type="episode"
                  onItemClick={() => {}}
                />
              </SwiperSlide>
            ))}
          </MoviePopupSlider>
        </div>
      )}

      <div className="px-6 md:px-[58px] mt-8">
        <MoviePopupSlider title="Đề xuất cho bạn">
          {movies?.map((item, index) => (
            <SwiperSlide>
              <EpisodeCard
                type="movie"
                movie={item}
                onItemClick={() => {
                  navigate("/");
                  dispatch(setStateMovie(item));
                  dispatch(showMovieModal());
                }}
              />
            </SwiperSlide>
          ))}
        </MoviePopupSlider>
      </div>
      <div className="w-full max-w-[1024px] mt-10 px-6 md:px-[58px]">
        <h4 className="text-white text-xl font-bold mb-4">Bình luận</h4>
        <Comment />
      </div>
    </div>
  );
};

export default Movie;
