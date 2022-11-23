import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SwiperSlide } from "swiper/react";
import movieApi from "../../../api/movieApi";
import { IMovie } from "../../../interfaces/movie";
import { hideMoviePopup } from "../../../redux/features/movieSlice";
import Button from "../../common/Button";
import EpisodeCard from "../../common/EpisodeCard";
import MovieDescription from "../../common/MovieDescription";
import MovieDetail from "../../common/MovieDetail";
import MoviePopupSlider from "../../common/MoviePopupSlider";
import Overlay from "./../../common/Overlay";

interface IMoviePopupProps {
  movie: IMovie;
}

const MoviePopup = (props: IMoviePopupProps) => {
  const dispatch = useDispatch();
  const [movies, setmovies] = useState<IMovie[]>();

  const getData = async () => {
    const response: AxiosResponse = await movieApi.getRandomMovie(10);
    setmovies(response.data.movies);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-screen h-screen fixed z-40">
      <Overlay onClick={() => dispatch(hideMoviePopup())} />
      <div className="w-[90%] max-w-[872px] h-full max-h-[90%]  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-scroll no-scrollbar bg-background-color">
        <div
          className="close__btn absolute right-4 top-4 w-9 h-9 flex items-center justify-center rounded-full bg-black opacity-50 cursor-pointer z-30"
          onClick={() => dispatch(hideMoviePopup())}
        >
          <i className="bx bx-x text-white text-[32px]"></i>
        </div>
        <div className="relative w-full z-20">
          <img src={props.movie.thumb} alt="" className="w-full" />
          <div className="w-full absolute -bottom-6 sm:left-8">
            <img
              src={props.movie.nameImage}
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
              >
                <i className="bx bx-play text-[22px] mr-5"></i>
                <span className="text-md font-medium">Xem tiếp</span>
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
            <MovieDescription movie={props.movie} />
          </div>
          <div className="w-full sm:w-[30%]">
            <MovieDetail movie={props.movie} />
          </div>
        </div>
        <div className="w-full px-4 sm:px-8 ">
          {props.movie.episodes && props.movie.episodes.length > 1 ? (
            <MoviePopupSlider title="Danh sách tập">
              {props.movie.episodes.map((item, index) => (
                <SwiperSlide>
                  <EpisodeCard episode={item} type="episode" />
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
              <SwiperSlide>
                <EpisodeCard type="movie" movie={item} />
              </SwiperSlide>
            ))}
          </MoviePopupSlider>
        </div>
      </div>
    </div>
  );
};

export default MoviePopup;
