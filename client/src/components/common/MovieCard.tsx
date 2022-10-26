import React from "react";
import { IMovie } from "../../interfaces/movie";
import { useDispatch } from "react-redux";
import { showVideoPopup } from "../../redux/features/commonSlice";
import { setMovie } from "../../redux/features/movieSlice";

interface IProps {
  item: IMovie;
}

const MovieCard = (props: IProps) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(setMovie({ movie: props.item }));
        dispatch(showVideoPopup());
      }}
    >
      <img
        src={props.item.thumb}
        alt=""
        className="max-w-full max-h-full object-cover aspect-video"
      />
    </div>
  );
};

export default MovieCard;
