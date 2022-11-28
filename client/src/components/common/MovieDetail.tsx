import React from "react";
import { IMovie } from "../../interfaces/movie";
import { useNavigate } from "react-router-dom";

interface IMovieDetailProps {
  movie: IMovie;
  onClick?: () => void;
}

const MovieDetail = (props: IMovieDetailProps) => {
  const { movie, onClick } = props;
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-start gap-1 text-white">
      <div
        className="flex flex-col mb-4 items-center cursor-pointer "
        onClick={onClick}
      >
        <i className="bx bxs-message-detail text-[28px] hover:text-green-500 transition-all"></i>
        <p className="text-xs">Bình luận</p>
      </div>
      <p>
        <span className="text-gray-500">Diễn viên: </span>
        <span>{movie?.actor}</span>
      </p>
      <p>
        <span className="text-gray-500">Đạo diễn: </span>
        <span>Lee Eun Jin</span>
      </p>
      <p>
        <span className="text-gray-500">Thể loại: </span>
        <span>{movie?.type}</span>
      </p>
    </div>
  );
};

export default MovieDetail;
