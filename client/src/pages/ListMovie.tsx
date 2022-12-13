import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setMovie, showMoviePopup } from "../redux/features/movieSlice";
import { RootState } from "../redux/store";

const ListMovie = () => {
  const movies = useSelector((state: RootState) => state.movie.listMovies);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { title } = state;

  return (
    <div className="absolute md:px-[58px] pt-[80px] px-6 ">
      <h2 className="text-white text-[40px] uppercase mb-8">{title}</h2>{" "}
      <div className=" grid grid-cols-6 gap-2 ">
        {movies &&
          movies.map((item) => (
            <img
              src={item.thumb}
              alt={item.thumb}
              className="w-full h-full hover:scale-110 transition-all duration-400 cursor-pointer"
              onClick={() => {
                dispatch(setMovie(item));
                dispatch(showMoviePopup());
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default ListMovie;
