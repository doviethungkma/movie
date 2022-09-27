import React from "react";
import { IMovie } from "../../interface/movie";

const MovieCard = (props: IMovie | any) => {
  return (
    <div className="w-[292px] h-[164px]">
      <img
        src={props.image}
        alt=""
        // className="max-w-full max-h-full object-cover"
      />
    </div>
  );
};

export default MovieCard;
