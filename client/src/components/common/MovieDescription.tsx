import React, { useState } from "react";
import ReactStars from "react-stars";
import { IMovie } from "../../interfaces/movie";

interface IMovieDescriptionProps {
  movie: IMovie;
}

const MovieDescription = (props: IMovieDescriptionProps) => {
  const { movie } = props;
  const handleRating = () => {};
  const [currentRating, setCurrentRating] = useState(3);

  return (
    <div className="w-full text-white flex flex-col gap-5">
      <p>
        6.874.879 lượt xem
        <span className="pl-2"> 4.9</span>
        <ReactStars
          count={5}
          value={currentRating}
          //   onChange={ratingChanged}
          className="inline-flex ml-2"
          size={20}
          color2={"#ffd700"}
        />
      </p>
      <p>
        {movie?.year} | {movie?.country}
      </p>
      <p className="text-justify sm:pr-10">{movie?.description}</p>
    </div>
  );
};

export default MovieDescription;
