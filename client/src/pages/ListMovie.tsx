import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { IMovie } from "../interfaces/movie";
import { setMovie, showMovieModal } from "../redux/features/movieSlice";
import useMovie from "./../hooks/useMovie";

const ListMovie = () => {
  const { categoryId } = useParams();
  const { movieByCategory, getMovieByCategory } = useMovie();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { title } = state;

  useEffect(() => {
    getMovieByCategory(categoryId as string);
  }, [categoryId]);

  return (
    <div className="w-full absolute px-6 md:px-[58px] pt-[80px]">
      <h2 className="text-[40px] text-white mb-8 uppercase">{title}</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 xl:grid-cols-6 gap-2">
        {movieByCategory &&
          movieByCategory.map((item: IMovie, index: number) => (
            <div className="relative w-full aspect-video" key={index}>
              <img
                src={item.thumb}
                alt={item.thumb}
                className="absolute w-full h-full hover:scale-110 transition-all duration-400 cursor-pointer"
                onClick={() => {
                  dispatch(setMovie(item));
                  dispatch(showMovieModal());
                }}
              />
              <div className="flex items-center absolute top-4 py-[1px] px-3 bg-green-500 rounded-tr-md rounded-br-md">
                <p className="text-xs uppercase text-white">
                  {item.acceptable}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListMovie;
