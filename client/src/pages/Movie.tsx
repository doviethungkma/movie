import { useEffect } from "react";
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

import useMovie from "./../hooks/useMovie";
import { IEpisode } from "./../interfaces/movie";

const Movie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieId, episodeId } = useParams();

  const {
    randomMovies,
    getRandomMovie,
    movie,
    getMovieById,
    currentEp,
    getCurrentEp,
  } = useMovie();

  useEffect(() => {
    getMovieById(movieId as string);
    getRandomMovie(20);
    getCurrentEp(movieId as string, episodeId as string);
  }, []);

  return (
    <div className="-z-10">
      <div className="w-full max-h-screen aspect-video">
        <iframe
          title="title"
          width="100%"
          height="100%"
          src={`${currentEp?.url}?image=${currentEp?.thumb}`}
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
            {movie?.episodes?.map((item: IEpisode, index: number) => (
              <SwiperSlide key={index}>
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
          {randomMovies?.map((item: IMovie, index: number) => (
            <SwiperSlide key={index}>
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
        <Comment movieId={movieId as string} />
      </div>
    </div>
  );
};

export default Movie;
