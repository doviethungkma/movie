import React from "react";
import { IMovie } from "../../../interfaces/movie";
import Overlay from "./../../common/Overlay";
import { useDispatch } from "react-redux";
import { hideMoviePopup } from "../../../redux/features/movieSlice";
import Button from "../../common/Button";
import MovieDescription from "../../common/MovieDescription";
import MovieDetail from "../../common/MovieDetail";

interface IMoviePopupProps {
  movie: IMovie;
}

const MoviePopup = (props: IMoviePopupProps) => {
  const dispatch = useDispatch();
  return (
    <div className="w-screen h-screen fixed z-40">
      <Overlay />
      <div className="w-[90%] max-w-[872px] max-h-[90%] h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="close__btn absolute right-4 top-4 w-9 h-9 flex items-center justify-center rounded-full bg-black opacity-50 cursor-pointer z-30"
          onClick={() => dispatch(hideMoviePopup())}
        >
          <i className="bx bx-x text-white text-[32px]"></i>
        </div>
        <div className="relative w-full z-20">
          <img src={props.movie.thumb} alt="" className="w-full" />
          <div className="w-full absolute -bottom-6 left-10">
            <img
              src={props.movie.nameImage}
              alt=""
              className="w-[50%] max-w-[288px] left-8 mb-10"
            />
            <div className="flex gap-4">
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
        <div className="w-full px-8 py-[70px] flex gap-2 bg-background-color">
          <div className="w-[70%]">
            <MovieDescription movie={props.movie} />
          </div>
          <div>
            <MovieDetail movie={props.movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePopup;
