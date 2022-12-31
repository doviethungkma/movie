import { AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import movieApi from "../../../api/movieApi";
import { IMovie } from "../../../interfaces/movie";
import {
  hideMovieModal,
  setMovie,
  showMovieModal,
} from "../../../redux/features/movieSlice";
import Button from "../../common/Button";
import Modal from "../../common/Modal";
import EpisodeCard from "../../common/MovieCard";
import MovieDescription from "../../common/MovieDescription";
import MovieDetail from "../../common/MovieDetail";
import MoviePopupSlider from "../../common/MoviePopupSlider";
import Comment from "./../../common/Comment";

interface IMoviePopupProps {
  movie: IMovie;
}

const MoviePopup = (props: IMoviePopupProps) => {
  const { movie } = props;
  const commentRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [movies, setmovies] = useState<IMovie[]>();

  const getData = async () => {
    const response: AxiosResponse = await movieApi.getRandomMovie(10);
    setmovies(response.data.movies);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Modal
      onClickOutside={() => dispatch(hideMovieModal())}
      onClose={() => dispatch(hideMovieModal())}
    >
      <div className="relative w-full z-50">
        <img src={movie.thumb} alt="" className="w-full" />
        <div className="w-full absolute -bottom-6 sm:left-8">
          <img
            src={movie.nameImage}
            alt=""
            className="w-[50%] max-w-[288px] ml-4 sm:ml-0 mb-10"
          />
          <div className="flex gap-4 ml-4 sm:ml-0">
            <Button
              width="w-[149px]"
              height="h-[48px]"
              color="text-black"
              bg="bg-white"
              borderRadius="rounded-sm"
              hover="hover:text-green-500 transition-all"
              onClick={() => {
                const firstEp = movie.episodes?.filter(
                  (item: any) => parseInt(item.id) === 1
                );
                console.log(firstEp);
                navigate(
                  `movie/watch/${movie._id}/${firstEp && firstEp[0]._id}`
                );
                dispatch(hideMovieModal());
              }}
            >
              <i className="bx bx-play text-[22px] mr-5"></i>
              <span className="text-md font-medium">Xem ngay</span>
            </Button>
            <Button
              width="w-[149px]"
              height="h-[48px]"
              color="text-white"
              bg="bg-black"
              borderRadius="rounded-sm"
              border="border border-white"
              hover="hover:text-green-500 transition-all"
            >
              <i className="bx bx-plus text-[22px] mr-5"></i>
              <span className="text-md font-medium">Danh sách</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:px-8 py-[70px] flex flex-col sm:flex-row gap-8 md:gap-2">
        <div className=" w-full sm:w-[70%]">
          <MovieDescription movie={movie} />
        </div>
        <div className="w-full sm:w-[30%]">
          <MovieDetail
            movie={movie}
            onClick={() =>
              commentRef?.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>
      <div className="w-full px-4 sm:px-8 ">
        {movie.episodes && movie.episodes.length > 1 ? (
          <MoviePopupSlider title="Danh sách tập">
            {movie.episodes.map((item, index) => (
              <SwiperSlide key={index}>
                <EpisodeCard
                  episode={item}
                  type="episode"
                  onItemClick={() => {
                    navigate(`movie/watch/${movie._id}/${item._id}`);
                  }}
                />
              </SwiperSlide>
            ))}
          </MoviePopupSlider>
        ) : (
          <></>
        )}
      </div>
      <div className="w-full px-4 sm:px-8 mt-8">
        <MoviePopupSlider title="Đề xuất cho bạn">
          {movies?.map((item, index) => (
            <SwiperSlide key={index}>
              <EpisodeCard
                type="movie"
                movie={item}
                onItemClick={() => {
                  dispatch(setMovie(item));
                  dispatch(showMovieModal());
                }}
              />
            </SwiperSlide>
          ))}
        </MoviePopupSlider>
      </div>
      <div className="py-8 px-6 sm:px-8" id="comment-block" ref={commentRef}>
        <h4 className="text-white text-xl font-bold mb-4">Bình luận</h4>
        <Comment movieId={movie._id} />
      </div>
    </Modal>
  );
};

export default MoviePopup;
