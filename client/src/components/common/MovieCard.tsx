import React from "react";
import { IMovie } from "../../interface/movie";
import { useDispatch } from "react-redux";
import { showVideoPopup } from "../../redux/features/commonSlice";

const MovieCard = (props: IMovie | any) => {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(showVideoPopup({}))}>
      <img
        src={props.image}
        alt=""
        className="max-w-full max-h-full object-cover"
      />
    </div>
  );
};

export default MovieCard;
