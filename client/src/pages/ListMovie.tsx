import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import movieApi from "../api/movieApi";
import { AxiosResponse } from "axios";
import { IMovie } from "../interfaces/movie";
import { useDispatch } from "react-redux";
import { setMovie, showMovieModal } from "../redux/features/movieSlice";

const ListMovie = () => {
  const { categoryId } = useParams();
  const [movies, setMovies] = useState<IMovie[]>();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { title } = state;

  const getData = async () => {
    const response: AxiosResponse = await movieApi.getByCategoryId(
      categoryId as string
    );
    console.log(response);
    setMovies(response.data.movies);
  };

  useEffect(() => {
    getData();
  }, [categoryId]);

  return (
    <div className="w-full absolute px-6 md:px-[58px] pt-[80px]">
      <h2 className="text-[40px] text-white mb-8 uppercase">{title}</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 xl:grid-cols-6 gap-2">
        {movies &&
          movies.map((item) => (
            <img
              src={item.thumb}
              alt={item.thumb}
              className="w-full h-full hover:scale-110 transition-all duration-400 cursor-pointer"
              onClick={() => {
                dispatch(setMovie(item));
                dispatch(showMovieModal());
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default ListMovie;
