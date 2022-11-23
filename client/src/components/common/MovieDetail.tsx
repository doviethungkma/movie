import React from "react";
import { IMovie } from "../../interfaces/movie";

interface IMovieDetailProps {
  movie: IMovie;
}

const MovieDetail = (props: IMovieDetailProps) => {
  return (
    <div className="w-full flex flex-col items-start gap-1 text-white">
      <div className="flex flex-col mb-4 items-center cursor-pointer ">
        <i className="bx bxs-message-detail text-[28px] hover:text-green-500 transition-all"></i>
        <p className="text-xs">Bình luận</p>
      </div>
      <p>
        <span className="text-gray-500">Diễn viên: </span>
        <span>{props.movie.actor}</span>
      </p>
      <p>
        <span className="text-gray-500">Đạo diễn: </span>
        <span>Lee Eun Jin</span>
      </p>
      <p>
        <span className="text-gray-500">Thể loại: </span>
        <span>{props.movie.type}</span>
      </p>
    </div>
  );
};

export default MovieDetail;
